import * as InBattleMechanicusStageType_proto from "./InBattleMechanicusStageType"

import * as InBattleMechanicusMonsterInfo_proto from "./InBattleMechanicusMonsterInfo"

import * as InBattleMechanicusPlayerInfo_proto from "./InBattleMechanicusPlayerInfo"

import * as InBattleMechanicusCardInfo_proto from "./InBattleMechanicusCardInfo"

export interface InBattleMechanicusInfo {
	stage?: InBattleMechanicusStageType_proto.InBattleMechanicusStageType;
	beginTimeMs?: number;
	durationMs?: number;
	round?: number;
	totalRound?: number;
	leftMonster?: number;
	monsterList?: InBattleMechanicusMonsterInfo_proto.InBattleMechanicusMonsterInfo[];
	playerList?: InBattleMechanicusPlayerInfo_proto.InBattleMechanicusPlayerInfo[];
	excapedMonsterNum?: number;
	maxExcapeMonsterNum?: number;
	buildingStageDuration?: number;
	pickCardList?: InBattleMechanicusCardInfo_proto.InBattleMechanicusCardInfo[];
	historyCardList?: InBattleMechanicusCardInfo_proto.InBattleMechanicusCardInfo[];
	waitBeginTimeUs?: number;
	waitSeconds?: number;
	entranceList?: number[];
	exitList?: number[];
}

