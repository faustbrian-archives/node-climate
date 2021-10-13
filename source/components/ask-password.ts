import { Prompt } from "./prompt";

export class AskPassword {
  public async render(message: string, options: object = {}): Promise<string> {
    const { value } = await this.app.get<Prompt>(Identifiers.Prompt).render({
      message,
      name: "value",
      type: "password",
      ...options,
    });

    return value as string;
  }
}
