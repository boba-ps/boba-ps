import * as VehicleInteractType_proto from "./VehicleInteractType"

import * as VehicleMember_proto from "./VehicleMember"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 816
}

export interface VehicleInteractRsp {
	retcode?: number;
	entityId?: number;
	interactType?: VehicleInteractType_proto.VehicleInteractType;
	member?: VehicleMember_proto.VehicleMember;
}

