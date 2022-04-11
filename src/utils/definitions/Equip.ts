import * as Reliquary_proto from "./Reliquary"

import * as Weapon_proto from "./Weapon"

export interface Equip {
	reliquary?: Reliquary_proto.Reliquary;
	weapon?: Weapon_proto.Weapon;
	isLocked?: boolean;
}

