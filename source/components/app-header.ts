import { red, white } from "kleur";
import os from "os";

import { Component } from "./component";

export class AppHeader extends Component {
  public render(): string {
    return `${red().bold(`${this.module.description}`)} ${
      white().bold(
        `[${this.module.version} | ${process.version} | ${os.platform()}@${os.arch()}]`,
      )
    }`;
  }
}
