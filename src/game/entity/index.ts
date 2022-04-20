import { DbEntry } from "..";
import type {
  DbEntityAvatar,
  DbEntityGadget,
  DbEntityLevel,
  DbEntityMonster,
  DbEntityNpc,
  DbEntityTeam,
  DbEntityWeapon,
} from "../../db/schema";

export class EntityAvatarHandle extends DbEntry<DbEntityAvatar> {}
export class EntityMonsterHandle extends DbEntry<DbEntityMonster> {}
export class EntityNpcHandle extends DbEntry<DbEntityNpc> {}
export class EntityGadgetHandle extends DbEntry<DbEntityGadget> {}
export class EntityWeaponHandle extends DbEntry<DbEntityWeapon> {}
export class EntityTeamHandle extends DbEntry<DbEntityTeam> {}
export class EntityLevelHandle extends DbEntry<DbEntityLevel> {}
