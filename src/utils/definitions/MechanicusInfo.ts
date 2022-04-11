import * as Uint32Pair_proto from "./Uint32Pair"

export interface MechanicusInfo {
	mechanicusId?: number;
	coin?: number;
	gearLevelPairList?: Uint32Pair_proto.Uint32Pair[];
	openSequenceIdList?: number[];
	isFinishTeachDungeon?: boolean;
	finishDifficultLevelList?: number[];
	punishOverTime?: number;
}

