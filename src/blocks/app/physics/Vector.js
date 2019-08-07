export default class Vector {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  set(x, y) {
    this.x = x;
    this.y = y;
  }

  reset() {
    this.x = 0;
    this.y = 0;
  }

  add(x, y) {
    this.x += x;
    this.y += y;
  }
}
