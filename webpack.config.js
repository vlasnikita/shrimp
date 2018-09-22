const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanObsoleteChunks = require('webpack-clean-obsolete-chunks');

const __DEV__ = process.env.NODE_ENV === 'development';
const distPath = path.resolve(__dirname, 'dist');

module.exports = {
    devtool: process.env.NODE_ENV === 'production' ? '' : "source-map",
    mode: process.env.NODE_ENV || 'development',
    entry: {
        index: './pages/index.js',
        faq: './pages/faq.js'
    },
    output: {
        path: distPath,
        publicPath: '/dist',
        filename: "[name].[contenthash:4].js",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }, {
                test: /\.json$/,
                use: ['json-loader']
            }, {
                test: /\.png$/i,
                use: ['url-loader?mimetype=image/png']
            }, {
                test: /\.gif$/i,
                use: ['url-loader?mimetype=image/gif']
            }, {
                test: /\.svg$/i,
                use: ['url-loader?mimetype=image/svg+xml']
            }, {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // you can specify a publicPath here
                            // by default it use publicPath in webpackOptions.output
                            publicPath: '../'
                        }
                    },
                    "css-loader"
                ]
            }, {
                test: /\.(ttf|eot|woff|woff(2))(\?[a-z0-9]+)?$/,
                use: ['file-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash:4].css",
        }),
        new CleanObsoleteChunks({verbose: true}),
        new HtmlWebpackPlugin({
            chunks: 'index',
            title: 'Shrimp',
            filename: 'index.html',
            template: './pages/index.html'
        }),
        new HtmlWebpackPlugin({
            chunks: 'faq',
            title: 'Shrimp',
            filename: 'faq.html',
            template: './pages/faq.html'
        })
    ].filter(Boolean),
    devServer: {
        contentBase: distPath,
        port: 9000,
        compress: true,
        open: true
    }
};
