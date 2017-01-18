var gulp         = require('gulp'),
    browserSync  = require('browser-sync'),
    slim         = require("gulp-slim"),
    sass         = require('gulp-sass'),
    plumber      = require('gulp-plumber'),
    autoprefixer = require('gulp-autoprefixer'),
    rename       = require('gulp-rename'),
    using        = require('gulp-using'),
    rm           = require('gulp-rimraf'),
    gulprunseq   = require('gulp-run-seq'),
    sourcemaps   = require('gulp-sourcemaps'),
    imgmin       = require('gulp-imagemin'),
    replace      = require('gulp-replace'),
    changed      = require('gulp-changed'),
    zip          = require('gulp-zip'),
    prettify     = require('gulp-html-prettify'),
    fs           = require('fs'),
    request      = require('request'),
    cheerio      = require('cheerio');

// src & output
var src = 'src/',
    img = 'dest/images/',
    script = 'dest/js/',
    css = 'dest/css/';
/*=================================
=            task init            =
=================================*/
// browser-sync task !attention index.html require
gulp.task('browserSync',function () {
  'use strict';
  browserSync({
    // browser: 'chrome',
    server: {
      baseDir: 'dest/'
    }
  });
});

// img task
gulp.task('images', function() {
  return gulp.src([src+'images/**/*.{png,jpg,gif,svg}'])
  .pipe(gulp.dest(img))
});
gulp.task('visuels', function() {
  return gulp.src([src+'Visuels/**/**/*.{png,jpg,gif,svg}'])
  .pipe(gulp.dest('dest/Visuels'))
});
// fonts
gulp.task('fonts', function() {
  return gulp.src([src+'fonts/*.{eot,svg,ttf,woff}'])
  .pipe(gulp.dest('dest/fonts'))
});
// script-cp task
gulp.task('script', function() {
  // 'use strict';
  return gulp.src([src+'js/*.js'])
  // .pipe(npm()) // js traitement
  .pipe(gulp.dest(script))
  .pipe(browserSync.reload({stream: true }));
});

// sass task
gulp.task('sass', function() {
  return gulp.src(src+'scss/*.scss')
  .pipe(plumber())
  .pipe(sourcemaps.init())
    // .pipe(sass())
    .pipe(sass({
      errLogToConsole: true,
      outputStyle: 'compact'
    }))
  .pipe(autoprefixer(['last 2 version', '> 1%', 'ie >= 8']))
  .pipe(changed(css))
  .pipe(sourcemaps.write('.maps'))
  .pipe(gulp.dest('dest/css/'))
  .pipe(using())
  .pipe(browserSync.reload({stream: true }));
});

// slim task
gulp.task('slim', function () {
  return gulp.src([src+'slim/*.slim']) // src+'*.slim', // pas de fichier sur :root
  .pipe(plumber())
  .pipe(slim( {pretty: true, indent: '2' })) // {read:false},
  .pipe(using())
  .pipe(gulp.dest('dest/')) // slim folder
  .on('end', browserSync.reload)
  // .pipe(browserSync.reload({
  //   stream: true
  // }))
});

gulp.task('dev',['browserSync','visuels','images','script','fonts','slim','sass'], function() {
  gulp.watch([src+'images/**/*.{png,jpg,gif,svg}'],['images'])
  gulp.watch([src+'Visuels/**/**/*.{png,jpg,gif,svg}'],['visuels'])
  gulp.watch([src+'js/*.js'],['script'])
  gulp.watch(src+'scss/*.scss',['slim','sass','images','script']);
  gulp.watch([src+'slim/*.slim',src+'**/*.slim'],['slim','images','script']);
  // gulp.watch(src+'**/*.slim',['slim','images','script']);
  // gulp.watch(src+'**/**/*.slim',['slim','images','script']);
  // gulp.start('build');
});

// prod

// replace ../images/src/ (css) & images/src/blabla (html)
gulp.task('replaceSrc', function(){
  // cp dest/imgs/* in build/
  // gulp.src(['dest/images/imgZL/*.{png,jpg,gif,svg}','dest/js/injectHtml.js','dest/js/inject_Html.js'])
  gulp.src(['dest/images/imgZL/*.{png,jpg,gif,svg}','dest/js/injectHtml.js'])
    // .pipe(replace('./images/imgZL/', ''))
    .pipe(gulp.dest('build/'))
    .pipe(using())
    .on('end', function() {
      gulp.src('build/*')
      .pipe(zip('archive.zip'))
      .pipe(gulp.dest('build/'));
      console.log('archive OK')
    });

  // cp inject_html replcae img src by BO path
  gulp.src(['dest/js/inject_Html.js'])
    .pipe(replace('./images/imgZL/', 'http://www.latelierdelucie.fr/Upload/ZonesLibres/da5e4f51-dda0-421b-84a2-951865963d7a/FR/'))
    .pipe(gulp.dest('build/'))
    .pipe(using());
  // cp dest/index.html in build/ + regex to replace src path
  gulp.src(['dest/index.html'])
    .pipe(replace('images/imgZL/', ''))
    .pipe(gulp.dest('build/'))
    .pipe(using());
  // cp dest/styleZL.html in build/ + regex to replace src path
  gulp.src(['dest/css/modifTempl.css'])
    // change src
    .pipe(replace('../images/imgZL/', ''))
    // del css map
    .pipe(replace(/\/\*.+?\*\//, '/* end of zoneLibre css */'))
    // del CR
    .pipe(rename("index.css"))
    .pipe(gulp.dest('build/'))
    .pipe(using())
    .on('end',function () {
      replaceBool = true;
      replaceEnd(replaceBool);
      gulp.start('html');
    });
});

function replaceEnd (replaceBool) {
  console.log('replaceBool: '+replaceBool);
};

// static
// @see http://maxogden.com/scraping-with-node.html
gulp.task('html', function() {
  // extraction ecriture build/index.html
  // var fs = require('fs')
  var $ = require('cheerio')
  var htmlString = fs.readFileSync('build/index.html').toString()
  var parsedHTML = $.load(htmlString)

  // query for all elements with class 'foo' and loop over them
  parsedHTML('#ctl00_ContentPlaceHolder1_shpEncartRayonEvent').map(function(i, zoneL) {
    // the zoneL html element into a cheerio object (same pattern as jQuery)
    zoneL = $(zoneL);
    zoneL = zoneL.html()
    .replace('./js/injectHtml.js', 'injectHtml.js')
    .replace('./js/inject_Html.js', 'inject_Html.js')
    .replace(/(<img("[^"]*"|[^\/">])*)>/g, "$1 />")
    .replace(/(<br[^\/])/, "<br />")
    .replace(/<br>/g, "<br />")
    .replace(/&apos;/g, "'")
    .replace(/&#x20AC;/g, "&euro;")
    .replace(/&#xE9;/g, "&eacute;")
    .replace(/&#xC9;/g, "&Eacute;")
    .replace(/&#xE8;/g, "&egrave;")
    .replace(/&#xEF;/g, "&iuml;");
    console.log(zoneL);
    fs.writeFile("build/index.html", zoneL, function(err) {
      if (err) {
        return console.log(err);
      }
      console.log("The file was saved!");
    });
  });
  gulp.src('build/index.html')
  .pipe(prettify({indent_car:'', indent_size: 2}))
  .pipe(gulp.dest('./build/'))

});

gulp.task('build',['replaceSrc']);