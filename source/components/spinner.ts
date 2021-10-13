import ora, { Options, Ora } from "ora";

export class Spinner {
  public render(options?: string | Options | undefined): Ora {
    return ora(options);
  }
}
