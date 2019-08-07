import { setScore, fgMove, pipeGenerator } from '../AdditionalMethods';
// import GameOver from './GameOver';
// import Pause from './Pause';

export default class GamePlay {
  constructor(game, layer) {
    this.game = game;
    this.layer = layer;

    this.game.create.group('pipes');
    this.game.create.group('scoreDisplay');

    this.bg = this.game.addTo(this.layer, 'bg');
    this.bird = this.game.addTo(this.layer, 'bird', [70, 200]);
    this.pipes = this.game.addTo(this.layer, 'pipes');
    this.fg = this.game.addTo(this.layer, 'fg', [0, 400]);
    this.tap = this.game.addTo(this.layer, 'tap', [87, 210]);
    this.pause = this.game.addTo(this.layer, 'pause', [10, 10]);
    this.ready = this.game.addTo(this.layer, 'ready', [44, 120]);
    this.scoreDisplay = this.game.addTo(this.layer, 'scoreDisplay');

    this.bird.body.gravity.y = 1200;

    this.angle = 0;
    this.counter = 0;
    this.opacity = 100;
    this.scoreCounter = 0;

    this.timer = 0;

    this.game.input.addToClick(this.pause, this.bg);
  }

  update(dt) {
    if (this.fg.x < -47) {
      this.fg.x = 0;
    }
    this.fg.body.velocity.x = -150;

    // Opacity
    if (this.opacity > 0) {
      this.opacity -= 5;
    }
    this.ready.opacity = this.opacity;
    this.tap.opacity = this.opacity;

    // setScore.call(this.score, this.scoreCounter);

    this.speed = 100 * dt;
    this.timer += this.speed;
    if (this.timer >= 150) {
      this.timer = 0;
      const topPipe = this.game.addTo(this.pipes, 'topPipe', [288, Math.round(Math.random() * -100) - 100]);
      const btmPipe = this.game.addTo(this.pipes, 'btmPipe', [288, topPipe.y + topPipe.height + 100]);
      topPipe.body.velocity.x = -150;
      btmPipe.body.velocity.x = -150;
      topPipe.outOfBoundsDestroy = true;
      btmPipe.outOfBoundsDestroy = true;
    }

    // this.scoreCounter = this.pipes.score;

    // this.accel += this.gravity;

    if (this.bird.animation.isPlaying()) {
      this.counter += 1;
    }

    // falling
    if (this.counter >= 35) {
      this.bird.animation.stop();
      this.angle += 5;
    }
    this.bird.angle = Math.min(90, this.angle);

    // Boost
    this.game.input.pressKey(32, () => {
      this.bird.animation.play();
      this.bird.body.velocity.y = -400;
      this.angle = -20;
      this.counter = 0;
    });

    // this.game.input.clickOn(this.bg, () => {
    //   this.bird.animation.play();
    //   this.accel = -this.gravity * 15;
    //   this.angle = -20;
    //   this.counter = 0;
    // });

    // Сollision
    // this.game.collision(this.pipes, this.bird, () => {
    //   this.game.setScene(GameOver, this);
    // }, this);

    // this.game.collision(this.bird, this.fg, () => {
    //   this.game.setScene(GameOver, this);
    // }, this);

    // Pause
    // this.game.input.clickOn(this.pause, () => {
    //   this.game.setScene(Pause, this);
    // });

    // console.log();
  }
}
