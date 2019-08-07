import { downloadAssets } from './core/assets';
import TestScene from './scenes/TestScene';
// import Intro from './scenes/Intro';
import GamePlay from './scenes/GamePlay';
// import StandBy from './scenes/StandBy';
// import MainMenu from './scenes/MainMenu';
// import GameOver from './scenes/GameOver';
// import Pause from './scenes/Pause';
import Game from './core/Game';

const canvas = document.querySelector('#flappy');

const createGame = () => {
  const newGame = new Game(canvas);

  newGame.create
    // .scene('Intro', Intro)
    .scene('GamePlay', GamePlay)
    // .scene('StandBy', StandBy)
    // .scene('MainMenu', MainMenu)
    // .scene('GameOver', GameOver)
    // .scene('Pause', Pause)
    .scene('TestScene', TestScene);

  newGame.create
    .sprite('fg', 'fg.png', [336, 112])
    .sprite('scoreboard', 'scoreboard.png', [240, 130])
    .sprite('bronzeMedal', 'medals.png', [44, 44])
    .sprite('silverMedal', 'medals.png', [44, 44], { frame: { offset: 1 } })
    .sprite('goldMedal', 'medals.png', [44, 44], { frame: { offset: 2 } })
    .sprite('play', 'btn-1.png', [26, 26], { frame: { offset: 1 } })
    .sprite('pause', 'btn-1.png', [26, 26])
    .sprite('ok', 'btn-2.png', [80, 26])
    .sprite('menu', 'btn-2.png', [80, 28], { frame: { offset: 1 } })
    .sprite('playGame', 'btn-3.png', [112, 69])
    .sprite('settings', 'btn-3.png', [112, 69], { frame: { offset: 1 } })
    .sprite('tap', 'tap.png', [114, 98], { frame: { offset: 0 } })
    .sprite('logo', 'titles.png', [200, 60])
    .sprite('ready', 'titles.png', [200, 60], { frame: { offset: 1 } })
    .sprite('gameOver', 'titles.png', [200, 60], { frame: { offset: 2 } })
    .sprite('digits', 'digits.png', [70, 20])
    .sprite('digits_lg', 'digits_lg.png', [24, 36])
    .sprite('bg', 'bg.png', [288, 512], { frame: { offset: 0 } })
    .sprite('bird', 'bird.png', [34, 24], { animation: { tickPerFrame: 8 } })
    .sprite('topPipe', 'pipes.png', [52, 320], { frame: { offset: 0 } })
    .sprite('btmPipe', 'pipes.png', [52, 320], { frame: { offset: 0, index: 1 } });

  return newGame;
};

const startGame = (newGame) => {
  newGame
    .setScene('GamePlay')
    .startGameLoop();
};

downloadAssets()
  .then(createGame)
  .then(startGame)
  .catch(console.error);
