import * as RoutePoint_proto from "./RoutePoint"

export interface MonsterRoute {
	routePoints?: RoutePoint_proto.RoutePoint[];
	speedLevel?: number;
	routeType?: number;
	arriveRange?: number;
}

