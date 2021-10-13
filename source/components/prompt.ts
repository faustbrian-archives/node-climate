import prompts from "prompts";
import { JsonObject } from "type-fest";

export class Prompt {
  public async render(options: object): Promise<JsonObject> {
    return prompts(options);
  }
}
