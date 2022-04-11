import * as AnimatorParameterValueInfo_proto from "./AnimatorParameterValueInfo"

export interface EvtAnimatorParameterInfo {
	entityId?: number;
	nameId?: number;
	isServerCache?: boolean;
	value?: AnimatorParameterValueInfo_proto.AnimatorParameterValueInfo;
}

