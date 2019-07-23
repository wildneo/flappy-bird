import { getAsset } from './assets';
import { standBy, fgMove } from './AdditionalMethods';
import createSprite from './createSprite';
import createGroup from './createGroup';
import GamePlay from './GamePlay';

export default class Intro {
  constructor(game, layer) {
    this.game = game;
    this.layer = layer;
    this.layer
      .add('bg', createSprite(getAsset('bg.png')))
      .add('bird', createSprite(getAsset('bird.png'), [70, 200, 0], 8))
      .add('pipes', createGroup())
      .add('score', createGroup())
      .add('fg', createSprite(getAsset('fg.png'), [0, 400, 0]))
      .add('tap', createSprite(getAsset('tap.png'), [87, 210, 0]))
      .add('ready', createSprite(getAsset('titles.png'), [44, 120, 0]));

    this.bg = this.layer.getChild('bg');
    this.fg = this.layer.getChild('fg');
    this.tap = this.layer.getChild('tap');
    this.bird = this.layer.getChild('bird');
    this.pipes = this.layer.getChild('pipes');
    this.score = this.layer.getChild('score');
    this.ready = this.layer.getChild('ready');

    this.ready.offset = 1;

    this.game.objects.push(this.bg);
  }

  update(dt) {
    this.speed = this.game.constants.SPEED * dt;

    // Stand by
    standBy.call(this.bird, this.speed, 200);
    fgMove.call(this.fg, this.speed);

    // Start game
    this.game.pressKey(32, () => {
      this.game.setScene(GamePlay, this);
    }, this);
    this.game.clickOn(this.bg, () => {
      this.game.setScene(GamePlay, this);
    }, this);
  }

  render(dt, cvs, ctx) {
    this.layer.render(ctx);
  }
}
