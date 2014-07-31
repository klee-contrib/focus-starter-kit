//Dependencies.
var AdminRouter = require("./administrationRouter");
var HomeRouter = require("./homeRouter");

/*Router instanciation.*/
module.exports = {
  adminRouter : new AdminRouter(),
  homeRouter : new HomeRouter()
};