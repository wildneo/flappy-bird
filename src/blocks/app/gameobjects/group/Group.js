import BasicObject from '../basicObject';

export default class Group extends BasicObject {
  constructor(parent, type = 'Group') {
    super(parent, type);
    this.entries = new Set();
  }

  get size() {
    return this.entries.size;
  }

  children() {
    return [...this.entries.values()];
  }

  add(...objects) {
    objects.forEach(object => this.entries.add(object));
  }

  remove(object) {
    this.entries.delete(object);
  }

  clear() {
    this.entries.clear();
  }

  update(dt, cvs, ctx) {
    this.children().forEach(object => object.update(dt, cvs, ctx));
  }

  render(dt, cvs, ctx) {
    this.children().forEach(object => object.render(dt, cvs, ctx));
  }
}
