import { getAsset } from '../assets';
import Sprite from './Sprite';

// Сделать замыкание
export default (texture, size, attrs) => {
  const newSprite = new Sprite(getAsset(texture), ...size);
  Object.entries(attrs).forEach(([key, value]) => {
    newSprite[key] = value;
  });
  return newSprite;
};
