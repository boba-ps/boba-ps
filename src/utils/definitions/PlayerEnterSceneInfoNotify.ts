import * as AvatarEnterSceneInfo_proto from "./AvatarEnterSceneInfo"

import * as TeamEnterSceneInfo_proto from "./TeamEnterSceneInfo"

import * as MPLevelEntityInfo_proto from "./MPLevelEntityInfo"

export enum CmdId {
	ENET_CHANNEL_ID = 0,
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	IS_ALLOW_CLIENT = 1,
	CMD_ID = 246
}

export interface PlayerEnterSceneInfoNotify {
	curAvatarEntityId?: number;
	avatarEnterInfo?: AvatarEnterSceneInfo_proto.AvatarEnterSceneInfo[];
	teamEnterInfo?: TeamEnterSceneInfo_proto.TeamEnterSceneInfo;
	mpLevelEntityInfo?: MPLevelEntityInfo_proto.MPLevelEntityInfo;
	enterSceneToken?: number;
}

