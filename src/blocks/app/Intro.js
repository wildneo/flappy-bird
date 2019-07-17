import { getAsset } from './assets';
import { standBy } from './AdditionalMethods';
import createSprite from './createSprite';

export default class Intro {
  constructor(game, layer, lastScene) {
    this.game = game;
    this.layer = lastScene.layer;
    this.layer
      .delete('logo', createSprite(getAsset('titles.png'), [20, 120, 0]))
      .delete('btnPlay', createSprite(getAsset('btn-3.png'), [20, 300, 0]))
      .delete('btnChart', createSprite(getAsset('btn-3.png'), [150, 300, 0]))
      .add('tap', createSprite(getAsset('tap.png'), [87, 210, 0]))
      .add('ready', createSprite(getAsset('titles.png'), [44, 120, 0]));

    this.tap = this.layer.getChild('tap');
    this.bird = this.layer.getChild('bird');
    this.ready = this.layer.getChild('ready');
    // this.pause = this.layer.getChild('pause');
    // this.pause.offset = 1;
  }

  update(dt) {
    this.speed = this.game.constants.SPEED * dt;
    standBy.apply(this.bird, this.speed, 200);
  }

  render(dt, cvs, ctx) {
    this.layer.render(ctx);
  }
}
