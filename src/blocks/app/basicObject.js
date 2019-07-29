export default class BasicObject {
  constructor(type, x = 0, y = 0, angle = 0) {
    this.type = type;
    this.position = { x, y, angle };
  }

  set x(x) {
    this.position.x = x;
  }

  get x() {
    return this.position.x;
  }

  set y(y) {
    this.position.y = y;
  }

  get y() {
    return this.position.y;
  }

  set angle(angle) {
    this.position.angle = angle;
  }

  get angle() {
    return this.position.angle;
  }
}
