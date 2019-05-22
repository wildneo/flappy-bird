export class Object {
  constructor(x, y, angle) {
    this.x = x;
    this.y = y;
    this.angle = angle;
  }
  update(dt) {
    // console.log([this.x, this.y, this.angle]);
  }
  distanceTo(object) {
    const dx = this.x - object.x;
    const dy = this.y - object.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
  setPosition(x, y, angle) {
    this.x = x;
    this.y = y;
    this.angle = angle;
  }
}
