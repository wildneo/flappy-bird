export default class TimeEvent {
  constructor(interval, cb, repeat = false) {
    this.interval = interval;
    this.callback = cb;
    this.elapsed = 0;
    this.repeatCounter = 0;
    this.repeat = repeat;
    this.stop = false;
  }

  update(dt) {
    if (this.stop) {
      return;
    }

    this.elapsed += dt * 1000;

    if (this.elapsed >= this.interval) {
      this.repeatCounter += 1;
      this.elapsed = 0;
      this.callback();
      if (!this.repeat) {
        this.pause();
      }
    }
  }

  pause() {
    this.stop = true;
  }

  reset() {
    this.elapsed = 0;
    this.repeatCounter = 0;
    this.stop = false;
  }
}
