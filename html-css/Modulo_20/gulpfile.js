const gulp  = require("gulp");
const concat = require("gulp-concat");
const cssmin = require("gulp-cssmin");
const rename = require("gulp-rename");
const uglify = require("gulp-uglify");
const image = require("gulp-image");

function tarefasCSS() {
    return gulp.src([
            "./node_modules/bootstrap/dist/css/bootstrap.css",
            "./node_modules/@fortawesome/fontawesome-free/css/fontawesome.css",
            "./node_modules/@fortawesome/fontawesome-free/css/brands.css",
            "./vendor/owl/css/owl.css",
            "./src/css/style.css"
        ])
        .pipe(concat("libs.css"))
        .pipe(cssmin())
        .pipe(rename({suffix: ".min"}))
        .pipe(gulp.dest("./dist/css"))
}

function tarefasJS() {
    return gulp.src([
            './node_modules/jquery/dist/jquery.js',
            './node_modules/bootstrap/dist/js/bootstrap.js',
            "./node_modules/@fortawesome/fontawesome-free/js/fontawesome.js",
            "./node_modules/@fortawesome/fontawesome-free/js/brands.js",
            './vendor/owl/js/owl.js',
            './src/js/custom.js'
        ])
        .pipe(concat("libs.js"))
        .pipe(uglify())
        .pipe(rename({suffix: ".min"}))
        .pipe(gulp.dest("./dist/js"))
}

function tarefasImagem() {
    return gulp.src("./src/images/*")
        .pipe(image({
            pngquant: true,
            optipng: false,
            zopflipng: true,
            jpegRecompress: false,
            mozjpeg: true,
            gifsicle: true,
            svgo: true,
            concurrent: 10,
            quiet: true
        }))
        .pipe(gulp.dest("./dist/images"))
}

exports.estilos = tarefasCSS;
exports.scripts = tarefasJS;
exports.imagens = tarefasImagem;