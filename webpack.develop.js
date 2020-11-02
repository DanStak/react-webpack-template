const path = require( 'path' );
const magicImporter = require('node-sass-magic-importer');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.config');


module.exports = merge(commonConfig, {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "main.js",
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true,
    hot: true,
    port: 3000,
    disableHostCheck: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              importer: magicImporter(),
            },
          },
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve( __dirname, 'public/index.html' ),
    }),
    new CleanWebpackPlugin(),
  ]
});
