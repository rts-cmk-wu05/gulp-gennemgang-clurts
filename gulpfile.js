const gulp = require("gulp");
const connect = require("gulp-connect");
const { watchHTML } = require("./tasks/html");
const { watchSCSS } = require("./tasks/scss");
const { watchJS } = require("./tasks/js");
const { watchMEDIA } = require("./tasks/media");
const { watchIMAGE } = require("./tasks/image");


function dist (done){
    //her kommer det vi gerne vil have tasken til at gøre
    watchHTML();
    watchSCSS();
    watchJS();
    watchMEDIA();
    watchIMAGE();
    connect.server({
        root: "./dist",
        livereload: true,
        port: 3000
    })
    done()
}

exports.default = dist;