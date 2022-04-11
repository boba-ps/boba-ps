import * as EntityConfigHashEntry_proto from "./EntityConfigHashEntry"

export enum CmdId {
	ENET_CHANNEL_ID = 0,
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	IS_ALLOW_CLIENT = 1,
	CMD_ID = 3487
}

export interface EntityConfigHashNotify {
	abilityEntryList?: EntityConfigHashEntry_proto.EntityConfigHashEntry[];
	combatEntryList?: EntityConfigHashEntry_proto.EntityConfigHashEntry[];
	avatarEntryList?: EntityConfigHashEntry_proto.EntityConfigHashEntry[];
}

