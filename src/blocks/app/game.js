export class Game {
  constructor(canvas, scene) {
    // Get canvas
    this.cvs = canvas;
    // Set contecst
    this.ctx = this.cvs.getContext('2d');
    this.counter = 0;
    // Init controls
    this.initInput();
    // Start game loop
    this.setScene(scene);
    this.startGameLoop();
  }
  setScene(Scene) {
    this.activeScene = new Scene(this);
  }
  initInput() {
    this.keys = {};
    document.addEventListener('keydown', e => this.keys[e.which] = true);
    document.addEventListener('keyup', e => this.keys[e.which] = false);
  }
  update(dt) {
    this.activeScene.update(dt);
  }
  render(dt) {
    // Rendering:
    this.ctx.save();
    this.activeScene.render(dt, this.cvs, this.ctx);
    this.ctx.restore();
  }
  startGameLoop() {
    let last = performance.now();
    let fps = 60;
    let step = 1 / fps;
    let dt = 0;
    let now;

    let draw = () => {
      now = performance.now();
      dt = dt + Math.min(1, (now - last) / 1000);
      
      while(dt > step) {
        dt = dt - step;
        this.update(step);
      }
      last = now;

      this.render(dt * fps);

      requestAnimationFrame(draw);
    }
    requestAnimationFrame(draw);
  }
  checkKeyPress(keyCode) {
    this.keyPressed = !!this.keys[keyCode];
    this.lastState = this.lastState || {};

    if (this.lastState[keyCode] !== this.keyPressed) {
      this.lastState[keyCode] = this.keyPressed;
      return this.keyPressed;
    } else {
      return false;
    }
  }
  tickCounter(ticks) {
    this.counter++;
    if (this.counter > ticks) {
      this.counter = 0;
      return true;
    }
  }
};