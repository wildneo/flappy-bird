import { standBy, floorMoving } from '../AdditionalMethods';

export default class Intro {
  constructor(game, layer) {
    this.game = game;
    this.layer = layer;

    this.bg = this.game.addTo(this.layer, 'bg');
    this.bird = this.game.addTo(this.layer, 'bird', [70, 200]);
    this.floor = this.game.addTo(this.layer, 'fg', [0, 400]);
    this.tap = this.game.addTo(this.layer, 'tap', [87, 210]);
    this.ready = this.game.addTo(this.layer, 'ready', [44, 120]);

    this.floorMoving = floorMoving.bind(this);

    this.game.input.addToClick(this.bg);
  }

  update(dt) {
    this.floorMoving();
    // Stand by

    // Start game
    this.game.input.pressKey(32, () => {
      this.game.setScene('GamePlay');
    });

    this.game.input.clickOn(this.bg, () => {
      this.game.setScene('GamePlay');
    });
  }
}
