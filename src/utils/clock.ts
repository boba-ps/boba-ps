export abstract class Clock {
  abstract now(): number;

  withOffset(offset: number) {
    return new OffsetClock(this, offset);
  }

  withStart(start: number) {
    return this.withOffset(start - this.now());
  }
}

export class SystemClock extends Clock {
  now() {
    return performance.now();
  }
}

export class OffsetClock extends Clock {
  now() {
    return this.offset + this.base.now();
  }

  constructor(readonly base: Clock, readonly offset: number) {
    super();
  }
}

export class CachedClock extends Clock {
  private stored;

  now() {
    return this.stored;
  }

  constructor(readonly base: Clock) {
    super();
    this.stored = base.now();
  }

  update() {
    this.stored = this.base.now();
  }
}

export class Stopwatch extends Clock {
  private running = false;
  private stored = 0;

  now() {
    if (this.running) {
      return this.base.now() - this.stored;
    }
    return this.stored;
  }

  constructor(readonly base: Clock) {
    super();
  }

  start() {
    if (this.running) return;
    this.running = true;
    this.stored = this.base.now() - this.stored;
  }

  stop() {
    if (!this.running) return;
    this.running = false;
    this.stored = this.base.now() - this.stored;
  }

  reset() {
    this.stored = this.base.now();
  }
}
