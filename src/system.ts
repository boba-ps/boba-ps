import { Log } from './log';
import {
  CachedClock, Clock, Stopwatch, SystemClock,
} from './utils/clock';

export abstract class ServiceBase<T> {
  protected abstract setup(service: T): void;

  register(service: ServiceBase<this>) {
    service.setup(this);
    return this;
  }
}

export type ExecutorTask = () => void | Promise<void>;

class IntervalTask {
  constructor(readonly fn: ExecutorTask, readonly interval: number, public due: number) {}
}

export class Executor extends ServiceBase<Executor> {
  readonly clock: Clock;

  private readonly clockWrapper;

  constructor(clock: Clock) {
    super();

    const cached = new CachedClock(clock);
    this.clock = cached;
    this.clockWrapper = cached;
  }

  private onceTasks: ExecutorTask[] = [];

  private frameTasks: ExecutorTask[] = [];

  private intervalTasks: IntervalTask[] = [];

  private endTasks: ExecutorTask[] = [];

  protected setup(parent: Executor) {
    parent.tick(this.runFrame.bind(this));
    parent.end(this.runEnd.bind(this));
  }

  protected runFrame() {
    this.clockWrapper.update();

    const now = this.clockWrapper.now();
    const once = this.onceTasks;
    this.onceTasks = [];

    this.runTasks(once);
    this.runTasks(this.frameTasks);

    if (this.intervalTasks.length !== 0) {
      const due: ExecutorTask[] = [];
      let search;

      do {
        search = false;

        for (const task of this.intervalTasks) {
          if (task.due <= now) {
            task.due += task.interval;
            search ||= task.due <= now;
            due.push(task.fn);
          }
        }
      } while (search);

      due.length && this.runTasks(due);
    }
  }

  protected runEnd() {
    this.runTasks(this.endTasks);
  }

  private runTasks(tasks: ExecutorTask[]) {
    for (const task of tasks) {
      try {
        Promise.resolve(task()).catch((err) => {
          Log.error({ err }, 'unhandled error while executing async task');
        });
      } catch (err) {
        Log.error({ err }, 'unhandled error while executing task');
      }
    }
  }

  /** Registers a task for execution once. */
  once(task: ExecutorTask) {
    !this.onceTasks.includes(task) && this.onceTasks.push(task);
  }

  /** Registers a task for execution every frame. */
  tick(task: ExecutorTask) {
    !this.frameTasks.includes(task) && this.frameTasks.push(task);
  }

  /** Registers a task for execution every given interval in milliseconds. */
  every(ms: number, task: ExecutorTask) {
    if (!this.intervalTasks.some((t) => t.fn === task)) {
      this.intervalTasks.push(new IntervalTask(task, ms, this.clock.now() + ms));
    }
  }

  /** Registers a task for execution when this executor is destroyed. */
  end(task: ExecutorTask) {
    !this.endTasks.includes(task) && this.endTasks.push(task);
  }
}

export class SystemExecutor extends Executor {
  private state: 'initialized' | 'running' | 'destroyed' = 'initialized';

  private readonly clockCore;

  get running() {
    return this.state === 'running';
  }

  get destroyed() {
    return this.state === 'destroyed';
  }

  constructor(clock = new SystemClock()) {
    const watch = new Stopwatch(clock);
    super(watch);

    this.clockCore = watch;
  }

  private async run(freq: number) {
    const frame = 1000 / freq;

    let last = this.clockCore.now();
    let compensate = 0;

    while (this.state === 'running') {
      this.runFrame();

      let now = this.clockCore.now();
      let elapsed = now - last;
      last = now;

      const sleep = frame - elapsed + compensate;

      if (sleep < 0) {
        await new Promise((res) => setImmediate(res));
      } else {
        await new Promise((res) => setTimeout(res, sleep));
      }

      now = this.clockCore.now();
      elapsed = now - last;
      compensate = Math.max(-1000, sleep - elapsed);
      last = now;
    }
  }

  /** Runs this executor indefinitely, until it is destroyed. */
  start(freq: number) {
    if (this.state !== 'initialized') return;
    this.state = 'running';
    this.clockCore.start();
    this.run(freq);
  }

  /** Stops and destroys this executor. */
  destroy() {
    if (this.state === 'destroyed') return;
    this.state = 'destroyed';
    this.clockCore.stop();
    this.runEnd();
  }
}
