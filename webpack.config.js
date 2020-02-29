const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const formalityResolver = require('formality-loader').resolver
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const webpack = require("webpack");
const fs = require("fs");

module.exports = {
  mode: 'production',
  optimization: {minimize: true},
  devtool: "source-map",
  //entry: './src/index.js',
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
    filename: 'index.[contenthash].js',
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
    }),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('./docs/models.json')
    }),
    inject_models_js,
    new CompressionWebpackPlugin(),
  ]
};

// This is a temporary hack that replaces `models.js` by
// `models.[hash].js` on `index.html`. I couldn't find a way
// to do it with webpack since the `models` file is
// generated as a DLL.
function inject_models_js() {
  var dir = path.join(__dirname, "docs");
  // After plugins are done
  this.hooks.afterEmit.tap("inject_models_js", function() {
    // Reads all files on /docs
    fs.readdir(dir, function(err, files) {

      // Sorts them by modification date
      var files = files.map(function (file_name) {
        return {
          name: file_name,
          time: fs.statSync(path.join(dir,file_name)).mtime.getTime()
        };
      }).sort(function (a, b) { return a.time - b.time; });

      // Finds the latest models.[hash].js, injects it on
      // the index.html and deletes index.html.gz because it
      // would be incorrect.
      for (var i = 0; i < files.length; ++i) {
        var file = files[i];
        if (/^models.*js$/.test(file.name)) {
          var html_path = path.join(dir, "index.html");
          var html_text = fs.readFileSync(html_path, "utf8");
          var html_text = html_text.replace("models.js", file.name);
          var html_gz_path = path.join(dir, "index.html.gz");
          fs.writeFileSync(html_path, html_text);
          if (fs.existsSync(html_gz_path)) {
            fs.unlinkSync(html_gz_path);
          }
        }
      }
    });
  });
}
