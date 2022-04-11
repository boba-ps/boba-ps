/* eslint-disable import/no-unresolved */
import { PrismaClient } from '@prisma/client';
import { GetPlayerTokenReq } from './definitions/GetPlayerTokenReq';
import { PlayerInfo } from './interfaces';
import { Log, LogTypes } from './logging';
import { Packet } from './packet';

export const prismaClient = new PrismaClient();

export class PlayerDataUtil {
  public packet!:Packet;

  public playerInfo!:PlayerInfo;

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
      Log(`Unable to update Player data! Reason: ${err}`, LogTypes.Debug);
    }
  }
}
