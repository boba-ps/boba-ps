import * as EntityAuthorityInfo_proto from "./EntityAuthorityInfo"

export interface AuthorityChange {
	entityId?: number;
	authorityPeerId?: number;
	entityAuthorityInfo?: EntityAuthorityInfo_proto.EntityAuthorityInfo;
}

