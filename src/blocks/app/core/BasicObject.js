import EventEmitter from './EventEmitter';

export default class BasicObject extends EventEmitter {
  constructor(type) {
    super();
    this.type = type;
    this.parent = null;
  }

  setParent(parent) {
    this.parent = parent;
  }

  getParent() {
    return this.parent;
  }

  destroy() {
    if (this.parent !== null) {
      this.parent.remove(this);
    }
  }
}
