import Sprite from './sprite';

export default class Staticprite extends Sprite {
  get sprite() {
    return this.image;
  }
}
