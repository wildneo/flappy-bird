import AnimatedSprite from './AnimatedSprite';
import StaticSprite from './StaticSprite';

export default (key, imageAsset, initPosition = [], animationSpeed) => {
  const { asset, spritesheet } = imageAsset;
  const Type = animationSpeed ? AnimatedSprite : StaticSprite;

  return [key, new Type(asset, ...spritesheet, ...initPosition, animationSpeed)];
};
