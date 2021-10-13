export class NewLine {
  public render(count = 1): void {
    this.logger.log("\n".repeat(count));
  }
}
