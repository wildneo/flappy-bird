import { Object as ObjectClass } from './object';
import { Sprite } from './sprite';

export class Background extends ObjectClass {
  constructor(options) {
    super(0, 0, 0);
    this.width = 288;
    this.height = 512;
    this.sprite = new Sprite({
      asset: 'bg.png',
      frameWidth: this.width,
      frameHeight: this.height
    });
    this.theme = options.theme;
    this.palette = {
      day: 0,
      night: 1
    };
  }
  render(cvs, ctx) {
    this.sprite.drawStaticSprite(ctx, 0, 0, 0, 0, this.palette[this.theme]);
  }
}
