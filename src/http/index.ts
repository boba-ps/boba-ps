import { fastify, FastifyReply, FastifyRequest } from "fastify";
import type { RouteGenericInterface } from "fastify/types/route";
import type { Http2SecureServer, Http2ServerRequest, Http2ServerResponse } from "http2";
import { Log } from "../log";
import type { TlsCert } from "./tls";

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

export abstract class HttpHandler {
  abstract setup(server: HttpsServer): void;
}

export class HttpsServer {
  readonly http;

  constructor(cert: TlsCert) {
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

  register(handler: HttpHandler) {
    handler.setup(this);
    return this;
  }

  async start(host: string, port: number) {
    await this.http.listen({ port, host });
  }

  async close() {
    await this.http.close();
  }
}
