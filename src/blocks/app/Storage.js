export default class Storage {
  constructor() {
    this.storage = new Map();
  }

  add(key, data) {
    this.storage.set(key, data);
    return this;
  }

  get(key) {
    return this.storage.get(key);
  }

  getAll() {
    return [...this.storage.values()];
  }

  delete(key) {
    this.storage.delete(key);
  }

  clear() {
    this.storage.clear();
  }

  get size() {
    return this.storage.size;
  }
}
