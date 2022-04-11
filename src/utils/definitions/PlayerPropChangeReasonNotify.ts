import * as PropChangeReason_proto from "./PropChangeReason"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 1279
}

export interface PlayerPropChangeReasonNotify {
	propType?: number;
	oldValue?: number;
	curValue?: number;
	reason?: PropChangeReason_proto.PropChangeReason;
}

