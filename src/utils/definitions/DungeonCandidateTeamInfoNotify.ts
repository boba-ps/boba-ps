import * as DungeonCandidateTeamAvatar_proto from "./DungeonCandidateTeamAvatar"

import * as DungeonCandidateTeamPlayerState_proto from "./DungeonCandidateTeamPlayerState"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 922
}

export interface DungeonCandidateTeamInfoNotify {
	dungeonId?: number;
	avatarList?: DungeonCandidateTeamAvatar_proto.DungeonCandidateTeamAvatar[];
	readyPlayerUid?: number[];
	matchType?: number;
	playerStateMap?: DungeonCandidateTeamPlayerState_proto.DungeonCandidateTeamPlayerState;
}

