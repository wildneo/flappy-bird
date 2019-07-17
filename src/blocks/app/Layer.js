export default class Storage {
  constructor(data) {
    this.storage = new Map(data);
  }

  add(key, data) {
    this.storage.set(key, data);
    return this;
  }

  getChild(key) {
    return this.storage.get(key);
  }

  get children() {
    return [...this.storage.values()];
  }

  delete(key) {
    this.storage.delete(key);
    return this;
  }

  clear() {
    this.storage.clear();
    return this;
  }

  get size() {
    return this.storage.size;
  }

  render(context) {
    this.children.forEach(object => object.render(context));
  }
}
