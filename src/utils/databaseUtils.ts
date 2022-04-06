// TO DO: try-catch incase error
import { PrismaClient } from '@prisma/client';
// eslint-disable-next-line import/no-unresolved
import { PlayerInfo } from './interfaces';

export const prismaClient = new PrismaClient();

export const createPlrData = (plrData:PlayerInfo) => {
  prismaClient.playerInfo.create({
    data: plrData,
  });
};

export const editPlayerData = (userId:number, newPlrData:PlayerInfo) => {
  // TO DO: return new playerinfo value
  prismaClient.playerInfo.update({
    where: {
      uid: userId,
    },
    data: newPlrData,
  });
};

export const findPlayerData = async (userId:number) => {
  const userData = await prismaClient.playerInfo.findFirst({
    where: {
      uid: userId,
    },
  });

  return userData;
};
