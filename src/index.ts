import { Config } from "./config";
import { Log } from "./log";
import { SystemExecutor } from "./system";
import { TitlePrinter } from "./utils/title";
import { HttpsServer } from "./http";
import { TlsCert } from "./http/tls";
import { Ec2bKey } from "./crypto";
import { GlobalDispatchHandler } from "./http/dispatchGlobal";
import { RegionDispatchHandler } from "./http/dispatchRegion";
import { Hk4eShieldHandler } from "./http/hk4eShield";
import { Hk4eGranterHandler } from "./http/hk4eGranter";
import { Hk4eAgreementHandler } from "./http/hk4eAgreement";
import { AccountHandler } from "./http/account";
import { AdminHandler } from "./http/admin";
import { KcpServer } from "./kcp";
import { PingHandler } from "./kcp/handlers/ping";
import { AuthHandler } from "./kcp/handlers/auth";
import { SceneHandler } from "./kcp/handlers/scene";
import { SocialHandler } from "./kcp/handlers/social";
import { ShopHandler } from "./kcp/handlers/shop";
import { Db } from "./db";

const config = new Config();

Log.level = config.get("logLevel");

const tls = new TlsCert(config);
const ec2b = new Ec2bKey(config);
const db = new Db(config);

new SystemExecutor()
  .register(new TitlePrinter())
  .register(db)
  .register(
    new HttpsServer(config, tls)
      .register(new AdminHandler(config))
      .register(new AccountHandler(config))
      .register(new GlobalDispatchHandler(config, ec2b))
      .register(new RegionDispatchHandler(config, ec2b))
      .register(new Hk4eAgreementHandler(config))
      .register(new Hk4eShieldHandler(config, db))
      .register(new Hk4eGranterHandler(config, db))
  )
  .register(
    new KcpServer(config, ec2b)
      .register(new PingHandler())
      .register(new AuthHandler(db))
      .register(new SceneHandler())
      .register(new SocialHandler())
      .register(new ShopHandler())
  )
  .start(100);
