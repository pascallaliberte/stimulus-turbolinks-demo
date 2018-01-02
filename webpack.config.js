var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './_assets/main.js',
  output: {
    path: path.resolve(__dirname, './assets'),
    publicPath: '/assets/',
    filename: 'main.js'
  },
  devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [
          /node_modules/
        ],
        use: [
          { loader: "babel-loader" }
        ]
      }
    ]
  }
}
