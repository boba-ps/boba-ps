import pino, { Logger } from "pino";
import pretty from "pino-pretty";

export const Log: Logger = pino(
  pretty({
    colorize: true,
    destination: 2, // stderr
  })
);
