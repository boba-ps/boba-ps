/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import chalk from 'chalk';

export enum LogTypes {
    Http = 'HTTP',
    KCP = 'KCP',
    Debug = 'DEBUG'

}
export const Log = (msg:string, logType:LogTypes) => {
  console.log(`[${chalk.green('LOG')}] [${logType}]: ${msg} `);
};

export const Warn = (msg:string, logType:LogTypes) => {
  console.log(`[${chalk.yellow('WARN')}] [${logType}]: ${msg} `);
};

export const Err = (msg:string, logType:LogTypes) => {
  console.log(`[${chalk.red('ERROR')}] [${logType}]: ${msg} `);
};
