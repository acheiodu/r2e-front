const argv = require('yargs').argv;
const gulp = require("gulp");
const replace = require("gulp-replace");
const debug = require('gulp-debug');
const del = require("del");

const dev_regex = /https:\/\/r2e.mybluemix.net/g;
const prod_regex = /http:\/\/localhost:3000/g;

const url = argv.dev ? "http://localhost:3000" : "https://r2e.mybluemix.net";
const replace_regex = argv.dev ? dev_regex : prod_regex;

gulp.task("deleteDistFolder", [], () => {
	del(["../r2e-back/dist/**/*"], {force : true});
});

gulp.task("changeVariables", ["deleteDistFolder"], () => {
	gulp.src("./src/app/*.service.ts")
	.pipe(debug({title : "arquivos de serviço"}))
	.pipe(replace(replace_regex, url))
	.pipe(gulp.dest("./src/app"))
});

gulp.task("changeBack", [], () => {
	gulp.src("./src/app/*.service.ts")
	.pipe(replace(dev_regex, "http://localhost:3000"))
});

gulp.task("prepare", ["changeVariables"], () => {

});

gulp.task("build", ["changeBack"], () => {
	gulp.src("./dist/**/*")
	.pipe(gulp.dest("../r2e-back/dist"))
});