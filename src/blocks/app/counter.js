export class Counter {
  constructor(ticks) {
    this.ticks = ticks;
    this.counter = 0;
    this.finish = false;
  }
  set setCounter(ticks) {
    this.ticks = ticks;
  }
  get isFinished() {
    return this.finish;
  }
  start() {
    this.counter++;
    if (this.counter > this.ticks) {
      // this.counter = 0;
      this.finish = true;
    }
  }
  reset() {
    this.finish = false;
    this.counter = 0;
  }
}
