import * as MassiveWaterInfo_proto from "./MassiveWaterInfo"

import * as MassiveGrassInfo_proto from "./MassiveGrassInfo"

import * as MassiveBoxInfo_proto from "./MassiveBoxInfo"

export interface ServerMassiveEntity {
	waterInfo?: MassiveWaterInfo_proto.MassiveWaterInfo;
	grassInfo?: MassiveGrassInfo_proto.MassiveGrassInfo;
	boxInfo?: MassiveBoxInfo_proto.MassiveBoxInfo;
	entityType?: number;
	configId?: number;
	runtimeId?: number;
	authorityPeerId?: number;
	objId?: number;
}

