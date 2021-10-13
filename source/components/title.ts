import { yellow } from "kleur";

export class Title {
  public async render(title: string): Promise<void> {
    this.logger.log(yellow(title));
    this.logger.log(yellow("=".repeat(title.length)));
  }
}
