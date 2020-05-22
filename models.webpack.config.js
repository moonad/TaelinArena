const path = require('path');
const webpack = require('webpack');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  context: process.cwd(),
  entry: {
    models: ['./src/models/models.js'],
  },
  output: {
    path: path.resolve(__dirname, './docs'),
    filename: 'models.[contenthash].js',
    library: 'models'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DllPlugin({
      name: 'models',
      path: './docs/models.json'
    }),
    // new CompressionWebpackPlugin(),
  ]
};
