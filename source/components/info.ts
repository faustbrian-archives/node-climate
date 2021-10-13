import { white } from "kleur";

import { Component } from "./component";

export class Info extends Component {
  public render(message: string): void {
    this.logger.info(white().bgBlue(`[INFO] ${message}`));
  }
}
