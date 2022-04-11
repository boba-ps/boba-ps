import * as BlossomChestInfo_proto from "./BlossomChestInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 842
}

export interface BlossomChestInfoNotify {
	entityId?: number;
	blossomChestInfo?: BlossomChestInfo_proto.BlossomChestInfo;
}

