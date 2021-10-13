import { white } from "kleur";

import { Component } from "./component";

export class Error extends Component {
  public render(message: string): void {
    this.logger.error(white().bgRed(`[ERROR] ${message}`));
  }
}
