"use strict";

const path               = require('path');
const webpack            = require('webpack');
const HtmlWebpackPlugin  = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = require("./webpack.config.dev");

config.entry =  {
    vendor: [ "babel-polyfill" ],
    app: ["./index.js", "./index.html" ]
},

config.output = {
    path: path.resolve("./dist"),
    publicPath: "/",
    filename: "assets/[name].bundle.[chunkhash:6].js"
}

config.plugins = [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'assets/vendor.[hash:6].js', Infinity),
    new HtmlWebpackPlugin({
        template: './index.html'
    }),
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve("./"),
      verbose: true, 
      dry: false
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'BABEL_ENV': JSON.stringify('production'),
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
        minimize: true
    })
];

delete config.devServer;
delete config.devtool;

module.exports = config;
