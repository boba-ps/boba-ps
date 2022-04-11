import * as AbilityString_proto from "./AbilityString"

import * as AbilityScalarType_proto from "./AbilityScalarType"

export interface AbilityScalarValueEntry {
	floatValue?: number;
	stringValue?: string;
	intValue?: number;
	uintValue?: number;
	key?: AbilityString_proto.AbilityString;
	valueType?: AbilityScalarType_proto.AbilityScalarType;
}

