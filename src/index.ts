import dotenv from "dotenv";
import { printTitle } from "./utils/title";
import { HttpsServer } from "./http";
import { Config, loadConfig } from "./config";
import { readTlsCert } from "./http/tls";
import { readEc2bKey } from "./crypto";
import { GlobalDispatchHandler } from "./http/dispatchGlobal";
import { RegionDispatchHandler } from "./http/dispatchRegion";
import { Hk4eShieldHandler } from "./http/hk4eShield";
import { Hk4eGranterHandler } from "./http/hk4eGranter";
import { Hk4eAgreementHandler } from "./http/hk4eAgreement";
import { AccountHandler } from "./http/account";
import { AdminHandler } from "./http/admin";
import { KcpServer } from "./kcp";
import { Clock, SystemClock } from "./utils/clock";
import { Log } from "./log";
import { SystemExecutor } from "./system";
import { PingHandler } from "./kcp/handlers/ping";
import { AuthHandler } from "./kcp/handlers/auth";

dotenv.config();

async function start(clock: Clock, config: Config) {
  Log.level = config.get("logLevel");

  printTitle();

  const tls = await readTlsCert(config);
  const ec2b = await readEc2bKey(config);

  new SystemExecutor(clock)
    .register(
      new HttpsServer(config, tls)
        .register(new AdminHandler(config))
        .register(new AccountHandler(config))
        .register(new GlobalDispatchHandler(config, ec2b))
        .register(new RegionDispatchHandler(config, ec2b))
        .register(new Hk4eAgreementHandler(config))
        .register(new Hk4eShieldHandler(config))
        .register(new Hk4eGranterHandler(config))
    )
    .register(new KcpServer(config, clock, ec2b).register(new PingHandler()).register(new AuthHandler()))
    .start(100);
}

start(new SystemClock(), loadConfig());
