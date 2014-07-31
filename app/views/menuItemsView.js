/*global Backbone*/
var template = require('./templates/header');
module.exports = Backbone.View.extend({
  template: template,
  initialize: function initializeHeaderView(){
    this.listenTo(this.model, 'change', this.render);
  },
  render: function renderHeader(){
    this.$el.html(this.template({MenuItems: this.model.toJSON()}));
    return this;
  }
});