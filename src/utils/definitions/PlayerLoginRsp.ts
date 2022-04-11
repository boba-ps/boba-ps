import * as ResVersionConfig_proto from "./ResVersionConfig"

import * as BlockInfo_proto from "./BlockInfo"

import * as ShortAbilityHashPair_proto from "./ShortAbilityHashPair"

import * as FeatureBlockInfo_proto from "./FeatureBlockInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 184
}

export interface PlayerLoginRsp {
	retcode?: number;
	playerData?: Buffer;
	isNewPlayer?: boolean;
	targetUid?: number;
	loginRand?: number;
	isUseAbilityHash?: boolean;
	abilityHashCode?: number;
	abilityHashMap?: number;
	clientDataVersion?: number;
	isRelogin?: boolean;
	clientSilenceDataVersion?: number;
	gameBiz?: string;
	playerDataVersion?: number;
	clientMd5?: string;
	clientSilenceMd5?: string;
	resVersionConfig?: ResVersionConfig_proto.ResVersionConfig;
	blockInfoMap?: BlockInfo_proto.BlockInfo;
	clientVersionSuffix?: string;
	clientSilenceVersionSuffix?: string;
	shortAbilityHashMap?: ShortAbilityHashPair_proto.ShortAbilityHashPair[];
	scInfo?: Buffer;
	isAudit?: boolean;
	isScOpen?: boolean;
	registerCps?: string;
	featureBlockInfoList?: FeatureBlockInfo_proto.FeatureBlockInfo[];
	isDataNeedRelogin?: boolean;
	countryCode?: string;
	nextResVersionConfig?: ResVersionConfig_proto.ResVersionConfig;
	nextResourceUrl?: string;
	targetHomeOwnerUid?: number;
	isEnableClientHashDebug?: boolean;
	isTransfer?: boolean;
	totalTickTime?: number;
}

