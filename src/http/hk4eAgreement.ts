import { HttpHandler, HttpRequest, HttpResponse, HttpsServer } from ".";
import type { Config } from "../config";

export class Hk4eAgreementHandler extends HttpHandler {
  constructor(readonly config: Config) {
    super();
  }

  protected setup(server: HttpsServer) {
    server.http.get("/hk4e_global/mdk/agreement/api/getAgreementInfos", this.getAgreementInfos.bind(this));
  }

  async getAgreementInfos(_req: HttpRequest, res: HttpResponse) {
    const data = {
      marketing_agreements: [],
    };

    res.send({ retcode: 0, message: "OK", data });
  }
}
