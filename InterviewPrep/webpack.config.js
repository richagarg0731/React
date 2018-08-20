const path = require('path');
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/index.js',

  output: {
    path: path.resolve('dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  
  module: {
    rules: [{
      test : /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: ['babel-loader']
    },
    {
      test: /\.css$/,
      exclude: /node_modules/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: '../'
          }
        },
        'css-loader'    // translates css into CommonJS
      ]
    },
    {
      test: /\.scss$/,
      exclude: /node_modules/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: '../'
          }
        },
        'css-loader',   // translates css into CommonJS
        'sass-loader'   // compiles sass to CSS, using Node Sass by default
      ]
    }
  ]
  },

  resolve : {
    extensions : ['*', '.js', '.jsx']
  },


  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ],

  devServer : {
      contentBase : './dist'
  }
  
}