export class MT19937_64 {
  private readonly mt: bigint[];

  private mti: number;

  constructor() {
    this.mt = new Array(312).fill(0n);
    this.mti = 313;
  }

  seed(seed: bigint) {
    this.mt[0] = seed & 0xffffffffffffffffn;

    for (let i = 1; i < 312; i++) {
      this.mt[i] =
        (6364136223846793005n * (this.mt[i - 1]! ^ (this.mt[i - 1]! >> 62n)) + BigInt(i)) & 0xffffffffffffffffn;
    }

    this.mti = 312;
  }

  next() {
    if (this.mti >= 312) {
      if (this.mti == 313) {
        this.seed(5489n);
      }

      for (let k = 0; k < 311; k++) {
        const y = (this.mt[k]! & 0xffffffff80000000n) | (this.mt[k + 1]! & 0x7fffffffn);

        if (k < 312 - 156) {
          this.mt[k] = this.mt[k + 156]! ^ (y >> 1n) ^ ((y & 1n) == 0n ? 0n : 0xb5026f5aa96619e9n);
        } else {
          this.mt[k] =
            this.mt[k + 156 - 624 + this.mt.length]! ^ (y >> 1n) ^ ((y & 1n) == 0n ? 0n : 0xb5026f5aa96619e9n);
        }
      }

      const yy = (this.mt[311]! & 0xffffffff80000000n) | (this.mt[0]! & 0x7fffffffn);

      this.mt[311] = this.mt[155]! ^ (yy >> 1n) ^ ((yy & 1n) == 0n ? 0n : 0xb5026f5aa96619e9n);
      this.mti = 0;
    }

    let x = this.mt[this.mti]!;
    this.mti += 1;

    x ^= (x >> 29n) & 0x5555555555555555n;
    x ^= (x << 17n) & 0x71d67fffeda60000n;
    x ^= (x << 37n) & 0xfff7eee000000000n;
    x ^= x >> 43n;

    return x;
  }
}
