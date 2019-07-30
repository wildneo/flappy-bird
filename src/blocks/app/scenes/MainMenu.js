import { standBy as standByMode, fgMove } from '../AdditionalMethods';
import StandBy from './StandBy';

export default class MainMenu {
  constructor(game, layer) {
    this.game = game;
    this.layer = layer;

    this.bg = this.game.addToScene('bg');
    this.fg = this.game.addToScene('fg', [0, 400]);
    this.logo = this.game.addToScene('logo', [20, 120]);
    this.bird = this.game.addToScene('bird', [220, 130]);
    this.playGame = this.game.addToScene('playGame', [20, 300]);
    this.settings = this.game.addToScene('settings', [150, 300]);

    this.game.input.addToClick(this.playGame, this.settings);

    this.counter = 0;
  }

  update(dt) {
    this.speed = this.game.constants.SPEED * dt;
    standByMode.call(this.logo, this.speed, 110);
    standByMode.call(this.bird, this.speed, 120);
    fgMove.call(this.fg, this.speed);

    this.game.input.clickOn(this.playGame, () => {
      this.game.setScene(StandBy);
    }, this);

    this.game.input.clickOn(this.settings, () => {
      console.log('settings click');
    }, this);
  }

  render(dt, ctx) {
    this.layer.render(ctx);
  }
}
