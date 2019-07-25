import Layer from './Layer';
import Storage from './Storage';
import ObjectCreator from './create';
import detectOverlap from './detectOverlap';

const isInside = (pos, obj) => (
  pos.x >= obj.x
  && pos.x <= obj.x + obj.width
  && pos.y >= obj.y
  && pos.y <= obj.y + obj.height
);

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
    this.gameObjects = new Storage();
    this.create = new ObjectCreator(this.gameObjects);
    this.cvs = canvas;
    this.ctx = this.cvs.getContext('2d');
    this.constants = CONSTANTS;
    this.initInput();
    this.setScene(scene);
    this.startGameLoop();
  }

  addToScene(key) {
    return this.gameObjects.get(key);
  }

  setScene(Scene, thisScene) {
    this.activeScene = new Scene(this, new Layer(), thisScene);
  }

  resumeTo(Scene) {
    this.activeScene = Scene;
  }

  initInput() {
    this.keys = {};
    this.objects = [];
    // this.clickPosition = {};

    document.addEventListener('keydown', (event) => {
      const { which } = event;
      this.keys = { [which]: true };
    });
    document.addEventListener('keyup', (event) => {
      const { which } = event;
      this.keys = { [which]: false };
    });
    this.cvs.addEventListener('click', (event) => {
      const { pageX, pageY } = event;
      const pos = {
        x: pageX - this.cvs.offsetLeft,
        y: pageY - this.cvs.offsetTop,
      };
      this.objects.forEach((obj) => {
        if (isInside(pos, obj)) {
          this.clicked = obj;
        }
      });
    });
  }

  update(dt) {
    this.activeScene.update(dt);
  }

  render(dt) {
    this.ctx.save();
    this.activeScene.render(dt, this.cvs, this.ctx);
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

  pressKey(keyCode, cb, scene) {
    if (this.checkKeyPress(keyCode)) {
      cb.call(scene);
    }
  }

  checkKeyPress(keyCode) {
    this.keyPressed = !!this.keys[keyCode];
    this.lastState = this.lastState || {};

    if (this.lastState[keyCode] !== this.keyPressed) {
      this.lastState[keyCode] = this.keyPressed;
      return this.keyPressed;
    }
    return false;
  }

  clickOn(object, cb, scene) {
    if (object === this.clicked) {
      this.clicked = [];
      cb.call(scene);
    }
  }

  // eslint-disable-next-line class-methods-use-this
  collision(obj1, obj2, cb, scene) {
    obj1.entry.forEach((collider) => {
      obj2.entry.forEach((collidee) => {
        if (detectOverlap(collider, collidee)) {
          cb.call(scene);
        }
      });
    });
  }
}
