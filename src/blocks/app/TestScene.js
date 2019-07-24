import { getAsset } from './assets';
import { setScore, fgMove, pipeGenerator, detectCollision } from './AdditionalMethods';
import createSprite from './createSprite';
import createGroup from './createGroup';
import GameOver from './GameOver';
import Pause from './Pause';
import Sprite from './Sprite/Sprite';

export default class TestScene {
  constructor(game, layer) {
    this.game = game;
    this.test = new Sprite(getAsset('bird'), 34, 24);
    this.test.frame.index = 1;
    console.log(this.test);
    
    // this.layer = layer;
    // this.layer
    //   .add('bg', createSprite(getAsset('bg.png')))
    //   .add('bird', createSprite(getAsset('bird.png'), [70, 200, 0], 8))
    //   .add('pipes', createGroup());
        // .add('fg', createSprite(getAsset('fg.png'), [0, 400, 0]))
        // .add('tap', createSprite(getAsset('tap.png'), [87, 210, 0]))
        // .add('pause', createSprite(getAsset('btn-1.png'), [10, 10, 0]))
        // .add('ready', createSprite(getAsset('titles.png'), [44, 120, 0]));

    // this.bg = this.layer.getChild('bg');
    // this.pipes = this.layer.getChild('pipes');
    // this.bird = this.layer.getChild('bird');
    // this.fg = this.layer.getChild('fg');
    // this.tap = this.layer.getChild('tap');
    // this.score = this.layer.getChild('score');
    // this.ready = this.layer.getChild('ready');
    // this.pause = this.layer.getChild('pause');

    // this.ready.offset = 1;
    // this.bird.offset = this.game.constants.BIRD.color;
    // this.bg.offset = this.game.constants.BACKGROUND.theme;

    // console.log(this.score);
    // this.game.objects.push(this.bird);

    // this.accel = 0;
    // this.angle = 0;
    // this.counter = 0;
    // this.counter2 = 0;
    // this.opacity = 100;
  }

  update(dt) {
    // this.gravity = this.game.constants.GRAVITY;
    // this.speed = this.game.constants.SPEED * dt;

    // pipeGenerator.call(this.pipes, this.speed);

    // this.accel += this.gravity;

    // if (this.bird.isPlaying()) {
    //   this.counter += 1;
    // }

    // // falling
    // if (this.counter >= 30) {
    //   this.bird.stop();
    //   this.angle += 5;
    // }
    // this.bird.y += Math.min(50, this.accel);
    // this.bird.angle = Math.min(90, this.angle);

    // this.game.pressKey(32, () => {
    //   this.bird.play();
    //   this.accel = -this.gravity * 15;
    //   this.angle = -20;
    //   this.counter = 0;
    // }, this);

    // this.game.clickOn(this.bird, () => {
    //   this.game.setScene(GameOver, this);
    // }, this);

    // this.game.collision(this.pipes, this.bird, () => {
    //   this.game.setScene(GameOver, this);
    // }, this);

    // if (this.game.checkCollision(this.pipes, this.bird)) {
    //   this.game.setScene(GameOver, this);
    // }
    // console.log(this.game.checkCollision(this.pipes, this.bird));
  }

  render(dt, cvs, ctx) {
    // this.layer.render(ctx);
  }
}
