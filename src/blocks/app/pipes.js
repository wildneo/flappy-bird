import { Sprite } from './sprite';
import { Object as ObjectClass } from './object';

export class PipeGenerator extends ObjectClass {
  constructor(options) {
    super(288, 0, 0);
    this.width = 52;
    this.height = 320;
    this.gap = 100;
    this.sprite = new Sprite({
      asset: 'pipes.png',
      frameWidth: this.width,
      frameHeight: this.height
    });
    this.color = options.color;
    this.palette = {
      day: 0,
      night: 1,
      top: 0,
      bottom: 1
    };
    this.stack = [];
    this.counter = 0;
  }
  distanceTo(object) {
    return this.stack.map(item => ({
      dx: item.x - object.x,
      dy: item.y - object.y
    }));
  }
  update(dt) {
    super.update(dt);
    this.counter++;
    if (this.counter == 180) {
      this.stack.push({
        x: this.x,
        y: Math.floor(Math.random() * 150) + 150
      });
      this.counter = 0;

      // console.log(this.stack);
    }
    if (this.stack.length > 2) this.stack.shift();

    this.stack.forEach(item => item.x--);
  }
  render(cvs, ctx) {
    this.stack.forEach(item => {
      this.sprite.drawStaticSprite(
        ctx,
        item.x, item.y - this.height - this.gap, 0,
        this.palette[this.color], this.palette.top
      );
      this.sprite.drawStaticSprite(
        ctx,
        item.x, item.y, 0,
        this.palette[this.color], this.palette.bottom
      );
    });
  }
}
