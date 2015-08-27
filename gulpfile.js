var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var prefix = require('gulp-autoprefixer');
var minifyCss = require('gulp-minify-css');

gulp.task('sass', function () {
  gulp.src('./src/sass/**/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(prefix("last 2 version"))
  .pipe(minifyCss())
  .pipe(sourcemaps.write('./maps'))
  .pipe(gulp.dest('./dst/css'));
});

gulp.watch('./src/sass/**/*.scss', ['sass']);

gulp.task('default', ['sass'])
