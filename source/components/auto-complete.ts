import { Prompt } from "./prompt";

export class AutoComplete {
  public async render(
    message: string,
    choices: any[],
    options: object = {},
  ): Promise<string> {
    const { value } = await this.app.get<Prompt>(Identifiers.Prompt).render({
      choices,
      message,
      name: "value",
      type: "autocomplete",
      ...options,
    });

    return value as string;
  }
}
