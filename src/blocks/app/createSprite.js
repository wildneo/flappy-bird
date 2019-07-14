import AnimatedSprite from './AnimatedSprite';
import StaticSprite from './StaticSprite';

export default (imageAsset, initPosition = [], animationSpeed) => {
  const { asset, spritesheet } = imageAsset;
  const Type = animationSpeed ? AnimatedSprite : StaticSprite;

  return new Type(asset, ...spritesheet, ...initPosition, animationSpeed);
};
