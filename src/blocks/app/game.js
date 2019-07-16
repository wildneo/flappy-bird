import Layer from './Layer';

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
    this.constants = CONSTANTS;
    this.initInput();
    this.setScene(scene);
    this.startGameLoop();
  }

  setScene(Scene, thisScene) {
    this.activeScene = new Scene(this, new Layer(), thisScene);
  }

  resume(Scene) {
    this.activeScene = Scene;
  }

  initInput() {
    this.keys = {};
    this.mouseClickPosition = {};

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
      const x = pageX - this.cvs.offsetLeft;
      const y = pageY - this.cvs.offsetTop;
      this.mouseClickPosition = { x, y };

      console.log(this.mouseClickPosition);
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

  checkKeyPress(keyCode) {
    this.keyPressed = !!this.keys[keyCode];
    this.lastState = this.lastState || {};

    if (this.lastState[keyCode] !== this.keyPressed) {
      this.lastState[keyCode] = this.keyPressed;
      return this.keyPressed;
    }
    return false;
  }

  checkClickOn(object) {
    const { x, y, width, height } = object;
    const { x: mX, y: mY } = this.mouseClickPosition;
    this.mouseClickPosition = {};

    if (mX >= x && mX <= x + width && mY >= y && mY <= y + height) {
      return true;
    }
    return false;
  }
}
