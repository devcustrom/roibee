const path = require('path');
const mix = require('laravel-mix');

mix.options({
	fileLoaderDirs: {
		fonts: '/assets'
	},
})

const arJsPage = [
    'src/js/app.js',
];

const arCssPage = [
    'src/css/style.css',
];

mix.webpackConfig({
    resolve: {
        modules: [
            path.resolve(__dirname, 'node_modules')
        ]
    }
});

arJsPage.forEach(sJsPage => {
    mix.js(sJsPage, 'dist/js');
});

arCssPage.forEach(sCssPage => {
    mix.postCss(sCssPage, 'dist/css/style.css')
});

mix.disableNotifications();
