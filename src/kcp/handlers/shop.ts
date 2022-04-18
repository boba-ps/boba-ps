import { GetShopReq, GetShopRsp } from "boba-protos";
import { KcpHandler, KcpServer } from "..";
import type { PacketContext } from "../router";

export class ShopHandler extends KcpHandler {
  protected setup(server: KcpServer) {
    server.router.on(GetShopReq, this.getShop.bind(this));
  }

  getShop({ res }: PacketContext<GetShopReq>) {
    res.send(GetShopRsp, {
      shop: {
        shopType: 900,
        cardProductList: [
          {
            productId: "ys_glb_blessofmoon_tier5",
            priceTier: "Tier_5",
            mcoinBase: 300,
            hcoinPerDay: 90,
            days: 30,
            cardProductType: 1,
          },
        ],
      },
    });
  }
}
