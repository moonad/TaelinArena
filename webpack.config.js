const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  module: {rules: []},
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  }
};
