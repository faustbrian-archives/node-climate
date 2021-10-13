import ora, { Options, Ora } from "ora";

import { Component } from "./component";

export class Spinner extends Component {
  public render(options?: string | Options | undefined): Ora {
    return ora(options);
  }
}
