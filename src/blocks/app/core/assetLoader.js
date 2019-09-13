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

export default assetList => Promise.all(assetList.map(downloadAsset));

export const getAsset = assetName => assets[assetName];
