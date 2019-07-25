import BasicObject from '../basicObject';
import spriteRender from './spriteRender';
import Animation from './Animation';
import Frame from './Frame';

export default class Sprite extends BasicObject {
  constructor(image, width, height) {
    super('Sprite');
    this.img = image;
    this.frameWidth = width;
    this.frameHeight = height;
    this.animation = new Animation(this);
    this.frame = new Frame(this);
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
    return this.objectAlpha || 1;
  }

  set opacity(opacity) {
    this.objectAlpha = opacity >= 0 ? opacity / 100 : 0;
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

  render(ctx) {
    if (this.animation.flag) {
      this.animation.update();
    }
    spriteRender(ctx, this);
  }
}
