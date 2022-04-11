import * as Material_proto from "./Material"

import * as Equip_proto from "./Equip"

import * as Furniture_proto from "./Furniture"

export interface Item {
	material?: Material_proto.Material;
	equip?: Equip_proto.Equip;
	furniture?: Furniture_proto.Furniture;
	itemId?: number;
	guid?: number;
}

