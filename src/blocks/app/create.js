import spriteCreator from './sprite/spriteCreator';

export default class ObjectCreator {
  constructor(gameObjects) {
    this.gameObjects = gameObjects;
    this.spriteCreator = spriteCreator;
  }

  sprite(key, texture, size, attrs) {
    this.gameObjects.add(key, spriteCreator(texture, size, attrs));
    return this;
  }
}
