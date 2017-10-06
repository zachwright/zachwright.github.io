var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify-css');
var watch = require('gulp-watch');
var browserSync = require('browser-sync');
var pump = require('pump');
const gulpUtil = require('gulp-util');
const child = require('child_process');
const concat = require('gulp-concat');
const siteRoot = '_site';

gulp.task('default', ['jekyll', 'serve']);



gulp.task('watch', function() {

});


gulp.task('serve', function() {
  browserSync.init({

      files: [siteRoot + '/**', '!node_modules'],
      port: 4000,
      server: {
        baseDir: siteRoot
      }
  });
  gulp.watch(['./lib/scss/**/*.scss'], ['sass']);
});


gulp.task('sass', function() {
  return gulp.src("./lib/scss/**/*.scss")
    .pipe(sass())
    .pipe(concat('style.css'))
    .pipe(gulp.dest("./lib/css"))
    /*.pipe(browserSync.reload({
      stream: true
    }))*/
});

gulp.task('jekyll', () => {
  const jekyll = child.spawn('jekyll', ['build',
    '--watch',
    '--incremental',
    '--drafts'
  ]);

  const jekyllLogger = (buffer) => {
    buffer.toString()
    .split(/\n/)
    .forEach((message) => gulpUtil.log('Jekyll: ' + message));
  };

  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);
});
