import MainMenu from './MainMenu';

export default class Intro {
  constructor(game, layer) {
    this.game = game;
    this.layer = layer;

    // this.game.create.group('pipes');
    // this.game.create.group('scoreDisplay');
    this.game.create.sprite('fg', 'fg.png', [34, 24]);
    this.game.create.sprite('scoreboard', 'scoreboard.png', [240, 130]);
    this.game.create.sprite('bronzeMedal', 'medals.png', [44, 44]);
    this.game.create.sprite('silverMedal', 'medals.png', [44, 44], { frame: { offset: 1 } });
    this.game.create.sprite('goldMedal', 'medals.png', [44, 44], { frame: { offset: 2 } });
    this.game.create.sprite('play', 'btn-1.png', [28, 28], { frame: { offset: 1 } });
    this.game.create.sprite('pause', 'btn-1.png', [28, 28]);
    this.game.create.sprite('ok', 'btn-2.png', [28, 28]);
    this.game.create.sprite('menu', 'btn-2.png', [28, 28], { frame: { offset: 1 } });
    this.game.create.sprite('start', 'btn-2.png', [28, 28]);
    this.game.create.sprite('settings', 'btn-2.png', [28, 28], { frame: { offset: 1 } });
    this.game.create.sprite('tap', 'tap.png', [114, 98], { frame: { offset: 0 } });
    this.game.create.sprite('logo', 'titles.png', [200, 60]);
    this.game.create.sprite('ready', 'titles.png', [200, 60], { frame: { offset: 1 } });
    this.game.create.sprite('gameOver', 'titles.png', [200, 60], { frame: { offset: 2 } });
    this.game.create.sprite('digits', 'digits.png', [70, 20]);
    this.game.create.sprite('digits_lg', 'digits_lg.png', [120, 36]);

    // Сustom objects
    this.game.create.sprite('bg', 'bg.png', [288, 512], { frame: { offset: 0 } });
    this.game.create.sprite('bird', 'bird.png', [34, 24], { animation: { tickPerFrame: 8 } });
    this.game.create.sprite('topPipe', 'pipse.png', [52, 320], { frame: { offset: 0 } });
    this.game.create.sprite('btmPipe', 'pipse.png', [52, 320], { frame: { offset: 0, index: 1 } });

    this.logo = this.game.addToScene('logo', [44, 250]);

    this.game.input.addToClick(this.logo);
  }

  update() {
    if (this.logo.opacity < 100) {
      this.logo.opacity += 5;
    }
    this.game.input.clickOn(this.logo, () => {
      console.log(this.logo);
      this.game.setScene(MainMenu);
    }, this);
  }

  render(dt, ctx) {
    this.layer.render(ctx);
  }
}
