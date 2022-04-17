import Denque from "denque";
import { CustomError } from "ts-custom-error";

// TODO: don't use setTimeout; write Clock-based sleep function later
export async function sleep(ms: number) {
  await new Promise<void>((res) => setTimeout(res, ms));
}

/** Promise that allows an external caller to resolve itself. */
export class DeferredPromise<T = unknown> {
  readonly then;
  readonly catch;
  readonly finally;

  constructor() {
    const promise = new Promise<T>((res, rej) => {
      this.resolve = res;
      this.reject = rej;
    });

    this.then = promise.then.bind(promise);
    this.catch = promise.catch.bind(promise);
    this.finally = promise.finally.bind(promise);
  }

  resolve(_value: T | PromiseLike<T>) {}
  reject(_reason?: any) {}
}

export class ChannelClosedError extends CustomError {
  constructor() {
    super("channel is closed");
  }
}

/** Unidirectional Promise-based unbounded MPMC FIFO channel. */
export class Channel<T = unknown> {
  private open = true;
  private readonly backlog = new Denque<ChannelItem<T>>();
  private readonly waiters = new Denque<DeferredPromise<ChannelItem<T>>>();

  /** Sends a single value, waiting asynchronously for it to be received successfully. */
  async send(value: T) {
    if (!this.open) throw new ChannelClosedError();

    const notify = new DeferredPromise<void>();
    const waiter = this.waiters.shift();

    if (waiter) {
      waiter.resolve({ value, notify });
    } else {
      this.backlog.push({ value, notify });
    }

    await notify;
  }

  /** Receives a single value, waiting asynchronously if there are none in the backlog. */
  async recv() {
    const { value, notify } = this.backlog.shift() ?? (await this.waiter());
    notify.resolve();
    return value;
  }

  private waiter() {
    if (!this.open) throw new ChannelClosedError();

    const waiter = new DeferredPromise<ChannelItem<T>>();
    this.waiters.push(waiter);
    return waiter;
  }

  get closed() {
    return !this.open;
  }

  /**
   * Closes this channel, preventing new senders and cancelling all waiters.
   * Existing senders still in transit will not be cancelled.
   */
  close() {
    if (!this.open) return;
    this.open = false;

    let waiter;
    while ((waiter = this.waiters.shift())) {
      waiter.reject(new ChannelClosedError());
    }
  }
}

type ChannelItem<T> = {
  value: T;
  notify: DeferredPromise<void>;
};
