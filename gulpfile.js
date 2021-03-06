var gulp        = require('gulp');
var browserSync = require('browser-sync');
var watch       = require('gulp-watch');

gulp.task('watch', function () {    
    gulp.start('browser-sync');
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./"
        },
        files: [
            "*.html",
            "css/*.css",
            "javascript/*.js"
        ]
    });
});

gulp.task('default', ['watch']);