import * as PlantFlowerAcceptFlowerResultInfo_proto from "./PlantFlowerAcceptFlowerResultInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 8893
}

export interface PlantFlowerAcceptAllGiveFlowerRsp {
	retcode?: number;
	scheduleId?: number;
	acceptFlowerResultInfoList?: PlantFlowerAcceptFlowerResultInfo_proto.PlantFlowerAcceptFlowerResultInfo[];
}

