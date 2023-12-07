const path = require('path')

const { merge } = require('webpack-merge')
const Dotenv = require('dotenv-webpack')
const common = require('./webpack.common.js')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval-cheap-source-map',
    plugins: [
        new CleanWebpackPlugin(),
        new Dotenv({
            path: path.resolve(process.cwd(), '.env.dev'),
            safe: true
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, '../dist'),
        },
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
        },
        host: 'localhost',
        port: 3002,
        liveReload: true,
        hot: false,
        compress: true,
    },
})