const webpack = require('webpack');
module.exports = {
  entry: {
    'www/js/tiger-1.0.0': './www/src/main.ts'
  },
  output: {
    filename: '[name].js'
  },
  externals: {
    jquery: 'jQuery',
    bootstrap: 'bootstrap',
    vue: 'vue'
  },
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      { test: /.tsx?$/, loader: 'ts-loader' }
    ]
  },
  devtool: 'source-map', //'hidden-source-map',
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      sourceMap: true,
      include: /\.min\.js$/,
    })
  ],
  devServer: {
  }
};