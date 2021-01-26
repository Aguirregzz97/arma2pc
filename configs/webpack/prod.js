const path = require('path');
const { merge } = require('webpack-merge')
const common = require('./common.js')
const webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const TerserPlugin = require('terser-webpack-plugin')

const paths = {
  DIST: path.join(__dirname, '..', '..', 'dist'),
  SRC: path.join(__dirname, '..', '..', 'src')
}

module.exports = merge(common(), {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin()
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      '__IsLocal__': false,
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new MiniCssExtractPlugin({
      filename: '[name]_[contenthash].css',
      chunkFilename: '[id]_[contenthash].css'
    }),
  ],
  output: {
    filename: '[name]_[contenthash].min.js',
    path: paths.DIST,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ]
  }
});