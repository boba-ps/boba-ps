import * as Birthday_proto from "./Birthday"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 4091
}

export interface SetPlayerBirthdayRsp {
	retcode?: number;
	birthday?: Birthday_proto.Birthday;
}

