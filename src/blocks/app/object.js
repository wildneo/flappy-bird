export class Object {
  constructor(x, y, angle) {
    this.x = x || 0;
    this.y = y || 0;
    this.angle = angle || 0;
  }
  update(dt) {
    // console.log([this.x, this.y, this.angle]);
  }
  distanceTo(object) {
    return {
      dx: this.x - object.x,
      dy: this.y - object.y
    };
    // return Math.sqrt(dx * dx + dy * dy);
  }
  setPosition(x, y, angle) {
    this.x = x;
    this.y = y;
    this.angle = angle;
  }
}
