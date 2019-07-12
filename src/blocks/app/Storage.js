export default class Storage {
  constructor(...data) {
    this.storage = new Map(data);
  }

  add(key, data) {
    this.storage.set(key, data);
    return this;
  }

  getObject(key) {
    return this.storage.get(key);
  }

  getObjects() {
    return [...this.storage.values()];
  }

  delete(key) {
    return this.storage.delete(key);
  }

  clear() {
    return this.storage.clear();
  }

  get size() {
    return this.storage.size;
  }
}
