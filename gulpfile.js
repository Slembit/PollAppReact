var gulp = require('gulp')
  , browserify = require('gulp-browserify')
  , webserver = require('gulp-webserver')
  , sass = require("gulp-sass")
  , server = require('gulp-develop-server')
  , bs = require('browser-sync')
  ;

var options = {
    server: {
        path: './server/server.js',
        execArgv: [ '--harmony' ]
    },
    bs: {
        proxy: 'http://localhost:3000'
    }
};
var src = 'source'
  , app = 'build'
  ;

gulp.task('js', function () {
  console.log('building them jsx goodies!');
  return gulp.src(src + '/js/app.js')
    .pipe(browserify({
      transform: 'reactify',
      debug: true
    }))
    .on('error', function (err) {
      console.error('Error!', err.message);
    })
    .pipe(gulp.dest(app + '/js'))
    .pipe(bs.reload({stream:true}))
    ;
    
});

gulp.task( 'server:start', function() {
    server.listen( options.server, function( error ) {
        if( ! error ) bs( options.bs );
    });
});
 
// If server scripts change, restart the server and then browser-reload. 
gulp.task( 'server:restart', function() {
    server.restart( function( error ) {
        if( ! error ) bs.reload();
    });
});
// gulp.task('html', function() {
//   gulp.src( app + '/**/*.html');
// });


gulp.task('sass', function () {
  gulp.src(src + '/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(app + '/css'))
    .pipe(bs.reload({stream:true}))
});

gulp.task('watch', function () {

  gulp.watch(src + '/js/**/*', ['js']);
  gulp.watch(src + '/sass/**/*.scss', ['sass']);
gulp.watch(['./server/**/*.js'],['server:restart'])
  //gulp.watch([ app + '/**/*.html'], ['html']);
});

/*
gulp.task('webserver', function() {
  gulp.src( app + '/')
    .pipe(webserver({
        livereload: true,
        open: true
    }));
});
*/
gulp.task('default', ['watch', 'js', 'sass', 'server:start']);