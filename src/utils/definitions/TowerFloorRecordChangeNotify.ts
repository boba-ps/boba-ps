import * as TowerFloorRecord_proto from "./TowerFloorRecord"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 2418
}

export interface TowerFloorRecordChangeNotify {
	towerFloorRecordList?: TowerFloorRecord_proto.TowerFloorRecord[];
	isFinishedEntranceFloor?: boolean;
}

