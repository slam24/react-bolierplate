const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const LiveReloadPlugin = require('webpack-livereload-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const port = process.env.PORT || 3000
const isDevelopment = process.env.NODE_ENV !== 'production'

const plugins = []

plugins.push(new HtmlWebpackPlugin({
  inject: true,
  template: path.resolve(__dirname, './index.html')
  })
)

if (!isDevelopment) {
  plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  )
}else{
  plugins.push(
    new LiveReloadPlugin(
    {
      appendScriptTag: true
    }),
    new BrowserSyncPlugin(
    {
      host: 'localhost',
      port: 3000,
      proxy: 'http://localhost:8080/'
    },  
    {
      reload: false
    })
  )
}

module.exports = {
  entry: {
    index: './src/containers/home/index.js'
  },
  output: {
    filename: 'watchfile.bundle.js',
    path: path.resolve(__dirname, 'build')
  },
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
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
      }
    ]
  },
  plugins: plugins,
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true,
    contentBase: false,
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
}
