import chalk from "chalk";
import os from "os";
import { Executor, ServiceBase } from "../system";

const bobaColor = "#f9d6b8";
const textColor = "#fdb25a";

export class TitlePrinter extends ServiceBase<Executor> {
  protected setup(exec: Executor) {
    exec.once(this.print.bind(this));
  }

  print() {
    const mainCpu = os.cpus()[0];
    const cpuModel = mainCpu?.model.split(" ") || [];
    const cpuInfo = `${cpuModel[0]} ${os.cpus().length} cores ` + `@ ${(mainCpu?.speed || 0) / 1000}GHz `;

    const version = chalk.hex(bobaColor)("| BobaPS ") + chalk.hex(textColor)("v1.0");
    const authors = chalk.hex(bobaColor)("| With ♡ by ") + chalk.hex(textColor)("quinella, na.na & phos");

    const cpu = chalk.hex(bobaColor).bold("| CPU: ") + cpuInfo;
    const ram = `${chalk.hex(bobaColor).bold("| RAM: ") + Math.floor(os.totalmem() / 1000000000)}GB`;

    console.log(chalk.hex(bobaColor)`

          ░░
          ░░
     ░░░░░░░░░░░░
   ░░     ░░     ░░    ${version}
 ░░       ░░       ░░  ${authors}
 ░░       ░░       ░░  | Using: TypeScript
 ▒▒░░░░░░░░░░░░░░░░░░  | License: MIT
 ▒▒▒▒░░░░░░▒▒▒▒░░░░▒▒  ${cpu}
  ░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░   ${ram}
  ░░▒▒▒▒▒▒▒▒▒▒▒▒▓▓░░
  ░░░░▒▒▒▒▒▒▒▒▒▒░░░░
    ░░▒▒▓▓▒▒▒▒▒▒░░
    ░░▓▓▓▓▒▒▓▓▓▓░░
    ░░▓▓▓▓▓▓▓▓▒▒░░
     ░░░░░░░░░░░░

——————————————————————————————————————————————————`);
  }
}
