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
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              ["@babel/plugin-proposal-decorators", { "legacy": true }],
              ["@babel/plugin-proposal-class-properties", { "loose" : true }]
            ]
          }
        }
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
