import { getAsset } from './assets';
import { standBy, fgMove, easeOutBounce } from './AdditionalMethods';
import createSprite from './createSprite';

export default class GameOver {
  constructor(game, layer) {
    this.game = game;
    this.layer = layer;
    this.layer
      .add('gameOver', createSprite(getAsset('titles.png'), [44, 100, 0]))
      .add('btnOk', createSprite(getAsset('btn-2.png'), [41, 340, 0]))
      .add('btnShare', createSprite(getAsset('btn-2.png'), [167, 340, 0]))
      .add('board', createSprite(getAsset('board.png'), [24, 512, 0]));

    this.gameOver = this.layer.getChild('gameOver');
    this.board = this.layer.getChild('board');
    this.fg = this.layer.getChild('fg');
    // this.pipes = this.game.state.pipes;
    this.gameOver.offset = 2;

    this.counter = 0;
    // console.log(this.logo.y);
  }

  update(dt) {
    this.speed = 400 * dt;
    if (this.board.y > 180) {
      this.board.y -= this.speed;
    }
    // standBy.call(this.gameOver, this.speed, 100);
    // console.log(this.board.y);
  }

  render(dt, cvs, ctx) {
    this.layer.render(ctx);
  }
}
