export interface PacketHead {
	packetId?: number;
	rpcId?: number;
	clientSequenceId?: number;
	enetChannelId?: number;
	enetIsReliable?: number;
	sentMs?: number;
	userId?: number;
	userIp?: number;
	userSessionId?: number;
	recvTimeMs?: number;
	rpcBeginTimeMs?: number;
	extMap?: number;
	senderAppId?: number;
	sourceService?: number;
	targetService?: number;
	serviceAppIdMap?: number;
	isSetGameThread?: boolean;
	gameThreadIndex?: number;
}

