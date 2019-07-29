import { getAsset } from './assets';
import spriteCreator from '../gameobjects/sprite/spriteCreator';

export default class ObjectCreator {
  constructor(game) {
    this.game = game;
  }

  sprite(key, texture, size, attrs) {
    this.game.gameObjects.add(key, spriteCreator(getAsset(texture), size, attrs));
    return this;
  }
}
