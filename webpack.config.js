const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const formalityResolver = require('formality-loader').resolver
const webpack = require("webpack");

module.exports = {
  mode: 'production',
  optimization: {minimize: false},
  //devtool: "source-map",
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.fm$/, 
        loader: 'formality-loader',  
        options: { typeCheckMode: 'none' }
      },
      {
        test: /\.vox$/i,
        use: 'arraybuffer-loader',
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ]
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'docs')
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  resolve: { plugins: [formalityResolver] },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html', 
      inject: false
    }),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('./docs/models.json')
    })
  ]
};
