import drawSprite from './drawSprite';
import Sprite from './Sprite';

export default (collection, context) => {
  const objects = collection.getObjects();
  const entries = objects.reduce((acc, e) => ([...acc, ...e.entries]), []);

  return entries.forEach((object) => {
    if (object instanceof Sprite) {
      drawSprite(context, object, object.x, object.y, object.angle);
    }
  });
};
