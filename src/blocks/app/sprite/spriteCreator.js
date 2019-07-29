import { getAsset } from '../assets';
import Sprite from './Sprite';

export default (texture, size, attrs) => (position) => {
  const [width, height] = size;
  const [x, y, angle] = position;
  const newSprite = new Sprite(getAsset(texture), width, height, x, y, angle);
  if (attrs) {
    Object.entries(attrs).forEach(([key, value]) => {
      const iter = () => {

      };
      // newSprite[key] = value;
    });
  }

  return newSprite;
};
