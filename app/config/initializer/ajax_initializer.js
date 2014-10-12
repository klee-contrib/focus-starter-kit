module.exports = {
  initialize: function(options, context) {
    // Enables IE9 support 
    $.support.cors = true;
    //Ajax indicator.
    $(document).ajaxStart(function() {
      document.body.style.cursor = 'wait';
      $('div#ajaxIndicator').removeClass('hidden');
    });
    //Ajax stop indicator.
    $(document).ajaxStop(function() {
      document.body.style.cursor = 'default';
      $('div#ajaxIndicator').addClass('hidden');
    });
  }
};