import { Sprite } from './sprite';

export class Tap extends Sprite {
  constructor() {
    super({
      asset: 'tap.png',
      frameWidth: 114,
      frameHeight: 98
    });
  }
  render(cvs, ctx) {
    this.drawStaticSprite(
      ctx,
      (cvs.width - this.frameWidth) / 2,
      cvs.height / 3,
      0,
      0, 0);
  }
}
export class Ready extends Sprite {
  constructor() {
    super({
      asset: 'titles.png',
      frameWidth: 200,
      frameHeight: 54
    });
  }
  render(cvs, ctx) {
    this.drawStaticSprite(
      ctx,
      (cvs.width - this.frameWidth) / 2,
      cvs.height / 5,
      0,
      1, 0);
  }
}