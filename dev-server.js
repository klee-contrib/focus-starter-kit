const webpackConfig = require('./webpack.config');
const serverLauncher = require('webpack-focus').serverLauncher;

const customConfig = {
    proxy: {
        '/api': 'http://localhost:8080'
    }
};

serverLauncher(webpackConfig, customConfig);
require('./api');
