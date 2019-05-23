import { Game } from './game';
import { Bird } from './bird';
import { Background } from './background';
import { Counter } from './counter';
import { Frontground } from './frontground';
import { PipeGenerator } from './pipes';

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
    this.pipes = new PipeGenerator({color: 'day'});
    this.bg = new Background({color: 'day'});
    this.fg = new Frontground();
    this.count1 = new Counter(35);
    this.count2 = new Counter(100);
    this.flappying = true;
  }
  update(dt) {
    
    this.bird.update(dt);
    this.fg.update(dt);
    this.pipes.update(dt);
    
    this.counter++;
    // this.y = 200 + Math.sin((this.counter * Math.PI / 180) * 5) * 5;
    // this.y++;
    this.bird.setPosition(this.x, this.y, 0);
    // console.log(this.bird.distanceTo(this.fg));

    if (this.bird.distanceTo(this.fg).dy + this.bird.height > 0) this.game.setScene(GameScene);
    

    // Bird stand by mode
    // this.counter++;
    // this.y = 200 + Math.sin((this.counter * Math.PI / 180) * 5) * 5;
    
    // if (this.y > 400) this.game.setScene(GameScene);
    
    // Bird game mode
    this.speed += this.gravity;
    this.currentSpeed = Math.min(50, this.speed);
    this.y += this.currentSpeed;
    this.currentDegree = Math.min(90, this.degree);
    
    if (this.game.checkKeyPress(32)) {
      this.count1.reset();
      this.flappying = true;
      this.speed = -this.gravity * 15;
      this.degree = -25;
    }
    if (this.flappying) {
      this.count1.start();
      if (this.count1.isFinished) {
        this.flappying = false;
      }
    }
    if (!this.flappying) this.degree += 5;
  }
  render(dt, cvs, ctx) {
    this.bg.render(cvs, ctx);
    this.bird.render(cvs, ctx);
    this.pipes.render(cvs, ctx);
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