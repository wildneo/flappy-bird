import { getAsset } from './assets';
import { standBy, fgMove } from './AdditionalMethods';
import createSprite from './createSprite';
import createGroup from './createGroup';
import GamePlay from './GamePlay';

export default class Intro {
  constructor(game, layer, lastScene) {
    this.game = game;
    this.layer = lastScene.layer;
    this.layer
      .delete('logo')
      .delete('btnPlay')
      .delete('btnChart')
      .add('score', createGroup())
      .add('tap', createSprite(getAsset('tap.png'), [87, 210, 0]))
      .add('ready', createSprite(getAsset('titles.png'), [44, 120, 0]));

    this.fg = this.layer.getChild('fg');
    this.bird = this.layer.getChild('bird');
    this.ready = this.layer.getChild('ready');

    this.bird.x = 70;
    this.bird.y = 200;
    this.ready.offset = 1;
  }

  update(dt) {
    this.speed = this.game.constants.SPEED * dt;
    standBy.call(this.bird, this.speed, 200);
    fgMove.call(this.fg, this.speed);

    if (this.game.checkKeyPress(32)) {
      this.game.setScene(GamePlay, this);
    }
  }

  render(dt, cvs, ctx) {
    this.layer.render(ctx);
  }
}
