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
import { Clock } from "./utils/clock";

dotenv.config();

async function main(clock: Clock, config: Config) {
  printTitle();

  const tls = await readTlsCert(config);
  const ec2b = await readEc2bKey(config);

  const http = new HttpsServer(config, tls)
    .register(new AdminHandler(config))
    .register(new AccountHandler(config))
    .register(new GlobalDispatchHandler(config, ec2b))
    .register(new RegionDispatchHandler(config, ec2b))
    .register(new Hk4eAgreementHandler(config))
    .register(new Hk4eShieldHandler(config))
    .register(new Hk4eGranterHandler(config));

  const kcp = new KcpServer(config, clock, ec2b);

  // TODO: Clock-based event loop
  await Promise.all([
    http.run(config.get("http.host"), config.get("http.port")),
    kcp.run(config.get("kcp.host"), config.get("kcp.port")),
  ]);
}

main(Clock.system().withStart(0), loadConfig());
