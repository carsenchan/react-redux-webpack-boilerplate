let webpack = require('webpack')
const webpackUglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = require('./webpack.config.js')

delete module.exports.devtool;

module.exports.plugins.push(
  new webpack.DefinePlugin({
    'process.env.NODE_DEV': JSON.stringify('production')
  })
)

module.exports.plugins.push(
  new webpackUglifyJsPlugin({ 
    uglifyOptions:{
      warnings:false,
      output:{
        comments: false,
      }
    }
  })

  // new webpack.optimize.UglifyJsPlugin({
  //   comments:false,
  //   warnings:false
  // })
)