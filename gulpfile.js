// Write new gulp tasks in this file. Need some help? Check out the gulp.js docs: https://gulpjs.com

// Variables
var gulp        = require('gulp');
    browserSync = require('browser-sync');
    sass        = require('gulp-sass');
    prefix      = require('gulp-autoprefixer');
    cp          = require('child_process');
    reload      = require('gulp-reload');
    sequence    = require('gulp-sequence');
    jekyll      = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';
    messages    = { jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build' };

// Build the site
gulp.task('build', function (done) {
    browserSync.notify(messages.jekyllBuild);
    return cp.spawn( jekyll , ['build'], {stdio: 'inherit'})
        .on('close', done);
});

// Compile SASS
gulp.task('sass', function () {
  return gulp.src('_sass/*.scss')
    .pipe(sass())
    .pipe(prefix("last 1 version", { cascade: true }))
    .pipe(gulp.dest('_site/css'))
    .pipe(gulp.dest('css'))
});

// Move assets (fonts, images, etc.) to _site on build
gulp.task('assets', function() {
  return gulp.src('_assets/*/*')
    .pipe(gulp.dest('_site/assets'))
});

// Start browser-sync
gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: '_site'
    }
  });
});

// Watch certain directories for changes and run sass/jekyll build tasks
gulp.task('watch', function() {
  gulp.watch('_sass/*.scss', ['sass']);
  gulp.watch(['_includes/*.html', '_layouts/*.html', '*.md', '_docs/*.md'], ['rebuild']);
});

// Reload the browser on rebuild
gulp.task('rebuild', ['build'], function () {
    browserSync.reload();
});

// Do all of these things when someone runs 'gulp'
gulp.task('default', sequence(['build'], ['sass'], ['assets'], ['browser-sync'], ['watch']));
