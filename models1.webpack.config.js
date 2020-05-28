const path = require('path');
const webpack = require('webpack');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  context: process.cwd(),
  entry: {
    models: [
      './src/models/models_1.js',
    ]
    // models:["./src/models/models.js"] // old code: causes JS memory error.
  },
  output: {
    path: path.resolve(__dirname, './docs'),
    filename: 'models.[contenthash].js',
    library: 'models'
  },
  plugins: [
    // new CleanWebpackPlugin(), // uncommented to not cleat file from models0.webpack.config.js
    new webpack.DllPlugin({
      name: 'models',
      path: './docs/models1.json'
    }),
    // Prepare compressed versions of assets to serve them with Content-Encoding.
    // Comment this code while in development mode.
    // new CompressionWebpackPlugin(),
  ],
};