import * as RogueCellInfo_proto from "./RogueCellInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 8728
}

export interface RogueCellUpdateNotify {
	cellInfo?: RogueCellInfo_proto.RogueCellInfo;
}

