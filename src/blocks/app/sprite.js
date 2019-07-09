export default class Sprite {
  constructor(image, spritePerRow = 1, spritePerCol = 1) {
    this.image = image;
    this.spriteSheet = { spritePerRow, spritePerCol };
    // return this.image;
  }

  set spriteIndex(index) {
    this.horizontIndex = Math.floor(index % this.spritePerRow);
    this.verticalIndex = Math.floor(index / this.spritePerRow);
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
    return this.image.width / this.spritePerRow;
  }

  get height() {
    return this.image.height / this.spritePerCol;
  }

  get sX() {
    return this.width * this.horizontIndex;
  }

  get sY() {
    return this.height * this.verticalIndex;
  }
}
