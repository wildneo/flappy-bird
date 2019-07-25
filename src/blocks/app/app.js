import { downloadAssets } from './assets';
import MainMenu from './MainMenu';
import TestScene from './TestScene';
import Game from './Game';

const canvas = document.querySelector('#flappy');

downloadAssets()
  .then(() => new Game(canvas, TestScene))
  .catch(console.error);
