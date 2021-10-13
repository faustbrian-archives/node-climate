import { red, white } from "kleur";
import os from "os";

export class AppHeader {
  public render(): string {
    return `${red().bold(`${this.pkg.description}`)} ${
      white().bold(
        `[${this.pkg.version} | ${process.version} | ${os.platform()}@${os.arch()}]`,
      )
    }`;
  }
}
