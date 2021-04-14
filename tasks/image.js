const gulp = require("gulp");
const connect = require("gulp-connect");
const imagemin = require("gulp-imagemin");

function image () {
    return gulp.src("./src/img/**/*.*")
        .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.mozjpeg({quality: 60, progressive: true}),
            imagemin.optipng({optimizationLevel: 5}),
            imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]
            })
        ]))
        .pipe(gulp.dest("./dist/img"))
        .pipe(connect.reload());
}

function watchIMAGE() {
    return gulp.watch("./src/img/**/*.*", {
        ignoreInitial: false
    }, image)
}

module.exports = {
    watchIMAGE
}