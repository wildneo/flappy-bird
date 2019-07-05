export default class Sprite {
  constructor(image, width, height) {
    this.image = image;
    this.frameWidth = width || this.image.width;
    this.frameHeight = height || this.image.height;
    this.spritePerRow = Math.floor(this.image.width / this.frameWidth);
    this.spritePerCol = Math.floor(this.image.height / this.frameHeight);
    this.frameIndex = 0;
  }

  set index(index) {
    this.frameIndex = index;
  }

  get index() {
    return this.frameIndex;
  }

  get width() {
    return this.frameWidth;
  }

  get height() {
    return this.frameHeight;
  }

  get sx() {
    return 0;
  }

  get sy() {
    return 48;
  }
}
