import { fastify, FastifyInstance } from 'fastify';
// eslint-disable-next-line import/no-unresolved
import { Err, Log, LogTypes } from '../../utils/logging';
/* eslint-disable class-methods-use-this */

export class Server {
  public host!:string;

  public port!:number;

  private instance:FastifyInstance;

  constructor(host:string, port:number) {
    this.host = host;
    this.port = port;

    this.instance = fastify();
  }

  private requestHandler() {
    this.instance.addHook('onRequest', (req, res) => {
      if (req.url.includes('favicon')) {
        res.code(404).send();
      }

      res.send({ code: 0 });
    });
  }

  start() {
    this.requestHandler();
    // eslint-disable-next-line no-unused-vars
    this.instance.listen(this.port, (err, address) => {
      if (err) {
        Err('Cannot start the server!', LogTypes.Http);
        Err(err.message, LogTypes.Debug);
        process.exit(1);
      }
      Log(`Started at ${this.host}:${this.port}!`, LogTypes.Http);
    });
  }
}
