import * as SceneWeaponInfo_proto from "./SceneWeaponInfo"

import * as SceneReliquaryInfo_proto from "./SceneReliquaryInfo"

export enum CmdId {
	ENET_CHANNEL_ID = 0,
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	IS_ALLOW_CLIENT = 1,
	CMD_ID = 615
}

export interface AvatarEquipChangeNotify {
	avatarGuid?: number;
	equipType?: number;
	itemId?: number;
	equipGuid?: number;
	weapon?: SceneWeaponInfo_proto.SceneWeaponInfo;
	reliquary?: SceneReliquaryInfo_proto.SceneReliquaryInfo;
}

