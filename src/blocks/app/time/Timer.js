import BasicObject from '../core/BasicObject';

export default class Timer extends BasicObject {
  constructor(interval, repeat = true) {
    super('Timer');
    this.state = 'stopped';
    this.interval = interval;
    this.repeatCounter = 0;
    this.repeat = repeat;
    this.elapsed = 0;
  }

  update(dt) {
    if (this.isPaused() || this.isStopped()) {
      return;
    }
    if (!this.repeat && this.repeatCounter > 0) {
      this.stop();
      return;
    }
    this.elapsed += dt * 1000;
    if (this.elapsed >= this.interval) {
      this.emit('onRepeat', this);
      this.repeatCounter += 1;
      this.elapsed = 0;
    }
  }

  start() {
    this.state = 'work';
    this.emit('onStart', this);
  }

  pause() {
    this.state = 'paused';
    this.emit('onPause', this);
  }

  stop() {
    this.state = 'stopped';
    this.emit('onComplete', this);
  }

  reset() {
    this.state = 'stopped';
    this.repeatCounter = 0;
    this.elapsed = 0;
    this.emit('onReset', this);
  }

  isPaused() {
    return this.state === 'paused';
  }

  isStopped() {
    return this.state === 'stopped';
  }
}
