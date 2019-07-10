import { getAsset } from './assets';
import create from './create';
import render from './render';

export default class TestScene {
  constructor(game, storage) {
    this.game = game;
    this.storage = storage;
    this.storage
      .add('bg', create(getAsset('bg.png')))
      .add('bird', create(getAsset('bird.png'), [70, 180, 0], 8))
      .add('score', create(getAsset('digits_lg.png'), [132, 50, 0]))
      .add('fg', create(getAsset('fg.png'), [0, 400, 0]))
      .add('ready', create(getAsset('titles.png'), [44, 102, 0]))
      .add('tap', create(getAsset('tap.png'), [87, 170, 0]));

    this.bg = this.storage.getObject('bg');
    this.bird = this.storage.getObject('bird');

    this.counter = 0;
  }

  update(dt) {
    // Bird stand by mode
    this.counter += 1;
    this.bird.y = 200 + Math.sin((this.counter * Math.PI / 180) * 5) * 5;
  }

  render(dt, cvs, ctx) {
    render(this.storage, ctx);
  }
}
