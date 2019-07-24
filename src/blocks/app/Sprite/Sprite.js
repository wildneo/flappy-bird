import basicObject from '../basicObject';
import Frame from './Frame';

export default class Sprite {
  constructor(image, width, height, options) {
    this.img = image;
    this.frameWidth = width;
    this.frameHeight = height;
    this.frame = new Frame(this);
    this.position = { x: 0, y: 0, angle: 0 };
  }

  // Position
  set x(x) {
    this.position.x = x;
  }

  set y(y) {
    this.position.y = y;
  }

  set angle(angle) {
    this.position.angle = angle;
  }

  get x() {
    return this.position.x;
  }

  get y() {
    return this.position.y;
  }

  // Opacity
  set alpha(alpha) {
    this.spriteAlpha = alpha;
  }

  set opacity(opacity) {
    this.spriteAlpha = opacity >= 0 ? opacity / 100 : 0;
  }

  get opacity() {
    return this.spriteAlpha * 100;
  }

  get alpha() {
    return this.spriteAlpha || 1;
  }

  get width() {
    return this.frameWidth;
  }

  get height() {
    return this.frameHeight;
  }

  get sX() {
    return this.width * this.horizontIndex;
  }

  get sY() {
    return this.height * this.verticalIndex;
  }

  get image() {
    return this.img;
  }

  get entry() {
    return [this];
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
}
