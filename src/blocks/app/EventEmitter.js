export default class EventEmitter {
  // Constructor to create a storage for 'EventEmitter' objects.
  constructor() {
    this.listeners = new Map();
  }

  // Add a listener for a given event.
  on(event, ...listeners) {
    this.addListeners(event, listeners, false);
  }

  // Add a one-time listener for a given event.
  once(event, ...listeners) {
    this.addListeners(event, listeners, true);
  }

  // Calls each of the listeners registered for a given event.
  emit(event, ...param) {
    if (!this.listeners.has(event)) {
      return;
    }
    const listeners = this.listeners.get(event);
    listeners.forEach(({ fn }) => fn.apply(this, param));
    // Remove one-time events
    const filtered = listeners.filter(({ once }) => !once);
    this.listeners.set(event, filtered);
  }

  // Add a listener for a given event.
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

  // Add each listener from the array for a given event
  addListeners(event, listeners, once) {
    listeners.forEach((listener) => {
      this.addListener(event, listener, once);
    });
  }

  // Remove the listener of a given event.
  removeListener(event, listener) {
    const filtered = this.listeners
      .get(event)
      .filter(obj => obj !== listener);
    this.listeners.set(event, filtered);
  }

  // Remove the specified event and all its listeners.
  removeAllListeners(event) {
    this.listeners
      .delete(event);
  }
}
