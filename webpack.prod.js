// #region MODULES
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const path = require('path')
const common = require('./webpack.common.js')
// #endregion

// #region Misc
const DIST = path.resolve(__dirname, 'dist/')
const SRC = path.resolve(__dirname, 'src/')
// #endregion

const NODE_ENV = process.env.NODE_ENV
console.log(`
-------------------------------
webpack.prod.js
===============================`)

const publicPath = NODE_ENV === 'development' ? '/' : './'

var config = {
    mode: 'production',
    devtool: 'inline-source-map'
    // optimization: {
    //     splitChunks: {
    //         chunks: 'all'
    //     }
    // },
}

module.exports = merge(common, config)
