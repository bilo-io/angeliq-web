// Ref: https://webpack.js.org/guides/production/
//
// NOTE:
// - currently unused
// - common ground for dev & prod

const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const Visualizer = require('webpack-visualizer-plugin')
const path = require('path')
const marked = require('marked')
const renderer = new marked.Renderer()
// #endregion

// #region Misc
const DIST = path.resolve(__dirname, 'dist/')
const SRC = path.resolve(__dirname, 'src/')

const NODE_ENV = process.env.NODE_ENV

const publicPath = NODE_ENV === 'development' ? '/' : '/'

var config = {
    entry: {
        main: SRC + '/index.js'
    },
    output: {
        path: DIST,
        publicPath,
        filename: 'index.js',
        chunkFilename: 'chunks/[name].[contenthash:8].js'
    },
    resolve: {
        modules: [
            path.resolve('./'),
            path.resolve('./src'),
            path.resolve('./node_modules')
        ]
    },
    node: {
        fs: 'empty'
    },
    // target: 'node',
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }, {
                test: /\.(css|scss)$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            }, {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file-loader?name=assets/images/[name].[ext]'
            }, {
                test: /\.(mp4|mov|ogg)$/,
                loader: 'file-loader?name=assets/videos/[name].[ext]'
            },
            {
                test: /\.md$/,
                use: [
                    {
                        loader: 'html-loader'
                    }, {
                        loader: 'markdown-loader',
                        options: {
                            pedantic: true,
                            renderer
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new Visualizer({ filename: './stats.html' }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html',
            inject: 'body'
            // favicon: './src/assets/favicon.ico'
        }),
        new CopyWebpackPlugin([
            // {
            //     from: './src/img/icons',
            //     to: './assets'
            // },
            {
                from: 'node_modules/highlight.js/styles/monokai.css',
                to: './scss/'
            },
            {
                from: 'node_modules/highlight.js/styles/atom-one-light.css',
                to: './scss/'
            },
            {
                from: 'node_modules/highlight.js/styles/atom-one-dark.css',
                to: './scss/'
            }
        ])
    ]
}

console.log(`
===============================
build => ENV: ${NODE_ENV}
===============================
webpack.common.js
-------------------------------
`)

module.exports = config
