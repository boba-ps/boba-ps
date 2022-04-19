import { HttpHandler, HttpRequest, HttpResponse, HttpsServer } from ".";
import type { Config } from "../config";
import type { Db } from "../db";

export class Hk4eGranterHandler extends HttpHandler {
  constructor(readonly config: Config, readonly db: Db) {
    super();
  }

  protected setup(server: HttpsServer) {
    server.http
      .get("/hk4e_global/combo/granter/api/getConfig", this.getConfig.bind(this))
      .post("/hk4e_global/combo/granter/login/v2/login", this.login.bind(this))
      .post("/hk4e_global/combo/granter/api/compareProtocolVersion", this.compareProtocolVersion.bind(this));
  }

  async getConfig(_req: HttpRequest, res: HttpResponse) {
    const data = {
      log_level: "INFO",
      protocol: true,
      qr_enabled: false,
      push_alias_type: 2,
      disable_ysdk_guard: false,
      enable_announce_pic_popup: true,
      announce_url: new URL("hk4e/announcement/index.html", this.config.get("http.publicUrl")),
    };

    res.send({ retcode: 0, message: "OK", data });
  }

  async login(
    req: HttpRequest<{
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
    const {
      uid,
      token,
    }: {
      uid: string;
      token: string;
      guest: boolean;
    } = JSON.parse(req.body.data);

    const account = this.db.accounts.get(parseInt(uid));

    if (!account || account.session_token.toString("hex") !== token) {
      res.send({
        retcode: 1,
        message: "Please log in again",
      });

      return;
    }

    const data = {
      account_type: "1",
      open_id: account.id,
      combo_id: 1,
      combo_token: account.login_token.toString("hex"),
      data: JSON.stringify({ guest: "false" }),
      heartbeat: false,
    };

    res.send({ retcode: 0, message: "OK", data });
  }

  async compareProtocolVersion(_req: HttpRequest, res: HttpResponse) {
    const data = {
      modified: true,
      protocol: {
        id: 0,
        app_id: 4,
        major: 4,
        minimum: 0,
        create_time: "0",
        language: "en",
      },
    };

    res.send({ retcode: 0, message: "OK", data });
  }
}
