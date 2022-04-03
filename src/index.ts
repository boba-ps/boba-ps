import { config } from 'dotenv';
// eslint-disable-next-line import/no-unresolved
import { kcpServer } from './server/kcp/kcpServer';
// eslint-disable-next-line import/no-unresolved
import { Server } from './server/http/httpServer';
// eslint-disable-next-line import/no-unresolved
import title from './utils/title';

config();

(() => {
  title();
  const httpServer = new Server(process.env.HOST ?? 'localhost', process.env.PORT as unknown as number ?? 43);
  httpServer.start();
  // eslint-disable-next-line new-cap
  const _kcpServer = new kcpServer(Number(process.env.KCP_PORT) ?? 22102, 'localhost');
  _kcpServer.start();
})();
