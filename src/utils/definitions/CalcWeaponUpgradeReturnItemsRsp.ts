import * as ItemParam_proto from "./ItemParam"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 660
}

export interface CalcWeaponUpgradeReturnItemsRsp {
	retcode?: number;
	targetWeaponGuid?: number;
	itemParamList?: ItemParam_proto.ItemParam[];
}

