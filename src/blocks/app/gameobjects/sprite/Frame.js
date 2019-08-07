export default class Frame {
  constructor(sprite) {
    this.framePerRow = Math.floor(sprite.image.width / sprite.width);
    this.framePerCol = Math.floor(sprite.image.height / sprite.height);
  }

  set index(index) {
    this.horizontIndex = Math.floor((index + this.offset) % this.framePerRow);
    this.verticalIndex = Math.floor((index + this.offset) / this.framePerRow);
  }

  get index() {
    return (this.framePerRow * this.verticalIndex) + this.horizontIndex;
  }

  set horizontIndex(index) {
    this.frameHorizontIndex = index;
  }

  get horizontIndex() {
    return this.frameHorizontIndex || 0;
  }

  set verticalIndex(index) {
    this.frameVerticalIndex = index;
  }

  get verticalIndex() {
    return this.frameVerticalIndex || 0;
  }

  set offset(offset) {
    this.frameOffset = offset;
    this.index = this.index;
  }

  get offset() {
    return this.frameOffset || 0;
  }
}