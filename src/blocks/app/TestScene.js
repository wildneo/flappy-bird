import { getAsset } from './assets';
import createSprite from './createSprite';
import render from './render';
import GameObject from './GameObject';

function birdStandBy(counter) {
  this.getChild(0).y = 200 + Math.sin((counter * Math.PI / 180) * 5) * 5;
}

function fgMove(speed) {
  if (this.getChild(0).x < -47) {
    this.getChild(0).x = 0;
  }
  this.getChild(0).x -= speed;
}

function setScore(score) {
  this.score = score.toString().split('').map(e => +e);

  if (this.storage.size !== this.score.length) {
    this.storage.clear();
    const xOrigin = (288 - 24 * this.score.length) / 2;
    this.score.forEach((e, index) => {
      this.addChild(createSprite(index, getAsset('digits_lg.png'), [xOrigin + 24 * index, 50, 0]));
    });
  }
  // console.log(this.storage);

  this.children.forEach((e, index) => {
    e.spriteIndex = this.score[index];
  });
}

export default class TestScene {
  constructor(game, storage) {
    this.game = game;
    this.storage = storage;
    this.storage
      .add('bg', new GameObject(
        createSprite(0, getAsset('bg.png')),
      ))
      .add('bird', new GameObject(
        createSprite(0, getAsset('bird.png'), [70, 190, 0], 8),
      ))
      .add('score', new GameObject(
        createSprite(0, getAsset('digits_lg.png'), [132, 50, 0]),
      ))
      .add('fg', new GameObject(
        createSprite(0, getAsset('fg.png'), [0, 400, 0]),
      ))
      .add('ready', new GameObject(
        createSprite(0, getAsset('titles.png'), [44, 120, 0]),
      ))
      .add('tap', new GameObject(
        createSprite(0, getAsset('tap.png'), [87, 210, 0]),
      ));

    this.score = this.storage.getObject('score');

    this.bird = this.storage.getObject('bird');
    this.fg = this.storage.getObject('fg');
    this.bg = this.storage.getObject('bg');
    this.ready = this.storage.getObject('ready');

    this.ready.getChild(0).spriteIndex = 1;
    this.bird.getChild(0).spriteOffset = this.game.constants.BIRD.color;
    this.bg.getChild(0).spriteOffset = this.game.constants.BACKGROUND.theme;

    console.log(this.bg.getChild(0));
    

    this.counter = 0;
    this.speed = 100;
  }

  update(dt) {
    // Bird stand by mode
    this.counter += this.speed * dt;
    birdStandBy.call(this.bird, this.counter);
    fgMove.call(this.fg, this.speed * dt);

    setScore.call(this.score, 1234567890);
  }

  render(dt, cvs, ctx) {
    render(this.storage, ctx);
  }
}
