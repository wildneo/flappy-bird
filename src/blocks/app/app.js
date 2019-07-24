import { downloadAssets, getAsset } from './assets';
// import AssetLoader from './AssetLoader';
import MainMenu from './MainMenu';
import TestScene from './TestScene';
import Game from './Game';

const canvas = document.querySelector('#flappy');

const createNewGame = () => {
  const newGame = new Game(canvas, TestScene);
  newGame.create
    .sprite('bird', [3, 3], [100, 100, 0], 8)
    .sprite('background', [2, 1], [100, 100, 0]);
};

// downloadAssets()
//   .then(() => console.log(getAsset('bird')))
//   .catch(console.error);

downloadAssets()
  .then(createNewGame)
  .catch(console.error);
