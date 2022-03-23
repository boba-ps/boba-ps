import { config } from 'dotenv';
// eslint-disable-next-line import/no-unresolved
import { Server } from './server/http/httpServer';

config();

(() => {
  const httpServer = new Server(process.env.HOST ?? 'localhost', process.env.PORT as unknown as number ?? 8080);
  httpServer.start();
})();
