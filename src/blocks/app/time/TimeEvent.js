import EventEmitter from '../EventEmitter';

export default class TimeEvent extends EventEmitter {
  constructor(interval, repeat = true) {
    super();
    this.state = {
      status: 'stopped',
      interval,
      elapsed: 0,
      repeat,
      repeatCounter: 0,
    };
  }

  update(dt) {
    if (this.isPaused() || this.isStopped()) {
      return;
    }
    if (!this.state.repeat && this.state.repeatCounter > 0) {
      this.stop();
      return;
    }
    if (this.state.elapsed >= this.state.interval) {
      this.state.repeatCounter += 1;
      this.state.elapsed = 0;
      this.emit('onRepeat');
    }
    this.state.elapsed += dt * 1000;
  }

  start() {
    this.state.status = 'work';
    this.emit('onStart');
  }

  pause() {
    this.state.status = 'paused';
    this.emit('onPause');
  }

  stop() {
    this.state.status = 'stopped';
    this.emit('onComplete');
  }

  reset() {
    this.state.status = 'stopped';
    this.state.repeatCounter = 0;
    this.state.elapsed = 0;
    this.emit('onReset');
  }

  isPaused() {
    return this.state.status === 'paused';
  }

  isStopped() {
    return this.state.status === 'stopped';
  }
}
