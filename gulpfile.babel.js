import gulp from 'gulp';
import lazypipe from 'lazypipe';
import gulpLoadPlugins from 'gulp-load-plugins';
import runSequence from 'run-sequence';

var plugins = gulpLoadPlugins();

const paths = {
  sass: 'sass/**/*.scss',
  dist:'www'
};

let styles = lazypipe()
    .pipe(plugins.sass);


gulp.task('tocss', () => {
    return gulp.src(paths.sass)
        .pipe(styles())
        .pipe(gulp.dest('.tmp'));
});

gulp.task('default', cb => {
    runSequence('tocss',
        cb);
});
gulp.task('serve', cb => {
    runSequence('',
        cb);
});
