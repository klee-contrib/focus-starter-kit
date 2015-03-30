//Dependencies.
var Router = Backbone.Router;
var render = focus.application.render;

//var AlertModule = require('../component/alert');
//render(AlertModule, '#notification-center');


var AppRouter = Router.extend({
  routes: {
    '': 'home',
    'entity/:id': 'entity' //To rename
  },
  home: function handleHomeRoute() {
    console.log('ROUTE: HOME');
    //Require the applications modules
  },
  entity: function handleEntityeRoute(id) {
    console.log('ROUTE: MOVIE');
    // Require the applications modules
    // var EntityDetailView = require('../views/entity'); //To rename
    // render(EntityDetailView, '#page', {props: {id: id}}); //To rename
  }
});
module.exports = new AppRouter();
