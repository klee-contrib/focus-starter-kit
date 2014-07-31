/*global Backbone*/
module.exports = Backbone.Model.extend({
  defaults: {
    cssId: "",
    cssClass: "",
    dataAttributes: "",
    isActive:false,
    name: undefined,
    transalationKey: "",
    url:"#nav"
  }
});