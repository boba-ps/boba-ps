import dotenv from 'dotenv';
import { printTitle } from './utils/title';
import { HttpsServer } from './http';
import { Config, loadConfig } from './config';
import { readTlsCert } from './http/tls';
import { readEc2b } from './crypto';
import { GlobalDispatchHandler } from './http/dispatchGlobal';
import { RegionDispatchHandler } from './http/dispatchRegion';
import { Hk4eShieldHandler } from './http/hk4eShield';
import { Hk4eGranterHandler } from './http/hk4eGranter';
import { Hk4eAgreementHandler } from './http/hk4eAgreement';
import { AccountHandler } from './http/account';
import { AdminHandler } from './http/admin';

dotenv.config();

async function main(config: Config) {
  printTitle();

  const tls = await readTlsCert(config);
  const ec2b = await readEc2b(config);

  new HttpsServer(tls)
    .register(new AdminHandler(config))
    .register(new AccountHandler(config))
    .register(new GlobalDispatchHandler(config, ec2b))
    .register(new RegionDispatchHandler(config, ec2b))
    .register(new Hk4eAgreementHandler(config))
    .register(new Hk4eShieldHandler(config))
    .register(new Hk4eGranterHandler(config))
    .start(config.get('http.host'), config.get('http.port'));
}

main(loadConfig());
