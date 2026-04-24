const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json')

const devConfig = {
  mode: 'development',
  devServer: {
    port: 5130,
    historyApiFallback: {
      index: '/index.html',
    },
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  output: {
    publicPath: 'http://localhost:5130/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      title: 'Dashboard MFE [🏠]',
      favicon: "./public/assets/sita-fav-icon-32x32.png"
    }),
    new ModuleFederationPlugin({
      name: 'dashboard',
      filename: 'remoteEntry.js',
      exposes: {
        './Dashboard': './src/bootstrap'
      },
      shared: packageJson.dependencies,
    })
  ],
};

module.exports = merge(commonConfig, devConfig);
