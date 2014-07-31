/*global Backbone*/
var HeaderItem = require('./menuItem');
module.exports = Backbone.Collection.extend({
    model: HeaderItem,
    changeActive: function changeActiveHeader(name) {
        if (name !== undefined) {
            var current = this.findWhere({ isActive: true });
            var newActive = this.findWhere({ name: name });
            /*Check if there is a change*/
            if (current && newActive) {
                current.set({ isActive: false });
            }
            if (newActive) {
                newActive.set({ isActive: true });
            }
        }
    },
    changeActiveSubHeader: function changeActiveSubHeader(name) {
        if (name !== undefined) {
            var currentActiveHeader = this.findWhere({ isActive: true });
            var subHeaders = currentActiveHeader.get('subHeaders');
            for (var i = 0; i < subHeaders.length  ; i++) {
                subHeaders[i].isActive = subHeaders[i].name === name;
            }
            this.trigger("change");
        }
    }

});