var application = require('../application');
var DiagnosticCollection = require('../models/administration/diagnosticCollection');
var DiagnosticView = require('../views/administration/diagnosticView');
var DomainTest = require('../models/administration/domainTest');
var DomainTestView = require('../views/administration/domainTestView');

module.exports = Fmk.Helpers.Router.extend({
  routes: {
    'administration/audit/diagnostic': 'diagnostic',
    'administration/audit/domainTest': 'domainTest',
    'administration/audit/listViewTest': 'listViewTest',
    'administration/audit/composite': 'compositeTest',
    'administration/contact/:id': 'contact',
    'administration/contacts': 'contactList'
  },
  contact: function(id) {
    var Model, View;
    application.layout.setActiveMenu('administration.contact');
    Model = require('../models/administration/contact');
    View = require('../views/administration/contactConsultEditView');
    application.layout.content.show(new View({
      model: new Model({
        id: id
      })
    }));
  },
  contactList: function() {
    var Model, View;
    application.layout.setActiveMenu('administration.contact');
    Model = require('../models/administration/contact');
    View = require('../views/administration/contactSearchView');
    application.layout.content.show(new View({
      model: new Model()
    }));
  },
  diagnostic: function() {
    application.layout.setActiveMenu('administration.audit');
    return application.layout.content.show(new DiagnosticView({
      model: new DiagnosticCollection()
    }));
  },
  domainTest: function() {
    application.layout.setActiveMenu('administration.audit');
    application.layout.content.show(new DomainTestView({
      model: new DomainTest({
        id: 0
      })
    }));
  },
  listViewTest: function() {
    var Collection, View;
    Collection = require('../models/administration/lineModelTestCollection');
    View = require('../views/administration/listViewWithViewForEachLine');
    application.layout.setActiveMenu('administration.audit');
    return application.layout.content.show(new View({
      model: new Collection()
    }));
  },
  compositeTest: function() {
    var View;
    application.layout.setActiveMenu('administration.audit');
    View = require('../views/administration/compositeTestView');
    return application.layout.content.show(new View());
  }
});