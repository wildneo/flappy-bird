import { getAsset } from './assets';
import createSprite from './createSprite';
import createGroup from './createGroup';

function sinusMovement(counter, yPos) {
  const feq = 4;
  const amp = 1.5;
  this.y = yPos + Math.sin((counter * Math.PI / 180) * feq) * amp;
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
  this.children.forEach((e, i) => {
    e.index = this.score[i];
  });
}

export default class TestScene {
  constructor(game, layer) {
    this.game = game;
    this.layer = layer;
    this.layer
      .add('bg', createSprite(getAsset('bg.png')))
      .add('bird', createSprite(getAsset('bird.png'), [70, 200, 0], 8))
      .add('score', createGroup())
      .add('fg', createSprite(getAsset('fg.png'), [0, 400, 0]))
      .add('ready', createSprite(getAsset('titles.png'), [44, 120, 0]))
      .add('tap', createSprite(getAsset('tap.png'), [87, 210, 0]));

    this.score = this.layer.getChild('score');
    this.bird = this.layer.getChild('bird');
    this.fg = this.layer.getChild('fg');
    this.bg = this.layer.getChild('bg');
    this.ready = this.layer.getChild('ready');

    this.ready.offset = 1;
    this.bird.offset = this.game.constants.BIRD.color;
    // this.bird.alpha = 0.2;
    this.bg.offset = this.game.constants.BACKGROUND.theme;

    // console.log(this.score);

    this.counter = 0;
    this.speed = this.game.constants.SPEED;
  }

  update(dt) {
    // Bird stand by mode
    this.counter += this.speed * dt;
    sinusMovement.call(this.bird, this.counter, this.bird.y);

    fgMove.call(this.fg, this.speed * dt);

    setScore.call(this.score, 1234567890);
  }

  render(dt, cvs, ctx) {
    this.layer.render(ctx);
  }
}
