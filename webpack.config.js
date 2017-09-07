const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: [
    './main.jsx',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  devServer: {
    contentBase: path.join(__dirname,"public"),
    hot: true,
    historyApiFallback: true,
    inline: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loader: ['style-loader','css-loader','sass-loader']
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: [
          'file-loader',
          'image-webpack-loader'
        ]
      },
      {
        test: /\.(otf)$/,
        loader: 'file-loader'
      }
    ]
  },
  resolve: {
    modules: [
      path.join(__dirname, 'node_modules'),
    ],
  },
  plugins : [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname,"/public/index.html"),
      files: {
        css: ['style.css'],
        js: [ "bundle.js"],
      }
    }),
  ]
};
