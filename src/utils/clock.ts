export abstract class Clock {
  static system() {
    return new SystemClock();
  }

  abstract now(): number;

  withOffset(offset: number) {
    return new OffsetClock(this, offset);
  }

  withStart(start: number) {
    return this.withOffset(start - this.now());
  }
}

export class SystemClock extends Clock {
  readonly now = performance.now;
}

export class OffsetClock extends Clock {
  constructor(readonly base: Clock, readonly offset: number) {
    super();
  }

  now() {
    return this.offset + this.base.now();
  }
}
