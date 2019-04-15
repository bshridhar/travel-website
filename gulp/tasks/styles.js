var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssimports = require('postcss-import'),
mixins = require('postcss-mixins');

gulp.task('styles', function(done) {
    console.log("Imagine SASS or PostCSS tasks running here!");
    return  gulp.src('./app/assets/styles/styles.css')
            .pipe(postcss([cssimports, mixins, nested, cssvars, autoprefixer]))
            .on('error', function(errorInfo) {
                console.log(errorInfo.toString());
                this.emit('end');
            })
            .pipe(gulp.dest('./app/temp/styles'));
});