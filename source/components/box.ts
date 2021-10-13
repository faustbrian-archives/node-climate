import boxen from "boxen";

import { Component } from "./component";

export class Box extends Component {
  public render(message: string): void {
    this.logger.log(
      boxen(message, {
        borderStyle: "classic",
        margin: 1,
        padding: 1,
      }),
    );
  }
}
