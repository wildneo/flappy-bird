import { setScore, fgMove, pipeGenerator, detectCollision } from './AdditionalMethods';
import { getAsset } from './assets';
import Sprite from './sprite/Sprite';

export default class TestScene {
  constructor(game, layer) {
    this.game = game;
    this.layer = layer;

    this.game.create.sprite('fg', 'fg.png', [34, 24]);
    this.game.create.sprite('bg', 'bg.png', [288, 512], { frame: { index: 1 } });
    this.game.create.sprite('bird', 'bird.png', [34, 24], { animation: { tickPerFrame: 8 } });

    this.bird = this.game.addToScene('bird', [70, 200]);
    this.bird1 = new Sprite(getAsset('bird.png'), 34, 24, 70, 300, 0);
    this.bird1.animation.tickPerFrame = 8;
    // new Sprite(getAsset(texture), width, height, x, y, angle);
    console.log(this.bird);
  }

  update(dt) {
    // 
  }

  render(dt, cvs, ctx) {
    this.layer.render(ctx);
  }
}
