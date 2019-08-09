import { setScore, floorMoving, addPipeLine, jump, endGame } from '../AdditionalMethods';
import TimeEvent from '../time/TimeEvent';

export default class GamePlay {
  constructor(game, layer) {
    this.game = game;
    this.layer = layer;

    this.game.create.group('pipes');
    this.game.create.group('scoreDisplay');

    this.bg = this.game.addTo(this.layer, 'bg');
    this.pipes = this.game.addTo(this.layer, 'pipes');
    this.bird = this.game.addTo(this.layer, 'bird', [70, 200]);
    this.floor = this.game.addTo(this.layer, 'fg', [0, 400]);
    this.tap = this.game.addTo(this.layer, 'tap', [87, 210]);
    this.pause = this.game.addTo(this.layer, 'pause', [10, 10]);
    this.ready = this.game.addTo(this.layer, 'ready', [44, 120]);
    this.scoreDisplay = this.game.addTo(this.layer, 'scoreDisplay');

    this.angle = 0;
    this.counter = 0;
    this.opacity = 100;
    this.timer = 0;
    this.speed = -120;

    this.bird.body.gravity.y = 1200;
    this.bird.body.velocity.y = -400;
    this.floor.body.velocity.x = this.speed;

    this.jump = jump.bind(this);
    this.floorMoving = floorMoving.bind(this);
    this.setScore = setScore.bind(this);
    this.addPipeLine = addPipeLine.bind(this);
    this.endGame = endGame.bind(this);

    this.game.input.addToClick(this.pause, this.bg);

    this.testTimer = new TimeEvent(600, () => {
      this.bird.animation.stop();
      this.angle += 5;
    });
    this.testTimer2 = new TimeEvent(1400, this.addPipeLine, true);
  }

  update(dt) {
    this.testTimer.update(dt);
    this.testTimer2.update(dt);
    // Opacity
    if (this.opacity > 0) {
      this.opacity -= 5;
    }
    this.ready.opacity = this.opacity;
    this.tap.opacity = this.opacity;

    this.floorMoving();
    this.setScore();

    // this.s = 100 * dt;
    // this.timer += this.s;
    // if (this.timer >= 150) {
    //   this.timer = 0;
    //   this.addPipeLine();
    // }

    // if (this.bird.animation.isPlaying()) {
    //   this.counter += this.s;
    // }

    // Falling
    // if (this.counter >= 60) {
    //   this.bird.animation.stop();
    //   this.angle += 5;
    // }
    this.bird.angle = Math.min(90, this.angle);

    // Jump
    this.game.input.pressKey(32, this.jump);
    this.game.input.clickOn(this.bg, this.jump);

    // Pause
    this.game.input.clickOn(this.pause, () => {
      this.game.setScene('Pause');
    });

    // Сollision
    this.game.collision(this.bird, this.pipes, () => {
      this.endGame();
    });

    this.game.collision(this.bird, this.floor, () => {
      this.endGame();
    });

    // console.log();
  }
}
