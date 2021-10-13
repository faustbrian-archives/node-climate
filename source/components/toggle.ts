import { Prompt } from "./prompt";

export class Toggle {
  public async render(message: string, options: object = {}): Promise<boolean> {
    const { value } = await this.app.get<Prompt>(Identifiers.Prompt).render({
      message,
      name: "value",
      type: "toggle",
      ...options,
    });

    return value as boolean;
  }
}
