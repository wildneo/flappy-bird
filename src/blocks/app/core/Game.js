import Layer from './Layer';
import InputManager from './Input';
import isOverlapped from '../utils/isOverlapped';
import ObjectCreator from './Create';

export default class Game {
  constructor(canvas) {
    this.cvs = canvas;
    this.ctx = this.cvs.getContext('2d');
    this.create = new ObjectCreator(this);
    this.input = new InputManager(this);
    this.gameObjects = new Map();
    this.gameScenes = new Map();
  }

  addTo(group, key, position) {
    const gameObject = this.gameObjects.get(key);
    const result = gameObject(group, position);
    group.add(result);
    return result;
  }

  setScene(key) {
    const Scene = this.gameScenes.get(key);
    const parentScene = this.activeScene || null;
    this.sceneLayer = new Layer();
    this.activeScene = new Scene(this, this.sceneLayer, parentScene);
    return this;
  }

  resumeTo(Scene) {
    this.activeScene = Scene;
  }

  update(dt, cvs, ctx) {
    this.sceneLayer.update(dt, cvs, ctx);
    this.activeScene.update(dt, cvs, ctx);
  }

  render(dt, cvs, ctx) {
    this.ctx.save();
    this.sceneLayer.render(dt, cvs, ctx);
    this.ctx.restore();
  }

  startGameLoop() {
    const fps = 60;
    const step = 1 / fps;
    let last = performance.now();
    let dt = 0;
    let now;

    const draw = () => {
      now = performance.now();
      dt += Math.min(1, (now - last) / 1000);

      while (dt > step) {
        dt -= step;
        this.update(step, this.cvs, this.ctx);
      }
      last = now;

      this.render(dt * fps, this.cvs, this.ctx);

      requestAnimationFrame(draw);
    };
    requestAnimationFrame(draw);
    return this;
  }

  // eslint-disable-next-line class-methods-use-this
  collision(obj1, obj2, cb, scene) {
    obj1.entry.forEach((collider) => {
      obj2.entry.forEach((collidee) => {
        if (isOverlapped(collider, collidee)) {
          cb.call(scene);
        }
      });
    });
  }
}
