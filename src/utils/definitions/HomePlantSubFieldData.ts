import * as HomePlantFieldStatus_proto from "./HomePlantFieldStatus"

export interface HomePlantSubFieldData {
	seedId?: number;
	endTime?: number;
	entityIdList?: number[];
	fieldStatus?: HomePlantFieldStatus_proto.HomePlantFieldStatus;
	homeGatherId?: number;
}

