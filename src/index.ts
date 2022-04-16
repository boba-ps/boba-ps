import { printTitle } from "./utils/title";
import { HttpServer } from "./http";
import { Config } from "./config";
import { GlobalDispatchHandler } from "./http/globalDispatch";

printTitle();

new HttpServer()
  .register(new GlobalDispatchHandler())
  .start(Config.get("http.host"), Config.get("http.port"));
