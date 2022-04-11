import * as TowerFightRecordPair_proto from "./TowerFightRecordPair"

export interface TowerMonthlyCombatRecord {
	mostRevealAvatarList?: TowerFightRecordPair_proto.TowerFightRecordPair[];
	mostKillAvatarPair?: TowerFightRecordPair_proto.TowerFightRecordPair;
	highestDpsAvatrPair?: TowerFightRecordPair_proto.TowerFightRecordPair;
	mostTakeDamageAvatarPair?: TowerFightRecordPair_proto.TowerFightRecordPair;
	mostCastNormalSkillAvatarPair?: TowerFightRecordPair_proto.TowerFightRecordPair;
	mostCastEnergySkillAvatarPair?: TowerFightRecordPair_proto.TowerFightRecordPair;
}

