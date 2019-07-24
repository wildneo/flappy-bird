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

  getKeys() {
    return [...this.storage.keys()];
  }

  getValues() {
    return [...this.storage.values()];
  }

  getEntries() {
    return [...this.storage];
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
