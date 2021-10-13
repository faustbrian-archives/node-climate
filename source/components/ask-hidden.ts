import { Component } from "./component";
import { prompt } from "./prompt";

export class AskHidden extends Component {
  public async render(message: string, options: object = {}): Promise<string> {
    const { value } = await prompt(this.logger, this.module, {
      message,
      name: "value",
      type: "invisible",
      ...options,
    });

    return value as string;
  }
}
