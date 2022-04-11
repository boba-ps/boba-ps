import * as ServerMassiveEntity_proto from "./ServerMassiveEntity"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 393
}

export interface CreateMassiveEntityNotify {
	massiveEntityList?: ServerMassiveEntity_proto.ServerMassiveEntity[];
}

