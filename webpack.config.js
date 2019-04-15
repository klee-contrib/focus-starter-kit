const baseConfig = require('webpack-focus/config/default');
const envParser = require('webpack-focus/webpack-utilities/env-parser');

const parsedEnv = envParser(process.env);
const myConfig = baseConfig(process.env, {});

module.exports = myConfig.toWebpackConfig(parsedEnv);
