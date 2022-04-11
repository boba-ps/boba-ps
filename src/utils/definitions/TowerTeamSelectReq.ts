import * as TowerTeam_proto from "./TowerTeam"

export enum CmdId {
	ENET_CHANNEL_ID = 0,
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	IS_ALLOW_CLIENT = 1,
	CMD_ID = 2401
}

export interface TowerTeamSelectReq {
	floorId?: number;
	towerTeamList?: TowerTeam_proto.TowerTeam[];
}

