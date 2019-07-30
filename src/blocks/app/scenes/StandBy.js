import { standBy, fgMove } from '../AdditionalMethods';
import GamePlay from './GamePlay';

export default class Intro {
  constructor(game, layer) {
    this.game = game;
    this.layer = layer;

    this.bg = this.game.addToScene('bg');
    this.fg = this.game.addToScene('fg', [0, 400]);
    this.bird = this.game.addToScene('bird', [70, 200]);
    this.tap = this.game.addToScene('tap', [87, 210]);
    this.ready = this.game.addToScene('ready', [44, 120]);
    // this.scoreDisplay = this.game.addToScene('scoreDisplay');

    this.game.input.addToClick(this.bg);
  }

  update(dt) {
    this.speed = this.game.constants.SPEED * dt;

    // Stand by
    standBy.call(this.bird, this.speed, 200);
    fgMove.call(this.fg, this.speed);

    // Start game
    this.game.input.pressKey(32, () => {
      this.game.setScene(GamePlay);
    }, this);

    this.game.input.clickOn(this.bg, () => {
      this.game.setScene(GamePlay);
    }, this);
  }

  render(dt, ctx) {
    this.layer.render(ctx);
  }
}
