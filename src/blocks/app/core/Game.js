import Layer from './Layer';
import Storage from './Storage';
import InputManager from './Input';
import isOverlapped from '../utils/isOverlapped';
import ObjectCreator from './Create';

const CONSTANTS = Object.freeze({
  SPEED: 150,
  GRAVITY: 0.4,
  BACKGROUND: {
    theme: 1,
  },
  BIRD: {
    color: 3,
  },
});

export default class Game {
  constructor(canvas, scene) {
    this.cvs = canvas;
    this.ctx = this.cvs.getContext('2d');
    this.gameObjects = new Storage();
    this.input = new InputManager(this);
    this.create = new ObjectCreator(this);
    this.constants = CONSTANTS;
    this.setScene(scene);
    this.startGameLoop();
  }

  addToScene(key, position) {
    const gameObject = this.gameObjects.get(key);
    return this.sceneLayer.add(key, gameObject(position));
  }

  getObject(key) {
    const gameObject = this.gameObjects.get(key);
    return gameObject();
  }

  setScene(Scene) {
    const parentScene = this.activeScene || null;
    this.sceneLayer = new Layer();
    this.activeScene = new Scene(this, this.sceneLayer, parentScene);
  }

  resumeTo(Scene) {
    this.activeScene = Scene;
  }

  update(dt) {
    this.activeScene.update(dt);
  }

  render(dt) {
    this.ctx.save();
    this.activeScene.render(dt, this.ctx);
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
        this.update(step);
      }
      last = now;

      this.render(dt * fps);

      requestAnimationFrame(draw);
    };
    requestAnimationFrame(draw);
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
