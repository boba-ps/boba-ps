import * as VehicleMember_proto from "./VehicleMember"

export interface VehicleInfo {
	memberList?: VehicleMember_proto.VehicleMember[];
	ownerUid?: number;
	curStamina?: number;
}

