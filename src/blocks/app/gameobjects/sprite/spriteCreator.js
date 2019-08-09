import addAttributes from '../../utils/addAttributes';
import Sprite from './Sprite';

export default (texture, size, attrs) => (position = []) => {
  const [width, height] = size;
  const [x, y, angle] = position;
  const newSprite = new Sprite(texture, width, height, x, y, angle);
  if (attrs) {
    addAttributes(newSprite, attrs);
  }

  return newSprite;
};
