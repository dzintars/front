import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import merge from 'webpack-merge'
import common from './webpack.common'

const config: webpack.Configuration = merge(common, {
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',
      // template: path.resolve(__dirname, 'src', 'template.html'),
      filename: './index.html',
    }),
  ],
  devtool: 'source-map',
  devServer: {
    // https://webpack.js.org/configuration/dev-server/
    hot: true,
    compress: true,
    // open: true,
    port: 3000, // Can omit this, so port will be picked up randomly from available ports.
    historyApiFallback: true, // Serves index file for any path
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader', // 3. Inject styles into DOM
          'css-loader', // 2. Turns CSS into commonjs
          'sass-loader', // 1. Turns SCSS into CSS
        ],
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: '/img',
          },
        },
      },
    ],
  },
})

export default config
