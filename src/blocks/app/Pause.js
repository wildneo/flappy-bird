import { getAsset } from './assets';
import createSprite from './createSprite';

export default class Pause {
  constructor(game, layer, lastScene) {
    this.game = game;
    this.savedScene = lastScene;
    this.layer = layer;
    this.layer
      .add('pause', createSprite(getAsset('btn-1.png'), [10, 10, 0]));

    this.pause = this.layer.getChild('pause');
    this.pause.offset = 1;
  }

  update(dt) {
    if (this.game.checkClickOn(this.pause)) {
      this.game.resumeTo(this.savedScene);
    }
  }

  render(dt, cvs, ctx) {
    this.savedScene.layer.render(ctx);
    this.layer.render(ctx);
  }
}
