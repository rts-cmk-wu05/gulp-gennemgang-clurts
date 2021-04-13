const gulp = require("gulp");
const connect = require("gulp-connect");
const { watchHTML } = require("./tasks/html");
const { watchSCSS } = require("./tasks/scss");
const { watchJS } = require("./tasks/js")


function dist (done){
    //her kommer det vi gerne vil have tasken til at gøre
    watchHTML()
    watchSCSS()
    watchJS()
    connect.server({
        root: "./dist",
        livereload: true,
        port: 3000
    })
    done()
}

exports.default = dist;