// const attach = (assetName, ...spritesheet) => (
//   { assetName, spritesheet }
// );

// const ASSET_SPRITESHEETS = [
//   attach('fg.png', 1, 1),
//   attach('tap.png', 1, 1),
//   attach('board.png', 1, 1),
//   attach('bg.png', 2, 1),
//   attach('bird.png', 3, 3),
//   attach('pipes.png', 2, 2),
//   attach('titles.png', 1, 3),
//   attach('digits.png', 5, 2),
//   attach('digits_lg.png', 5, 2),
//   attach('btn-1.png', 2, 1),
//   attach('btn-2.png', 1, 3),
//   attach('btn-3.png', 2, 1),
// ];

const assetList = [
  'fg.png',
  'bg.png',
  'tap.png',
  'bird.png',
  'pipes.png',
  'btn-1.png',
  'btn-2.png',
  'btn-3.png',
  'board.png',
  'titles.png',
  'digits.png',
  'digits_lg.png',
];

const assets = {};

const downloadAsset = assetName => new Promise((resolve) => {
  const asset = new Image();
  asset.onload = () => {
    // eslint-disable-next-line no-console
    console.log(`Downloaded ${assetName}`);
    assets[assetName] = asset;
    resolve();
  };
  asset.src = `img/${assetName}`;
});

const downloadPromise = Promise.all(assetList.map(downloadAsset));


export const downloadAssets = () => downloadPromise;

export const getAsset = assetName => assets[assetName];
