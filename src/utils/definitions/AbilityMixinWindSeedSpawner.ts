import * as Vector_proto from "./Vector"

export interface AddSignal {
	
}

export interface RefreshSeed {
	posList?: Vector_proto.Vector[];
}

export interface CatchSeed {
	entityId?: number;
}

export interface AbilityMixinWindSeedSpawner {
	addSignal?: AddSignal;
	refreshSeed?: RefreshSeed;
	catchSeed?: CatchSeed;
}

