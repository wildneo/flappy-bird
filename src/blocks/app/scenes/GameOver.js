import Timer from '../time/Timer';

export default class GameOver {
  constructor(game, layer, parentScene) {
    this.game = game;
    this.layer = layer;

    this.layer.addMultiple(...parentScene.layer.children());
    this.bird = parentScene.bird;
    this.scoreboard = this.game.addTo(this.layer, 'scoreboard', [24, 512]);
    this.gameOver = this.game.addTo(this.layer, 'gameOver', [44, 100]);
    this.ok = this.game.addTo(this.layer, 'ok', [41, 340]);
    this.menu = this.game.addTo(this.layer, 'menu', [167, 340]);

    this.scoreboard.body.velocity.y = -400;
    this.ok.opacity = 0;
    this.menu.opacity = 0;
    this.gameOver.opacity = 0;


    this.counter = 0;

    this.game.input.addToClick(this.ok, this.menu);

    // console.log();
  }

  update() {
    if (this.bird.y > 380) {
      this.bird.body.gravity.reset();
      this.bird.body.velocity.reset();
    }

    if (this.gameOver.opacity < 100) {
      this.gameOver.opacity += 5;
    }

    if (this.scoreboard.y < 180) {
      this.scoreboard.body.velocity.reset();
      this.ok.opacity = 100;
      this.menu.opacity = 100;

      this.game.input.clickOn(this.ok, () => {
        this.game.setScene('StandBy');
      });
      this.game.input.clickOn(this.menu, () => {
        this.game.setScene('MainMenu');
      });
    }
  }
}
