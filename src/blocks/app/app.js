import { Game } from './game';
import { Bird } from './bird';
import { Background } from './background';
import { Counter } from './counter';
import { Frontground } from './frontground';

// import { Sprite } from './sprite';
// import { Object as ObjectClass } from './object';

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

class GameScene {
  constructor(game) {
    this.game = game;
    this.gravity = 0.4;
    this.speed = -this.gravity * 20;
    this.x = game.cvs.width / 3;
    this.y = 200;
    this.degree = 0;
    this.counter = 0
    this.bird = new Bird({color: 'blue'});
    this.bg = new Background({color: 'day'});
    this.fg = new Frontground();
    // this.pipe = new Pipe('day');
    this.count1 = new Counter(35);
    this.count2 = new Counter(100);
    this.flappying = true;
  }
  // eslint-disable-next-line no-unused-vars
  update(dt) {
    
    this.bird.update(dt);
    this.fg.update(dt);
    // this.pipe.update(dt);
    // this.bg.update(dt);
    
    this.counter++;
    // this.y = 200 + Math.sin((this.counter * Math.PI / 180) * 5) * 5;
    this.y++;
    this.bird.setPosition(this.x, this.y, 0);
    console.log(this.bird.distanceTo(this.fg));

    if (this.bird.distanceTo(this.fg).dy + this.bird.height == 0) this.game.setScene(GameScene);
    

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
    this.bg.render(cvs, ctx);
    this.bird.render(cvs, ctx);
    this.fg.render(cvs, ctx);
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