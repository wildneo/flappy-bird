export default (context, sprite, x, y, angle) => {
  if (!context || !sprite) {
    return;
  }
  context.save();
  context.translate(x + sprite.width / 2, y + sprite.height / 2);
  context.rotate(angle * Math.PI / 180);
  context.drawImage(
    sprite.image,
    sprite.sX,
    sprite.sY,
    sprite.width,
    sprite.height,
    -sprite.width / 2,
    -sprite.height / 2,
    sprite.width,
    sprite.height,
  );
  context.restore();
};
