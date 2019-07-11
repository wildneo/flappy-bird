import { getAsset } from './assets';
import createSprite from './createSprite';
import render from './render';
import GameObject from './GameObject';

function birdStandBy(counter) {
  this.getEntry(0).y = 190 + Math.sin((counter * Math.PI / 180) * 5) * 5;
}

function fgMove() {
  if (this.getEntry(0).x < -47) {
    this.getEntry(0).x = 0;
  }
  this.getEntry(0).x -= 1;
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
        createSprite(0, getAsset('bird.png'), [70, 180, 0], 8),
      ))
      .add('score', new GameObject(
        createSprite(0, getAsset('digits_lg.png'), [132, 50, 0]),
      ))
      .add('fg', new GameObject(
        createSprite(0, getAsset('fg.png'), [0, 400, 0]),
      ))
      .add('ready', new GameObject(
        createSprite(0, getAsset('titles.png'), [44, 102, 0]),
      ))
      .add('tap', new GameObject(
        createSprite(0, getAsset('tap.png'), [87, 170, 0]),
      ));

    this.score = this.storage.getObject('score');
    this.score.addEntry(createSprite(1, getAsset('digits_lg.png')));

    this.bird = this.storage.getObject('bird');
    this.fg = this.storage.getObject('fg');
    this.ready = this.storage.getObject('ready');
    this.ready.getEntry(0).spriteIndex = 1;

    this.counter = 0;

    // console.log(this.score);
  }

  update(dt) {
    // Bird stand by mode
    this.counter += 1;
    birdStandBy.call(this.bird, this.counter);

    fgMove.call(this.fg);
  }

  render(dt, cvs, ctx) {
    render(this.storage, ctx);
  }
}
