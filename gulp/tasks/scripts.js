var gulp = require('gulp'), webpack = require('webpack');

gulp.task('scripts', function() {
    //console.log("Before running webpack");
    webpack('../../webpack.config.js', function() {
        console.log("hurray!! Webpack completed");

        //callback();
    });
});