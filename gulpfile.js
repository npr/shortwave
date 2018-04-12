// Write new gulp tasks in this file. Need some help? Check out the gulp.js docs: https://gulpjs.com

// Variables
var gulp        = require('gulp');
    browserSync = require('browser-sync');
    sass        = require('gulp-sass');
    prefix      = require('gulp-autoprefixer');
    cp          = require('child_process');
    jekyll      = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';
    messages    = { jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build' };

// Build the site
gulp.task('build', function (done) {
    browserSync.notify(messages.jekyllBuild);
    return cp.spawn( jekyll , ['build'], {stdio: 'inherit'})
        .on('close', done);
});

// Rebuild Jekyll & do page reload
gulp.task('rebuild', ['build'], function () {
    browserSync.reload();
});

// Wait for jekyll-build, then launch the server
gulp.task('browser-sync', ['sass', 'build'], function() {
    browserSync({
        server: {
            baseDir: '_site'
        }
    });
});

// Compile files from _scss into _site/css and create new directory and file css/main.css
gulp.task('sass', function () {
    return gulp.src('_scss/main.scss')
        .pipe(sass({
            includePaths: ['scss'],
            onError: browserSync.notify
        }))
        .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('_site/css'))
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest('css'));
});

// Watch scss files for changes & recompile
// Watch html/md files, run jekyll & reload BrowserSync
gulp.task('watch', function () {
    gulp.watch('_scss/*.scss', ['sass']);
    gulp.watch(['*.html', '_layouts/*.html', '_includes/*.html'], ['rebuild']);
});

// Default task, running just `gulp` will compile the sass, compile the jekyll site, launch BrowserSync & watch files.
gulp.task('default', ['browser-sync', 'watch']);
