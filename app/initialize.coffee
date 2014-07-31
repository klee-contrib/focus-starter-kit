application = require 'application'

$ ->
  # This loading could be done in ajax with a promise.
  Fmk.Helpers.userHelper.configureUserInformations({roles: ["DEFAULT_ROLE"], cultureCode: "fr-FR"});
  # Load the complete site skeleton.
  Fmk.Helpers.siteDescriptionHelper.defineSite(require('./lib/site_description'))   
  # Initialize the application
  application.initialize() 