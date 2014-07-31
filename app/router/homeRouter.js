var application = require('../application');
module.exports = Fmk.Helpers.Router.extend({
  routes: {
    '': 'home',
    'home': 'home'
  },
  home: function() {
    var HomeView = require('views/home-view');
    application.layout.setActiveMenu('home');
    application.layout.content.show(new HomeView());
  }
});