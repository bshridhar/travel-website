var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars');

gulp.task('default', function(done){
	console.log("this works!");
	done();
});

gulp.task('html', function(done) {
    console.log("Hooray - the html worked amazingly");
	done();
});

gulp.task('styles', function(done) {
    console.log("Imagine SASS or PostCSS tasks running here!");
    return  gulp.src('./app/assets/styles/styles.css')
            .pipe(postcss([cssvars, autoprefixer]))
            .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function(done) {
    watch('./app/index.html', function(done) {
        gulp.start('html');
    });
    watch('./app/assets/styles/**/*.css', function() {
        gulp.start('styles');
    });
    done();
});