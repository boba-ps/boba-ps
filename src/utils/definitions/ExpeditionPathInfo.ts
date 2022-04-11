import * as ExpeditionState_proto from "./ExpeditionState"

export interface ExpeditionPathInfo {
	pathId?: number;
	state?: ExpeditionState_proto.ExpeditionState;
	startTime?: number;
	avatarIdList?: number[];
	assistUid?: number;
	assistAvatarId?: number;
	markId?: number;
	bonusProbability?: number;
	challengeId?: number;
	assistCostumeId?: number;
}

