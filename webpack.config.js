const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin  = require('html-webpack-plugin')
const CleanWebpackPlugin  = require('clean-webpack-plugin')
const ExtractTextPlugin = require('mini-css-extract-plugin')

const extractPlugin = new ExtractTextPlugin({filename: './style.css'});


module.exports = {
  entry: "./index.js",
  output: {
      filename: 'index.bundle.js',
      path: path.resolve(__dirname, 'public')
  },
  context: path.resolve(__dirname, 'src'),
  plugins: [
    new CleanWebpackPlugin(['public']),
    new HtmlWebpackPlugin({
        template: 'index.html'
    }),
    extractPlugin
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'public/assets'),
    stats: 'errors-only',
    open: true,
    port: 3030,
    compress: true
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 2
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.(jpg|png|gif|svg|ico)$/,
        use: [
          {
              loader: 'file-loader',
              options: {
                  name: '[name].[ext]',
                  outputPath: './assets/',
              }
          } 
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: ExtractTextPlugin.loader,
          },
          "css-loader",
          "sass-loader",
          "postcss-loader"
        ]
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets:['env', 'stage-0', 'react']
          }
        }
      }
    ]
  }
}