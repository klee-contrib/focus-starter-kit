const configBuilder = require('webpack-focus').configBuilder;
const path = require('path');
const webpack = require('webpack');
// Check if focus libraries should be held locally or read from NPM
const localFocus = process.env.LOCAL_FOCUS ? JSON.parse(process.env.LOCAL_FOCUS) : false;
const customConfig = localFocus ? {
    resolve: {
        alias: {
            'focus-core': path.resolve(process.cwd(), '../focus-core'),
            'focus-components': path.resolve(process.cwd(), '../focus-components'),
            react: path.resolve(process.cwd(), './node_modules/react'),
            moment: path.resolve(process.cwd(), './node_modules/moment')
        }
    }
} : {};
module.exports = configBuilder(customConfig);
