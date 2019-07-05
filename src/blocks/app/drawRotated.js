export default (context, image, x, y, degrees) => {
  if (!context || !image) {
    return;
  }
  context.save();
  context.translate(x + image.width / 2, y + image.height / 2);
  context.rotate(degrees * Math.PI / 180);
  context.drawImage(image, -image.width / 2, -image.height / 2);
  context.restore();
};
