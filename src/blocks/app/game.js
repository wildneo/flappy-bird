import Storage from './Storage';

export default class Game {
  constructor(canvas, scene) {
    this.cvs = canvas;
    this.ctx = this.cvs.getContext('2d');
    this.initInput();
    this.setScene(scene);
    this.startGameLoop();
  }

  setScene(Scene) {
    this.activeScene = new Scene(this, new Storage());
  }

  initInput() {
    this.keys = {};
    // eslint-disable-next-line no-return-assign
    document.addEventListener('keydown', e => this.keys[e.which] = true);
    // eslint-disable-next-line no-return-assign
    document.addEventListener('keyup', e => this.keys[e.which] = false);
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
}
