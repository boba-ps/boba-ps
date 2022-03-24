import chalk from 'chalk';
import os from 'os';

const bobacolor = '#f9d6b8';
const textcolor = '#fdb25a';
const cpumodel = os.cpus()[0].model.split(' ');
// eslint-disable-next-line no-useless-concat
const cpuinfo = `${`${cpumodel[0] + (os.cpus()).length}- cores ` + `@ ${(os.cpus()[0].speed) / 1000}GHz `}`;

export default () => {
  console.log(chalk.hex(bobacolor)`

          ░░
          ░░
     ░░░░░░░░░░░░
   ░░     ░░     ░░    ${chalk.hex(bobacolor)('| BobaPS ') + chalk.hex(textcolor)('V1.0.0')}
 ░░       ░░       ░░  ${chalk.hex(bobacolor)('| With ♡ by ') + chalk.hex(textcolor)('Quinella & na.na')}
 ░░       ░░       ░░  | Using: TypeScript
 ▒▒░░░░░░░░░░░░░░░░░░  | License: MIT
 ▒▒▒▒░░░░░░▒▒▒▒░░░░▒▒  ${chalk.hex(bobacolor).bold('| Cpu: ') + cpuinfo}
  ░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░   ${`${chalk.hex(bobacolor).bold('| Ram: ') + Math.floor(((os.totalmem()) / 1000000000))}GB`}
  ░░▒▒▒▒▒▒▒▒▒▒▒▒▓▓░░
  ░░░░▒▒▒▒▒▒▒▒▒▒░░░░
    ░░▒▒▓▓▒▒▒▒▒▒░░
    ░░▓▓▓▓▒▒▓▓▓▓░░
    ░░▓▓▓▓▓▓▓▓▒▒░░
     ░░░░░░░░░░░░

——————————————————————————————————————————————————`);
};
