import { white } from "kleur";

import { Component } from "./component";

export class Success extends Component {
  public render(message: string): void {
    this.logger.info(white().bgGreen(`[OK] ${message}`));
  }
}
