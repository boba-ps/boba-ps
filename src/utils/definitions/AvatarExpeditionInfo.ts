import * as AvatarExpeditionState_proto from "./AvatarExpeditionState"

export interface AvatarExpeditionInfo {
	state?: AvatarExpeditionState_proto.AvatarExpeditionState;
	expId?: number;
	hourTime?: number;
	startTime?: number;
	shortenRatio?: number;
}

