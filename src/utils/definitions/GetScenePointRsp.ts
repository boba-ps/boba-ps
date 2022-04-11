export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 236
}

export interface GetScenePointRsp {
	retcode?: number;
	sceneId?: number;
	unlockedPointList?: number[];
	belongUid?: number;
	unlockAreaList?: number[];
	lockedPointList?: number[];
	toBeExploreDungeonEntryList?: number[];
	notExploredDungeonEntryList?: number[];
	groupUnlimitPointList?: number[];
	notInteractDungeonEntryList?: number[];
	hidePointList?: number[];
}

