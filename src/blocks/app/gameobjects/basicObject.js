import Body from '../physics/Body';

export default class BasicObject {
  constructor(parent, type, x = 0, y = 0, angle = 0) {
    this.parent = parent;
    this.type = type;
    this.body = new Body(x, y, angle);
  }

  destroy() {
    if (this.parent !== null) {
      this.parent.remove(this);
    }
  }

  reset() {
    this.body.position.reset();
    this.body.angle = 0;
  }

  set x(x) {
    this.body.position.x = x;
  }

  get x() {
    return this.body.position.x;
  }

  set y(y) {
    this.body.position.y = y;
  }

  get y() {
    return this.body.position.y;
  }

  set angle(angle) {
    this.body.angle = angle;
  }

  get angle() {
    return this.body.angle;
  }

  get position() {
    return { x: this.x, y: this.y, angle: this.angle };
  }
}
