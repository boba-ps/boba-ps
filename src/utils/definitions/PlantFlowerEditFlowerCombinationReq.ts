import * as CustomGadgetTreeInfo_proto from "./CustomGadgetTreeInfo"

export enum CmdId {
	ENET_CHANNEL_ID = 0,
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	IS_ALLOW_CLIENT = 1,
	CMD_ID = 8525
}

export interface PlantFlowerEditFlowerCombinationReq {
	scheduleId?: number;
	entityId?: number;
	flowerCombinationInfo?: CustomGadgetTreeInfo_proto.CustomGadgetTreeInfo;
}

