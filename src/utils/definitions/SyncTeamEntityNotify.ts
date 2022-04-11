import * as TeamEntityInfo_proto from "./TeamEntityInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 308
}

export interface SyncTeamEntityNotify {
	sceneId?: number;
	teamEntityInfoList?: TeamEntityInfo_proto.TeamEntityInfo[];
}

