import { PackageJson } from "type-fest";

import { ILogger } from "./contracts";

export abstract class Component {
  public constructor(
    protected readonly logger: ILogger,
    protected readonly module: PackageJson,
  ) {
    //
  }
}
