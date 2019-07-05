const ASSET_NAMES = [
  'bg.png',
  'fg.png',
  'bird.png',
  'atlas.png',
  'digits_lg.png',
  'pipes.png',
  'tap.png',
  'titles.png',
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

const downloadPromise = Promise.all(ASSET_NAMES.map(downloadAsset));

export const downloadAssets = () => downloadPromise;

export const getAsset = assetName => assets[assetName];
