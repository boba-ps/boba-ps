import * as PropValue_proto from "./PropValue"

export enum CmdId {
	ENET_CHANNEL_ID = 0,
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	IS_ALLOW_CLIENT = 1,
	CMD_ID = 191
}

export interface SetPlayerPropReq {
	propList?: PropValue_proto.PropValue[];
}

