(() => {
  'use strict';

  const CONFIG = require('./config/config.json');
  const gulp = require('gulp');
  const gulpClean = require('gulp-clean');

  const SRC = [
    CONFIG.folder.target.css + '/*.css',
    CONFIG.folder.target.distCss + '/*.css',
    CONFIG.folder.dist.library.styles + '/*.css'
  ];

  const CLEAN_OPTIONS = {
    read: false,
    force: true
  };

  module.exports = () => {
    return gulp.src(SRC)
        .pipe(gulpClean(CLEAN_OPTIONS));
  }
})();
