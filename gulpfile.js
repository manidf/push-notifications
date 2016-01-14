'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var eslint = require('gulp-eslint');

gulp.task('eslint', function() {
	return gulp.src(['app/js/**/*js'])
		.pipe(eslint())
		.pipe(eslint.result(function(result){
			console.log('ESLint result: ' + result.filePath);
			console.log('# Messages: ' + result.messages.length);
			console.log('# Warnings: ' + result.warningCount);
			console.log('# Errors: ' + result.errorCount)
		}))
		.pipe(eslint.format())
		.pipe(eslint.failAfterError());
});

gulp.task('default', ['lint']);

gulp.task('lint', function() {
	gulp.watch(['app/js/**/*.js'], ['eslint']);
});
