import { Game } from './game';
import { Bird } from './bird';
import { Score } from './score';
import { Background } from './background';
import { Frontground } from './frontground';
import { PipeGenerator } from './pipes';
import { detectCollision } from './collisions';
import { Tap, Ready } from './other';

class GameScene {
  constructor(game) {
    this.game = game;

    this.bird = new Bird({color: 'yellow'});
    this.pipes = new PipeGenerator({color: 'day'});
    this.bg = new Background({color: 'day'});
    this.fg = new Frontground();
    this.score = new Score();

    this.gravity = 0.2;
    this.speed = -this.gravity * 20;
    this.flying = true;

    this.x = game.cvs.width / 4;
    this.y = 200;
    this.angle = 0;

    this.counter = 0;
  }
  update(dt) {
    // Bird game mode
    this.speed += this.gravity;
    this.currentSpeed = Math.min(50, this.speed);
    this.y += this.currentSpeed;
    this.currentAngle = Math.min(90, this.angle);

    this.bird.setAnimationMod(this.flying);
    this.bird.setPosition(this.x, this.y, this.currentAngle);
    
    if (this.flying) {
      this.counter++;
    }
    if (this.counter >= 35) {
      this.flying = false;
      this.angle += 5;
    }
    if (this.game.checkKeyPress(32)) {
      this.flying = true;
      this.speed = -this.gravity * 15;
      this.angle = -20;
      this.counter = 0;
    }

    // Detecting collisions
    if (detectCollision(this.bird, this.pipes, this.fg)) this.game.setScene(StratScene);

    // Update score
    this.score.setScore(this.bird.getScore());

    // Update game objects
    this.bird.update(dt);
    this.pipes.update(dt);
    this.fg.update(dt);

  }
  render(dt, cvs, ctx) {
    this.bg.render(cvs, ctx);
    this.bird.render(cvs, ctx);
    this.pipes.render(cvs, ctx);
    this.score.render(cvs, ctx);
    this.fg.render(cvs, ctx);
  }
}

class StratScene {
  constructor(game) {
    this.game = game;

    this.bird = new Bird({color: 'yellow'});
    this.bg = new Background({color: 'day'});
    this.fg = new Frontground();
    this.score = new Score();
    this.ready = new Ready();
    this.tap = new Tap();

    this.x = game.cvs.width / 4;
    this.y = 200;

    this.counter = 0;
  }
  update(dt) {
    // Bird stand by mode
    this.counter++;
    this.y = 200 + Math.sin((this.counter * Math.PI / 180) * 5) * 5;
    this.bird.setPosition(this.x, this.y, this.currentAngle);

    if (this.game.checkKeyPress(32)) {
      this.game.setScene(GameScene)
    }

    // Update game objects
    this.bird.update(dt);
    this.fg.update(dt);

  }
  render(dt, cvs, ctx) {
    this.bg.render(cvs, ctx);
    this.bird.render(cvs, ctx);
    this.score.render(cvs, ctx);
    this.fg.render(cvs, ctx);
    this.ready.render(cvs, ctx);
    this.tap.render(cvs, ctx);
  }
}


const cvs = document.querySelector('#flappy')
// eslint-disable-next-line no-unused-vars
const game = new Game(cvs, StratScene);