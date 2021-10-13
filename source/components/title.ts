import { yellow } from "kleur";

import { Component } from "./component";

export class Title extends Component {
  public async render(title: string): Promise<void> {
    this.logger.log(yellow(title));
    this.logger.log(yellow("=".repeat(title.length)));
  }
}
