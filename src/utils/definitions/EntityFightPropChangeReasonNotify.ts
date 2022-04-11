import * as PropChangeReason_proto from "./PropChangeReason"

import * as ChangHpReason_proto from "./ChangHpReason"

import * as ChangeEnergyReason_proto from "./ChangeEnergyReason"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 1294
}

export interface EntityFightPropChangeReasonNotify {
	entityId?: number;
	propType?: number;
	propDelta?: number;
	reason?: PropChangeReason_proto.PropChangeReason;
	paramList?: number[];
	changeHpReason?: ChangHpReason_proto.ChangHpReason;
	changeEnergyReson?: ChangeEnergyReason_proto.ChangeEnergyReason;
}

