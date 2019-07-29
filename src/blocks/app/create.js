import spriteCreator from './sprite/spriteCreator';

export default class ObjectCreator {
  constructor(game) {
    this.game = game;
    this.spriteCreator = spriteCreator;
  }

  sprite(key, texture, size, attrs) {
    this.gameObjects.add(key, spriteCreator(texture, size, attrs));
    return this;
  }
}
