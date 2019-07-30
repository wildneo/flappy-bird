import MainMenu from './MainMenu';

export default class Intro {
  constructor(game, layer) {
    this.game = game;
    this.layer = layer;

    this.game.create.group('pipes');
    this.game.create.group('scoreDisplay');
    this.game.create
      .group('pipes')
      .group('scoreDisplay')
      .sprite('fg', 'fg.png', [336, 112])
      .sprite('scoreboard', 'scoreboard.png', [240, 130])
      .sprite('bronzeMedal', 'medals.png', [44, 44])
      .sprite('silverMedal', 'medals.png', [44, 44], { frame: { offset: 1 } })
      .sprite('goldMedal', 'medals.png', [44, 44], { frame: { offset: 2 } })
      .sprite('play', 'btn-1.png', [26, 26], { frame: { offset: 1 } })
      .sprite('pause', 'btn-1.png', [26, 26])
      .sprite('ok', 'btn-2.png', [80, 26])
      .sprite('menu', 'btn-2.png', [80, 28], { frame: { offset: 1 } })
      .sprite('playGame', 'btn-3.png', [112, 69])
      .sprite('settings', 'btn-3.png', [112, 69], { frame: { offset: 1 } })
      .sprite('tap', 'tap.png', [114, 98], { frame: { offset: 0 } })
      .sprite('logo', 'titles.png', [200, 60])
      .sprite('ready', 'titles.png', [200, 60], { frame: { offset: 1 } })
      .sprite('gameOver', 'titles.png', [200, 60], { frame: { offset: 2 } })
      .sprite('digits', 'digits.png', [70, 20])
      .sprite('digits_lg', 'digits_lg.png', [120, 36]);

    // Сustom objects
    this.game.create
      .sprite('bg', 'bg.png', [288, 512], { frame: { offset: 0 } })
      .sprite('bird', 'bird.png', [34, 24], { animation: { tickPerFrame: 8 } })
      .sprite('topPipe', 'pipes.png', [52, 320], { frame: { offset: 0 } })
      .sprite('btmPipe', 'pipes.png', [52, 320], { frame: { offset: 0, index: 1 } });

    this.logo = this.game.addToScene('logo', [44, 250]);

    this.game.input.addToClick(this.logo);
  }

  update() {
    if (this.logo.opacity < 100) {
      this.logo.opacity += 5;
    }
    this.game.input.clickOn(this.logo, () => {
      this.game.setScene(MainMenu);
    }, this);
  }

  render(dt, ctx) {
    this.layer.render(ctx);
  }
}
