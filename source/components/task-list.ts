import Listr from "listr";

import { Component } from "./component";

export class TaskList extends Component {
  public async render(tasks: { title: string; task: any }[]): Promise<void> {
    return new Listr(tasks).run();
  }
}
