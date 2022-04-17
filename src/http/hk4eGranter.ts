import { HttpHandler, HttpRequest, HttpResponse, HttpsServer } from ".";
import type { Config } from "../config";

export class Hk4eGranterHandler extends HttpHandler {
  constructor(readonly config: Config) {
    super();
  }

  protected setup(server: HttpsServer) {
    server.http
      .get("/hk4e_global/combo/granter/api/getConfig", this.getConfig.bind(this))
      .post("/hk4e_global/combo/granter/login/v2/login", {
        schema: {
          body: {
            app_id: { type: "string" },
            channel_id: { type: "string" },
            device: { type: "string" },
            sign: { type: "string" },
            data: { type: "string" },
          },
        },
        handler: this.login.bind(this),
      })
      .post("/hk4e_global/combo/granter/api/compareProtocolVersion", this.compareProtocolVersion.bind(this));
  }

  async getConfig(_req: HttpRequest, res: HttpResponse) {
    res.send({
      retcode: 0,
      message: "OK",
      data: {
        log_level: "INFO",
        protocol: true,
        qr_enabled: false,
        push_alias_type: 2,
        disable_ysdk_guard: false,
        enable_announce_pic_popup: true,
        announce_url: new URL("hk4e/announcement/index.html", this.config.get("http.publicUrl")),
      },
    });
  }

  async login(
    _req: HttpRequest<{
      Body: {
        app_id: string;
        channel_id: string;
        device: string;
        sign: string;
        data: string;
      };
    }>,
    res: HttpResponse
  ) {
    res.send({
      retcode: 0,
      message: "OK",
      data: {
        account_type: "1",
        open_id: `${0x1234}`,
        combo_id: `${0x4321}`,
        combo_token: "abcdabcdabcdabcd",
        data: { guest: "false" },
        heartbeat: false,
      },
    });
  }

  async compareProtocolVersion(
    _req: HttpRequest<{
      Body: {
        app_id: string;
        channel_id: string;
        device: string;
        sign: string;
        data: string;
      };
    }>,
    res: HttpResponse
  ) {
    res.send({
      retcode: 0,
      message: "OK",
      data: {
        modified: true,
        protocol: {
          id: 0,
          app_id: 4,
          major: 4,
          minimum: 0,
          create_time: "0",
          language: "en",
          priv_proto: "",
          user_proto: "",
          teenager_proto: "",
        },
      },
    });
  }
}
