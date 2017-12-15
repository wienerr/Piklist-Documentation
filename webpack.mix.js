/**
 * This file sets up the compilation of JS and SASS for the project using Laravel Mix. That is a
 * framework built on top of Webpack, greatly simplifying doing the same thing in vanilla Webpack.
 *
 * Use `npm run dev` to compile once
 * Use `npm run watch` to watch the files, compile, and refresh the proxy below
 * Use `npm run production` to compile the files for production
 *
 * @link https://github.com/JeffreyWay/laravel-mix/tree/master/docs
 */

const mix = require('laravel-mix');
var LiveReloadPlugin = require('webpack-livereload-plugin');

// Setup asset compilation
mix.sass('assets/scss/style.scss', 'static/css/theme-piklist.css')
  .options({
    processCssUrls: false
  });

// Refresh the browser at the following domain when files change
mix.browserSync({
  proxy: 'http://localhost:1313/Piklist-Documentation/',
  files: [
    '**/*.php',
    'style.css',
    'dist/app.js',
  ],
  open: false,
  notify: false,
});

// Load the LiveReload plugin
mix.webpackConfig({
  plugins: [
    new LiveReloadPlugin()
  ]
});
