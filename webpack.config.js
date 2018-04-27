require('dotenv').config()

const { resolve } = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const extractCSS = new ExtractTextPlugin({
    disable: process.env.NODE_ENV !== 'production',
    filename: 'css/vendor.[hash].css',
})

const extractSASS = new ExtractTextPlugin({
    disable: process.env.NODE_ENV !== 'production',
    filename: 'css/app.[hash].css',
})

module.exports = {
    mode: process.env.NODE_ENV || 'production',
    entry: [
        './assets/js/index.js',
        './assets/sass/app.scss',
    ],
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'js/bundle-[hash:5].js'
    },
    module: {
        rules: [
            {
                test: /\.hbs$/,
                loader: 'handlebars-loader',
                query: {
                    inlineRequires: '\/assets\/',
                    helperDirs: resolve(__dirname, './helpers')
                }
            },
            {
                test: /\.scss$/,
                use: extractSASS.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        'fast-sass-loader',
                    ]
                })
            },
            {
                test: /\.css$/,
                use: extractCSS.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                    ]
                })
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|ico|svg)$/i,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]?[hash]',
                        outputPath: 'images/'
                    }
                },
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/i,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]?[hash]',
                        outputPath: 'fonts/'
                    }
                },
            },
        ]
    },
    resolve: {
        alias: {
            '~': resolve(__dirname),
        }
    },
    plugins: [
        new CleanWebpackPlugin('dist'),
        extractCSS,
        extractSASS,
        new HtmlWebpackPlugin({
            title: 'Viblo Tools',
            template: './template/index.hbs',
            favicon: './assets/images/favicon.ico',
            googleAnalytics: {
                trackingId: process.env.GOOGLE_ANALYTICS_TRACK_ID
            },
        }),
    ],
    devServer: {
        historyApiFallback: true,
        noInfo: false,
        overlay: true,
        host: 'localhost',
        port: 8001
    }
}
