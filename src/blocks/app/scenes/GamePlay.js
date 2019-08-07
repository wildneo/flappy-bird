import { setScore, fgMove, addPipeLine, jump } from '../AdditionalMethods';
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

    this.angle = 0;
    this.counter = 0;
    this.opacity = 100;
    this.timer = 0;
    this.speed = -150;

    this.bird.body.gravity.y = 1200;
    this.fg.body.velocity.x = this.speed;

    this.jump = jump.bind(this);
    this.fgMove = fgMove.bind(this);
    this.setScore = setScore.bind(this);
    this.addPipeLine = addPipeLine.bind(this);

    this.game.input.addToClick(this.pause, this.bg);
  }

  update(dt) {
    // Opacity
    if (this.opacity > 0) {
      this.opacity -= 5;
    }
    this.ready.opacity = this.opacity;
    this.tap.opacity = this.opacity;

    this.fgMove();
    this.setScore();

    this.s = 100 * dt;
    this.timer += this.s;
    if (this.timer >= 150) {
      this.timer = 0;
      this.addPipeLine();
    }

    if (this.bird.animation.isPlaying()) {
      this.counter += this.s;
    }

    // Falling
    if (this.counter >= 60) {
      this.bird.animation.stop();
      this.angle += 5;
    }
    this.bird.angle = Math.min(90, this.angle);

    // Jump
    this.game.input.pressKey(32, this.jump);
    this.game.input.clickOn(this.bg, this.jump);

    // Pause
    this.game.input.clickOn(this.pause, () => {
      this.game.setScene('Pause');
    });

    // Сollision
    // this.game.collision(this.pipes, this.bird, () => {
    //   this.game.setScene(GameOver, this);
    // }, this);

    // this.game.collision(this.bird, this.fg, () => {
    //   this.game.setScene(GameOver, this);
    // }, this);


    // console.log();
  }
}
