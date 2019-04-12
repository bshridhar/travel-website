var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch', function(done) {
    browserSync.init({
        notify: false,
        server: {
            baseDir: "app"
        }
    });
    watch('./app/index.html', function(done) {
        browserSync.reload();
    });
    watch('./app/assets/styles/**/*.css', function() {
        gulp.start('cssInject');
    });
    done();
});

gulp.task('cssInject', ['styles'], function(done) {
    return  gulp.src("./app/temp/styles/styles.css")
            .pipe(browserSync.stream());
});