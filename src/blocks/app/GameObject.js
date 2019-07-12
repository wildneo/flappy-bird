import Storage from './Storage';

export default class GameObject {
  constructor(children) {
    this.storage = new Storage(children);
  }

  addChild(child) {
    this.storage.add(...child);
    return this;
  }

  getChild(key) {
    return this.storage.getObject(key);
  }

  get children() {
    return this.storage.getObjects();
  }

  // setPosition(x, y, angle) {
  //   this.x = x;
  //   this.y = y;
  //   this.angle = angle;
  // }

  // distanceTo(object) {
  //   return {
  //     dx: this.x - object.x,
  //     dy: this.y - object.y,
  //   };
  // }
}
