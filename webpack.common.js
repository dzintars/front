const PnpWebpackPlugin = require(`pnp-webpack-plugin`);

module.exports = {
  entry: {
    main: './src/index.ts',
    /* vendor: './src/vendor.ts', */
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.ts?$/,
        loader: require.resolve('ts-loader'),
        options: PnpWebpackPlugin.tsLoaderOptions(),
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
    ],
  },
  resolve: {
    plugins: [PnpWebpackPlugin],
    extensions: ['.ts', '.js', '.json'],
  },
  resolveLoader: {
    plugins: [PnpWebpackPlugin.moduleLoader(module)],
  },
  stats: { children: false },
};
