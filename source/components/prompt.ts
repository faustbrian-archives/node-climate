import prompts from "prompts";
import { JsonObject } from "type-fest";

import { Component } from "./component";

export class Prompt extends Component {
  public async render(options: object): Promise<JsonObject> {
    return prompts(options);
  }
}
