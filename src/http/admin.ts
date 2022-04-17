import { HttpHandler, HttpRequest, HttpResponse, HttpsServer } from ".";
import type { Config } from "../config";

export class AdminHandler extends HttpHandler {
  constructor(readonly config: Config) {
    super();
  }

  setup(server: HttpsServer): void {
    server.http.get(
      "/admin/mi18n/plat_oversea/m2020030410/m2020030410-version.json",
      this.version2020030410.bind(this)
    );
  }

  async version2020030410(_req: HttpRequest, res: HttpResponse) {
    res.send({
      version: 54,
    });
  }
}
