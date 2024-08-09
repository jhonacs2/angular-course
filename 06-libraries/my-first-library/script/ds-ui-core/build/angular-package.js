(() => {
  'use strict';

  const CONFIG = require('./config/config.json');
  const run = require('gulp-run');

  module.exports = () => {
    return run(`ng build ${CONFIG.library} --configuration production`, {verbosity: 3}).exec();
  }
})();
