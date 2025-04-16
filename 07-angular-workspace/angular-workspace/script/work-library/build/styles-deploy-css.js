(() => {
  'use strict';

  const CONFIG = require('./config/config.json');
  const gulp = require('gulp');

  module.exports = () => {
    return gulp.src([
      CONFIG.folder.target.distCss + '/*.css'
    ]).pipe(gulp.dest(CONFIG.folder.dist.library.styles));
  }
})();
