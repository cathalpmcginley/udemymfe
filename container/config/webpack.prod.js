const { merge } = require('webpack-merge')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const commonConfig = require('./webpack.common')
const packageJson = require('../package.json')

// const domain = process.env.PRODUCTION_DOMAIN
const domain = 'https://d3gji4oo0e0q7z.cloudfront.net'

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/r/container/latest/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            title: 'MFE Container',
            favicon: "./public/assets/generic-fav-icon-32x32.png"
        }),
        new ModuleFederationPlugin({
            name: 'container',
            filename: 'remoteEntry.js',
            remotes: {
                auth: `auth@${domain}/r/auth/latest/remoteEntry.js`,
                marketing: `marketing@${domain}/r/marketing/latest/remoteEntry.js`,
                dashboard: `dashboard@${domain}/r/dashboard/latest/remoteEntry.js`
            },
            shared: packageJson.dependencies
        })
    ]
}

module.exports = merge(commonConfig, prodConfig)
