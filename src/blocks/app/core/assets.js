const assetList = [
  'fg.png',
  'bg.png',
  'tap.png',
  'bird.png',
  'pipes.png',
  'btn-1.png',
  'btn-2.png',
  'btn-3.png',
  'scoreboard.png',
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
