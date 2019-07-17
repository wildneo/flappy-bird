import { downloadAssets } from './assets';
import MainMenu from './MainMenu';
import Game from './Game';

const cvs = document.querySelector('#flappy');

downloadAssets()
  .then(() => new Game(cvs, MainMenu))
  .catch(console.error);
