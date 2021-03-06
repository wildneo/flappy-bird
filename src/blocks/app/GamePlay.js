import { getAsset } from './assets';
import { setScore, fgMove, pipeGenerator } from './AdditionalMethods';
import createSprite from './createSprite';
import createGroup from './createGroup';
import GameOver from './GameOver';
import Pause from './Pause';

export default class GamePlay {
  constructor(game, layer) {
    this.game = game;
    this.layer = layer;
    this.layer
      .add('bg', createSprite(getAsset('bg.png')))
      .add('bird', createSprite(getAsset('bird.png'), [70, 200, 0], 8))
      .add('pipes', createGroup())
      .add('score', createGroup())
      .add('fg', createSprite(getAsset('fg.png'), [0, 400, 0]))
      .add('tap', createSprite(getAsset('tap.png'), [87, 210, 0]))
      .add('pause', createSprite(getAsset('btn-1.png'), [10, 10, 0]))
      .add('ready', createSprite(getAsset('titles.png'), [44, 120, 0]));

    this.bg = this.layer.getChild('bg');
    this.fg = this.layer.getChild('fg');
    this.tap = this.layer.getChild('tap');
    this.bird = this.layer.getChild('bird');
    this.pipes = this.layer.getChild('pipes');
    this.score = this.layer.getChild('score');
    this.ready = this.layer.getChild('ready');
    this.pause = this.layer.getChild('pause');

    this.ready.offset = 1;

    this.gravity = this.game.constants.GRAVITY;
    this.accel = -this.gravity * 15;
    this.angle = 0;
    this.counter = 0;
    this.opacity = 100;
    this.scoreCounter = 0;

    this.game.objects.push(this.bg);
    this.game.objects.push(this.pause);
  }

  update(dt) {
    this.speed = this.game.constants.SPEED * dt;

    // Opacity
    if (this.opacity > 0) {
      this.opacity -= 5;
    }
    this.ready.opacity = this.opacity;
    this.tap.opacity = this.opacity;

    setScore.call(this.score, this.scoreCounter);
    fgMove.call(this.fg, this.speed);
    pipeGenerator.call(this.pipes, this.speed);

    this.scoreCounter = this.pipes.score;


    this.accel += this.gravity;

    if (this.bird.isPlaying()) {
      this.counter += 1;
    }

    // falling
    if (this.counter >= 30) {
      this.bird.stop();
      this.angle += 5;
    }
    this.bird.y += Math.min(50, this.accel);
    this.bird.angle = Math.min(90, this.angle);

    // Boost
    this.game.pressKey(32, () => {
      this.bird.play();
      this.accel = -this.gravity * 15;
      this.angle = -20;
      this.counter = 0;
    }, this);

    this.game.clickOn(this.bg, () => {
      this.bird.play();
      this.accel = -this.gravity * 15;
      this.angle = -20;
      this.counter = 0;
    }, this);

    // Сollision
    this.game.collision(this.pipes, this.bird, () => {
      this.game.setScene(GameOver, this);
    }, this);

    this.game.collision(this.bird, this.fg, () => {
      this.game.setScene(GameOver, this);
    }, this);

    // Pause
    this.game.clickOn(this.pause, () => {
      this.game.setScene(Pause, this);
    }, this);

    // console.log();
  }

  render(dt, cvs, ctx) {
    this.layer.render(ctx);
  }
}
