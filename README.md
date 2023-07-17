# Project Templify

Generate project files based on templates. 
Certainly! Here's a documentation for the usage of your project:


### Prerequisites
Before using the project, make sure you have the following prerequisites installed:

- Node.js (version 16 or higher)

### Installation
To install the project, follow these steps:

1. Clone the project repository from the source.
2. Navigate to the project directory.
3. Run the following command to install the dependencies:

```
npm install
```

### Configuration
1. Open the `config.json` file located in the project's root directory.
2. Modify the configuration according to your needs. The file structure should be as follows:

```json
{
  "templatePath": "<TEMPLATE_DIRECTORY_PATH>",
  "configFile": "<CONFIG_FILE_NAME>",
  "commands": [
    {
      "name": "<COMMAND_NAME>",
      "path": "<COMMAND_PATH>",
      "description": "<COMMAND_DESCRIPTION>",
      "params": [
        {
          "name": "<PARAM_NAME>",
          "type": "<PARAM_TYPE>",
          "required": <true/false>
        }
      ],
      "files": [
        {
          "name": "<FILE_NAME>",
          "template": "<FILE_TEMPLATE>"
        }
      ]
    }
  ]
}
```

- `<TEMPLATE_DIRECTORY_PATH>`: The path to the directory containing your file templates.
- `<CONFIG_FILE_NAME>`: The name of the configuration file (e.g., `config.json`).
- `<COMMAND_NAME>`: The name of the command.
- `<COMMAND_PATH>`: The path where the command will be executed.
- `<COMMAND_DESCRIPTION>`: The description of the command.
- `<PARAM_NAME>`: The name of the command parameter.
- `<PARAM_TYPE>`: The type of the command parameter.
- `<true/false>`: Specify whether the parameter is required (`true`) or optional (`false`).
- `<FILE_NAME>`: The name of the file to be created.
- `<FILE_TEMPLATE>`: The template content of the file.

### Usage
To use the project, follow these steps:

1. Open a terminal or command prompt.
2. Navigate to the project directory.
3. Run the following command:

```
npm start <COMMAND_NAME> <PARAM_VALUE_1> <PARAM_VALUE_2> ...
```

- `<COMMAND_NAME>`: The name of the command you want to execute.
- `<PARAM_VALUE_1> <PARAM_VALUE_2> ...`: The values of the command parameters specified in the configuration file.

### Additional Notes
- If the specified command path already exists, the system will prompt you to confirm whether you want to continue or abort the operation.
- The project uses Handlebars as a template engine to process the file templates. You can use the following helpers within your templates:
  - `uppercase`: Converts a string to uppercase.
  - `lowercase`: Converts a string to lowercase.
  - `capitalize`: Capitalizes the first letter of a string.

That's it! You now have the documentation for using your project. If you have any further questions, feel free to ask.