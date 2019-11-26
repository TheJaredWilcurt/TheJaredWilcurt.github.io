/* eslint-disable no-console */
/* eslint-disable no-multi-spaces */

// Includes - Defining what will be used below.
// These are pulled in from the node_modules folder.
const gulp = require('gulp');
const livereload = require('gulp-livereload');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const crlf = require('gulp-line-ending-corrector');

// Create expanded and .min versions of Sass styles in the _styles folder as CSS
gulp.task('sass', function () {
  gulp.src('_sass/style.scss')
    .pipe(rename('style.min.css'))
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(crlf({ eolc:'CRLF', encoding:'utf8' }))
    .pipe(gulp.dest('_styles/'))
    .pipe(livereload());
});

// Create expanded and .min versions of Sass styles in the _styles folder as CSS
gulp.task('sassfont', function () {
  gulp.src('_sass/fonts.scss')
    .pipe(rename('fonts.min.css'))
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(crlf({ eolc:'CRLF', encoding:'utf8' }))
    .pipe(gulp.dest('_styles/'))
    .pipe(livereload());
});

// Run a local server on port 8000
gulp.task('serve', function (done) {
  const express = require('express');
  const app = express();
  // path to the folder that will be served. __dirname is project root
  const path = __dirname;
  app.use(express.static(path));
  app.listen(8000, function () {
    done();
  });
});

gulp.task('refreshsass', ['sass', 'sassfont'], function () {
  gulp.src('*.css')
    .pipe(livereload());
});

gulp.task('refreshjs', function () {
  gulp.src('*.js')
    .pipe(livereload());
});

// Enable live reload listening from HTML files in the browser
// if you have the LiveReload browser extension installed.
gulp.task('refreshhtml', function () {
  gulp.src('*.html')
    .pipe(livereload());
});

// Watch for changes in JS, Sass, and HTML files,
// Uglify, Process the Sass, and reload the browser automatically
gulp.task('watch', function () {
  gulp.watch(['_scripts/*.js', '!_scripts/all.js'], ['refreshjs']);
  gulp.watch('_sass/*', ['refreshsass']);
  gulp.watch('*.html', ['refreshhtml']);

  livereload.listen();
});

// Automatically opens the local server in your default browser
gulp.task('open', function () {
  const url = 'http://localhost:8000';
  const OS = process.platform;
  const executable = '';

  // OS Specific values for opening files.
  if (OS == 'darwin') { executable = 'open "' + url + '"'; }
  if (OS == 'linux')  { executable = 'xdg-open ' + url;    }
  if (OS == 'win32')  { executable = 'explorer ' + url;    }

  // Run the OS specific command to open the url in the default browser
  require('child_process').exec(executable);
});

// The default Gulp task that happens when you run gulp.
// It runs all the other gulp tasks above in the correct order.
gulp.task('default', ['sass', 'sassfont', 'watch', 'serve', 'open']);

gulp.task('sans-open', ['sass', 'sassfont', 'watch', 'serve']);

gulp.task('build', ['sass', 'sassfont']);
