exports.config =
  # See http://brunch.io/#documentation for docs.
  sourceMaps: false # Source maps are usefull in order to see the dev structure into the dev tools, and they are not use outside of the devtools, there is no perturbation of the performance in production.
  files:
    javascripts:
      joinTo:
        'javascripts/shim.js': /^shim/
        'javascripts/app.js': /^app/
        'javascripts/vendor.js': /^(bower_components|vendor)/
        'test/test.js': /^test/
      order:
        after: [
          'test/vendor/scripts/test-helper.js'
        ]

    stylesheets:
      joinTo:
        'stylesheets/app.css': /^(?!test)/
        'test/test.css': /^test/
      order:
        after: ['vendor/styles/helpers.css']

    templates:
      defaultExtension: 'hbs'
      joinTo: 'javascripts/app.js'