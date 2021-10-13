import { Component } from "./component";
import { Prompt } from "./prompt";

export class AskHidden extends Component {
  public async render(message: string, options: object = {}): Promise<string> {
    const { value } = await this.app.get<Prompt>(Identifiers.Prompt).render({
      message,
      name: "value",
      type: "invisible",
      ...options,
    });

    return value as string;
  }
}
