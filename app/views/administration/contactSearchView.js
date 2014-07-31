/// <var type='object'>Search view of the framework.</var>
var SearchView = Fmk.Views.SearchView;

/// <var type='object'>Result view to instanciate in order to display the results.</var>
var ResultsView = require('./contactResultView');

/// <var type='object'>View template for the search view.</var>
var template = require('./templates/contactSearch');

/// <var type='object'>Collection for the results.</var>
var ResultCollection = require('../../models/administration/contactCollection');

/// <var type='object'>Service to call for all view actions, save, search, ...</var>
var ContactSvc = require('../../services/administration/serviceContact');

module.exports = SearchView.extend({
	///<summary>Define the search view for contact.</summary>
    
	/// <field type='function'>Collection use for the results.</field>
	Results: ResultCollection,
	/// <field type='function'>Service to call in order to launch the search.</field>
    search: ContactSvc.search,
	/// <field type='function'>Search view template.</field>
    template: template,
    // References
    // TODO : Add the reference lists to load here.
    //  /// <field type='Array'>List of the references list to load in the view. Each list loaded will be injected into the model under the property name define in the array.</field>
    //referenceNames: ['referenceName'],
	
	/// <field type='function'>View instanciated in order to display the results.</field>
    ResultsView: ResultsView
});