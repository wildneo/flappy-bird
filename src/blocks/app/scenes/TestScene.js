import { setScore, fgMove, pipeGenerator, detectCollision } from './AdditionalMethods';

export default class TestScene {
  constructor(game, layer) {
    this.game = game;
    this.layer = layer;

    this.game.create.sprite('fg', 'fg.png', [34, 24]);
    this.game.create.sprite('bg', 'bg.png', [288, 512], { frame: { index: 1 } });
    this.game.create.sprite('bird', 'bird.png', [34, 24], { animation: { tickPerFrame: 8 } });

    this.bird = this.game.addToScene('bird', [70, 200]);

    this.game.input.addToClick(this.bird);

    console.log(this.game.input.clickOn);
    console.log(this.game.input.clickOn.add);
  }

  update(dt) {
    this.game.input.pressKey(32, () => {
      console.log('32');
    }, this);

    this.game.input.clickOn(this.bird, () => {
      console.log('fuck you!');
    }, this);
  }

  render(dt, cvs, ctx) {
    this.layer.render(ctx);
  }
}
