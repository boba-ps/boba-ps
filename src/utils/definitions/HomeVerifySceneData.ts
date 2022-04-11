import * as HomeVerifyBlockData_proto from "./HomeVerifyBlockData"

export interface HomeVerifySceneData {
	moduleId?: number;
	sceneId?: number;
	isRoom?: number;
	blocks?: HomeVerifyBlockData_proto.HomeVerifyBlockData[];
}

