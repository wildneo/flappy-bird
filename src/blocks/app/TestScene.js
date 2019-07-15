import { getAsset } from './assets';
import createSprite from './createSprite';
import createGroup from './createGroup';

function sinusMovement(speed, yPos) {
  const feq = 5;
  const amp = 1;
  this.counter = this.counter || 0;
  this.counter += speed;
  if (this.counter > 1000) {
    this.counter = 0;
  }
  this.y = yPos + Math.sin((this.counter * Math.PI / 180) * feq) * amp;
}


function birdMove(speed) {
  if (this.x < -47) {
    this.x = 0;
  }
  this.x -= speed;
}

function fgMove(speed) {
  if (this.x < -47) {
    this.x = 0;
  }
  this.x -= speed;
}

function setScore(score) {
  this.score = score.toString().split('').map(e => +e);

  if (this.size !== this.score.length) {
    this.clear();

    const xOrigin = (288 - 24 * this.score.length) / 2;

    this.score.forEach((e, index) => {
      this.appendChild(createSprite(getAsset('digits_lg.png'), [xOrigin + 24 * index, 50, 0]));
    });
  }

  this.children.forEach((item, i) => {
    const child = item;
    child.index = this.score[i];
  });
}

function pipeGenerator(speed) {
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
  }

  if (this.size > 6) this.group.shift();

  this.children.forEach((item) => {
    const child = item;
    child.x -= speed;
  });
}

export default class TestScene {
  constructor(game, layer) {
    this.game = game;
    this.layer = layer;
    this.layer
      .add('bg', createSprite(getAsset('bg.png')))
      .add('bird', createSprite(getAsset('bird.png'), [70, 200, 0], 8))
      .add('pipes', createGroup())
      .add('score', createGroup())
      .add('fg', createSprite(getAsset('fg.png'), [0, 400, 0]))
      .add('tap', createSprite(getAsset('tap.png'), [87, 210, 0]))
      .add('ready', createSprite(getAsset('titles.png'), [44, 120, 0]));

    this.pipes = this.layer.getChild('pipes');
    this.score = this.layer.getChild('score');
    this.bird = this.layer.getChild('bird');
    this.fg = this.layer.getChild('fg');
    this.bg = this.layer.getChild('bg');
    this.ready = this.layer.getChild('ready');
    this.tap = this.layer.getChild('tap');

    this.ready.offset = 1;
    this.bird.offset = this.game.constants.BIRD.color;
    this.bg.offset = this.game.constants.BACKGROUND.theme;

    // this.bird.alpha = 0.2;
    // console.log(this.score);

    this.counter = 0;
    this.alpha = 100;
  }

  update(dt) {
    this.speed = this.game.constants.SPEED * dt;

    if (this.alpha > 0) {
      this.alpha -= 5;
    }
    this.ready.opacity = this.alpha;
    this.tap.opacity = this.alpha;


    // Bird stand by mode
    // sinusMovement.call(this.bird, this.speed, this.bird.y);

    fgMove.call(this.fg, this.speed);

    // this.counter += 1;
    // setScore.call(this.score, this.counter);
    this.gravity = this.game.constants.GRAVITY;
    this.counter += this.gravity;
    this.currentSpeed = Math.min(50, this.counter);
    this.bird.y += this.currentSpeed;
    this.currentAngle = Math.min(90, this.angle);

    if (this.game.checkKeyPress(32)) {
      this.counter = -this.gravity * 15;
    }

    pipeGenerator.call(this.pipes, this.speed);

    console.log(this.alpha);
  }

  render(dt, cvs, ctx) {
    this.layer.render(ctx);
  }
}
