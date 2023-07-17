interface Command {
  name: string;
  path: string;
  description: string;
  params: Param[];
  files: File[];
}

interface Param {
  name: string;
  type: string;
  required: boolean;
}

export interface File {
  name: string;
  template: string;
}

interface Import {
  name: string;
  path: string;
}

export interface CommandConfig {
  commands: Command[];
}
