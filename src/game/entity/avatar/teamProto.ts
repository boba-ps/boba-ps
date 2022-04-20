import { AvatarTeam as AvatarTeamProto, TeamEnterSceneInfo } from "boba-protos";
import type { AvatarTeam } from "../../../db/avatar";
import type { EntityTeam } from "../../../db/entity";

export function createAvatarTeamProto(team: AvatarTeam) {
  const { name, avatar_ids } = team;

  return AvatarTeamProto.create({
    teamName: name,
    avatarGuidList: avatar_ids.map(BigInt),
  });
}

export function createAvatarTeamProtoMap(teams: AvatarTeam[]) {
  const map: Record<number, AvatarTeamProto> = {};

  for (let i = 0; i < teams.length; i++) {
    map[i] = createAvatarTeamProto(teams[i]!);
  }

  return map;
}

export function createAvatarTeamEnterSceneInfoProto(entity: EntityTeam) {
  return TeamEnterSceneInfo.create({
    teamEntityId: entity.id,
  });
}
