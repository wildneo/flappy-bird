import { Game } from './game';
import { Sprite } from './sprite';

function getAsset(name) {
  const asset = new Image();
  asset.src = `img/${name}`;
  return asset;
};

class Bird extends Sprite{
  constructor(scene, color) {
    super({
      asset: 'bird.png',
      frameWidth: 34,
      frameHeight: 24,
      tickPerFrame: 9
    });
    this.scene = scene;
    this.color = color;
    this.palette = {
      red: 0,
      blue: 1,
      yellow: 2
    };
  }
  update(dt) {
    super.update(dt);
  }
  render(ctx, x, y, deg, flappying) {
    flappying
    ? super.drawAnimateSprite(ctx, x, y, deg, this.palette[this.color], 0)
    : super.drawStaticSprite(ctx, x, y, deg, this.palette[this.color], 1);
  }
};

class GameScene {
  constructor(game) {
    this.game = game;
    this.x = game.cvs.width / 3;
    this.y = 200;
    this.degree = 0;
    this.speed = 0;
    this.gravity = 0.4;
    this.bird = new Bird(this, 'red');
    this.dg = new Sprite({
      asset: 'bg.png',
      frameWidth: 288,
      frameHeight: 512
    });
  }
  update(dt) {
    this.speed += this.gravity;
    this.currentSpeed = Math.min(50, this.speed);
    this.y += this.currentSpeed;
    this.currentDegree = Math.min(90, this.degree);
    
    // Bird stand by mode
    // this.counter++;
    // this.y = 200 + Math.sin((this.counter * Math.PI / 180) * 5) * 5;
    
    if (this.game.checkKeyPress(32)) {
      this.speed = -this.gravity * 20;
      this.degree = -30;
      this.flappying = true;
    }
    if (this.flappying && this.game.tickCounter(50)) {
      this.flappying = false;
    }
    this.degree += 2;
    console.log(this.degree);
    
  }
  render(dt, cvs, ctx) {
      this.dg.drawStaticSprite(ctx, 0, 0, 0, 0, 0);
      this.bird.render(ctx, this.x, this.y, this.currentDegree, this.flappying);
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