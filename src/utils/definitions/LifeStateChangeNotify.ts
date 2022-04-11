import * as PlayerDieType_proto from "./PlayerDieType"

import * as ServerBuff_proto from "./ServerBuff"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 1218
}

export interface LifeStateChangeNotify {
	entityId?: number;
	lifeState?: number;
	sourceEntityId?: number;
	attackTag?: string;
	dieType?: PlayerDieType_proto.PlayerDieType;
	moveReliableSeq?: number;
	serverBuffList?: ServerBuff_proto.ServerBuff[];
}

