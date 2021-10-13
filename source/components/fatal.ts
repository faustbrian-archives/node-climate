import { white } from "kleur";

import { Component } from "./component";

export class Fatal extends Component {
  public render(message: string): void {
    this.logger.error(white().bgRed(`[ERROR] ${message}`));

    throw new Error(message);
  }
}
