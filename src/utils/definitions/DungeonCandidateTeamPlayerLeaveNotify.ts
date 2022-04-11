import * as DungeonCandidateTeamPlayerLeaveReason_proto from "./DungeonCandidateTeamPlayerLeaveReason"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 910
}

export interface DungeonCandidateTeamPlayerLeaveNotify {
	playerUid?: number;
	reason?: DungeonCandidateTeamPlayerLeaveReason_proto.DungeonCandidateTeamPlayerLeaveReason;
}

