import { Game } from './game';
import { Bird } from './bird';
import { Background } from './background';
import { Sprite } from './sprite';
import { Counter } from './counter';
import { Frontground } from './frontground';
import { Object as ObjectClass } from './object';

// class Pipe extends Sprite {
//   constructor(color) {
//     super({
//       asset: 'pipes.png',
//       frameWidth: 52,
//       frameHeight: 320
//     });
//     this.color = color;
//     this.palette = {
//       day: 0,
//       night: 1,
//       top: 0,
//       bottom: 1
//     };
//     this.gap = 100;
//     this.pipes = [];
//     this.count1 = new Counter(180);
//   }

//   update(dt) {
//     super.update(dt);
//     this.count1.start()
//     if (this.count1.isFinished) {
//       this.count1.reset();
//       this.pipes.push({
//         x: 0,
//         y: Math.floor(Math.random() * 150) + 150
//       });
//     }
//     if (this.pipes.length > 3) {
//       this.pipes.shift();
//     }
//     this.pipes.forEach(item => {
//       item.x--;
//     });
//   }
//   render(cvs, ctx) {
//     this.pipes.forEach(pipe => {
//       super.drawStaticSprite(ctx, pipe.x + cvs.width, pipe.y - this.frameHeight - this.gap, 0, this.palette[this.color], this.palette.top);
//       super.drawStaticSprite(ctx, pipe.x + cvs.width, pipe.y, 0, this.palette[this.color], this.palette.bottom);
//     });
//   }
// }
class Bird1 extends ObjectClass {
  constructor(color) {
    super(100, 100, 0);
    this.sprite = new Sprite({
      asset: 'bird.png',
      frameWidth: 34,
      frameHeight: 24,
      tickPerFrame: 8
    });
    this.color = color;
    this.palette = {
      red: 0,
      blue: 1,
      yellow: 2
    };
    this.isAnimate = true;
  }
  update(dt) {
    super.update(dt);
    this.sprite.update(dt)
  }
  render(cvs, ctx) {
    this.isAnimate
      ? this.sprite.drawAnimateSprite(ctx, this.x, this.y, this.angle, this.palette[this.color], 0)
      : this.sprite.drawStaticSprite(ctx, this.x, this.y, this.angle, this.palette[this.color], 1);
  }
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
    // this.pipe = new Pipe('day');
    this.bg = new Background('day');
    this.fg = new Frontground();
    this.count1 = new Counter(35);
    this.count2 = new Counter(100);
    this.flappying = true;
    this.test = new Bird1('blue');
    
  }
  // eslint-disable-next-line no-unused-vars
  update(dt) {
    
    // this.bird.update(dt);
    // this.pipe.update(dt);
    // this.bg.update(dt);
    this.fg.update(dt);
    this.test.update(dt);
    
    this.counter++;
    this.y = 200 + Math.sin((this.counter * Math.PI / 180) * 5) * 5;
    // this.y++;
    this.test.setPosition(this.x, this.y, 0);
    console.log(this.test.distanceTo(this.fg));
    

    // this.test.setDirection()
    // Bird stand by mode
    // this.counter++;
    // this.y = 200 + Math.sin((this.counter * Math.PI / 180) * 5) * 5;
    
    // if (this.y > 400) this.game.setScene(GameScene);
    
    // Bird game mode
    // this.speed += this.gravity;
    // this.currentSpeed = Math.min(50, this.speed);
    // this.y += this.currentSpeed;
    // this.currentDegree = Math.min(90, this.degree);
    
    // if (this.game.checkKeyPress(32)) {
    //   this.count1.reset();
    //   this.flappying = true;
    //   this.speed = -this.gravity * 15;
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
    this.test.render(cvs, ctx);
    this.fg.render(cvs, ctx);
    // this.bird.render(ctx, this.x, this.y, this.currentDegree, this.flappying);
    // this.pipe.render(ctx, 0, 0, 'top');
    // this.pipe.render(cvs, ctx, this.x, 0);
  }
}


// eslint-disable-next-line no-unused-vars
function drawRotated(ctx, image, x, y, degrees) {
  if(!ctx || !image) return;
  ctx.save();
  ctx.translate(x + image.width / 2, y + image.height / 2);
  ctx.rotate(degrees * Math.PI / 180);
  ctx.drawImage(image, -image.width / 2, -image.height / 2);
  ctx.restore();
}

// eslint-disable-next-line no-unused-vars
function getAsset(name) {
  const asset = new Image();
  asset.src = `img/${name}`;
  return asset;
}

const cvs = document.querySelector('#flappy')
// eslint-disable-next-line no-unused-vars
const game = new Game(cvs, GameScene);