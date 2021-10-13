import { Prompt } from "./prompt";

export class Ask {
  public async render(message: string, options: object = {}): Promise<string> {
    const { value } = await this.app.get<Prompt>(Identifiers.Prompt).render({
      message,
      name: "value",
      type: "text",
      ...options,
    });

    return value as string;
  }
}
