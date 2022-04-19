import type { AvatarTeam as AvatarTeamProto } from "boba-protos";
import type { AvatarTeam } from "../../../db/avatar";

export function createAvatarTeamProto(team: AvatarTeam): AvatarTeamProto {
  const { name, avatar_ids } = team;

  return {
    teamName: name,
    avatarGuidList: avatar_ids.map(BigInt),
  };
}

export function createAvatarTeamProtoMap(teams: AvatarTeam[]) {
  const map: Record<number, AvatarTeamProto> = {};

  for (const team of teams) {
    map[team.index] = createAvatarTeamProto(team);
  }

  return map;
}
