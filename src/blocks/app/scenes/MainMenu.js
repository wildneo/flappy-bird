import { floorMoving } from '../AdditionalMethods';
import Tween from '../tween/Tween';

export default class MainMenu {
  constructor(game, layer) {
    this.game = game;
    this.layer = layer;

    this.bg = this.game.addTo(this.layer, 'bg');
    this.floor = this.game.addTo(this.layer, 'fg', [0, 400]);
    this.logo = this.game.addTo(this.layer, 'logo', [20, 120]);
    this.bird = this.game.addTo(this.layer, 'bird', [220, 120]);
    this.playGame = this.game.addTo(this.layer, 'playGame', [20, 300]);
    this.settings = this.game.addTo(this.layer, 'settings', [150, 300]);

    this.speed = -120;

    this.floor.body.velocity.x = this.speed;

    this.floorMoving = floorMoving.bind(this);

    this.game.input.addToClick(this.playGame, this.settings);

    this.test = new Tween(this.bird, { y: 140 }, 750, 'easeInOutQuad', true, true);
    this.test.start();
    this.playBtnTween = new Tween(this.playGame, { y: 305 }, 300, 'easeInOutBack');
    this.playBtnTween.on('onComplete', () => {
      this.game.setScene('StandBy');
    });
    this.settingsBtnTween = new Tween(this.settings, { y: 305 }, 300, 'easeInOutBack', false, true);
    this.settingsBtnTween.on('onComplete', (event) => {
      event.reset();
      console.log('settings click');
    });
  }

  update(dt) {
    this.floorMoving();

    this.game.input.clickOn(this.playGame, () => {
      this.playBtnTween.start();
    });

    this.game.input.clickOn(this.settings, () => {
      this.settingsBtnTween.start();
    });

    this.test.update(dt);

    this.playBtnTween.update(dt);
    this.settingsBtnTween.update(dt);
  }
}
