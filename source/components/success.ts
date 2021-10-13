import { white } from "kleur";

export class Success {
  public render(message: string): void {
    this.logger.info(white().bgGreen(`[OK] ${message}`));
  }
}
