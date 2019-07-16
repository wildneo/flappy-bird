import { downloadAssets } from './assets';
import MainScene from './MainScene';
import TestScene from './TestScene';
import GameOver from './GameOver';
import Game from './Game';

const cvs = document.querySelector('#flappy');

downloadAssets()
  .then(() => new Game(cvs, TestScene))
  .catch(console.error);
