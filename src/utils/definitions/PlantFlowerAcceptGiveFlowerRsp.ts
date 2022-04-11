import * as PlantFlowerAcceptFlowerResultInfo_proto from "./PlantFlowerAcceptFlowerResultInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 8934
}

export interface PlantFlowerAcceptGiveFlowerRsp {
	retcode?: number;
	scheduleId?: number;
	acceptFlowerResultInfo?: PlantFlowerAcceptFlowerResultInfo_proto.PlantFlowerAcceptFlowerResultInfo;
}

