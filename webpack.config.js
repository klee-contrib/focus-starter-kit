const baseConfig = require('webpack-focus/config/default');
const envParser = require('webpack-focus/webpack-utilities/env-parser');

const parsedConf = envParser(process.env);

const myConfig = baseConfig(process.env, {});
myConfig.addAlias('react', './node_modules/react');
myConfig.addAlias('react-dom', './node_modules/react-dom');
myConfig.addAlias('material-design-lite', './node_modules/material-design-lite');

module.exports = myConfig.toWebpackConfig(parsedConf);