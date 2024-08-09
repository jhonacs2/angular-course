(() => {
  'use strict';

  const CONFIG = require('./config/config.json');
  const gulp = require('gulp');
  const gulpCleanCss = require('gulp-clean-css');
  const gulpConcat = require('gulp-concat');

  const SRC = [
    CONFIG.folder.target.css + '/*.css',
    CONFIG.folder.target.fonts + '/*.css'
  ];

  const CLEAN_CSS_OPTIONS = {
    compatibility: 'ie8'
  };

  module.exports = () => {
    return gulp.src(SRC)
        .pipe(gulpConcat(CONFIG.module + '.min.css'))
        .pipe(gulpCleanCss(CLEAN_CSS_OPTIONS))
        .pipe(gulp.dest(CONFIG.folder.target.distCss))
  }
})();
