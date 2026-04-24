const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json')

const devConfig = {
  mode: 'development',
  devServer: {
    port: 5120,
    historyApiFallback: {
      index: '/index.html',
    },
  },
  output: {
    publicPath: 'http://localhost:5120/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      title: 'Auth MFE [🏠]',
      favicon: "./public/assets/sita-fav-icon-32x32.png"
    }),
    new ModuleFederationPlugin({
      name: 'auth',
      filename: 'remoteEntry.js',
      exposes: {
        './Auth': './src/bootstrap'
      },
      shared: packageJson.dependencies,
    })
  ],
};

module.exports = merge(commonConfig, devConfig);
