import BasicObject from '../core/BasicObject';
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

export default class Tween extends BasicObject {
  constructor(target, params, interval, easing = 'linear', repeat = false, yoyo = false) {
    super('Tween');
    this.state = 'stopped';
    this.target = target;
    this.tweenData = getData(target, params);
    this.easing = easings[easing];
    this.interval = interval;
    this.repeatCounter = 0;
    this.repeat = repeat;
    this.yoyo = yoyo;
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
    tween(this.target, this.tweenData, this.interval, this.elapsed, this.easing, this.yoyo);

    if (this.elapsed > this.interval) {
      this.repeatCounter += 1;
      this.elapsed = 0;
      this.emit('onRepeat', this);
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
    this.elapsed = 0;
    this.repeatCounter = 0;
    this.emit('onReset', this);
  }

  isPaused() {
    return this.state === 'paused';
  }

  isStopped() {
    return this.state === 'stopped';
  }
}
