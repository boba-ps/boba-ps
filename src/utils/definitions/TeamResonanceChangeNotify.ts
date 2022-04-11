import * as AvatarTeamResonanceInfo_proto from "./AvatarTeamResonanceInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 1014
}

export interface TeamResonanceChangeNotify {
	infoList?: AvatarTeamResonanceInfo_proto.AvatarTeamResonanceInfo[];
}

