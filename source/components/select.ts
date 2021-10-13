import { Component } from "./component";
import { prompt } from "./prompt";

export class Select extends Component {
  public async render(
    message: string,
    choices: any[],
    options: object = {},
  ): Promise<string> {
    const { value } = await prompt(this.logger, this.module, {
      choices,
      message,
      name: "value",
      type: "toggle",
      ...options,
    });

    return value as string;
  }
}
