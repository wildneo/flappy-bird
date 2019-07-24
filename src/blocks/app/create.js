import { getAsset } from './assets';
import AnimatedSprite from './AnimatedSprite';
import StaticSprite from './StaticSprite';

export default class ObjectCreator {
  constructor(gameObjects) {
    this.gameObjects = gameObjects;
  }

  sprite(assetName, spritesheet, initPosition, animationSpeed) {
    const Type = animationSpeed ? AnimatedSprite : StaticSprite;

    this.gameObjects.add(assetName, new Type(getAsset(assetName), ...spritesheet, ...initPosition, animationSpeed));
    return this;
  }
}
