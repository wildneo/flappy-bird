export default class TestScene {
  constructor(game, layer) {
    this.game = game;
    this.layer = layer;

    this.game.create.group('pipes');

    this.bg = this.game.addTo(this.layer, 'bg');
    this.pipes = this.game.addTo(this.layer, 'pipes');
    this.bird = this.game.addTo(this.layer, 'bird', [70, 200]);

    this.bird.body.gravity.y = 1200;

    this.game.input.addToClick(this.bird);
    this.timer = 0;
  }

  update(dt) {
    this.game.input.pressKey(32, () => {
      this.bird.body.velocity.y = -400;
    });

    this.game.input.clickOn(this.bird, () => {
      console.log('fuck you!');
    });

    this.speed = 100 * dt;
    this.timer += this.speed;
    if (this.timer >= 160) {
      this.timer = 0;
      const topPipe = this.game.addTo(this.pipes, 'topPipe', [288, Math.round(Math.random() * -100) - 100]);
      const btmPipe = this.game.addTo(this.pipes, 'btmPipe', [288, topPipe.y + topPipe.height + 100]);
      topPipe.body.velocity.x = -100;
      btmPipe.body.velocity.x = -100;
      topPipe.outOfBoundsDestroy = true;
      btmPipe.outOfBoundsDestroy = true;
    }
    console.log(this.pipes.children());
  }
}
