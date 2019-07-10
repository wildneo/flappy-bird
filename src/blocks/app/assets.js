const attach = (assetName, ...spritesheet) => (
  { assetName, spritesheet }
);

const ASSET_SPRITESHEETS = [
  attach('bg.png', 2),
  attach('bird.png', 3, 3),
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

// export const getSpritesheet = assetName => assets[assetName].spritesheet;