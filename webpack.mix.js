const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .styles([
        'resources/css/main.css',
        'resources/css/style.css',
        'resources/css/animate.css',
        'resources/css/bootstrap.min.css',
        'resources/css/font-awesome.min.css',
        'resources/css/jquery-ui.css',
        'resources/css/meanmenu.min.css',
        'resources/css/nivo-slider.css',
        'resources/css/owl.carousel.css',
        'resources/css/owl.theme.css',
        'resources/css/owl.transitions.css',
        'resources/css/responsive.css'
    ], 'public/css/panel.css')
    .scripts([
        'resources/js/js/bootstrap.min.js',
        'resources/js/js/countdon.min.js',
        'resources/js/js/imagezoom.js',
        'resources/js/js/jquery.meanmenu.js',
        'resources/js/js/jquery.nivo.slider.js',
        'resources/js/js/jquery.scrollUp.min.js',
        'resources/js/js/jquery-1.11.3.min.js',
        'resources/js/js/jquery-price-slider.js',
        'resources/js/js/main.js',
        'resources/js/js/owl.carousel.min.js',
        'resources/js/js/plugins.js',
        'resources/js/js/wow.min.js',
    ], 'public/js/panel.js');

