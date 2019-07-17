import { getAsset } from './assets';
import createSprite from './createSprite';

export default class GameOver {
  constructor(game, layer, lastScene) {
    this.game = game;
    this.savedScene = lastScene;
    this.savedScene.layer
      .delete('score')
      .delete('pause');
    this.layer = layer;
    this.layer
      .add('gameOver', createSprite(getAsset('titles.png'), [44, 100, 0]))
      .add('btnOk', createSprite(getAsset('btn-2.png'), [41, 340, 0]))
      .add('btnShare', createSprite(getAsset('btn-2.png'), [167, 340, 0]))
      .add('board', createSprite(getAsset('board.png'), [24, 512, 0]));

    this.board = this.layer.getChild('board');
    this.gameOver = this.layer.getChild('gameOver');
    this.btnOk = this.layer.getChild('btnOk');
    this.btnShare = this.layer.getChild('btnShare');

    this.gameOver.offset = 2;
    this.btnOk.opacity = 0;
    this.btnShare.opacity = 0;
    this.gameOver.opacity = 0;
    this.counter = 0;

    // console.log();
  }

  update(dt) {
    this.speed = 400 * dt;

    if (this.gameOver.opacity < 100) {
      this.gameOver.opacity += 5;
    }

    if (this.board.y > 180) {
      this.board.y -= this.speed;
    } else {
      this.btnOk.opacity = 100;
      this.btnShare.opacity = 100;
    }
    // standBy.call(this.gameOver, this.speed, 100);
    // console.log(this.board.y);
  }

  render(dt, cvs, ctx) {
    this.savedScene.layer.render(ctx);
    this.layer.render(ctx);
  }
}
