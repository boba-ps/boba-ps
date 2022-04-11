import * as ChannelerSlabChallenge_proto from "./ChannelerSlabChallenge"

import * as ChannelerSlabOneoffDungeon_proto from "./ChannelerSlabOneoffDungeon"

export interface ChannelerSlabChallengeStage {
	stageId?: number;
	openTime?: number;
	challengeList?: ChannelerSlabChallenge_proto.ChannelerSlabChallenge[];
	dungeonInfo?: ChannelerSlabOneoffDungeon_proto.ChannelerSlabOneoffDungeon;
	isOpen?: boolean;
}

