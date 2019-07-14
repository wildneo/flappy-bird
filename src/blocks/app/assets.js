const attach = (assetName, ...spritesheet) => (
  { assetName, spritesheet }
);

const ASSET_SPRITESHEETS = [
  attach('fg.png', 1, 1),
  attach('tap.png', 1, 1),
  attach('bg.png', 2, 1),
  attach('bird.png', 3, 3),
  attach('pipes.png', 2, 2),
  attach('titles.png', 1, 3),
  attach('digits_lg.png', 10, 1),
  attach('btn-1.png', 2, 1),
  attach('btn-2.png', 1, 3),
];

const assets = {};

const downloadAsset = assetSpritesheet => new Promise((resolve) => {
  const { assetName, spritesheet } = assetSpritesheet;
  const asset = new Image();
  asset.onload = () => {
    // eslint-disable-next-line no-console
    console.log(`Downloaded ${assetName}`);
    assets[assetName] = { asset, spritesheet };
    resolve();
  };
  asset.src = `img/${assetName}`;
});

const downloadPromise = Promise.all(ASSET_SPRITESHEETS.map(downloadAsset));


export const downloadAssets = () => downloadPromise;

export const getAsset = assetName => assets[assetName];
