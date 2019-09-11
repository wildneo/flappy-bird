import EventEmitter from './EventEmitter';

const linear = (time, begin, change, duration) => change * time / duration + begin;

const getData = (target, params) => (
  Object.keys(params).reduce((acc, key) => {
    const begin = target[key];
    const end = params[key];
    const diff = end - begin;
    return { ...acc, [key]: { begin, end, diff } };
  }, {})
);

const tween = (obj, data, interval, elapsed, fn) => (
  Object.entries(data).forEach(([key, { begin, diff }]) => {
    const target = obj;
    target[key] = fn(elapsed, begin, diff, interval);
  })
);

export default class Tween extends EventEmitter {
  constructor(target, params, interval) {
    super();
    this.target = target;
    this.data = getData(target, params);
    this.state = {
      status: 'stopped',
      elapsed: 0,
      interval,
    };
  }

  update(dt) {
    if (this.isPaused() || this.isStopped()) {
      return;
    }
    if (this.state.elapsed >= this.state.interval) {
      this.stop();
    }
    this.state.elapsed += dt * 1000;
    tween(this.target, this.data, this.state.interval, this.state.elapsed, linear);
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
