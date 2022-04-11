import * as AbilityControlBlock_proto from "./AbilityControlBlock"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 1112
}

export interface AbilityChangeNotify {
	entityId?: number;
	abilityControlBlock?: AbilityControlBlock_proto.AbilityControlBlock;
}

