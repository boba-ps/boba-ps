import * as HomeVerifyFurnitureData_proto from "./HomeVerifyFurnitureData"

import * as HomeVerifyImageData_proto from "./HomeVerifyImageData"

export interface HomeVerifyBlockData {
	blockId?: number;
	furnitures?: HomeVerifyFurnitureData_proto.HomeVerifyFurnitureData[];
	images?: HomeVerifyImageData_proto.HomeVerifyImageData[];
}

