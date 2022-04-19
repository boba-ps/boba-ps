import { HttpHandler, HttpRequest, HttpResponse, HttpsServer } from ".";
import type { Config } from "../config";
import { randomStr } from "../utils/string";

export class AccountHandler extends HttpHandler {
  constructor(readonly config: Config) {
    super();
  }

  protected setup(server: HttpsServer) {
    server.http
      .post("/account/risky/api/check", this.riskyCheck.bind(this))
      .get("/combo/box/api/config/sdk/combo", this.comboCombo.bind(this));
  }

  async riskyCheck(_req: HttpRequest, res: HttpResponse) {
    const data = {
      id: randomStr(32),
      action: "",
      geetest: {
        challenge: "",
        gt: "",
        new_captcha: 0,
        success: 1,
      },
    };

    res.send({ retcode: 0, message: "OK", data });
  }

  async comboCombo(_req: HttpRequest, res: HttpResponse) {
    const data = {
      vals: {
        email_bind_remind: "true",
        email_bind_remind_interval: "7",
        disable_email_bind_skip: "false",
      },
    };

    res.send({ retcode: 0, message: "OK", data });
  }
}
