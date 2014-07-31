module.exports = {
  initialize: function(options, context) {
    Fmk.Helpers.odataHelper.configure({
      filter: 'filter',
      top: 'top',
      skip: 'skip',
      orderby: 'orderby',
      format: 'format',
      inlinecount: 'inlinecount',
      requestType: 'POST'
    });
  }
};