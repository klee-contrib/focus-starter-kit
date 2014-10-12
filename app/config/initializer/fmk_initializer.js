module.exports = {
  initialize: function(options, context) {
    Fmk.initialize({
      domains: require('../domain/index'),
      metadatas: require('../entityDefinition/index')
    });
  }
};