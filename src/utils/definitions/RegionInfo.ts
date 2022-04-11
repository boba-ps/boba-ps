import * as ResVersionConfig_proto from "./ResVersionConfig"

export interface RegionInfo {
	gateserverIp?: string;
	gateserverPort?: number;
	payCallbackUrl?: string;
	areaType?: string;
	resourceUrl?: string;
	dataUrl?: string;
	feedbackUrl?: string;
	bulletinUrl?: string;
	resourceUrlBak?: string;
	dataUrlBak?: string;
	clientDataVersion?: number;
	handbookUrl?: string;
	clientSilenceDataVersion?: number;
	clientDataMd5?: string;
	clientSilenceDataMd5?: string;
	resVersionConfig?: ResVersionConfig_proto.ResVersionConfig;
	secretKey?: Buffer;
	officialCommunityUrl?: string;
	clientVersionSuffix?: string;
	clientSilenceVersionSuffix?: string;
	useGateserverDomainName?: boolean;
	gateserverDomainName?: string;
	userCenterUrl?: string;
	accountBindUrl?: string;
	cdkeyUrl?: string;
	privacyPolicyUrl?: string;
	nextResourceUrl?: string;
	nextResVersionConfig?: ResVersionConfig_proto.ResVersionConfig;
}

