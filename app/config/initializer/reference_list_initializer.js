//Path to the reference service.
var serviceReference = require('../../services/serviceReference');

module.exports = {
  initialize: function(options, context) {
    Fmk.Helpers.referenceHelper.configure({"typeMessages": serviceReference.getMessageTypes});
  }
};