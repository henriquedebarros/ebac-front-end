const gulp  = require("gulp");
const concat = require("gulp-concat");
const cssmin = require("gulp-cssmin");
const rename = require("gulp-rename");
const uglify = require("gulp-uglify");

function tarefasCSS() {
    return gulp.src("./vendor/**/*.css")
        .pipe(concat("libs.css"))
        .pipe(cssmin())
        .pipe(rename({suffix: ".min"}))
        .pipe(gulp.dest("./dist/css"))
}

function tarefasJS() {
    return gulp.src("./vendor/**/*.js")
        .pipe(concat("libs.js"))
        .pipe(uglify())
        .pipe(rename({suffix: ".min"}))
        .pipe(gulp.dest("./dist/js"))
}

exports.estilos = tarefasCSS;
exports.scripts = tarefasJS;