export default class BasicObject {
  constructor(type) {
    this.type = type;
    this.position = {};
  }

  set pos(position) {
    const [x, y, angle] = position;
    this.position = { x, y, angle };
  }

  set x(x) {
    this.position.x = x;
  }

  get x() {
    return this.position.x || 0;
  }

  set y(y) {
    this.position.y = y;
  }

  get y() {
    return this.position.y || 0;
  }

  set angle(angle) {
    this.position.angle = angle;
  }

  get angle() {
    return this.position.angle || 0;
  }
}
