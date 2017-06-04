var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');

//sass

gulp.task('minify-css', function() {
  return gulp
    .src('./src/**/*.css')
    .pipe(sourcemaps.init())
    .pipe(cleanCSS())
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('dist'));
});

gulp.task('sass', function() {
  gulp
    .src(['styles/*.scss', 'styles/**/*.scss'])
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('css/'));
});

gulp.task('sass:watch', function() {
  gulp.watch('./styles/**/*.scss', ['sass']);
});

// Default task
gulp.task('default', function() {
  gulp.start('sass');
});

gulp.task('production', function() {
  gulp.start('minify-css');
});

