export default (context, sprite) => {
  const ctx = context;
  const { x, y, angle } = sprite.position;
  const halfWidth = sprite.width / 2;
  const halfHeight = sprite.height / 2;

  ctx.save();
  ctx.globalAlpha = sprite.spriteAlpha;
  ctx.translate(x + halfWidth, y + halfHeight);
  ctx.rotate(angle * Math.PI / 180);
  // TODO: Scale.
  ctx.drawImage(
    sprite.image,
    sprite.sX,
    sprite.sY,
    sprite.width,
    sprite.height,
    -halfWidth,
    -halfHeight,
    sprite.width,
    sprite.height,
  );
  ctx.restore();
};
