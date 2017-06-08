/* eslint-disable no-console */
/* eslint-disable no-multi-spaces */

// Includes - Defining what will be used below.
// These are pulled in from the node_modules folder.
var gulp = require('gulp');
var livereload = require('gulp-livereload');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var sassLint = require('gulp-sass-lint');
var uglify = require('gulp-uglify');
var insert = require('gulp-insert');
var crlf = require('gulp-line-ending-corrector');
var rollup = require('rollup-stream');
var source = require('vinyl-source-stream');

// Basic error logging function to be used below
function errorLog (error) {
    console.error.bind(error);
    this.emit('end');
}

// Concats and tree shakes JS into one file
gulp.task('rollup', function () {
    return rollup(
        {
            entry: './_scripts/main.js',
            format: 'iife'
        })
        .pipe(source('all.js'))
        .pipe(gulp.dest('./_scripts/'));
});

// Uglify JS - Targets all .js files in the _js folder and converts
// them to functionally identical code that uses less bytes in the _scripts folder
gulp.task('uglify', ['rollup'], function () {
    gulp.src('_scripts/all.js')
        .pipe(uglify())
        .on('error', errorLog)
        .pipe(insert.append('\n'))
        .pipe(crlf({eolc:'CRLF', encoding:'utf8'}))
        .pipe(gulp.dest('_js'));
});

// Create expanded and .min versions of Sass styles in the _styles folder as CSS
gulp.task('sass', function () {
    gulp.src('_sass/style.scss')
        .pipe(rename('style.min.css'))
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(crlf({eolc:'CRLF', encoding:'utf8'}))
        .pipe(gulp.dest('_styles/'))
        .pipe(livereload());
});

// Create expanded and .min versions of Sass styles in the _styles folder as CSS
gulp.task('sassfont', function () {
    gulp.src('_sass/fonts.scss')
        .pipe(rename('fonts.min.css'))
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(crlf({eolc:'CRLF', encoding:'utf8'}))
        .pipe(gulp.dest('_styles/'))
        .pipe(livereload());
});

gulp.task('sasslint', function () {
    gulp.src(['_sass/*.scss', '_sass/*.sass'])
        .pipe(sassLint())
        .pipe(sassLint.format())
        .pipe(sassLint.failOnError());
});

// Run a local server on port 8000
gulp.task('serve', function (done) {
    var express = require('express');
    var app = express();
    //path to the folder that will be served. __dirname is project root
    var path = __dirname;
    app.use(express.static(path));
    app.listen(8000, function () {
        done();
    });
});

gulp.task('refreshsass', ['sass', 'sassfont'], function () {
    gulp.src('*.css')
        .pipe(livereload());
});

gulp.task('refreshjs', ['uglify'], function () {
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
    var url = 'http://localhost:8000';
    var OS = process.platform;
    var executable = '';

    //OS Specific values for opening files.
    if (OS == 'darwin') { executable = 'open "' + url + '"'; }
    if (OS == 'linux')  { executable = 'xdg-open ' + url;    }
    if (OS == 'win32')  { executable = 'explorer ' + url;    }

    //Run the OS specific command to open the url in the default browser
    require('child_process').exec(executable);
});

// The default Gulp task that happens when you run gulp.
// It runs all the other gulp tasks above in the correct order.
gulp.task('default', ['sass', 'sassfont', 'rollup', 'uglify', 'watch', 'serve', 'open']);

gulp.task('sans-open', ['sass', 'sassfont', 'rollup', 'uglify', 'watch', 'serve']);
