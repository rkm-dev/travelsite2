var gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create();

//task named 'watch'
gulp.task('watch', function() {
  
  browserSync.init({
    notify: false,
    server: {
      baseDir: "app"
    }
  });

  watch('./app/index.html', function(){
    //gulp.start('html');
    browserSync.reload();
  });
  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('cssInject');
  });
  watch('./app/assets/scripts/**/*.js', function() {
    gulp.start('scriptsRefresh');
  });
});


//task named 'cssInject'
gulp.task('cssInject', ['styles'], function() {
  return gulp.src('./app/temp/styles/styles.css')
             .pipe(browserSync.stream());
});


//task for script update and browser refersh
gulp.task('scriptsRefresh',['scripts'], function() {
  browserSync.reload();
});