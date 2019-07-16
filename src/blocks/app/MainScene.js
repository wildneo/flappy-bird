import { getAsset } from './assets';
import { standBy, fgMove } from './AdditionalMethods';
import createSprite from './createSprite';

export default class MainScene {
  constructor(game, layer) {
    this.game = game;
    this.layer = layer;
    this.layer
      .add('bg', createSprite(getAsset('bg.png')))
      .add('logo', createSprite(getAsset('titles.png'), [20, 120, 0]))
      .add('bird', createSprite(getAsset('bird.png'), [220, 130, 0], 8))
      .add('btnPlay', createSprite(getAsset('btn-3.png'), [20, 300, 0]))
      .add('btnChart', createSprite(getAsset('btn-3.png'), [150, 300, 0]))
      .add('fg', createSprite(getAsset('fg.png'), [0, 400, 0]));

    this.logo = this.layer.getChild('logo');
    this.bird = this.layer.getChild('bird');
    this.fg = this.layer.getChild('fg');
    this.btnPlay = this.layer.getChild('btnPlay');
    this.btnChart = this.layer.getChild('btnChart');

    this.btnChart.offset = 1;

    this.counter = 0;
    // console.log(this.logo.y);
  }

  update(dt) {
    this.speed = this.game.constants.SPEED * dt;
    standBy.call(this.logo, this.speed, 110);
    standBy.call(this.bird, this.speed, 120);
    fgMove.call(this.fg, this.speed);
    // console.log(this.logo.y);
  }

  render(dt, cvs, ctx) {
    this.layer.render(ctx);
  }
}
