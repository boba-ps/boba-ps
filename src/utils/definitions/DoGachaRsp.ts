import * as GachaItem_proto from "./GachaItem"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 1584
}

export interface DoGachaRsp {
	retcode?: number;
	gachaType?: number;
	gachaTimes?: number;
	gachaScheduleId?: number;
	gachaItemList?: GachaItem_proto.GachaItem[];
	newGachaRandom?: number;
	costItemId?: number;
	costItemNum?: number;
	tenCostItemId?: number;
	tenCostItemNum?: number;
	leftGachaTimes?: number;
	gachaTimesLimit?: number;
	wishItemId?: number;
	wishProgress?: number;
	wishMaxProgress?: number;
}

