export class Clear {
  public render(): void {
    process.stdout.write("\u001B[2J");
    process.stdout.write("\u001B[0f");
  }
}
