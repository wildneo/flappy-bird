import { Object as ObjectClass } from './object';
import { Sprite } from './sprite';

export class Bird extends ObjectClass {
  constructor(options) {
    super(96, 200, 0);
    this.width = 34;
    this.height = 24;
    this.sprite = new Sprite({
      asset: 'bird.png',
      frameWidth: this.width,
      frameHeight: this.height,
      tickPerFrame: 8
    });
    this.color = options.color;
    this.palette = {
      red: 0,
      blue: 1,
      yellow: 2
    };
    this.animate = true;
    this.score = 0;
  }
  setAnimationMod(animate) {
    this.animate = animate;
  }
  getScore() {
    return this.score;
  }
  addScore() {
    this.score++;
  }
  update(dt) {
    super.update(dt);
    this.sprite.update(dt);
  }
  render(cvs, ctx) {
    this.animate
      ? this.sprite.drawAnimateSprite(
          ctx,
          this.x, this.y, this.angle,
          this.palette[this.color], 0
        )
      : this.sprite.drawStaticSprite(
          ctx,
          this.x, this.y,
          this.angle,
          this.palette[this.color], 1
        );
  }
}
