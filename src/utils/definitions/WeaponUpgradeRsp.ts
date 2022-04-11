import * as ItemParam_proto from "./ItemParam"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 632
}

export interface WeaponUpgradeRsp {
	retcode?: number;
	targetWeaponGuid?: number;
	oldLevel?: number;
	curLevel?: number;
	itemParamList?: ItemParam_proto.ItemParam[];
}

