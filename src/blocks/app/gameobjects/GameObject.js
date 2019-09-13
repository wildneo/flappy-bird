import BasicObject from '../core/BasicObject';
import Body from '../physics/Body';

export default class GameObject extends BasicObject {
  constructor(type, width, height, x, y, angle) {
    super(type);
    this.dimensions = { width, height };
    this.body = new Body(x, y, angle);
  }

  // Position
  set x(x) {
    this.body.position.x = x;
  }

  set y(y) {
    this.body.position.y = y;
  }

  set angle(angle) {
    this.body.angle = angle;
  }

  get x() {
    return this.body.position.x;
  }

  get y() {
    return this.body.position.y;
  }

  get angle() {
    return this.body.angle;
  }

  get position() {
    return { x: this.x, y: this.y, angle: this.angle };
  }

  // Dimensions
  get width() {
    return this.dimensions.width;
  }

  get height() {
    return this.dimensions.height;
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

  // Opacity
  set alpha(alpha) {
    this.objectAlpha = alpha;
  }

  set opacity(opacity) {
    this.objectAlpha = opacity >= 0 ? opacity / 100 : 0;
  }

  get alpha() {
    return this.objectAlpha || 1;
  }

  get opacity() {
    return this.alpha * 100;
  }
}
