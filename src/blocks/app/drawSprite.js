export default (context, image, x, y, angle) => {
  if (!context || !image) {
    return;
  }
  context.save();
  context.translate(x + image.frameWidth / 2, y + image.frameHeight / 2);
  context.rotate(angle * Math.PI / 180);
  context.drawImage(
    image,
    image.sX,
    image.sY,
    image.frameWidth,
    image.frameHeight,
    -image.frameWidth / 2,
    -image.frameHeight / 2,
    image.frameWidth,
    image.frameHeight,
  );
  context.restore();
};
