var gulp = require('gulp');
var sass = require('gulp-sass');

//sass
gulp.task('sass', function() {
  gulp
    .src(['styles/*.scss', 'styles/**/*.scss'])
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(gulp.dest('css/'));
});

gulp.task('sass:watch', function() {
  gulp.watch('./styles/**/*.scss', ['sass']);
});

// Default task
gulp.task('default', function() {
  gulp.start('sass');
});
