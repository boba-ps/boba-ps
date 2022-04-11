import * as TowerTeam_proto from "./TowerTeam"

export interface TowerCurLevelRecord {
	curFloorId?: number;
	curLevelIndex?: number;
	towerTeamList?: TowerTeam_proto.TowerTeam[];
	buffIdList?: number[];
	isEmpty?: boolean;
}

