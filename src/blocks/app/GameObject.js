export default class GameObject {
  constructor(x = 0, y = 0, angle = 0) {
    this.x = x;
    this.y = y;
    this.angle = angle;
  }

  setPosition(x, y, angle) {
    this.x = x;
    this.y = y;
    this.angle = angle;
  }

  set addSprite(sprite) {
    this.sprite = sprite;
  }

  get entity() {
    return this.sprite;
  }

  // distanceTo(object) {
  //   return {
  //     dx: this.x - object.x,
  //     dy: this.y - object.y,
  //   };
  // }
}
