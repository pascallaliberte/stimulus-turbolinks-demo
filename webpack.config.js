var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './_assets/main.js',
  output: {
    path: path.resolve(__dirname, './assets'),
    publicPath: '/assets/',
    filename: 'main.js'
  },
  module: {
    // Special compilation rules
    loaders: [
      {
        // Ask webpack to check: If this file ends with .js, then apply some transforms
        test: /\.js$/,
        // Transform it with babel
        loader: 'babel',
        // don't transform node_modules folder (which don't need to be compiled)
        exclude: /node_modules/
      }
    ]
  }
}
