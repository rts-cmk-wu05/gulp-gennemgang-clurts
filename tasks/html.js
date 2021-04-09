const gulp = require("gulp");
const connect = require("gulp-connect");
const rename = require("gulp-rename");

function html () {
    return gulp.src("./src/html/*.html")
        .pipe(rename( function(path) {
            if(path.basename !== "index") {
                path.dirname = path.basename;
                path.basename = "index"
            }
        }))
        .pipe(gulp.dest("./dist"))
        .pipe(connect.reload());
}

function watchHTML () {
    return gulp.watch("./src/html/*.html", {
        ignoreInitial: false
    }, html)
}

module.exports = {
    watchHTML
}