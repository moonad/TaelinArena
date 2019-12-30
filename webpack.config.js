const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const formalityResolver = require('formality-loader').resolver

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.fm$/, 
        loader: 'formality-loader',  
        options: { typeCheckMode: 'all' }
      }
    ]
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    minimize: false
  },
  resolve: { plugins: [formalityResolver] },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html', 
      inject: false
    })
  ]
};
