import { getAsset } from './assets';
import createSprite from './createSprite';
import createGroup from './createGroup';

function sinusMovement(counter, yPos) {
  const feq = 3;
  const amp = 3;
  this.y = yPos + Math.sin((counter * Math.PI / 180) * feq) * amp;
}

export default class MainScene {
  constructor(game, layer) {
    this.game = game;
    this.layer = layer;
    this.layer
      .add('bg', createSprite(getAsset('bg.png')))
      .add('logo', createGroup(
        createSprite(getAsset('titles.png'), [20, 120, 0]),
        createSprite(getAsset('bird.png'), [220, 135, 0], 8),
      ))
      .add('fg', createSprite(getAsset('fg.png'), [0, 400, 0]));

    this.logo = this.layer.getChild('logo');
    this.fg = this.layer.getChild('fg');

    this.counter = 0;
    this.speed = this.game.constants.SPEED;
    // console.log(this.logo.y);
  }

  update(dt) {
    // console.log(this.logo.y);
    this.counter += this.speed * dt;
    sinusMovement.call(this.logo, this.counter, 30);
  }

  render(dt, cvs, ctx) {
    this.layer.render(ctx);
  }
}
