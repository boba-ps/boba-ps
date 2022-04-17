/* eslint-disable import/no-unresolved */
import { PrismaClient } from '@prisma/client';
import type { GetPlayerTokenReq } from './definitions/GetPlayerTokenReq';
import type {
  AvatarInfo, ItemInfo, PlayerInfo, SceneInfo, TeamSelectionInfo,
} from './interfaces';
import { Log, LogTypes } from './logging';
import type { Packet } from './packet';

export const prismaClient = new PrismaClient();

export class PlayerDataUtil {
  public packet!:Packet;

  public playerInfo!:PlayerInfo;

  public itemInfo!:ItemInfo;

  public sceneInfo!:SceneInfo;

  public avatarInfo!:AvatarInfo;

  public teamSelectionInfo!:TeamSelectionInfo;

  public reqData!:GetPlayerTokenReq;

  constructor(packet:Packet) {
    this.packet = packet;
    this.reqData = packet.protoBuf;
  }

  async getDataFromUid() {
    const data = await prismaClient.playerInfo.findFirst({
      where: {
        uid: this.reqData.uid,
      },
    });
    this.playerInfo = data!;
  }

  async editPlayerData(playerUid:number, newPlayerData:PlayerInfo) {
    try {
      const data = await prismaClient.playerInfo.update({
        where: {
          uid: playerUid,
        },
        data: newPlayerData,
      });
      this.playerInfo = data;
    } catch (err:any) {
      Log(`Unable to update player data! Reason: ${err}`, LogTypes.Debug);
    }
  }

  async getSceneInfoFromUid() {
    const data = await prismaClient.sceneInfo.findFirst({
      where: {
        uid: this.reqData.uid,
      },
    });
    this.sceneInfo = data!;
  }

  async getAvatarInfoFromUid() {
    const data = await prismaClient.avatarInfo.findFirst({
      where: {
        uid: this.reqData.uid,
      },
    });
    this.avatarInfo = data!;
  }

  async getUserInventoryFromUid() {
    const data = await prismaClient.itemInfo.findFirst({
      where: {
        uid: this.reqData.uid,
      },
    });
    this.itemInfo = data!;
  }
}
