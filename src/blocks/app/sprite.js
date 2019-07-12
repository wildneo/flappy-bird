export default class Sprite {
  constructor(image, spritePerRow = 1, spritePerCol = 1, x = 0, y = 0, angle = 0) {
    this.img = image;
    this.offset = 0;
    this.spriteSheet = { spritePerRow, spritePerCol };
    this.position = { x, y, angle };
  }

  set x(x) {
    this.position.x = x;
  }

  set y(y) {
    this.position.y = y;
  }

  set angle(angle) {
    this.position.angle = angle;
  }

  set spriteOffset(offset) {
    this.offset = offset;
    this.spriteIndex = this.spriteIndex;
  }

  set spriteIndex(index) {
    this.horizontIndex = Math.floor((index + this.offset) % this.spritePerRow);
    this.verticalIndex = Math.floor((index + this.offset) / this.spritePerRow);
  }

  set horizontIndex(index) {
    this.spriteSheet.horizontIndex = index;
  }

  set verticalIndex(index) {
    this.spriteSheet.verticalIndex = index;
  }

  get spriteIndex() {
    return (this.spritePerRow * this.verticalIndex) + this.horizontIndex;
  }

  get horizontIndex() {
    return this.spriteSheet.horizontIndex || 0;
  }

  get verticalIndex() {
    return this.spriteSheet.verticalIndex || 0;
  }

  get spritePerRow() {
    return this.spriteSheet.spritePerRow;
  }

  get spritePerCol() {
    return this.spriteSheet.spritePerCol;
  }

  get width() {
    return this.img.width / this.spritePerRow;
  }

  get height() {
    return this.img.height / this.spritePerCol;
  }

  get sX() {
    return this.width * this.horizontIndex;
  }

  get sY() {
    return this.height * this.verticalIndex;
  }

  get x() {
    return this.position.x;
  }

  get y() {
    return this.position.y;
  }

  get angle() {
    return this.position.angle;
  }
}
