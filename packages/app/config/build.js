const isDev = process.env.NODE_ENV === 'development';
const staticAssets = [
  {
    from: 'packages/app/static',
    to: 'static',
  },
  {
    from: isDev
      ? 'standalone-packages/codesandbox-browserfs/build'
      : 'standalone-packages/codesandbox-browserfs/dist',
    to: 'static/browserfs12',
  },
  // For caching purposes
  {
    from: isDev
      ? 'standalone-packages/codesandbox-browserfs/build'
      : 'standalone-packages/codesandbox-browserfs/dist',
    to: 'static/browserfs11',
  },

].filter(Boolean);

module.exports = {
  staticAssets,
};
