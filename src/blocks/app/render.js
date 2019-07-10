import drawSprite from './drawSprite';

export default (collection, context) => {
  const objects = collection.getObjects();

  return objects.forEach(object => (
    drawSprite(context, object.entity, object.x, object.y, object.angle)
  ));
};
