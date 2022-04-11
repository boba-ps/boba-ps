import * as MistTrialMissionInfo_proto from "./MistTrialMissionInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 8238
}

export interface MistTrialGetChallengeMissionRsp {
	retcode?: number;
	trialId?: number;
	missionInfoList?: MistTrialMissionInfo_proto.MistTrialMissionInfo[];
}

