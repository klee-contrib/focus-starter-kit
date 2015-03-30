/*global Backbone*/
console.log('Application starter kit');
//Focus configuration
focus.components = focusComponents;

////Require app.
require('./initializer');

//Start the application.
require('./router');
Backbone.history.start();

//Render all application modules for the first time.
//React.render(<AlertModule />, document.querySelector('#notification-center'));
