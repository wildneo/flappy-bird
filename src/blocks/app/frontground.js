import { Sprite } from './sprite';

export class Frontground extends Sprite {
  constructor() {
    super({
      asset: 'fg.png',
      frameWidth: 336,
      frameHeight: 112
    });
    this.x = 0;
  }
  update(dt) {
    super.update(dt);
    this.x--;
    if (this.x < -47) {
      this.x = 0;
    }
  }
  render(ctx, cvs) {
    super.drawStaticSprite(ctx, this.x, cvs.height - this.frameHeight, 0, 0, 0);
  }
}
