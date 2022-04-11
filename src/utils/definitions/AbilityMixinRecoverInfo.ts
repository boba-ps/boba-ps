import * as MassivePropSyncInfo_proto from "./MassivePropSyncInfo"

export interface AbilityMixinRecoverInfo {
	instancedAbilityId?: number;
	instancedModifierId?: number;
	localId?: number;
	dataList?: number[];
	isServerbuffModifier?: boolean;
	massivePropList?: MassivePropSyncInfo_proto.MassivePropSyncInfo[];
}

