import { HttpHandler, HttpRequest, HttpResponse, HttpsServer } from ".";
import type { Config } from "../config";
import type { Db } from "../db";
import type { Account } from "../db/account";

export class Hk4eShieldHandler extends HttpHandler {
  constructor(readonly config: Config, readonly db: Db) {
    super();
  }

  protected setup(server: HttpsServer) {
    server.http
      .get("/hk4e_global/mdk/shield/api/loadConfig", this.loadConfig.bind(this))
      .post("/hk4e_global/mdk/shield/api/login", this.login.bind(this))
      .post("/hk4e_global/mdk/shield/api/verify", this.verify.bind(this));
  }

  async loadConfig(_req: HttpRequest, res: HttpResponse) {
    const data = {
      id: 6,
      game_key: "hk4e_global",
      client: "PC",
      ignore_versions: "",
      guest: false,
      identity: "I_IDENTITY",
      scene: "S_NORMAL",
      name: "Genshin Impact",
      disable_regist: false,
      enable_email_captcha: false,
      thirdparty: [],
      thirdparty_ignore: {},
      disable_mmt: false,
      server_guest: false,
      enable_ps_bind_account: false,
    };

    res.send({ retcode: 0, message: "OK", data });
  }

  async login(
    req: HttpRequest<{
      Body: {
        account: string;
        password: string;
        is_crypto?: boolean;
      };
    }>,
    res: HttpResponse
  ) {
    const { account: username } = req.body;
    const account = this.db.accounts.getByName(username);

    // TODO: decrypt and test password
    if (!account) {
      res.send({
        retcode: 1,
        message: "Username or password incorrect",
      });

      return;
    }

    const data = {
      account: this.buildAccountData(account),

      realname_operation: "NONE",
      device_grant_required: false,
      safe_moblie_required: false,
      realperson_required: false,
      reactivate_required: false,
    };

    res.send({ retcode: 0, message: "OK", data });
  }

  async verify(
    req: HttpRequest<{
      Body: {
        uid: string;
        token: string;
      };
    }>,
    res: HttpResponse
  ) {
    const { uid, token } = req.body;
    const account = this.db.accounts.get(parseInt(uid));

    if (!account || account.session_token.toString("hex") !== token) {
      res.send({
        retcode: 1,
        message: "Please log in again",
      });

      return;
    }

    const data = {
      account: this.buildAccountData(account),

      realname_operation: "NONE",
      device_grant_required: false,
      safe_moblie_required: false,
      realperson_required: false,
      reactivate_required: false,
    };

    res.send({ retcode: 0, message: "OK", data });
  }

  buildAccountData(account: Account) {
    return {
      uid: account.id.toString(),
      name: account.username,
      token: account.session_token.toString("hex"),
      email: account.email,

      is_email_verify: "0",
      area_code: "**",
      country: account.country_code,
    };
  }
}
