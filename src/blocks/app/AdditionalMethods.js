import { getAsset } from './assets';
import createSprite from './createSprite';

export function standBy(speed, yPos) {
  const feq = 4;
  const amp = 4;
  this.counter = this.counter || 0;
  this.counter += speed;
  if (this.counter > 1000) {
    this.counter = 0;
  }
  this.y = yPos + Math.sin((this.counter * Math.PI / 180) * feq) * amp;
}


export function fgMove(speed) {
  if (this.x < -47) {
    this.x = 0;
  }
  this.x -= speed;
}

export function setScore(score) {
  this.score = score.toString().split('').map(e => +e);

  if (this.size !== this.score.length) {
    this.clear();

    const xOrigin = (288 - 24 * this.score.length) / 2;

    this.score.forEach((e, index) => {
      this.appendChild(createSprite(getAsset('digits_lg.png'), [xOrigin + 24 * index, 50, 0]));
    });
  }

  this.entry.forEach((item, i) => {
    const child = item;
    child.index = this.score[i];
  });
}

export function pipeGenerator(speed) {
  this.score = this.score || 0;
  this.counter = this.counter || 0;
  this.counter += speed;

  const gap = 100;

  if (this.counter >= 200) {
    this.counter = 0;
    const x = 288;
    const y = Math.round(Math.random() * -100) - 100;
    const topPipe = this.appendChild(createSprite(getAsset('pipes.png'), [x, y]));
    const bottomPipe = this.appendChild(createSprite(getAsset('pipes.png'), [x, topPipe.y + topPipe.height + gap]));
    bottomPipe.index = 1;
    this.score = this.size === 2 ? 0 : this.score += 1;
  }

  if (this.size > 4) this.group.shift();

  this.entry.forEach((item) => {
    const child = item;
    child.x -= speed;
  });
}
