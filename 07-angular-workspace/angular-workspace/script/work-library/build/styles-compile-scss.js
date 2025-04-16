(() => {
  'use strict';

  const CONFIG = require('./config/config.json');
  const gulp = require('gulp');
  const gulpSass = require('gulp-sass');
  const postcss = require('gulp-postcss');
  const autoprefixer = require('autoprefixer');

  const SRC = [
    CONFIG.folder.project.assets.scss + '/*.scss'
  ];

  module.exports = () => {
    return gulp.src(SRC)
      .on('data', (file) => {
        console.log('Archivo encontrado:', file.path);
      })
      .pipe(gulpSass().on('error', gulpSass.logError))
      .pipe(postcss([autoprefixer()]))
      .pipe(gulp.dest(CONFIG.folder.target.css));
  }
})();
