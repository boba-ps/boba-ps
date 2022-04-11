import * as ChannellerSlabAssistInfo_proto from "./ChannellerSlabAssistInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 8856
}

export interface ChannellerSlabSaveAssistInfoRsp {
	retcode?: number;
	assistInfoList?: ChannellerSlabAssistInfo_proto.ChannellerSlabAssistInfo[];
}

