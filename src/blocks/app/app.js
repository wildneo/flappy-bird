import { downloadAssets } from './core/assets';
import Intro from './scenes/Intro';
import Game from './core/Game';
// import TestScene from './scenes/TestScene';

const canvas = document.querySelector('#flappy');

downloadAssets()
  .then(() => new Game(canvas, Intro))
  .catch(console.error);
