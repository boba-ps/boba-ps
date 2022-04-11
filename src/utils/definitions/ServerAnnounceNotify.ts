import * as AnnounceData_proto from "./AnnounceData"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 2030
}

export interface ServerAnnounceNotify {
	announceDataList?: AnnounceData_proto.AnnounceData[];
}

