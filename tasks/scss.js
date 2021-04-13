const gulp = require("gulp");
const connect = require("gulp-connect");
const sass = require("gulp-sass")
const sourcemaps = require("gulp-sourcemaps")

sass.compiler = require("node-sass")

function scss () {
    return gulp.src("./src/scss/**/*.scss")
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("./dist/css"))
        .pipe(connect.reload());
}

function watchSCSS () {
    return gulp.watch("./src/scss/**/*.scss", {
        ignoreInitial: false
    }, scss)
}

module.exports = {
    watchSCSS
}



