import Timer from '../time/Timer';
import Tween from '../tween/Tween';
import { setScore, floorMoving, addPipeLine, jump, endGame, falling } from '../AdditionalMethods';

export default class GamePlay {
  constructor(game, layer) {
    this.game = game;
    this.layer = layer;

    this.game.create.group('pipes');
    this.game.create.group('scoreDisplay');

    this.bg = this.game.addTo(this.layer, 'bg');
    this.pipes = this.game.addTo(this.layer, 'pipes');
    this.bird = this.game.addTo(this.layer, 'bird', [70, 200, -20]);
    this.floor = this.game.addTo(this.layer, 'fg', [0, 400]);
    this.tap = this.game.addTo(this.layer, 'tap', [87, 210]);
    this.pause = this.game.addTo(this.layer, 'pause', [10, 10]);
    this.ready = this.game.addTo(this.layer, 'ready', [44, 120]);
    this.scoreDisplay = this.game.addTo(this.layer, 'scoreDisplay');

    this.speed = -120;

    this.bird.body.gravity.y = 1200;
    this.bird.body.velocity.y = -400;
    this.floor.body.velocity.x = this.speed;

    this.jump = jump.bind(this);
    this.falling = falling.bind(this);
    this.floorMoving = floorMoving.bind(this);
    this.setScore = setScore.bind(this);
    this.addPipeLine = addPipeLine.bind(this);
    this.endGame = endGame.bind(this);

    this.game.input.addToClick(this.bg, this.pause);

    this.pipeTimer = new Timer(1500, true);
    this.pipeTimer.on('onRepeat', this.addPipeLine);
    this.pipeTimer.start();

    this.fallTimer = new Timer(600, false);
    this.fallTimer.on('onComplete', this.falling);
    this.fallTimer.start();

    this.birdFall = new Tween(this.bird, { angle: 90 }, 500);

    this.readyOpacity = new Tween(this.ready, { opacity: 0 }, 500);
    this.readyOpacity.start();

    this.tapOpacity = new Tween(this.tap, { opacity: 0 }, 500);
    this.tapOpacity.start();
  }

  update(dt) {
    this.floorMoving();
    this.setScore();

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

    this.pipeTimer.update(dt);
    this.fallTimer.update(dt);
    this.birdFall.update(dt);
    this.readyOpacity.update(dt);
    this.tapOpacity.update(dt);
  }
}
