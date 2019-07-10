export class Sprite {
  constructor(options) {
    this.image = new Image();
    this.image.src = `img/${options.asset}`;
    this.frameWidth = options.frameWidth || this.image.width;
    this.frameHeight = options.frameHeight || this.image.height;
    this.image.onload = () => {
      this.spritePerRow = Math.floor(this.image.width / this.frameWidth);
      this.spritePerCol = Math.floor(this.image.height / this.frameHeight);
    };
    this.tickPerFrame = options.tickPerFrame || 0;
    this.tickCounter = 0;
    this.frameIndex = 0;
  }
  // eslint-disable-next-line no-unused-vars
  update(dt) {
    this.tickCounter++;
    if (this.tickCounter > this.tickPerFrame) {
      this.tickCounter = 0;
      this.frameIndex < this.spritePerRow - 1 ? this.frameIndex++ : this.frameIndex = 0;
    }
  }
  // eslint-disable-next-line no-unused-vars
  drawAnimateSprite(ctx, x, y, angle, row, col) {
    this.drawStaticSprite(ctx, x, y, angle, row, this.frameIndex);
  }

  drawStaticSprite(ctx, x, y, angle, row, col) {
    ctx.save();
    ctx.translate(x + this.frameWidth / 2, y + this.frameHeight / 2);
    ctx.rotate(angle * Math.PI / 180);
    ctx.drawImage(
      this.image,
      col * this.frameWidth,
      row * this.frameHeight,
      this.frameWidth,
      this.frameHeight,
      -this.frameWidth / 2,
      -this.frameHeight / 2,
      this.frameWidth,
      this.frameHeight);
    ctx.restore();
  }
}
