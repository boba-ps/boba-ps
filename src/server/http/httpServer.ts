/* eslint-disable max-len */
import { fastify, FastifyInstance, FastifyLoggerInstance } from 'fastify';
import { readFileSync } from 'fs';
import { Http2SecureServer, Http2ServerRequest, Http2ServerResponse } from 'http2';
import path from 'path';
// eslint-disable-next-line import/no-unresolved
import { Err, Log, LogTypes } from '../../utils/logging';
/* eslint-disable class-methods-use-this */

export class Server {
  public host!:string;

  public port!:number;

  private instance!:FastifyInstance<Http2SecureServer, Http2ServerRequest, Http2ServerResponse, FastifyLoggerInstance>;

  constructor(host:string, port:number) {
    this.host = host;
    this.port = port;

    this.instance = fastify({
      http2: true,
      https: {
        allowHTTP1: true,
        key: readFileSync(path.join(__dirname, 'secret/boba.key')),
        cert: readFileSync(path.join(__dirname, 'secret/boba.crt')),
      },

    });
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
