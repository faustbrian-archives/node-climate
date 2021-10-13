import { Component } from "./component";

export class Listing extends Component {
  public async render(elements: string[]): Promise<void> {
    for (const element of elements) {
      this.logger.log(` * ${element}`);
    }
  }
}
