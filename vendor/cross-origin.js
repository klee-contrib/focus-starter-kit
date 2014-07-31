;
(function(window) {

  // Local copy of global variables
  var _ = window._;
  var Backbone = window.Backbone;
  var btoa = window.btoa;

  var token = null;

  var encode = function(username, password) {
    // Use Base64 encoding to create the authentication details
    // If btoa is not available on your target browser there is a polyfill:
    // https://github.com/davidchambers/Base64.js
    return btoa(username + ':' + password);
  };

  // Store a copy of the original Backbone.sync
  var originalSync = Backbone.sync;

  // Override Backbone.sync for all future requests.
  // If a token is present, set the Basic Auth header
  // before the sync is performed.
  Backbone.sync = function(method, model, options) {
    if (typeof token !== "undefined" && token !== null) {
      options.headers = options.headers || {};
      //Extend the header to add user login autentication.
      _.extend(options.headers, {
        'Authorization': 'Basic ' + token
      });
      //Add the crossdomain compatibility.
      if (!options.crossDomain) {
        options.crossDomain = true;
      }
      if (!options.xhrFields) {
        options.xhrFields = {
          withCredentials: true
        };
      }
    }
    return originalSync.call(model, method, model, options);
  };

  Backbone.BasicAuth = {
    // Setup Basic Authentication for all future requests
    set: function(username, password) {
      token = encode(username, password);
    },
    setToken: function setToken(newToken) {
      token = newToken;
    },
    getToken: function getToken() {
      return token;
    },
    // Clear Basic Authentication for all future requests
    clear: function() {
      token = null;
    }
  };

  $.ajaxSetup({
    statusCode: {
      401: function() {
        // Redirec the to the login page.
        Backbone.history.navigate('login', true);
      }
    }
  });

})(this);