// #region MODULES
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const marked = require('marked')
const path = require('path')
const common = require('./webpack.common.js')
// #endregion

// #region Misc
const DIST = path.resolve(__dirname, 'dist/')
const SRC = path.resolve(__dirname, 'src/')
const NODE_ENV = process.env.NODE_ENV
// #endregion

console.log(`
-------------------------------
webpack.dev.js
===============================`)

// TODO: fix this weird issue ... this shouldn't happen
const publicPath = NODE_ENV === 'development' ? '/' : './'

var config = {
    mode: 'development',
    watch: true,
    watchOptions: {
        aggregateTimeout: 200,
        poll: 1000
    },
    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true,
        contentBase: './dist',
        stats: 'minimal'
    }
    // node: { fs: 'empty' }
}

module.exports = merge(common, config)
