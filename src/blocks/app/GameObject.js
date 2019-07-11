import Storage from './Storage';

export default class GameObject {
  constructor(entries) {
    this.entryStorege = new Storage(entries);
  }

  addEntry(entry) {
    this.entryStorege.add(...entry);
    return this;
  }

  getEntry(key) {
    return this.entryStorege.getObject(key);
  }

  get entries() {
    return this.entryStorege.getObjects();
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
