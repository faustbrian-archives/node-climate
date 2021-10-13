import prompts from "prompts";
import { JsonObject, PackageJson } from "type-fest";

import { Component } from "./component";
import { ILogger } from "./contracts";

export class Prompt extends Component {
  public async render(options: object): Promise<JsonObject> {
    return prompts(options);
  }
}

export const prompt = (
  logger: ILogger,
  module: PackageJson,
  options: object,
): Promise<JsonObject> => new Prompt(logger, module).render(options);
