export class Object {
  constructor(x, y, angle) {
    this.x = x || 0;
    this.y = y || 0;
    this.angle = angle || 0;
  }

  // eslint-disable-next-line no-unused-vars
  update(dt) {
    // console.log([this.x, this.y, this.angle]);
  }
  distanceTo(object) {
    return {
      dx: this.x - object.x,
      dy: this.y - object.y
    };
  }
  setPosition(x, y, angle) {
    this.x = x;
    this.y = y;
    this.angle = angle;
  }
}
