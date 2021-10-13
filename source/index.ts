import { Command as Clipanion } from "clipanion";
import { PackageJson } from "type-fest";

import { AppHeader } from "./components/app-header";
import { Ask } from "./components/ask";
import { AskDate } from "./components/ask-date";
import { AskHidden } from "./components/ask-hidden";
import { AskNumber } from "./components/ask-number";
import { AskPassword } from "./components/ask-password";
import { AutoComplete } from "./components/auto-complete";
import { Box } from "./components/box";
import { Clear } from "./components/clear";
import { ILogger } from "./components/contracts";
import { Error } from "./components/error";
import { Fatal } from "./components/fatal";
import { Info } from "./components/info";
import { Listing } from "./components/listing";
import { Log } from "./components/log";
import { MultiSelect } from "./components/multi-select";
import { NewLine } from "./components/new-line";
import { Select } from "./components/select";
import { Spinner } from "./components/spinner";
import { Success } from "./components/success";
import { Table } from "./components/table";
import { TaskList } from "./components/task-list";
import { Title } from "./components/title";
import { Toggle } from "./components/toggle";
import { Warning } from "./components/warning";

export class Command extends Clipanion {
  async execute(): Promise<void> {
    //
  }

  protected appHeader(): AppHeader {
    return new AppHeader(this.logger(), this.packageJson());
  }

  protected ask(): Ask {
    return new Ask(this.logger(), this.packageJson());
  }

  protected askDate(): AskDate {
    return new AskDate(this.logger(), this.packageJson());
  }

  protected askHidden(): AskHidden {
    return new AskHidden(this.logger(), this.packageJson());
  }

  protected askNumber(): AskNumber {
    return new AskNumber(this.logger(), this.packageJson());
  }

  protected askPassword(): AskPassword {
    return new AskPassword(this.logger(), this.packageJson());
  }

  protected autoComplete(): AutoComplete {
    return new AutoComplete(this.logger(), this.packageJson());
  }

  protected box(): Box {
    return new Box(this.logger(), this.packageJson());
  }

  protected clear(): Clear {
    return new Clear(this.logger(), this.packageJson());
  }

  protected error(): Error {
    return new Error(this.logger(), this.packageJson());
  }

  protected fatal(): Fatal {
    return new Fatal(this.logger(), this.packageJson());
  }

  protected info(): Info {
    return new Info(this.logger(), this.packageJson());
  }

  protected listing(): Listing {
    return new Listing(this.logger(), this.packageJson());
  }

  protected log(): Log {
    return new Log(this.logger(), this.packageJson());
  }

  protected multiSelect(): MultiSelect {
    return new MultiSelect(this.logger(), this.packageJson());
  }

  protected newLine(): NewLine {
    return new NewLine(this.logger(), this.packageJson());
  }

  protected prompt(): Prompt {
    return new Prompt(this.logger(), this.packageJson());
  }

  protected select(): Select {
    return new Select(this.logger(), this.packageJson());
  }

  protected spinner(): Spinner {
    return new Spinner(this.logger(), this.packageJson());
  }

  protected success(): Success {
    return new Success(this.logger(), this.packageJson());
  }

  protected table(): Table {
    return new Table(this.logger(), this.packageJson());
  }

  protected taskList(): TaskList {
    return new TaskList(this.logger(), this.packageJson());
  }

  protected title(): Title {
    return new Title(this.logger(), this.packageJson());
  }

  protected toggle(): Toggle {
    return new Toggle(this.logger(), this.packageJson());
  }

  protected warning(): Warning {
    return new Warning(this.logger(), this.packageJson());
  }

  protected logger(): ILogger {
    return {
      error: console.error,
      info: console.info,
      warning: console.warn,
    };
  }

  protected packageJson(): PackageJson {
    return require("../package.json");
  }
}
