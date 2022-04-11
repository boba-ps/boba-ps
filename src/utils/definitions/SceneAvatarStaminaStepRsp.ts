import * as Vector_proto from "./Vector"

export enum CmdId {
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	ENET_CHANNEL_ID = 1,
	CMD_ID = 212
}

export interface SceneAvatarStaminaStepRsp {
	retcode?: number;
	useClientRot?: boolean;
	rot?: Vector_proto.Vector;
}

