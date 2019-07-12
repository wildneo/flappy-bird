import drawSprite from './drawSprite';
import Sprite from './Sprite';

export default (collection, context) => {
  const objects = collection.getObjects();
  const children = objects.reduce((acc, e) => ([...acc, ...e.children]), []);

  return children.forEach((object) => {
    if (object instanceof Sprite) {
      drawSprite(context, object, object.x, object.y, object.angle);
    }
  });
};
