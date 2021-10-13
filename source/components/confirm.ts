import { Component } from "./component";
import { prompt } from "./prompt";

export class Confirm extends Component {
  public async render(message: string, options: object = {}): Promise<boolean> {
    const { value } = await prompt(this.logger, this.module, {
      message,
      name: "value",
      type: "confirm",
      ...options,
    });

    return value as boolean;
  }
}
