export default class Storage {
  constructor() {
    this.storage = new Map();
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
}
