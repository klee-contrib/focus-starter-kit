#require 'lib/view_helper'
config = require 'config'

class Application extends Backbone.Marionette.Application

  initialize: =>

    @on "initialize:after", (options) =>
      # Process the site description and display it.
      Fmk.Helpers.siteDescriptionBuilder.processSiteDescription({isForceProcess: true})
      # Initialize the site map.
      @layout.processSite({isForceDisplay: true})
      Backbone.history.start
        #pushState: true
        root: config.approot

      # Freeze the object
      Object.freeze? this

    @addInitializer (options) =>
      # All navigation that is relative should be passed through the navigate
      # method, to be processed by the router. If the link has a `data-bypass`
      # attribute, bypass the delegation completely.
      $(document).on "click", "a[href]:not([data-bypass])", (evt) ->
        # Get the absolute anchor href.
        # @router.previousRoute = location.href
        href =
          prop: $(this).prop("href")
          attr: $(this).attr("href")
        # Get the absolute root.
        root = location.protocol + "//" + location.host # + config.approot

        # Ensure the root is part of the anchor href, meaning it's relative.
        if href.prop.slice(0, root.length) is root
          # Stop the default event to ensure the link will not cause a page
          # refresh.
          evt.preventDefault()
          # `Backbone.history.navigate` is sufficient for all Routers and will
          # trigger the correct events. The Router's internal `navigate` method
          # calls this anyways.  The fragment is sliced from the root.
          Backbone.history.navigate(href.attr, true)
    
    # Initialize all ajax behaviour.
    @addInitializer (options) =>
      require('./initializer/ajax_initializer').initialize()
    
    # Initialize all fmk needs: domains and metadatas.
    @addInitializer (options) =>
      require('./initializer/fmk_initializer').initialize()
    
    # Initialize all jQuery plugins.
    @addInitializer (options) =>
      require('./initializer/jquery_plugin_initializer').initialize()
    
    # Initialize all backbone plugins.
    @addInitializer (options) =>
      require('./initializer/backbone_plugin_initializer').initialize()
    
    # Initialize odata helper behaviour.
    @addInitializer (options) =>
      require('./initializer/odata_initializer').initialize()
    
    # Initialize all translations
    @addInitializer (options) =>
      require('./initializer/i18n_initializer').initialize()
    
    #Initialize all post rendering plugins.
    @addInitializer (options) =>
      require('./initializer/rendering_helpers_initializer').initialize()
    
    #Initialize reference lists services.
    @addInitializer (options) =>
      require('./initializer/reference_list_initializer').initialize()
    
    #Initialize autocomplete servicces
    @addInitializer (options) =>
      require('./initializer/autocomplete_initializer').initialize()       

    # Add an initializer to the logger with the config define in the app config.
    @addInitializer (options) =>
      window.l = new Logger(config.appName, config.log.level, {options : config.log})

    @addInitializer (options) =>
      # Add the main layout
      AppLayout = require 'views/app-layout'
      @layout = new AppLayout()
      @layout.render()
      @layout.displayHeader()
    
    @addInitializer (options) =>
      # Instantiate the router
      @routers = require('./router/initialize');

    @start()

module.exports = new Application()