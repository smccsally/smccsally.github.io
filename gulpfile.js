

var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    imageminPngquant = require('imagemin-pngquant'),
    imageminZopfli = require('imagemin-zopfli'),
    imageminMozjpeg = require('imagemin-mozjpeg'),
    imageminGiflossy = require('imagemin-giflossy'),
    minifyHTML = require('gulp-minify-html'),
    uglify = require('gulp-uglify'),
    gulpIf = require('gulp-if'),
    cssnano = require('gulp-cssnano');

//compress all images
gulp.task('imagemin', function() {
    return gulp.src(['assets/**/*.{png,jpg,svg}'])
        .pipe(imagemin([
            //png
            imageminPngquant({
                speed: 1,
                quality: 60 //lossy settings
            }),
            //svg
            imagemin.svgo({
                plugins: [{
                    removeViewBox: false
                }]
            }),
            //jpg lossless
            imagemin.jpegtran({
                progressive: true
            }),
            //jpg very light lossy, use vs jpegtran
            imageminMozjpeg({
                quality: 80
            })
        ]))
        .pipe(gulp.dest('dist/assets/'));
});
   

var htmlmin = require('gulp-htmlmin');

gulp.task('minify-html', function() {
  return gulp.src('_site/**/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('_site/'));
});

gulp.task('minify-index', function() {
  return gulp.src('_site/index.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('_site/'));
});

var uncss = require('gulp-uncss');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var nano = require('gulp-cssnano');
 
gulp.task('uncss', function () {
    return gulp.src('_site/css/*.css')
        .pipe(uncss({
            html: ['_site/index.html','_site/**/*.html']
        }))
        .pipe(gulp.dest('dist/css'));
});


var pump = require('pump');
 
gulp.task('compress', function (cb) {
  pump([
        gulp.src('js/*.js'),
        uglify(),
        gulp.dest('dist/js')
    ],
    cb
  );
});
var cleanCSS = require('gulp-clean-css');
gulp.task('minify-css', () => {
  return gulp.src('_site/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css'));
});

var runSequence = require('run-sequence');
gulp.task('build', function(callback) {
  runSequence('minify-css', 'compress', 'minify-html','imagemin', callback);
});

var htmllint = require('gulp-htmllint'),
    fancyLog = require('fancy-log'),
    colors = require('ansi-colors');
    
gulp.task('htmllint', function() {
    return gulp.src('_site/index.html')
        .pipe(htmllint({}, htmllintReporter));
});
 
function htmllintReporter(filepath, issues) {
    if (issues.length > 0) {
        issues.forEach(function (issue) {
            fancyLog(colors.cyan('[gulp-htmllint] ') + colors.white(filepath + ' [' + issue.line + ',' + issue.column + ']: ') + colors.red('(' + issue.code + ') ' + issue.msg));
        });
 
        process.exitCode = 1;
    }
}
var autoprefixer = require('gulp-autoprefixer');
gulp.task('autoprefixer', () =>
    gulp.src('_site/css/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist'))
);

var gulp = require('gulp');
 
gulp.task('lint-css', function lintCssTask() {
  const gulpStylelint = require('gulp-stylelint');
  const myStylelintFormatter = require('my-stylelint-formatter');
 
  return gulp
    .src('_site/css/*.css')
    .pipe(gulpStylelint({
      failAfterError: true,
      reportOutputDir: 'reports/lint',
      reporters: [
        {formatter: 'verbose', console: true},
        {formatter: 'json', save: 'report.json'},
        {formatter: myStylelintFormatter, save: 'my-custom-report.txt'}
      ],
      debug: true
    }));
});