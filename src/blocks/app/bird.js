import { Sprite } from './sprite';

export class Bird extends Sprite {
  constructor(color) {
    super({
      asset: 'bird.png',
      frameWidth: 34,
      frameHeight: 24,
      tickPerFrame: 8
    });
    this.color = color;
    this.palette = {
      red: 0,
      blue: 1,
      yellow: 2
    };
  }
  update(dt) {
    super.update(dt);
  }
  render(ctx, x, y, deg, flappying) {
    flappying
      ? super.drawAnimateSprite(ctx, x, y, deg, this.palette[this.color], 0)
      : super.drawStaticSprite(ctx, x, y, deg, this.palette[this.color], 1);
  }
}
