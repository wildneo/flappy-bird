import { Sprite } from './sprite';

export class Background extends Sprite {
  constructor(color) {
    super({
      asset: 'bg.png',
      frameWidth: 288,
      frameHeight: 512
    });
    this.color = color;
    this.palette = {
      day: 0,
      night: 1
    };
  }
  update(dt) {
    super.update(dt);
  }
  render(ctx) {
    super.drawStaticSprite(ctx, 0, 0, 0, 0, this.palette[this.color]);
  }
}
