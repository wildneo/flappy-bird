import { setScore, fgMove, pipeGenerator } from '../AdditionalMethods';
// import GameOver from './GameOver';
// import Pause from './Pause';

export default class GamePlay {
  constructor(game, layer) {
    this.game = game;
    this.layer = layer;

    this.bg = this.game.addToScene('bg');
    this.bird = this.game.addToScene('bird', [70, 200]);
    this.pipes = this.game.addToScene('pipes');
    this.fg = this.game.addToScene('fg', [0, 400]);
    this.tap = this.game.addToScene('tap', [87, 210]);
    this.pause = this.game.addToScene('pause', [10, 10]);
    this.ready = this.game.addToScene('ready', [44, 120]);
    this.scoreDisplay = this.game.addToScene('scoreDisplay');

    this.gravity = this.game.constants.GRAVITY;
    this.accel = -this.gravity * 15;
    this.angle = 0;
    this.counter = 0;
    this.opacity = 100;
    this.scoreCounter = 0;

    this.timer = 0;

    this.game.input.addToClick(this.pause, this.bg);
  }

  update(dt) {
    this.speed = this.game.constants.SPEED * dt;

    // Opacity
    if (this.opacity > 0) {
      this.opacity -= 5;
    }
    this.ready.opacity = this.opacity;
    this.tap.opacity = this.opacity;

    // setScore.call(this.score, this.scoreCounter);
    fgMove.call(this.fg, this.speed);
    // pipeGenerator.call(this.pipes, this.speed);
    this.timer += this.speed;
    if (this.timer >= 200) {
      this.timer = 0;
      const topPipe = this.game.getObject('topPipe');
      const btmPipe = this.game.getObject('btmPipe');
      topPipe.resetPos(288, Math.round(Math.random() * -100) - 100);
      btmPipe.resetPos(288, topPipe.y + topPipe.height + 100);
      // console.log(this.pipes);
      this.pipes.add(topPipe, btmPipe);
    }

    this.pipes.getEntries().forEach((item) => {
      const child = item;
      child.x -= this.speed;
    });

    this.scoreCounter = this.pipes.score;

    this.accel += this.gravity;

    if (this.bird.animation.isPlaying()) {
      this.counter += 1;
    }

    // falling
    if (this.counter >= 30) {
      this.bird.animation.stop();
      this.angle += 5;
    }
    this.bird.y += Math.min(50, this.accel);
    this.bird.angle = Math.min(90, this.angle);

    // Boost
    this.game.input.pressKey(32, () => {
      this.bird.animation.play();
      this.accel = -this.gravity * 15;
      this.angle = -20;
      this.counter = 0;
    }, this);

    this.game.input.clickOn(this.bg, () => {
      this.bird.animation.play();
      this.accel = -this.gravity * 15;
      this.angle = -20;
      this.counter = 0;
    }, this);

    // Сollision
    // this.game.collision(this.pipes, this.bird, () => {
    //   this.game.setScene(GameOver, this);
    // }, this);

    // this.game.collision(this.bird, this.fg, () => {
    //   this.game.setScene(GameOver, this);
    // }, this);

    // Pause
    this.game.input.clickOn(this.pause, () => {
      // this.game.setScene(Pause, this);
    }, this);

    // console.log();
  }

  render(dt, ctx) {
    this.layer.render(ctx);
  }
}
