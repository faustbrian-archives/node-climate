import { Component } from "./component";
import { prompt } from "./prompt";

export class AskNumber extends Component {
  public async render(message: string, options: object = {}): Promise<number> {
    const { value } = await prompt(this.logger, this.module, {
      message,
      name: "value",
      type: "number",
      ...options,
    });

    return value as number;
  }
}
