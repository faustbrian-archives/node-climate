import { Component } from "./component";
import { prompt } from "./prompt";

export class AutoComplete extends Component {
  public async render(
    message: string,
    choices: any[],
    options: object = {},
  ): Promise<string> {
    const { value } = await prompt(this.logger, this.module, {
      choices,
      message,
      name: "value",
      type: "autocomplete",
      ...options,
    });

    return value as string;
  }
}
