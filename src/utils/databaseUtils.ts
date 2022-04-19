import { AvatarFightProp, AvatarInfo, PrismaClient, PlayerInfo } from '@prisma/client';
import { Log } from '../log';
// Db Access
export const prismaClient = new PrismaClient();

export class PlayerDataUtil {
  public uid:number = 1;

  constructor(uid:number) {
    this.uid = uid;
  }

  async getPlayerData() {
    try {
      const data = await prismaClient.playerInfo.findFirst({
        where: {
          uid: this.uid,
        },
      });
      if (data !== null) {
        return data;
      }
      return null;
    } catch (err) {
      Log.warn(`Cannot get data from uid | ${this.uid}`);
    }
  }

  async editPlayerData(playerInfo:PlayerInfo) {
    try {
      const data = await prismaClient.playerInfo.update({
        where: {
          uid: this.uid,
        },
        data: playerInfo,
      });
      if (data !== null) {
        return data;
      }
      return null;
    } catch {
      Log.warn(`Cannot update data from uid | ${this.uid}`);
    }
  }
}

export class AvatarInfoUtil {
  public uid:number = 1;

  public avatarInfos?:AvatarInfo[] | undefined | null;

  constructor(uid:number) {
    this.uid = uid;
    (async () => {
      this.avatarInfos = await this.getAvatarDatasFromUid();
    })();
  }

  async getAvatarDatasFromUid() {
    try {
      const data = await prismaClient.avatarInfo.findMany({
        where: {
          uid: this.uid,
        },
      });

      if (data !== null) {
        return data;
      }
      return null;
    } catch {
      Log.warn(`Cannot update data from uid | ${this.uid}`);
    }
  }

  async updateAvatarData(avatarGuid:number, avatarInfo:AvatarInfo) {
    try {
      const data = await prismaClient.avatarInfo.update({
        // gonna ts ignore this first cuz yes
        // @ts-ignore
        where: { guid: avatarGuid },
        data: avatarInfo,
      });

      if (data !== null) {
        return data;
      }
      return undefined;
    } catch {
      Log.warn(`Cannot update data from uid | ${this.uid}`);
    }
  }
}

export class AvatarFightPropUtil {
  public guid!:number

  constructor(guid:number) {
    this.guid = guid;
  }

  async getAvatarFightProp() {
    try {
      const data = await prismaClient.avatarFightProp.findFirst({
        where: {
          guid: this.guid
        }
      });

      if (data !== null) {
        return data;
      }
      return null;
    } catch {
      Log.warn(`Cannot get data from guid | ${this.guid}`);
    }
  }

  async editAvatarFightProp(newData:AvatarFightProp) {
    try {
      const data = await prismaClient.avatarFightProp.update({
        where: {
          // @ts-expect-error
          guid: this.guid
        },
        data: newData
      });

      if (data !== null) return data;
      return null;
    } catch {
      Log.warn(`Cannot update data from guid | ${this.guid}`);
    }
  }
}

export class AvatarPropUtil {
  
}