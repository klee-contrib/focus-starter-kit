module.exports = {
  initialize: function(options, context) {
    Fmk.initialize({
      domains: require('../lib/domains'),
      metadatas: require('../lib/entity-definition')
    });
  }
};