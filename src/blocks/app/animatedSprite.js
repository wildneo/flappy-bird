import Sprite from './sprite';
import drawSprite from './drawSprite';

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

  isPlaying() {
    return this.animationFlag;
  }

  isStopped() {
    return this.animationFlag;
  }

  update() {
    if (this.tickCounter === (this.tickPerFrame - 1)) {
      this.index = (this.index + 1) % this.endFrame;
    }
    this.tickCounter = (this.tickCounter + 1) % this.tickPerFrame;
  }

  render(ctx) {
    if (this.animationFlag) {
      this.update();
    }
    drawSprite(ctx, this);
  }
}
