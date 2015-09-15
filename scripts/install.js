var fs = require('fs');
var vendor = './vendor/';
var fontsDir = './app/assets/fonts';

var files = [
    'react/dist/react.js',
    'jquery/dist/jquery.js',
    'backbone/backbone.js',
    'native-promise-only/npo.js',
    //'lodash/',
    //material-design-lite
    'material-design-lite/material.js',
    //moment
    'moment/min/moment.min.js',
    'numeral/min/languages.min.js',
    'numeral/min/numeral.min.js',
    //showdown
    'showdown/dist/showdown.js',
    //focusjs
    'focusjs/dist/focus.js',
    //focusjs-components
    'focusjs-components/dist/js/focus-components.js',
    'focusjs-components/dist/css/focus-components.css',
    //font awesome
    'font-awesome/css/font-awesome.css'
];


if (!fs.existsSync(fontsDir)){
    fs.mkdirSync(fontsDir);
}

var fonts = [
    //Fonts
    'material-design-icons/iconfont/MaterialIcons-Regular.eot',
    'material-design-icons/iconfont/MaterialIcons-Regular.ttf',
    'material-design-icons/iconfont/MaterialIcons-Regular.woff',
    'material-design-icons/iconfont/MaterialIcons-Regular.woff2',
    'font-awesome/fonts/fontawesome-webfont.eot',
    'font-awesome/fonts/fontawesome-webfont.svg',
    'font-awesome/fonts/fontawesome-webfont.ttf',
    'font-awesome/fonts/fontawesome-webfont.woff',
    'font-awesome/fonts/fontawesome-webfont.woff2'
];

var images = [
    // Images
    'material-design-lite/src/images/buffer.svg',
    'material-design-lite/src/images/tick-mask.svg',
    'material-design-lite/src/images/tick.svg'
];

//Copy dependencies (js / css)
files.map(function(path){
    var splitedPath = path.split('/');
    var pth = splitedPath[splitedPath.length - 1];
    console.log(splitedPath, pth);
    fs.createReadStream('./node_modules/' + path)
    .pipe(
        fs.createWriteStream(vendor + pth)
    );
});


//Copy assets (fonts, images)
fonts.map(function(path){
    var splitedPath = path.split('/');
    var pth = splitedPath[splitedPath.length - 1];
    console.log(splitedPath, pth);
    fs.createReadStream('./node_modules/' + path)
    .pipe(
        fs.createWriteStream('./app/assets/fonts/' + pth)
    );
});

images.map(function(path){
    var splitedPath = path.split('/');
    var pth = splitedPath[splitedPath.length - 1];
    console.log(splitedPath, pth);
    fs.createReadStream('./node_modules/' + path)
    .pipe(
        fs.createWriteStream('./app/assets/img/' + pth)
    );
});
