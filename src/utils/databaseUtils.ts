/* eslint-disable max-classes-per-file */
import { AvatarInfo, PrismaClient } from '@prisma/client';
import type { PlayerInfo } from './interfaces';
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
