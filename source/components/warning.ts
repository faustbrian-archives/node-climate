import { white } from "kleur";

export class Warning {
  public render(message: string): void {
    this.logger.warning(white().bgYellow(`[WARNING] ${message}`));
  }
}
