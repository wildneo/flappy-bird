import Sprite from './Sprite';

export default class AnimatedSprite extends Sprite {
  constructor(image, spritePerRow, spritePerCol, x, y, angle, tickPerFrame, endFrame) {
    super(image, spritePerRow, spritePerCol, x, y, angle);
    this.tickPerFrame = tickPerFrame;
    this.endFrame = endFrame || this.spritePerRow;
    this.animationFlag = true;
    this.tickCounter = 0;
  }

  play() {
    this.animationFlag = true;
  }

  stop() {
    this.animationFlag = false;
  }

  update() {
    if (this.tickCounter === (this.tickPerFrame - 1)) {
      this.spriteIndex = (this.spriteIndex + 1) % this.endFrame;
    }
    this.tickCounter = (this.tickCounter + 1) % this.tickPerFrame;
  }

  get image() {
    if (this.animationFlag) {
      this.update();
    }
    return this.img;
  }
}
