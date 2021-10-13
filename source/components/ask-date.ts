import { Component } from "./component";
import { Prompt } from "./prompt";

export class AskDate extends Component {
  public async render(message: string, options: object = {}): Promise<string> {
    const { value } = await this.app.get<Prompt>(Identifiers.Prompt).render({
      message,
      name: "value",
      type: "date",
      ...options,
    });

    return value as string;
  }
}
