export default class Sprite extends Image {
  constructor(spritePerRow = 1, spritePerCol = 1) {
    super();
    this.index = {};
    this.spriteSheet = { spritePerRow, spritePerCol };
  }

  set i(index) {
    this.horizontIndex = Math.floor(index % this.spritePerRow);
    this.verticalIndex = Math.floor(index / this.spritePerRow);
  }

  get i() {
    return (this.spritePerRow * this.verticalIndex) + this.horizontIndex;
  }

  set horizontIndex(index) {
    this.index.h = index;
  }

  set verticalIndex(index) {
    this.index.v = index;
  }

  get horizontIndex() {
    return this.index.h || 0;
  }

  get verticalIndex() {
    return this.index.v || 0;
  }

  get spritePerRow() {
    return this.spriteSheet.spritePerRow;
  }

  get spritePerCol() {
    return this.spriteSheet.spritePerCol;
  }

  get frameWidth() {
    return this.width / this.spritePerRow;
  }

  get frameHeight() {
    return this.height / this.spritePerCol;
  }

  get sX() {
    return this.frameWidth * this.horizontIndex;
  }

  get sY() {
    return this.frameHeight * this.verticalIndex;
  }
}
