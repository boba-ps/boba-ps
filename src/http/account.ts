import {
  HttpHandler, HttpRequest, HttpResponse, HttpsServer,
} from '.';
import type { Config } from '../config';

export class AccountHandler extends HttpHandler {
  constructor(readonly config: Config) {
    super();
  }

  protected setup(server: HttpsServer) {
    server.http
      .post('/account/risky/api/check', {
        schema: {
          body: {
            action_type: { type: 'string' },
            api_name: { type: 'string' },
            username: { type: 'string', nullable: true },
          },
        },
        handler: this.riskyCheck.bind(this),
      })
      .get('/combo/box/api/config/sdk/combo', this.comboCombo.bind(this));
  }

  async riskyCheck(
    _req: HttpRequest<{
      Body: {
        action_type: string;
        api_name: string;
        username?: string;
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

        device_grant_required: 'false',
        safe_moblie_required: 'false',
        realperson_required: 'false',
        reactivate_required: 'false',
      },
    });
    // res.send({
    //   retcode: 0,
    //   message: "OK",
    //   data: {
    //     id: "none",
    //     action: "ACTION_NONE",
    //     geetest: null,
    //   },
    // });
  }

  async comboCombo(_req: HttpRequest, res: HttpResponse) {
    res.send({
      retcode: 0,
      message: 'OK',
      data: {
        vals: {
          email_bind_remind: 'true',
          email_bind_remind_interval: '7',
          disable_email_bind_skip: 'false',
        },
      },
    });
  }
}
