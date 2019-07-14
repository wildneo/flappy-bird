import renderer from './renderer';

export default class Group {
  constructor(children) {
    this.group = [...children];
    this.position = { x: 0, y: 0, angle: 0 };
  }

  get size() {
    return this.group.length;
  }

  get children() {
    return this.group;
  }

  appendChild(child) {
    this.group.push(child);
    return this;
  }

  clear() {
    this.group = [];
    return this;
  }

  render(context) {
    this.group.forEach(object => renderer(context, object));
  }

  set x(x) {
    this.position.x = x;
    // this.group.forEach(object => object.x += this.position.x);
  }

  set y(y) {
    this.position.y = y;
    this.group.forEach((object) => {
      const Y = object.y + this.position.y;
      const offset = Y - object.y;
      console.log(offset);
      
      object.y = offset + this.position.y;
    });
  }

  get x() {
    return this.position.x;
  }

  get y() {
    return this.position.y;
  }
}
