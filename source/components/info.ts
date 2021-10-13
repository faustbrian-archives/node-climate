import { white } from "kleur";

export class Info {
  public render(message: string): void {
    this.logger.info(white().bgBlue(`[INFO] ${message}`));
  }
}
