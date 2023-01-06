/* eslint-disable no-console */
const fs = require('fs-extra');
const path = require('path');
const rimrafSync = require('rimraf').sync;
const { staticAssets } = require('../config/build');

const assets = [
  ...staticAssets,
  {
    from: 'packages/app/www',
    to: '',
  },
  {
    from: 'packages/app/public',
    to: '',
  },
].filter(Boolean);

const rootPath = path.resolve(__dirname, '../../..');
const buildPath = path.resolve(rootPath, 'www');

rimrafSync(buildPath);

console.log('Copying assets...');

assets.forEach(({ from, to }) => {
  const srcPath = path.resolve(rootPath, from);
  const dstPath = path.resolve(buildPath, to);
  console.log(`${srcPath} => ${dstPath}`);

  // We need to deference symlinks to prevent recursion
  fs.copySync(srcPath, dstPath, { dereference: true });
});
