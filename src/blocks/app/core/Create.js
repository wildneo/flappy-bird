import { getAsset } from './assets';
import spriteCreator from '../gameobjects/sprite/spriteCreator';
import groupCreator from '../gameobjects/group/groupCreator';

export default class ObjectCreator {
  constructor(game) {
    this.game = game;
  }

  scene(key, scene) {
    this.game.gameScenes.set(key, scene);
    return this;
  }

  sprite(key, texture, size, attrs) {
    this.game.gameObjects.set(key, spriteCreator(getAsset(texture), size, attrs));
    return this;
  }

  group(key, children, attrs) {
    this.game.gameObjects.set(key, groupCreator(children, attrs));
    return this;
  }
}
