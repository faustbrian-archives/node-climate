import { Component } from "./component";

export class Log extends Component {
  public render(message: string): void {
    this.logger.log(message);
  }
}
