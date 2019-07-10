import AnimatedSprite from './AnimatedSprite';
import StaticSprite from './StaticSprite';

export default (imageAsset, animationSpeed) => {
  const { asset, spritesheet } = imageAsset;
  const Type = animationSpeed ? AnimatedSprite : StaticSprite;

  return new Type(asset, ...spritesheet, animationSpeed);
};
