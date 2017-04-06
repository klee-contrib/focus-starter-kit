const baseConfig = require('webpack-focus/config/default');
const envParser = require('webpack-focus/webpack-utilities/env-parser');

const parsedConf = envParser(process.env);
module.exports = baseConfig(process.env, {}).toWebpackConfig(parsedConf);