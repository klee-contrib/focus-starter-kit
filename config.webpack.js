const path = require('path');
const webpack = require('webpack');
const WatchIgnorePlugin = webpack.WatchIgnorePlugin;

demoConfig = {
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './app'
    ],
    output: {
        path: __dirname + '/public/',
        filename: 'focus-demo-app.js',
        publicPath: '/' // as viewed from index.html
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        alias: {
            'focus-core': path.resolve(__dirname, './node_modules/focus-core/lib'),
            'focus-components': path.resolve(__dirname, './node_modules/focus-components/src'),
            react: path.resolve(__dirname, './node_modules/react')
        },
        extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['react-hot', 'babel?cacheDirectory'],
                include: [
                    path.resolve(__dirname, './app'),
                    path.resolve(__dirname, './node_modules/focus-components/src')
                ]
            },
            {
                test: /\.json$/,
                loaders: ['json']
            },
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.png$/,
                loader: 'url-loader',
                query: { mimetype: 'image/png' }
            },
            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=image/svg+xml'
            }
        ]
    }
};

module.exports = demoConfig;
