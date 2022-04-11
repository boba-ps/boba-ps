import * as RogueCellState_proto from "./RogueCellState"

export interface RogueCellInfo {
	cellId?: number;
	dungeonId?: number;
	cellConfigId?: number;
	state?: RogueCellState_proto.RogueCellState;
	cellType?: number;
}

