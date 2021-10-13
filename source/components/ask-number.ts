import { Prompt } from "./prompt";

export class AskNumber {
  public async render(message: string, options: object = {}): Promise<number> {
    const { value } = await this.app.get<Prompt>(Identifiers.Prompt).render({
      message,
      name: "value",
      type: "number",
      ...options,
    });

    return value as number;
  }
}
