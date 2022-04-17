import pino from 'pino';
import pretty from 'pino-pretty';

export const Log = pino(
  pretty({
    colorize: true,
    destination: 2, // stderr
  }),
);
