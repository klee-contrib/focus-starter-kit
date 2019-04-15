const server = require("webpack-focus/dev-server").serverLauncher;
const config = require("./webpack.config");

server(config, {});
