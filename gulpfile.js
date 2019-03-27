var gulp = require('gulp');
var less = require('gulp-less');
var babel = require('gulp-babel');
var imagemin = require('gulp-imagemin');

gulp.task('ES6', () => {
  var stream = gulp.src('./dev/js/*.js')
  .pipe(babel({
    presets : ['@babel/env']
  }))
  .pipe(gulp.dest('dist/js'));
  return stream;
})

gulp.task('less',() => {
  var stream = gulp.src('./dev/less/*.less')
    .pipe(less())
    .pipe(gulp.dest('./dist/css'));
    return stream;
})

gulp.task('img',()=>{
  var stream = gulp.src('./dev/img/*.*')
  .pipe(imagemin())
  .pipe(gulp.dest('dist/img'));
  return stream;
})

gulp.task('default',() => {
  var lessWatcher = gulp.watch('./dev/less/*.less',gulp.series('less'));
  var ES6Watcher = gulp.watch('./dev/js/*.js', gulp.series('ES6'));
  var imageWatcher = gulp.watch('./dev/img/*.*', gulp.series('img'));
  lessWatcher.on('change',(e)=>{
    console.log('File' + e.path + ' was ' + e.type + ', running tasks...' );
  })
  ES6Watcher.on('change',(e)=>{
    console.log('File ' + e.path + ' was ' + e.type + ', running tasks...');
  })
  imageWatcher.on('change',(e)=>{
    console.log('File ' + e.path + ' was ' + e.type + ', running tasks...');
  })
})