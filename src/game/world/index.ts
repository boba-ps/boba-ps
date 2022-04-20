import { ScenePlayerInfo } from "boba-protos";
import { DbEntry } from "..";
import type { Db } from "../../db";
import type { DbPlayer, DbWorld, DbWorldProp } from "../../db/schema";
import { EntityLevelHandle } from "../entity";
import { PlayerHandle } from "../player";
import { PlayerHandleBase } from "../player/base";

export class WorldHandle extends DbEntry<DbWorld> {
  getProps() {
    return this.query("select * from world_props where world_id = ?")
      .all(this.id)
      .map((v) => new WorldPropHandle(this.db, v, this.id));
  }

  setProp(type: number, ival: number) {
    return new WorldPropHandle(
      this.db,
      this.query(
        `insert into world_props (world_id, type, ival)
         values ($world_id, $type, $ival)
         on conflict (world_id, type)
         do update set ival = $ival, fval = null
         returning *`
      ).get({ world_id: this.id, type, ival }),
      this.id
    );
  }

  getPlayers() {
    return this.query(
      `select p.*, x.peer_index from players p
       inner join world_players x
       on
         x.world_id = ? and
         x.player_id = p.id
       order by x.peer_index asc`
    )
      .all(this.id)
      .map((v) => new WorldPlayerHandle(this.db, v, v.peer_index));
  }

  getOwner() {
    const owner = this.query("select * from players where id = ?").get(this.value.owner_id);
    return new PlayerHandle(this.db, owner);
  }

  getOwnerAsPlayer() {
    const owner = this.query(
      `select p.*, x.peer_index from players p
       inner join world_players x
       on
         x.world_id = ? and
         x.player_id = ? and
         x.player_id = p.id`
    ).get(this.id, this.value.owner_id);

    return owner ? new WorldPlayerHandle(this.db, owner, owner.peer_index) : undefined;
  }

  getPlayerAt(index: number) {
    const player = this.query(
      `select p.* from players p
       inner join world_players x
       on
         x.world_id = ? and
         x.peer_index = ? and
         x.player_id = p.id`
    ).get(this.id, index);

    return player ? new WorldPlayerHandle(this.db, player, index) : undefined;
  }

  getLevelEntity() {
    return new EntityLevelHandle(this.db, this.query("select * from entity_levels where world_id = ?").get(this.id));
  }
}

export class WorldPlayerHandle extends PlayerHandleBase {
  constructor(db: Db, value: DbPlayer, readonly peerIndex: number) {
    super(db, value);
  }

  createSceneInfoProto() {
    return ScenePlayerInfo.create({
      uid: this.id,
      name: this.value.nickname,
      peerId: this.peerIndex + 1,
      sceneId: this.value.scene_rid,
      isConnected: true,
      onlinePlayerInfo: this.createOnlineInfoProto(),
    });
  }
}

export class WorldPropHandle extends DbEntry<DbWorldProp> {
  constructor(db: Db, value: DbWorldProp, readonly worldId: number) {
    super(db, value);
  }
}
