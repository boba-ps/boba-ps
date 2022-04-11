import * as Vector_proto from "./Vector"

export enum CmdId {
	ENET_CHANNEL_ID = 0,
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	IS_ALLOW_CLIENT = 1,
	CMD_ID = 1669
}

export interface ChangeAvatarReq {
	guid?: number;
	skillId?: number;
	isMove?: boolean;
	movePos?: Vector_proto.Vector;
}

