var gulp = require('gulp');
const sass = require('gulp-ruby-sass');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify-css');
var watch = require('gulp-watch');
var browserSync = require ('browser-sync');


gulp.task('default', ['optimize-js', 'optimize-css'], function() {




});

gulp.task('watch', ['browserSync'], function(){
  gulp.watch('lib/scss/**/*.scss', ['sass']);

});

gulp.task('optimize-js', )

gulp.task('sass', () =>
sass('lib/scss/**/*.scss')
  .on('error', sass.logError)
  .pipe(gulp.dest('lib/css'))
  .pipe(browserSync.reload({
      stream: true
    }))
);
