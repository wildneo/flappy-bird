import { getAsset } from './assets';
import createSprite from './createSprite';
import MainMenu from './MainMenu';
import Intro from './Intro';

export default class GameOver {
  constructor(game, layer, lastScene) {
    this.game = game;
    this.savedLayer = lastScene.layer;
    this.layer = layer;
    this.savedLayer
      .delete('pause')
      .delete('score');
    this.layer
      .add('gameOver', createSprite(getAsset('titles.png'), [44, 100, 0]))
      .add('btnOk', createSprite(getAsset('btn-2.png'), [41, 340, 0]))
      .add('btnMenu', createSprite(getAsset('btn-2.png'), [167, 340, 0]))
      .add('board', createSprite(getAsset('board.png'), [24, 512, 0]));

    this.board = this.layer.getChild('board');
    this.gameOver = this.layer.getChild('gameOver');
    this.btnOk = this.layer.getChild('btnOk');
    this.btnMenu = this.layer.getChild('btnMenu');

    this.gameOver.offset = 2;
    this.btnOk.offset = 2;

    this.btnOk.opacity = 0;
    this.btnMenu.opacity = 0;
    this.gameOver.opacity = 0;

    this.counter = 0;

    this.game.objects.push(this.btnOk);
    this.game.objects.push(this.btnMenu);

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
      this.btnMenu.opacity = 100;

      this.game.clickOn(this.btnOk, () => {
        this.game.setScene(Intro);
      }, this);

      this.game.clickOn(this.btnMenu, () => {
        this.game.setScene(MainMenu);
      }, this);

      this.game.pressKey(32, () => {
      }, this);
    }
  }

  render(dt, cvs, ctx) {
    this.savedLayer.render(ctx);
    this.layer.render(ctx);
  }
}
