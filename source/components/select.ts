import { Component } from "./component";
import { Prompt } from "./prompt";

export class Select extends Component {
  public async render(
    message: string,
    choices: any[],
    options: object = {},
  ): Promise<string> {
    const { value } = await this.app.get<Prompt>(Identifiers.Prompt).render({
      choices,
      message,
      name: "value",
      type: "toggle",
      ...options,
    });

    return value as string;
  }
}
