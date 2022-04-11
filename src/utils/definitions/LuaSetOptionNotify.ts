export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 344
}

export enum LuaOptionType {
	LUA_OPTION_NONE = 0,
	LUA_OPTION_PLAYER_INPUT = 1
}

export interface LuaSetOptionNotify {
	optionType?: LuaOptionType;
	luaSetParam?: string;
}

