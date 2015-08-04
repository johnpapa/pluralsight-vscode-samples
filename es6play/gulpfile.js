var babel = require('gulp-babel');
var browserSync = require('browser-sync');
var gulp = require('gulp');
var es6Path = 'js/*.js';
var compilePath = 'dist';
var superstatic = require( 'superstatic' );

gulp.task('babel', function () {
    gulp.src([es6Path])
        .pipe(babel())
        .pipe(gulp.dest(compilePath));
});

gulp.task('watch', function() {
    gulp.watch(es6Path, ['babel']);
});

gulp.task('serve', ['babel', 'watch'], function () {
    var server = superstatic({
        clean_urls: true,
        routes: {
            '/**': 'index.html',
            '/js/**/*': '/js/'
        }
    });
    server.listen(function() {
        startBrowserSync();
    });
});

gulp.task('default', ['babel', 'watch']);

function startBrowserSync() {
    if (browserSync.active) { return; }

    var options = {
        proxy: 'localhost:3474',
        port: 3000,
        files: ['**/*.js'],
        injectChanges: true,
        logFileChanges: true,
        logLevel: 'debug',
        logPrefix: 'es6play',
        notify: true,
        reloadDelay: 0
    } ;

    browserSync(options);
}