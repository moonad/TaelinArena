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
      },
      {
        test: /\.vox$/i,
        use: 'arraybuffer-loader',
      }
    ]
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'docs')
  },
  optimization: {
    minimize: false
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  devtool: "source-map",
  resolve: { plugins: [formalityResolver] },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html', 
      inject: false
    })
  ]
};
