const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: process.cwd(),
  entry: {
    models: ['./src/models/models.js'],
  },
  output: {
    path: path.resolve(__dirname, './docs'),
    filename: 'models.js',
    library: 'models'
  },
  plugins: [
    new webpack.DllPlugin({
      name: 'models',
      path: './docs/models.json'
    })
  ]
};
