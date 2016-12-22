import gulp from 'gulp';
import sass from 'gulp-sass';
import minify from 'gulp-minify-css';
import source from 'gulp-sourcemaps';
import browserify from 'browserify';
import babelify from 'babelify';
import watchify from 'watchify';
import sourceStream from 'vinyl-source-stream';
import electron, { server } from 'electron-connect';
import runSequence from 'run-sequence';

const electronServer = server.create();
const config = {
  css: {
    src: './app/stylesheets/_scss/**/*.scss',
    dist: './app/stylesheets/',
    watch: './app/stylesheets/**/*.scss'
  },
  js: {
    app: './app/javascripts/app.js',
    src: './app/javascripts/**/*.jsx',
    dist: './app/javascripts/',
    watch: './app/javascripts/**/*.js*'
  }
};

const browserifyOpts = browserify({
  entries: config.js.app,
  cache: {},
  packageCache: {},
  plugin: [watchify]
});

gulp.task('browserify', () => {
  return browserifyOpts
    .transform(babelify, { presets: ['es2015', 'react'] })
    .bundle()
    .on('error', err => console.log(`Error: ${err.message}`))
    .pipe(sourceStream('bundle.js'))
    .pipe(gulp.dest(config.js.dist));
});

gulp.task('electron', () => {
  electronServer.start();
});

gulp.task('sass', () => {
  return gulp.src(`${config.css.src}`)
    .pipe(source.init())
    .pipe(sass())
    .pipe(minify())
    .pipe(source.write())
    .pipe(gulp.dest(`${config.css.dist}`));
});

gulp.task('watch', () => {
  gulp.watch(`${config.css.watch}`, e => runSequence('sass', () => electronServer.reload));
  gulp.watch(`${config.js.watch}`, e => runSequence('browserify', () => electronServer.reload));
});

gulp.task('default', () => {
  return runSequence(
    ['browserify', 'sass'],
    'electron',
    'watch'
  );
});