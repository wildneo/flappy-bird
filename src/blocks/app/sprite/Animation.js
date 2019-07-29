export default class Animation {
  constructor(sprite) {
    this.sprite = sprite;
    this.tickCounter = 0;
    this.flag = true;
  }

  set tickPerFrame(ticks) {
    this.frameRate = ticks;
  }

  get tickPerFrame() {
    return this.frameRate || 0;
  }

  set endFrame(frame) {
    this.endingFrame = frame;
  }

  get endFrame() {
    return this.endingFrame || this.sprite.frame.framePerRow;
  }

  play() {
    this.flag = true;
  }

  stop() {
    this.flag = false;
  }

  isPlaying() {
    return this.flag;
  }

  isStopped() {
    return this.flag;
  }

  update() {
    if (this.tickCounter === (this.tickPerFrame - 1)) {
      this.sprite.frame.index = (this.sprite.frame.index + 1) % this.endFrame;
    }
    this.tickCounter = (this.tickCounter + 1) % this.tickPerFrame || 0;
  }
}
