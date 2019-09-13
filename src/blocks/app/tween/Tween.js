import EventEmitter from '../core/EventEmitter';
import * as easings from '../utils/easings';

const getData = (target, params) => (
  Object.keys(params).reduce((acc, key) => {
    const begin = target[key];
    const end = params[key];
    const diff = end - begin;
    return { ...acc, [key]: { begin, end, diff } };
  }, {})
);

const tween = (obj, data, interval, elapsed, fn, yoyo) => (
  Object.entries(data).forEach(([key, { begin, end, diff }]) => {
    const target = obj;
    if (yoyo) {
      const halfInterval = interval / 2;
      const predicate = elapsed < halfInterval;
      const newBegin = predicate ? begin : end;
      const newDiff = predicate ? diff : -diff;
      const newElapsed = predicate ? elapsed : elapsed - halfInterval;
      target[key] = fn(newElapsed, newBegin, newDiff, halfInterval);

      return;
    }
    target[key] = fn(elapsed, begin, diff, interval);
  })
);

export default class Tween extends EventEmitter {
  constructor(target, params, interval, easing = 'linear', repeat = false, yoyo = false) {
    super();
    this.target = target;
    this.easing = easings[easing];
    this.data = getData(target, params);
    this.state = {
      status: 'stopped',
      elapsed: 0,
      interval,
      yoyo,
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
    tween(this.target, this.data, this.state.interval, this.state.elapsed, this.easing, this.state.yoyo);
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
    this.state.repeatCounter = 0;
    this.emit('onReset');
  }

  isPaused() {
    return this.state.status === 'paused';
  }

  isStopped() {
    return this.state.status === 'stopped';
  }
}
