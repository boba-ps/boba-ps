import * as PlayerLocationInfo_proto from "./PlayerLocationInfo"

import * as PlayerWorldLocationInfo_proto from "./PlayerWorldLocationInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 253
}

export interface WorldPlayerLocationNotify {
	playerLocList?: PlayerLocationInfo_proto.PlayerLocationInfo[];
	playerWorldLocList?: PlayerWorldLocationInfo_proto.PlayerWorldLocationInfo[];
}

