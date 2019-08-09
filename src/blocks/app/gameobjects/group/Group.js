import BasicObject from '../basicObject';

export default class Group extends BasicObject {
  constructor(type = 'Group') {
    super(type);
    this.entries = new Set();
  }

  get size() {
    return this.entries.size;
  }

  children() {
    return [...this.entries.values()];
  }

  add(object) {
    object.setParent(this);
    this.entries.add(object);
    return object;
  }

  addMultiple(...objects) {
    objects.forEach(object => this.add(object));
    return this;
  }

  remove(object) {
    this.entries.delete(object);
    return object;
  }

  clear() {
    this.entries.clear();
    return this;
  }

  update(dt, cvs, ctx) {
    this.children().forEach(object => object.update(dt, cvs, ctx));
  }

  render(dt, cvs, ctx) {
    this.children().forEach(object => object.render(dt, cvs, ctx));
  }
}
