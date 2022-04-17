import {
  HttpHandler, HttpRequest, HttpResponse, HttpsServer,
} from '.';
import type { Config } from '../config';

export class Hk4eShieldHandler extends HttpHandler {
  // eslint-disable-next-line no-unused-vars
  constructor(readonly config: Config) {
    super();
  }

  protected setup(server: HttpsServer) {
    server.http
      .get('/hk4e_global/mdk/shield/api/loadConfig', this.loadConfig.bind(this))
      .post('/hk4e_global/mdk/shield/api/login', {
        schema: {
          body: {
            uid: { type: 'string' },
            token: { type: 'string' },
          },
        },
        handler: this.login.bind(this),
      })
      .post('/hk4e_global/mdk/shield/api/verify', {
        schema: {
          body: {
            uid: { type: 'string' },
            token: { type: 'string' },
          },
        },
        handler: this.verify.bind(this),
      });
  }

  async loadConfig(_req: HttpRequest, res: HttpResponse) {
    res.send({
      retcode: 0,
      message: 'OK',
      data: {
        id: 6,
        game_key: 'hk4e_global',
        client: 'PC',
        ignore_versions: '',
        guest: false,
        identity: 'I_IDENTITY',
        scene: 'S_NORMAL',
        name: 'Genshin Impact',
        disable_regist: false,
        enable_email_captcha: false,
        thirdparty: [],
        thirdparty_ignore: {},
        disable_mmt: false,
        server_guest: false,
        enable_ps_bind_account: false,
      },
    });
  }

  async login(
    _req: HttpRequest<{
      Body: {
        uid?: string;
        token?: string;
      };
    }>,
    res: HttpResponse,
  ) {
    res.send({
      retcode: 0,
      message: 'OK',
      data: {
        account: {
          uid: '1',
          name: 'Boba',
          realname: '',
          token: 'abcdabcdabcdabcd',
          email: 'Boba',
          is_email_verify: '0',
          area_code: '**',
          country: 'US',
          device_grant_ticket: '',
          reactivate_ticket: '',
          mobile: '',
          safe_mobile: '',
          identity_card: '',

          apple_name: '',
          facebook_name: '',
          game_center_name: '',
          google_name: '',
          sony_name: '',
          tap_name: '',
          twitter_name: '',
        },

        realname_operation: 'None',
        device_grant_required: 'false',
        safe_moblie_required: 'false',
        realperson_required: 'false',
        reactivate_required: 'false',
      },
    });
  }

  verify = this.login.bind(this);
}
