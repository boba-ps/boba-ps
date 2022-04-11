import * as ReunionMissionInfo_proto from "./ReunionMissionInfo"

export enum CmdId {
	ENET_CHANNEL_ID = 0,
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	IS_ALLOW_CLIENT = 1,
	CMD_ID = 5080
}

export interface TakeReunionMissionRewardRsp {
	retcode?: number;
	rewardId?: number;
	missionInfo?: ReunionMissionInfo_proto.ReunionMissionInfo;
	rewardIndex?: number;
}

