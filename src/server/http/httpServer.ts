/* eslint-disable import/no-unresolved */
/* eslint-disable max-len */
import { fastify, FastifyInstance, FastifyLoggerInstance } from 'fastify';
import { readFileSync } from 'fs';
import { Http2SecureServer, Http2ServerRequest, Http2ServerResponse } from 'http2';
import path from 'path';
import {
  Err, Log, LogTypes, Warn,
} from '../../utils/logging';
import queryCurRegion from './genshin/query_cur_region';
import queryRegionList from './genshin/query_region_list';
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

  private async requestHandler() {
    this.instance.addHook('onRequest', async (req, res) => {
      Log(`Request received at ${req.url}`, LogTypes.Http);
      const url = new URL(req.hostname);
      Log(url.pathname, LogTypes.Http);

      if (req.url.includes('query_cur_region')) {
        res.header('Content-Type', 'text/html');
        res.statusCode = 200;

        const q:string = Buffer.from(await queryCurRegion()).toString('base64');
        res.send(q);
      } else if (req.url.includes('query_region_list')) {
        res.header('Content-Type', 'text/html');
        res.statusCode = 200;

        const q:string = Buffer.from(await queryRegionList()).toString('base64');
        res.send(q);
      } else if (req.url.includes('favicon')) {
        res.code(404).send();
      }

      try {
        const file = readFileSync(`./genshin/${req.url.split('?')[0]}.json`);
        Log(req.url.split('?')[0], LogTypes.Http);

        res.header('Content-Type', 'text/html');
        res.statusCode = 200;
        const q:string = Buffer.from(file).toString();
        res.send(q);
      } catch (e) {
        Warn(`Url not found @ ${req.url}`, LogTypes.Http);
        res.statusCode = 200;
        res.header('Content-Type', 'text/html');
        res.send({ code: 0 });
      }
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
