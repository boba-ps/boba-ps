import * as ReunionBriefInfo_proto from "./ReunionBriefInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 5093
}

export interface ReunionBriefInfoRsp {
	retcode?: number;
	isActivate?: boolean;
	reunionBriefInfo?: ReunionBriefInfo_proto.ReunionBriefInfo;
}

