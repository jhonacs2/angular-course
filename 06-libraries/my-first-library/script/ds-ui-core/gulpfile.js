module.exports = () => {
  'use strict';

  const gulp = require('gulp');

  const angularPackage = require('./build/angular-package');

  const stylesClean = require('./build/styles-clean');
  const stylesCompileScss = require('./build/styles-compile-scss');
  const stylesPackage = require('./build/styles-package');
  const stylesDeployCss = require('./build/styles-deploy-css');
  const stylesDeployImages = require('./build/styles-deploy-images');

  gulp.task('ds-core-ui:angular-package', angularPackage);

  gulp.task('ds-core-ui:styles-clean', stylesClean);
  gulp.task('ds-core-ui:styles-compile-scss', stylesCompileScss);
  gulp.task('ds-core-ui:styles-package', stylesPackage);
  gulp.task('ds-core-ui:styles-deploy-css', stylesDeployCss);
  gulp.task('ds-core-ui:styles-deploy-images', stylesDeployImages);

  gulp.task('ds-core-ui:styles-deploy', gulp.series(
      'ds-core-ui:styles-deploy-css',
      'ds-core-ui:styles-deploy-images'
  ));

  gulp.task('ds-core-ui:angular', gulp.series(
      'ds-core-ui:angular-package'
  ));

  gulp.task('ds-core-ui:assets', gulp.series(
      'ds-core-ui:styles-clean',
      'ds-core-ui:styles-compile-scss',
      'ds-core-ui:styles-package',
      'ds-core-ui:styles-deploy',
  ));

  gulp.task('ds-core-ui', gulp.series(
      'ds-core-ui:angular',
      'ds-core-ui:assets'
  ));
};
