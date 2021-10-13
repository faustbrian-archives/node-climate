import { white } from "kleur";

import { Component } from "./component";

export class Warning extends Component {
  public render(message: string): void {
    this.logger.warning(white().bgYellow(`[WARNING] ${message}`));
  }
}
