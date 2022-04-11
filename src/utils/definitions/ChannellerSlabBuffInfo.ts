import * as ChannellerSlabBuffSchemeInfo_proto from "./ChannellerSlabBuffSchemeInfo"

import * as ChannellerSlabAssistInfo_proto from "./ChannellerSlabAssistInfo"

export interface ChannellerSlabBuffInfo {
	buffIdList?: number[];
	singleBuffSchemeInfo?: ChannellerSlabBuffSchemeInfo_proto.ChannellerSlabBuffSchemeInfo;
	mpBuffSchemeInfo?: ChannellerSlabBuffSchemeInfo_proto.ChannellerSlabBuffSchemeInfo;
	assistInfoList?: ChannellerSlabAssistInfo_proto.ChannellerSlabAssistInfo[];
}

