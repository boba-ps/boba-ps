import { PrismaClient } from '@prisma/client';
// Db Access
export const prismaClient = new PrismaClient();

export class PlayerDataUtil {
  public uid:number|string = 1;

  constructor(uid:number | string) {
    this.uid = uid;
  }

  async getPlayerData()  {
    try {
      const data = await prismaClient.
    }
  }

}
