// jshint ignore: start
/* eslint-disable */
const mix = require('laravel-mix');

mix.autoload({
    jquery: ['$', 'jQuery', 'window.jQuery'],
   });

mix.js([
    'src/js/jquery-1.11.0.min.js',
    'src/js/application.js',
    'src/js/jquery.history.js',
    ], './app.js');



mix.sass('src/scss/index.scss', './index.css');


