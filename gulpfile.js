const gulp = require('gulp');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const minify = require('gulp-minify-css');
const watch = require('gulp-watch');
const browserSync = require('browser-sync');
const pump = require('pump');
const gulpUtil = require('gulp-util');
const child = require('child_process');
const concat = require('gulp-concat');
const run = require('gulp-run');

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
  let shellcmd = 'bundle exec jekyll build --watch --incremental';
  /*const jekyll = child.spawn('bundle', )child.spawn('jekyll', ['build',
    '--watch',
    '--incremental',
    '--drafts'
  ]);*/

  return gulp.src('/')
    .pipe(run(shellcmd));

  const jekyllLogger = (buffer) => {
    buffer.toString()
    .split(/\n/)
    .forEach((message) => gulpUtil.log('Jekyll: ' + message));
  };

  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);
});

gulp.task('production', () => {
  
})
