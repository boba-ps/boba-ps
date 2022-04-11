import * as PlayerLocationInfo_proto from "./PlayerLocationInfo"

import * as VehicleLocationInfo_proto from "./VehicleLocationInfo"

export enum CmdId {
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	ENET_CHANNEL_ID = 1,
	CMD_ID = 224
}

export interface ScenePlayerLocationNotify {
	sceneId?: number;
	playerLocList?: PlayerLocationInfo_proto.PlayerLocationInfo[];
	vehicleLocList?: VehicleLocationInfo_proto.VehicleLocationInfo[];
}

