import { getAsset } from './assets';
import Sprite from './sprite/Sprite';

export default class ObjectCreator {
  constructor(gameObjects) {
    this.gameObjects = gameObjects;
  }

  sprite(name, texture, imgSize, attrs) {
    const sprite = this.gameObjects.add(name, new Sprite(getAsset(texture), ...imgSize));
    Object.entries(attrs).forEach(([key, value]) => {
      sprite[key] = value;
    });
    return this;
  }
}
