import webpack from 'webpack'
import PnpWebpackPlugin from 'pnp-webpack-plugin'

const config: webpack.Configuration = {
  entry: {
    main: './src/index.ts',
    /* vendor: './src/vendor.ts', */
  },
  // plugins: {
  //   new ForkTsCheckerWebpackPlugin(PnpWebpackPlugin.forkTsCheckerOptions({
  //       useTypescriptIncrementalApi: false, // not possible to use this until: https://github.com/microsoft/TypeScript/issues/31056
  //   })),
  // },
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
}

export default config
