import BasicObject from '../basicObject';
import spriteRender from './spriteRender';
import Animation from './Animation';
import Frame from './Frame';
import isOverlapped from '../../utils/isOverlapped';

export default class Sprite extends BasicObject {
  constructor(parent, image, width, height, x, y, angle) {
    super(parent, 'Sprite', x, y, angle);
    this.img = image;
    this.frameWidth = width;
    this.frameHeight = height;
    this.animation = new Animation(this);
    this.frame = new Frame(this);
    this.outOfBoundsDestroy = false;
  }

  update(dt, cvs, ctx) {
    if (this.animation.flag) {
      this.animation.update(dt);
    }
    const canvas = {
      left: 0,
      top: 0,
      right: cvs.width,
      bottom: cvs.height,
    };
    if (this.outOfBoundsDestroy && !isOverlapped(this, canvas)) {
      this.parent.remove(this);
    }
    this.body.update(dt);
  }

  get image() {
    return this.img;
  }

  get sX() {
    return this.width * this.frame.horizontIndex;
  }

  get sY() {
    return this.height * this.frame.verticalIndex;
  }

  // Opacity
  set alpha(alpha) {
    this.spriteAlpha = alpha;
  }

  get alpha() {
    return this.spriteAlpha || 1;
  }

  set opacity(opacity) {
    this.spriteAlpha = opacity >= 0 ? opacity / 100 : 0;
  }

  get opacity() {
    return this.alpha * 100;
  }

  // Dimensions
  get width() {
    return this.frameWidth;
  }

  get height() {
    return this.frameHeight;
  }

  get left() {
    return this.x;
  }

  get top() {
    return this.y;
  }

  get right() {
    return this.x + this.width;
  }

  get bottom() {
    return this.y + this.height;
  }

  render(dt, cvs, ctx) {
    spriteRender(ctx, this);
  }
}
