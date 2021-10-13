import Table3 from "cli-table3";

import { Component } from "./component";

export class Table extends Component {
  public render(head: string[], callback: any, options: object = {}): void {
    const table = new Table3({
      chars: { "left-mid": "", mid: "", "mid-mid": "", "right-mid": "" },
      head,
      ...options,
    });

    callback(table);

    this.logger.log(table.toString());
  }
}
