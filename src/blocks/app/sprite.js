export default class Sprite {
  constructor(image, spritePerRow = 1, spritePerCol = 1, x = 0, y = 0, angle = 0) {
    this.img = image;
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

  set alpha(alpha) {
    this.spriteAlpha = alpha;
  }

  set offset(offset) {
    this.spriteOffset = offset;
    this.index = this.index;
  }

  set index(index) {
    this.horizontIndex = Math.floor((index + this.offset) % this.spritePerRow);
    this.verticalIndex = Math.floor((index + this.offset) / this.spritePerRow);
  }

  set horizontIndex(index) {
    this.spriteSheet.horizontIndex = index;
  }

  set verticalIndex(index) {
    this.spriteSheet.verticalIndex = index;
  }

  get index() {
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

  get alpha() {
    return this.spriteAlpha || 1;
  }

  get offset() {
    return this.spriteOffset || 0;
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

  get image() {
    return this.img;
  }
}
