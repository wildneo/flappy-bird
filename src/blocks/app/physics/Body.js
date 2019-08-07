import Vector from './Vector';

export default class Body {
  constructor(x = 0, y = 0, angle = 0) {
    this.position = new Vector(x, y);
    this.velocity = new Vector();
    this.gravity = new Vector();
    this.angle = angle;
    this.mass = 1;
  }

  update(dt) {
    const ax = this.mass * this.gravity.x * dt;
    const ay = this.mass * this.gravity.y * dt;
    this.velocity.add(ax, ay);
    const vx = this.velocity.x * dt;
    const vy = this.velocity.y * dt;
    this.position.add(vx, vy);
  }
}
