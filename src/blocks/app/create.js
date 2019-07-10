import GameObject from './GameObject';
import createSprite from './createSprite';

export default (asset, initPosition = [], animationSpeed) => {
  const gameObject = new GameObject(...initPosition);
  gameObject.addSprite = createSprite(asset, animationSpeed);

  return gameObject;
};
