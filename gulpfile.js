const gulp = require('gulp');
const changed = require('gulp-changed')
const imagemin = require('gulp-imagemin');
const minify = require('gulp-uglify');
const deploy = require('gulp-gh-pages')

gulp.task('copyHtml', [ 'imagemin' ], () => {
  gulp.src('src/*.html')
    .pipe(changed('public'))
    .pipe(gulp.dest('public'));
});

gulp.task('copyCss', () => {
  gulp.src('src/css/*')
    .pipe(changed('public/css'))
    .pipe(gulp.dest('public/css'));
});

gulp.task('imagemin', () => {
  gulp.src('src/thumbnails/*')
    .pipe(changed('public/thumbnails'))
    .pipe(imagemin())
    .pipe(gulp.dest('public/thumbnails'));
});

gulp.task('minify', () => {
  gulp.src('src/js/*.js')
    .pipe(changed('public/js'))
    .pipe(minify())
    .pipe(gulp.dest('public/js'));
});

gulp.task('build', [ 'copyHtml', 'copyCss', 'minify' ]);

gulp.task('deploy', [ 'build' ], () => {
  gulp.src('dist/**/*')
    .pipe(deploy({ branch: 'master' }));
});
