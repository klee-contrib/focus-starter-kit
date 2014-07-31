application = require 'application'
HeaderView = Fmk.Views.HeaderView#require('./header-view')
# Instantiate an header view.
headerView = new HeaderView()

module.exports = class AppLayout extends Backbone.Marionette.Layout
  template: 'views/templates/app-layout'
  el: "body"
  regions:
    header: "#header"
    content: "#content"
    footer: "#footer"
    
  # Display the header view.
  displayHeader:()->
    @header.show(headerView)
  
  # Set the active menu.
  setActiveMenu:(name)->
    headerView.processActive(name)
    
  # Define a parameter for the site map.
  defineParam:(param)->
    
    # Define the param.
    Fmk.Helpers.siteDescriptionHelper.defineParam(param)
    
    # Reprocess the site description.
    @processSite()
    
  # Process a new site description.
  processSite:(options)->
    options = options or {}
    site =  Fmk.Helpers.siteDescriptionBuilder.processSiteDescription(options)
    if(site isnt false or options.isForceDisplay)
      headerView.processSite(Fmk.Helpers.siteDescriptionBuilder.getSiteStructure())
    
