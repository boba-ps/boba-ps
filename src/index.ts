import { config } from 'dotenv';
// eslint-disable-next-line import/no-unresolved
import { KcpServer } from './server/kcp/kcpServer';
// eslint-disable-next-line import/no-unresolved
import { Server } from './server/http/httpServer';
// eslint-disable-next-line import/no-unresolved
import title from './utils/title';

config();

(() => {
  title();
  const httpServer = new Server(process.env.HOST ?? 'localhost', process.env.PORT as unknown as number ?? 43);
  httpServer.start();
  KcpServer.start();
})();
