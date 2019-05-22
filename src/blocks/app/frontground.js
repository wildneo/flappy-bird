import { Object as ObjectClass } from './object';
import { Sprite } from './sprite';

export class Frontground extends ObjectClass {
  constructor() {
    super(0, 0, 0);
    this.sprite = new Sprite({
      asset: 'fg.png',
      frameWidth: 336,
      frameHeight: 112
    });
  }
  update(dt) {
    super.update(dt);
    this.x < -47 ? this.x = 0 : this.x--;
  }
  render(cvs, ctx) {
    this.sprite.drawStaticSprite(ctx, this.x, this.y, this.angle, 0, 0);
  }
}
