'use strict';

const path                 = require("path");
const webpack              = require('webpack');
const browserSync          = require('browser-sync');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

let config  = require('./webpack.config.dev');
let bundler = webpack(config);

browserSync({
  server: {
    baseDir: 'dist',
    middleware: [
      webpackDevMiddleware(bundler, {
        publicPath: config.output.publicPath,
        stats: { colors: true }
      }),
      webpackHotMiddleware(bundler)
    ]
  },
  files: [
    'src/**/*.html',
    'src/**/*.pug'
  ]
});