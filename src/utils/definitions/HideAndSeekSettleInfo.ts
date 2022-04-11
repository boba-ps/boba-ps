import * as ExhibitionDisplayInfo_proto from "./ExhibitionDisplayInfo"

import * as ProfilePicture_proto from "./ProfilePicture"

export interface HideAndSeekSettleInfo {
	uid?: number;
	cardList?: ExhibitionDisplayInfo_proto.ExhibitionDisplayInfo[];
	headImage?: number;
	nickname?: string;
	onlineId?: string;
	profilePicture?: ProfilePicture_proto.ProfilePicture;
}

