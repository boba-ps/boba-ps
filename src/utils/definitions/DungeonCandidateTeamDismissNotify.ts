import * as DungeonCandidateTeamDismissReason_proto from "./DungeonCandidateTeamDismissReason"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 983
}

export interface DungeonCandidateTeamDismissNotify {
	playerUid?: number;
	reason?: DungeonCandidateTeamDismissReason_proto.DungeonCandidateTeamDismissReason;
}

