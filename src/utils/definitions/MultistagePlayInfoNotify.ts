import * as MultistagePlayInfo_proto from "./MultistagePlayInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 5349
}

export interface MultistagePlayInfoNotify {
	info?: MultistagePlayInfo_proto.MultistagePlayInfo;
}

