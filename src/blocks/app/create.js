import GameObject from './GameObject';
import createSprite from './createSprite';

export default (asset, initPosition = [], animationSpeed) => {
  const gameObject = new GameObject();
  gameObject.addEntry(createSprite(asset, initPosition, animationSpeed));

  return gameObject;
};
