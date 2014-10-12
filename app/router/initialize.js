//Dependencies.
var HomeRouter = require("./homeRouter");
var MessageRouter = require('./messageRouter');
/*Router instanciation.*/
module.exports = {
  homeRouter : new HomeRouter(),
  messageRouter: new MessageRouter()
};