import { Component } from "./component";
import { Prompt } from "./prompt";

export class Confirm extends Component {
  public async render(message: string, options: object = {}): Promise<boolean> {
    const { value } = await this.app.get<Prompt>(Identifiers.Prompt).render({
      message,
      name: "value",
      type: "confirm",
      ...options,
    });

    return value as boolean;
  }
}
