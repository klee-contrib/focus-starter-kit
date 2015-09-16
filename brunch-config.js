exports.config = {
  sourceMaps: false,
  paths: {
    'public': '../api/src/main/webapp/static/'
  },
 /* server: {
     path: './scripts/start_tomcat.js'
 },*/
  files: {
        javascripts: {
            joinTo: {
                'javascripts/app.js': /^app/,
                'javascripts/vendor.js': /^(bower_components|vendor|node_modules)/
            },
            order: {
                before: [
                    'vendor/npo.js',
                    'vendor/react.js',
                    'vendor/jquery.js',
                    'vendor/lodash.js',
                    'vendor/awesomeplete.js',
                    'vendor/backbone.js',
                    'vendor/material.js',
                    'vendor/moment.min.js',
                    'vendor/focus.js',
                    'vendor/focus-components.js'
                ]
            }
        },
        stylesheets: {
            joinTo: 'stylesheets/app.css',
            order: {
                before: [
                    'app/styles/font.scss',
                    'vendor/material.css'
                ]
            }
        },
        templates: {
            joinTo: 'javascripts/app.js'
        }
    },
    plugins: {
        uglify: {
            mangle: false,
            compress: {
                global_defs: {
                    DEBUG: false
                }
            }
        },
        babel: {
        //  babelrc: '.babelrc',
          pattern: /\.(js|es6|jsx)$/
        },
        cleancss: {
            keepSpecialComments: 0,
            removeEmpty: true
        },
        appcache: {
            staticRoot: '/static',
            network: ['*'],
            fallback: {}
        },
        browserSync: {
            port: 8080,
            logLevel: 'debug'
        }
    }
};
