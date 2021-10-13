export class Listing {
  public async render(elements: string[]): Promise<void> {
    for (const element of elements) {
      this.logger.log(` * ${element}`);
    }
  }
}
