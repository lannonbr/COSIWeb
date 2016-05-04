var gulp = require('gulp'),
	sass = require('gulp-sass'),
	pug = require('gulp-pug');

gulp.task('sass', () => {
	return gulp.src('./sass/main.scss')
		.pipe(sass({outputStyle: 'expanded'}))
		.pipe(gulp.dest('./css'));
});

gulp.task('pug', () => {
	return gulp.src('./pug/*.pug')
		.pipe(pug({pretty: true}))
		.pipe(gulp.dest('./'));
});

gulp.task('watch', () => {
	gulp.watch(['./sass/main.scss'], ['sass']);
	gulp.watch(['./pug/*.pug'], ['pug']);
});

gulp.task('default', ['watch']);
