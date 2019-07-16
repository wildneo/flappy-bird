import { getAsset } from './assets';
import createSprite from './createSprite';

export default class Pause {
  constructor(game, layer, previousScene) {
    this.game = game;
    this.savedScene = previousScene;
    this.layer = layer;
    this.layer
      .add('pause', createSprite(getAsset('btn-1.png'), [10, 10, 0]));
    this.pause = this.layer.getChild('pause');
    console.log(this.savedScene);
  }

  update(dt) {
    // if (this.game.checkKeyPress(80)) {
    //   this.game.resume(this.savedScene);
    // }
    if (this.game.checkClickOn(this.pause)) {
      this.game.resume(this.savedScene);
    }
  }

  render(dt, cvs, ctx) {
    this.savedScene.layer.render(ctx);
    this.layer.render(ctx);
  }
}