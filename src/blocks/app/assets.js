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
  ['frontground', 'img/fg.png'],
  ['tap', 'img/tap.png'],
  ['board', 'img/board.png'],
  ['background', 'img/bg.png'],
  ['bird', 'img/bird.png'],
  ['pipe', 'img/pipes.png'],
  ['titles', 'img/titles.png'],
  ['digits', 'img/digits.png'],
  ['digits_lg', 'img/digits_lg.png'],
  ['btn-1', 'img/btn-1.png'],
  ['btn-2', 'img/btn-2.png'],
  ['btn-3', 'img/btn-3.png'],
];

const assets = {};

const downloadAsset = item => new Promise((resolve) => {
  const [assetName, assetUrl] = item;
  const asset = new Image();
  asset.onload = () => {
    // eslint-disable-next-line no-console
    console.log(`Downloaded ${assetName}`);
    assets[assetName] = asset;
    resolve();
  };
  asset.src = assetUrl;
});

const downloadPromise = Promise.all(assetList.map(downloadAsset));


export const downloadAssets = () => downloadPromise;

export const getAsset = assetName => assets[assetName];
