const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

  module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
      filename: 'index.[contenthash].js'
      },
      plugins: [new HtmlWebpackPlugin({
        title: 'xdml-web前端',
        template: 'src/assets/index.html'
      })],
        module: {
          rules: [
            {
              test: /\.css$/i,
              use: ["style-loader", "css-loader"],
            },
          ],
        },
};