const gulp = require("gulp");
const connect = require("gulp-connect");
const imagemin = require("gulp-imagemin");
const imageResize = require('gulp-image-resize');

function image () {
    return gulp.src("./src/img/**/*.*")
        .pipe(imageResize({
            width : 1200,
            height : 800,
            crop : false,
            upscale : false
          }))
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