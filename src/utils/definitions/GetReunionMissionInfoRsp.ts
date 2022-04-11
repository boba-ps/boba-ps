import * as ReunionMissionInfo_proto from "./ReunionMissionInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 5100
}

export interface GetReunionMissionInfoRsp {
	retcode?: number;
	missionInfo?: ReunionMissionInfo_proto.ReunionMissionInfo;
}

