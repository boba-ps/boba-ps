import * as OnlinePlayerInfo_proto from "./OnlinePlayerInfo"

export interface ScenePlayerInfo {
	uid?: number;
	peerId?: number;
	name?: string;
	isConnected?: boolean;
	sceneId?: number;
	onlinePlayerInfo?: OnlinePlayerInfo_proto.OnlinePlayerInfo;
}

