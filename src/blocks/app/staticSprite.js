import Sprite from './Sprite';

export default class StaticSprite extends Sprite {
  get image() {
    return this.img;
  }
}
