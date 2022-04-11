import * as RoutePoint_proto from "./RoutePoint"

export interface Route {
	routePoints?: RoutePoint_proto.RoutePoint[];
	routeType?: number;
}

