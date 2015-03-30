npm install
cd node_modules/focus
npm install
gulp browserify
cd ../..
cd node_modules/focus-components
npm install
gulp componentify
gulp build
cd ../..

