import { Game } from './game';
import { Bird } from './bird';
import { Background } from './background';
import { Sprite } from './sprite';

function getAsset(name) {
  const asset = new Image();
  asset.src = `img/${name}`;
  return asset;
};

// const this.pipe = [];
// function pipeGenerator() {
//     this.pipe.push({
//       x: 0,
//       y: Math.floor(Math.random() * 50) + 50
//     });
//     if (this.pipe.length > 5) {
//       this.pipe.shift();
//     }
//     console.table(this.pipe);
// }

class Counter {
  constructor(ticks) {
    this.ticks = ticks;
    this.counter = 0;
    this.finish = false;
  }
  set setCounter(ticks) {
    this.ticks = ticks;
  }
  get isFinished() {
    return this.finish;
  }
  start() {
    this.counter++;
    if (this.counter > this.ticks) {
      // this.counter = 0;
      this.finish = true;
    }
  }
  reset() {
    this.finish = false;
    this.counter = 0;
  }
};
class Frontground extends Sprite {
  constructor() {
    super({
      asset: 'fg.png',
      frameWidth: 336,
      frameHeight: 112
    });
    this.x = 0;
  }
  update(dt) {
    super.update(dt);
    this.x--;
    if (this.x < -48) {
      this.x = 0;
    }
  }
  render(ctx, cvs) {
    super.drawStaticSprite(ctx, this.x, cvs.height - this.frameHeight, 0, 0, 0);
  }
}
class Pipe extends Sprite {
  constructor(color) {
    super({
      asset: 'pipes.png',
      frameWidth: 52,
      frameHeight: 320
    });
    this.color = color;
    this.palette = {
      day: 0,
      night: 1,
      top: 0,
      bottom: 1
    };
    this.x = 0;
    this.arr = [{
      x: Math.floor(Math.random() * 50) + 50,
      y: Math.floor(Math.random() * 50) + 50
    }];
  }
  update(dt) {
    super.update(dt);
  }
  render(ctx, x, y, dir) {
    super.drawStaticSprite(ctx, x, y, 0, this.palette[this.color], this.palette[dir]);
  }
}

function pip() {
  const array = [];
  for (let i = 0; i < 3; i++) {
    array[i] = new Pipe('night');
  }
  return array;
}


class GameScene {
  constructor(game) {
    this.game = game;
    this.gravity = 0.4;
    this.speed = -this.gravity * 20;
    this.x = game.cvs.width / 3;
    this.y = 200;
    this.degree = 0;
    this.counter = 0
    this.bird = new Bird('red');
    this.pipe = new Pipe('day');
    this.pipes = pip();
    this.bg = new Background('day');
    this.fg = new Frontground();
    this.count1 = new Counter(40);
    this.count2 = new Counter(100);
    this.flappying = true;
  }
  update(dt) {
    this.bird.update();
    this.pipe.update();
    this.bg.update();
    this.fg.update();

    

    // Bird stand by mode
    this.counter++;
    this.y = 200 + Math.sin((this.counter * Math.PI / 180) * 5) * 5;
    
    // Bird game mode
    // this.speed += this.gravity;
    // this.currentSpeed = Math.min(50, this.speed);
    // this.y += this.currentSpeed;
    // this.currentDegree = Math.min(90, this.degree);
    
    // if (this.game.checkKeyPress(32)) {
    //   this.count1.reset();
    //   this.flappying = true;
    //   this.speed = -this.gravity * 20;
    //   this.degree = -25;
    // }
    // if (this.flappying) {
    //   this.count1.start();
    //   if (this.count1.isFinished) {
    //     this.flappying = false;
    //   }
    // }
    // if (!this.flappying) this.degree += 5;
  }
  render(dt, cvs, ctx) {
    this.bg.render(ctx);
    this.bird.render(ctx, game.cvs.width / 3, this.y, this.currentDegree, this.flappying);
    // this.pipe.render(ctx, 0, 0, 'top');
    this.pipes.forEach(pipe => {
      pipe.render(ctx, this.x++, 0, 'top')
    });
    this.fg.render(ctx, cvs);
  }
};

function drawRotated(ctx, image, x, y, degrees) {
  if(!ctx || !image) return;
  ctx.save();
  ctx.translate(x + image.width / 2, y + image.height / 2);
  ctx.rotate(degrees * Math.PI / 180);
  ctx.drawImage(image, -image.width / 2, -image.height / 2);
  ctx.restore();
};

const cvs = document.querySelector('#flappy')
const game = new Game(cvs, GameScene);