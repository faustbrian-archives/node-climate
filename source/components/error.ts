import { white } from "kleur";

export class Error {
  public render(message: string): void {
    this.logger.error(white().bgRed(`[ERROR] ${message}`));
  }
}
