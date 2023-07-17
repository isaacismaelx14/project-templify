# Project Templify

Generate project files based on templates. 

### Prerequisites

- Node.js (version 16 or higher)

### Installation
```
npm i -g project-templify
```

### Configuration

You can see an example of the configuration file [here](/example/.templify.json).

1. Open the `.templify.json` file located in the project's root directory.
2. Modify the configuration according to your needs. The file structure should be as follows:

```json
{
  "commands": [
    {
      "name": "<COMMAND_NAME>",
      "path": "<COMMAND_PATH>",
      "description": "<COMMAND_DESCRIPTION>",
      "params": [
        {
          "name": "<PARAM_NAME>",
          "type": "<PARAM_TYPE>",
          "required": true | false
        }
      ],
      "files": [
        {
          "name": "<FILE_NAME>",
          "template": "<FILE_TEMPLATE>",
          "folder": "<FILE_FOLDER-OPTIONAL>"
        }
      ]
    }
  ]
}
```

- `<COMMAND_NAME>`: The name of the command.
- `<COMMAND_PATH>`: The path where the command will be executed.
- `<COMMAND_DESCRIPTION>`: The description of the command.
- `<PARAM_NAME>`: The name of the command parameter.
- `<PARAM_TYPE>`: The type of the command parameter.
- `<true/false>`: Specify whether the parameter is required (`true`) or optional (`false`).
- `<FILE_NAME>`: The name of the file to be created.
- `<FILE_TEMPLATE>`: The template content of the file. All file templates should be saved in the `.templify` folder.
- `<FILE_FOLDER-OPTIONAL>`: The folder where the file will be created. If not specified, the file will be created in the command path.

## Save your template files

1. Create a folder named `.templify` in the project's root directory.
2. Save your template files in the `.templify` folder.

### Usage
To use the project, follow these steps:

1. Open a terminal or command prompt.
2. Navigate to the project directory.
3. Run the following command:

```
templify <COMMAND_NAME> <PARAM_VALUE_1> <PARAM_VALUE_2> ...
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