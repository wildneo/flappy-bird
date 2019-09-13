export function standBy(speed, yPos) {
  const feq = 4;
  const amp = 4;
  this.counter = this.counter || 0;
  this.counter += speed;
  if (this.counter > 1000) {
    this.counter = 0;
  }
  this.y = yPos + Math.sin((this.counter * Math.PI / 180) * feq) * amp;
}

export function floorMoving() {
  if (this.floor.x < -47) {
    this.floor.x = 0;
  }
}

export function jump() {
  this.bird.animation.play();
  this.bird.body.velocity.y = -350;
  this.birdFall.reset();
  this.fallTimer.reset();
  this.fallTimer.start();
  this.bird.angle = -20;
}

export function falling() {
  this.bird.animation.stop();
  this.birdFall.start();
}

export function setScore() {
  const score = this.score || 0;
  const splitScore = score.toString().split('').map(e => +e);

  if (this.scoreDisplay.size !== splitScore.length) {
    this.scoreDisplay.clear();

    const origin = (288 - 24 * splitScore.length) / 2;

    splitScore.forEach((e, index) => {
      this.game.addTo(this.scoreDisplay, 'digits_lg', [origin + 24 * index, 50]);
    });
  }

  this.scoreDisplay.children().forEach((item, i) => {
    const child = item;
    child.frame.index = splitScore[i];
  });
}

export function addPipeLine() {
  this.score = this.score + 1 || 0;
  const gap = 100;
  const random = Math.round(Math.random() * -gap) - gap;
  const addPipe = (key, position) => {
    const pipe = this.game.addTo(this.pipes, key, position);
    pipe.body.velocity.x = this.speed;
    pipe.outOfBoundsDestroy = true;
  };
  addPipe('topPipe', [288, random]);
  addPipe('btmPipe', [288, random + 320 + gap]);
}

export function endGame() {
  this.bird.animation.stop();
  this.floor.body.velocity.reset();
  this.pipes.children().forEach((pipe) => {
    pipe.body.velocity.reset();
  });
  this.pause.destroy();
  this.game.setScene('GameOver');
}
