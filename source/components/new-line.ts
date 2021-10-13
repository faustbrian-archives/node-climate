import { Component } from "./component";

export class NewLine extends Component {
  public render(count = 1): void {
    this.logger.log("\n".repeat(count));
  }
}
