import * as fs from 'fs';
import * as path from 'path';
import type { CommandConfig, File } from './types';
import cac from 'cac';
import { Parser } from './parser';
import { appConfig } from './config';
import * as yesno from 'yesno';

const TEMPLATE_PATH = appConfig.templatePath;

const readConfigFile = () => {
  const config = fs.readFileSync(`./${appConfig.configFile}`, 'utf8');
  return JSON.parse(config) as CommandConfig;
};

const checkConfig = (config: CommandConfig) => {
  config.commands.forEach((command) => {
    if (!command.name) {
      throw new Error('Command name is required');
    }
    if (!command.path) {
      throw new Error('Command path is required');
    }
  });
};

const transformFileData = (file: File[], params: object) => {
  return file
    .map((file) => {
      return {
        ...file,
        name: Parser(file.name, params),
        template: Parser(file.template, params),
      };
    })
    .map((file) => {
      const templatePath = path.join(TEMPLATE_PATH, file.template);
      const template = fs.readFileSync(templatePath, 'utf8');
      return {
        ...file,
        template: Parser(template, params),
      };
    });
};

const runCommand = async (
  command: CommandConfig['commands'][0],
  params: string[],
) => {
  console.info(`Running command ${command.name}`);

  const paramsObject = command.params.reduce((acc, param, index) => {
    return {
      ...acc,
      [param.name]: params[index],
    };
  }, {});

  const files = transformFileData(command.files, paramsObject);
  command.path = Parser(command.path, paramsObject);

  if (fs.existsSync(command.path)) {
    const answer = await yesno({
      question: `Path ${command.path} already exists. Do you want to continue? (y/n)`,
    });

    if (!answer) {
      console.info('Aborting...');
      process.exit(0);
    }
  } else {
    console.info(`Creating path ${command.path}`);
    fs.mkdirSync(command.path, { recursive: true });
  }

  console.info(`Creating files in ${command.path}`);
  files.forEach((file) => {
    fs.writeFileSync(path.join(command.path, file.name), file.template);
  });
};

function main() {
  const config = readConfigFile();
  const cli = cac();

  checkConfig(config);

  config.commands.forEach((command) => {
    cli
      .command(
        `${command.name} ${command.params
          .map((param) => `<${param.name}>`)
          .join(' ')}`,
        command.description || '',
      )
      .action((...params) => {
        runCommand(command, params);
      });
  });

  cli.help();
  cli.version('0.0.2');
  cli.parse();
}

main();
