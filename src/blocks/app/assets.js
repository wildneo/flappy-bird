import Sprite from './sprite';

const spritesheet = (assetName, spritePerRow, spritePerCol) => (
  { assetName, spritePerRow, spritePerCol }
);

const ASSET_SPRITESHEETS = [
  spritesheet('bg.png', 2),
  spritesheet('bird.png', 3, 3),
];

const assets = {};

const downloadAsset = assetSpritesheet => new Promise((resolve) => {
  const { assetName, spritePerRow, spritePerCol } = assetSpritesheet;
  const asset = new Sprite(spritePerRow, spritePerCol);
  asset.onload = () => {
    // eslint-disable-next-line no-console
    console.log(`Downloaded ${assetName}`);
    assets[assetName] = asset;
    resolve();
  };
  asset.src = `img/${assetName}`;
});

const downloadPromise = Promise.all(ASSET_SPRITESHEETS.map(downloadAsset));


export const downloadAssets = () => downloadPromise;

export const getAsset = assetName => assets[assetName];
