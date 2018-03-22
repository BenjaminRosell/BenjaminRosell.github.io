var gulp        = require('gulp');
var browserSync = require('browser-sync');
var watch       = require('gulp-watch');

gulp.task('watch', function () {    
    gulp.start('browser-sync');
});

gulp.task('browser-sync', function() {
    browserSync({
        // proxy: "www.infoprimes.dev",
        server: {
            baseDir: "./"
        },
        files: [
            "*.html",
            "css/*.css",
            "js/*.js"
        ]
    });
});

gulp.task('default', ['watch']);