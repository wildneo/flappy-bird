import isOverlapped from '../../utils/isOverlapped';
import spriteRender from './spriteRender';
import GameObject from '../GameObject';
import Animation from './Animation';
import Frame from './Frame';

export default class Sprite extends GameObject {
  constructor(texture, width, height, x, y, angle) {
    super('Sprite', width, height, x, y, angle);
    this.animation = new Animation(this);
    this.frame = new Frame(texture.width / width, texture.height / height);
    this.texture = texture;
    this.outOfBoundsDestroy = false;
  }

  update(dt, cvs, ctx) {
    if (this.animation.flag) {
      this.animation.update(dt, cvs, ctx);
    }
    const canvas = {
      left: 0,
      top: 0,
      right: cvs.width,
      bottom: cvs.height,
    };
    if (this.outOfBoundsDestroy && !isOverlapped(this, canvas)) {
      this.destroy();
    }
    this.body.update(dt);
  }

  get image() {
    return this.texture;
  }

  get sX() {
    return this.width * this.frame.horizontIndex;
  }

  get sY() {
    return this.height * this.frame.verticalIndex;
  }

  render(dt, cvs, ctx) {
    spriteRender(ctx, this);
  }
}
