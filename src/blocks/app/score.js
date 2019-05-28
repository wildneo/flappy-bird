import { Sprite } from './sprite';
import { Object as ObjectClass } from './object';

export class Score extends ObjectClass {
  constructor() {
    super(144, 50, 0);
    this.width = 24;
    this.height = 36;
    this.sprite = new Sprite({
      asset: 'digits_lg.png',
      frameWidth: this.width,
      frameHeight: this.height
    });
    this.sX = this.width / 2;
    this.score = [0];
  }
  setScore(score) {
    this.score = score.toString().split('').map(e => +e);
  }
  update(dt) {
    super.update(dt)
  }
  render(cvs, ctx) {
    this.sX = this.score.length * this.width / 2;
    this.score.forEach((num, i) => {
      this.sprite.drawStaticSprite(
        ctx,
        this.x - this.sX + i * this.width, this.y,
        this.angle,
        0, num
      );
    });
  }
}
