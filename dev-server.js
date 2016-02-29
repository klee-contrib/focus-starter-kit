const webpackConfig = require('./webpack.config');
const serverLauncher = require('webpack-focus').serverLauncher;
const path = require('path');

const OUTPUT_DIR = process.env.OUTPUT_DIR || 'public';
const API_PORT = process.env.API_PORT || 8080;

const customConfig = {
    publicPath: '/',
    hot: true,
    stats: { colors: true },
    historyApiFallback: true,
    contentBase: path.resolve(process.cwd(), OUTPUT_DIR),
    proxy: {
        '*': {
            target: 'http://localhost:' + API_PORT,
            secure: false,
            bypass: (req, res, proxyOptions) => {
                if (req.originalUrl === '/') {
                    return '/index.html';
                }
            }
        }
    }
}

serverLauncher(webpackConfig, customConfig);
