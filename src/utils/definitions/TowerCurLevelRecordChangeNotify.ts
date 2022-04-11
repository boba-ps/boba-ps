import * as TowerCurLevelRecord_proto from "./TowerCurLevelRecord"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 2489
}

export interface TowerCurLevelRecordChangeNotify {
	curLevelRecord?: TowerCurLevelRecord_proto.TowerCurLevelRecord;
}

