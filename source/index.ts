import { Command as Clipanion } from "clipanion";

import { AppHeader } from "./app-header";
import { Ask } from "./ask";
import { AskDate } from "./ask-date";
import { AskHidden } from "./ask-hidden";
import { AskNumber } from "./ask-number";
import { AskPassword } from "./ask-password";
import { AutoComplete } from "./auto-complete";
import { Box } from "./box";
import { Clear } from "./clear";
import { Error } from "./error";
import { Fatal } from "./fatal";
import { Info } from "./info";
import { Listing } from "./listing";
import { Log } from "./log";
import { MultiSelect } from "./multi-select";
import { NewLine } from "./new-line";
import { Prompt } from "./prompt";
import { Select } from "./select";
import { Spinner } from "./spinner";
import { Success } from "./success";
import { Table } from "./table";
import { TaskList } from "./task-list";
import { Title } from "./title";
import { Toggle } from "./toggle";
import { Warning } from "./warning";

export class Command extends Clipanion {
  async execute(): Promise<void> {
    //
  }

  protected appHeader(): AppHeader {
    return new AppHeader(this.logger());
  }

  protected ask(): Ask {
    return new Ask(this.logger());
  }

  protected askDate(): AskDate {
    return new AskDate(this.logger());
  }

  protected askHidden(): AskHidden {
    return new AskHidden(this.logger());
  }

  protected askNumber(): AskNumber {
    return new AskNumber(this.logger());
  }

  protected askPassword(): AskPassword {
    return new AskPassword(this.logger());
  }

  protected autoComplete(): AutoComplete {
    return new AutoComplete(this.logger());
  }

  protected box(): Box {
    return new Box(this.logger());
  }

  protected clear(): Clear {
    return new Clear(this.logger());
  }

  protected error(): Error {
    return new Error(this.logger());
  }

  protected fatal(): Fatal {
    return new Fatal(this.logger());
  }

  protected info(): Info {
    return new Info(this.logger());
  }

  protected listing(): Listing {
    return new Listing(this.logger());
  }

  protected log(): Log {
    return new Log(this.logger());
  }

  protected multiSelect(): MultiSelect {
    return new MultiSelect(this.logger());
  }

  protected newLine(): NewLine {
    return new NewLine(this.logger());
  }

  protected prompt(): Prompt {
    return new Prompt(this.logger());
  }

  protected select(): Select {
    return new Select(this.logger());
  }

  protected spinner(): Spinner {
    return new Spinner(this.logger());
  }

  protected success(): Success {
    return new Success(this.logger());
  }

  protected table(): Table {
    return new Table(this.logger());
  }

  protected taskList(): TaskList {
    return new TaskList(this.logger());
  }

  protected title(): Title {
    return new Title(this.logger());
  }

  protected toggle(): Toggle {
    return new Toggle(this.logger());
  }

  protected warning(): Warning {
    return new Warning(this.logger());
  }

  protected logger(): Console {
    return console;
  }
}
