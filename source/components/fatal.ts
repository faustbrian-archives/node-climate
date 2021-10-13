import { white } from "kleur";

export class Fatal {
  public render(message: string): void {
    this.logger.error(white().bgRed(`[ERROR] ${message}`));

    throw new Error(message);
  }
}
