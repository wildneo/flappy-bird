export default class EventEmitter {
  constructor() {
    this.listeners = new Map();
  }

  on(event, listener) {
    this.addListener(event, listener, false);
  }

  once(event, listener) {
    this.addListener(event, listener, true);
  }

  emit(event, ...param) {
    const listeners = this.listeners.get(event);
    listeners.forEach(({ fn }) => fn.apply(this, param));
    // Delete 'once' listeners
    const filtered = listeners.filter(({ once }) => !once);
    this.listeners.set(event, filtered);
  }

  addListener(event, listener, once) {
    if (typeof listener !== 'function') {
      throw new Error('The listener must be function');
    }
    const newListener = { fn: listener, once };
    if (this.listeners.has(event)) {
      this.listeners
        .get(event)
        .push(newListener);
      return;
    }
    this.listeners.set(event, [newListener]);
  }

  removeListener(event, listener) {
    const filtered = this.listeners
      .get(event)
      .filter(obj => obj !== listener);
    this.listeners.set(event, filtered);
  }

  removeAllListener(event) {
    this.listeners
      .delete(event);
  }
}
