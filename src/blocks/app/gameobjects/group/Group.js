import BasicObject from '../basicObject';

export default class Group extends BasicObject {
  constructor(x, y, angle) {
    super('Group', x, y, angle);
    this.group = [];
  }

  get size() {
    return this.group.length;
  }

  getEntries() {
    return this.group;
  }

  add(...children) {
    this.group.push(...children);
  }

  clear() {
    this.group = [];
  }

  render(context) {
    this.group.forEach(object => object.render(context));
  }
}
