import boxen from "boxen";

export class Box {
  public render(message: string): void {
    this.logger.log(
      boxen(message, {
        borderStyle: boxen.BorderStyle.Classic,
        margin: 1,
        padding: 1,
      }),
    );
  }
}
