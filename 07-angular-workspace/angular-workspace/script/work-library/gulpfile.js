module.exports = () => {
  'use strict';

  const gulp = require('gulp');

  const angularPackage = require('./build/angular-package');

  const stylesClean = require('./build/styles-clean');
  const stylesCompileScss = require('./build/styles-compile-scss');
  const stylesPackage = require('./build/styles-package');
  const stylesDeployCss = require('./build/styles-deploy-css');
  const stylesDeployImages = require('./build/styles-deploy-images');

  gulp.task('work-lib:angular-package', angularPackage);

  gulp.task('work-lib:styles-clean', stylesClean);
  gulp.task('work-lib:styles-compile-scss', stylesCompileScss);
  gulp.task('work-lib:styles-package', stylesPackage);
  gulp.task('work-lib:styles-deploy-css', stylesDeployCss);
  gulp.task('work-lib:styles-deploy-images', stylesDeployImages);

  gulp.task('work-lib:styles-deploy', gulp.series(
      'work-lib:styles-deploy-css',
      'work-lib:styles-deploy-images'
  ));

  gulp.task('work-lib:angular', gulp.series(
      'work-lib:angular-package'
  ));

  gulp.task('work-lib:assets', gulp.series(
      'work-lib:styles-clean',
      'work-lib:styles-compile-scss',
      'work-lib:styles-package',
      'work-lib:styles-deploy',
  ));

  gulp.task('work-lib', gulp.series(
      'work-lib:angular',
      'work-lib:assets'
  ));
};
