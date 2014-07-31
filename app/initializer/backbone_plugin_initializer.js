module.exports = {
  initialize: function(options, context) {
    
    //Extend the backbone prototype for validation purpose.
    _.extend(Backbone.Model.prototype, Backbone.Validation.mixin);
    
    //Populate the window with notification namespace.
    window.Backbone.Notification = Fmk.Helpers.backboneNotification;
  }
};