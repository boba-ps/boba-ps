import { AvatarTeam, TeamEnterSceneInfo } from "boba-protos";
import { AvatarHandle } from ".";
import { EntityTeamHandle } from "..";
import { DbEntry } from "../..";
import type { DbAvatarTeam } from "../../../db/schema";

export class AvatarTeamHandle extends DbEntry<DbAvatarTeam> {
  getAvatars() {
    const sx = this.query(
      `select a.* from avatars a
       inner join avatar_team_links l
       on
         l.team_id = ? and
         l.avatar_id = a.id
       order by l.sort asc`
    );

    return sx.all(this.id).map((v) => new AvatarHandle(this.db, v));
  }

  getActiveAvatar() {
    const avatars = this.getAvatars();
    return avatars[this.value.active_avatar] ?? avatars[0];
  }

  getEntity() {
    return new EntityTeamHandle(this.db, this.query("select * from entity_teams where team_id = ?").get(this.id));
  }

  createProto() {
    return AvatarTeam.create({
      teamName: this.value.name,
      avatarGuidList: this.getAvatars().map(({ id }) => BigInt(id)),
    });
  }

  createEnterSceneInfoProto() {
    return TeamEnterSceneInfo.create({
      teamEntityId: this.getEntity().id,
    });
  }
}
