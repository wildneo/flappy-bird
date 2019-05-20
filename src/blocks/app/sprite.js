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
  update(dt) {
    this.tickCounter++;
    if (this.tickCounter > this.tickPerFrame) {
      this.tickCounter = 0;
      if (this.frameIndex < this.spritePerRow - 1) {
        this.frameIndex++;
      }
      else {
        this.frameIndex = 0;
      }
    }
  }
  drawAnimateSprite(ctx, x, y, deg, row, col) {
    this.drawStaticSprite(ctx, x, y, deg, row, this.frameIndex);
  }
  drawStaticSprite(ctx, x, y, deg, row, col) {
    ctx.save();
    ctx.translate(x + this.frameWidth / 2, y + this.frameHeight / 2);
    ctx.rotate(deg * Math.PI / 180);
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
    // ctx.drawImage(
    //   this.image,
    //   col * this.frameWidth,
    //   row * this.frameHeight,
    //   this.frameWidth,
    //   this.frameHeight,
    //   x,
    //   y,
    //   this.frameWidth,
    //   this.frameHeight);
  }
};
