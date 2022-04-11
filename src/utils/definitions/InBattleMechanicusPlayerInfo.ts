import * as InBattleMechanicusBuildingInfo_proto from "./InBattleMechanicusBuildingInfo"

export interface InBattleMechanicusPlayerInfo {
	uid?: number;
	buildingPoints?: number;
	buildingList?: InBattleMechanicusBuildingInfo_proto.InBattleMechanicusBuildingInfo[];
	pickCardId?: number;
	isCardConfirmed?: boolean;
}

