const path = require( 'path' );


module.exports = {
  entry: [path.join(__dirname, 'src/index')],
  resolve: {
    extensions: ['.web.js', '.mjs', '.js', '.json', '.vue'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_module/,
        use: 'babel-loader'
      },
      {
        test: /\.(png|jpg|svg|gif)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[contenthash].[ext]',
            outputPath: 'assets',
          }
        },
      },
    ]
  },
};
