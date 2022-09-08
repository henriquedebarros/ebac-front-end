const {series}  = require("gulp");
const {parallel}  = require("gulp");
const gulp  = require("gulp");
const concat = require("gulp-concat");
const cssmin = require("gulp-cssmin");
const rename = require("gulp-rename");
const uglify = require("gulp-uglify");
const image = require("gulp-image");
const htmlmin = require("gulp-htmlmin");
const babel = require("gulp-babel");
const browserSync = require("browser-sync").create();
const reload = browserSync.reload;

function tarefasCSS(callback) {
    gulp.src([
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

    return callback()
}

function tarefasJS(callback) {
    gulp.src([
            './node_modules/jquery/dist/jquery.js',
            './node_modules/bootstrap/dist/js/bootstrap.js',
            "./node_modules/@fortawesome/fontawesome-free/js/fontawesome.js",
            "./node_modules/@fortawesome/fontawesome-free/js/brands.js",
            './vendor/owl/js/owl.js',
            './src/js/custom.js'
        ])
        .pipe(babel({
            comments: true,
            presets: ['@babel/env']
        }))
        .pipe(concat("libs.js"))
        .pipe(uglify())
        .pipe(rename({suffix: ".min"}))
        .pipe(gulp.dest("./dist/js"))

    return callback()
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

function tarefasHTML(callback) {
    gulp.src("./src/**/*.html")
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest("./dist"))

    return callback()
}

gulp.task("server", function() {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    })
    gulp.watch("./src/**/*").on("change", processo)
    gulp.watch("./src/**/*").on("change", reload)
})

exports.estilos = tarefasCSS;
exports.scripts = tarefasJS;
exports.imagens = tarefasImagem;

const processo = series(tarefasHTML, tarefasJS, tarefasCSS);

exports.total = parallel(tarefasHTML, tarefasJS, tarefasCSS, tarefasImagem);

exports.default = processo;