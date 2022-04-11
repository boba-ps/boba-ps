import * as GachaInfo_proto from "./GachaInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 1518
}

export interface GetGachaInfoRsp {
	retcode?: number;
	gachaInfoList?: GachaInfo_proto.GachaInfo[];
	gachaRandom?: number;
}

