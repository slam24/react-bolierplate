const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    index: __dirname + '/src/containers/home/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: __dirname + '/build',
    publicPath: __dirname + '/build'
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      // First Rule
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          'options': {
            'plugins': ['lodash'],
            'presets': [['env', { 'modules': false, 'targets': { 'node': 4 } }]]
          }
        }],
      },
      // Second Rule
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              camelCase: true,
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: "file-loader"
      },
      {
        test: /\.(png|jpg|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './index.html'
    })
  ]
}