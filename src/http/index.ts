import { fastify, FastifyReply, FastifyRequest } from 'fastify';
import type { RouteGenericInterface } from 'fastify/types/route';
import type { Http2SecureServer, Http2ServerRequest, Http2ServerResponse } from 'http2';
import type { Config } from '../config';
import { Log } from '../log';
import { Executor, ServiceBase } from '../system';
import type { TlsCert } from './tls';

export type HttpRequest<RouteInterface = RouteGenericInterface> = FastifyRequest<
  RouteInterface,
  Http2SecureServer,
  Http2ServerRequest
>;

export type HttpResponse<RouteInterface = RouteGenericInterface> = FastifyReply<
  Http2SecureServer,
  Http2ServerRequest,
  Http2ServerResponse,
  RouteInterface
>;

export abstract class HttpHandler extends ServiceBase<HttpsServer> {}

export class HttpsServer extends ServiceBase<Executor> {
  readonly http;

  constructor(readonly config: Config, cert: TlsCert) {
    super();

    this.http = fastify({
      logger: Log,
      http2: true,
      https: {
        allowHTTP1: true,
        cert: cert.cert,
        key: cert.key,
      },
    });
  }

  protected setup(exec: Executor) {
    exec.once(async () => {
      const host = this.config.get('http.host');
      const port = this.config.get('http.port');

      await this.http.listen(port, host);
    });

    exec.end(async () => {
      await this.http.close();
    });
  }
}
