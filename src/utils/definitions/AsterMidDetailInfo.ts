import * as AsterMidCampInfo_proto from "./AsterMidCampInfo"

export interface AsterMidDetailInfo {
	isOpen?: boolean;
	campList?: AsterMidCampInfo_proto.AsterMidCampInfo[];
	collectCount?: number;
	beginTime?: number;
}

