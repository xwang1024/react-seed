"use strict";

const path              = require("path");
const webpack           = require("webpack");
const autoprefixer      = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    context: path.resolve("./src"),
    entry: {
        vendor: [ "babel-polyfill" ],
        app: [ "webpack/hot/dev-server", "webpack-hot-middleware/client", "./index.js", "./index.html" ]
    },
    output: {
        path: path.resolve("./dist"),
        publicPath: "/",
        filename: "assets/[name].bundle.js"
    },
    resolve: {
        extensions: ["", ".js", ".less", ".html"]
    },
    devtool: "source-map",
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: "react-hot!babel",
            include: path.join(__dirname, 'src/')
        }, {
            test: /\.less$/,
            loader: "style!css?sourceMap!postcss?sourceMap!less?sourceMap"
        }, {
            test: /\.css$/,
            loader: 'style!css?sourceMap'
        }, {
            test: /\.html$/,
            loader: 'html'
        }, {
            test: /\.(png|jpg|gif)(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url-loader?limit=100000'
        }, {
            test: /\.(eot|com|json|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
        }, {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
        }]
    },

    postcss: [ autoprefixer() ],

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'assets/vendor.js', Infinity),
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
};
