var gulp = require('gulp'),
	sass = require('gulp-sass'),
	pug = require('gulp-pug');

gulp.task('sass', () => {
	return gulp.src('./sass/main.scss')
		.pipe(sass({outputStyle: 'expanded'}))
		.pipe(gulp.dest('./css'));
});

gulp.task('watch', () => {
	gulp.watch(['./sass/main.scss'], ['sass']);
});

gulp.task('default', ['watch']);
