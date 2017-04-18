/**
 * Created by liuhuan on 11/21/16.
 */
var gulp = require("gulp"),
	concat = require('gulp-concat'),  //合并
	uglify = require('gulp-uglify'),  //压缩
	rename = require('gulp-rename'),  //更改名称
	preprocess = require('gulp-preprocess'),
	del = require('del');             //clean




gulp.task('default', function () {
	gulp.src('index.html');
	// .pipe(preprocess({USERNAME: "liuhuan"}))
	// .pipe(gulp.dest('dest/', {}));
});

// //清空
// gulp.task('clean', function(cb) {
//     del(['build/*'], cb)
// });
//
// //task 即add功能,添加任务
// gulp.task('minifyjs', function(cb) {
//     return gulp.src('src/javascript/practise/levj.js')
//         .pipe(concat('levj.js'))        //合并所有js到main.js
//         .pipe(gulp.dest('build/js'))    //输出main.js到文件夹
//         .pipe(rename({suffix: '.min'})) //rename压缩后的文件名
//         .pipe(uglify())                 //压缩
//         .pipe(gulp.dest('build/js'));   //输出
//
//     cb();
// });
//
//

gulp.task('default', ['clean'], function() {
	gulp.start('minifyjs');
});


// gulp.task("webpack:build", function (callback) {
//     var myConfig = Object.create(webpackConfig);
//     myConfig.plugins = myConfig.plugins.concat(
//         new webpack.DefinePlugin({
//             "process.env": {
//                 "NODE_ENV": JSON.stringify("production")
//             }
//         })
//     )
//
//     // run webpack
//     webpack(myConfig, function (err, stats) {
//         //if (err) throw new gutil.PluginError("webpack", err);
//         //gutil.log("[webpack:build]", stats.toString({
//         //    colors: true
//         //}));
//         callback();
//     });
// });

// //拷贝JS文件
// gulp.task('copyJS',['eslint'], function () {
//     gulp.src(['vender/**/*.js'])
//         .pipe(revCollector())
//         .pipe(gulp.dest('build/js/vender'))
//
// });

// //拷贝图片文件
// gulp.task('copyImg', function () {
//     gulp.src(['assets/img/**'])
//         .pipe(gulp.dest('build/assets/img'))
// });
//
// //css合并、生成文件版本号
// gulp.task("concatCss", function (callback) {
//     return gulp.src(['assets/css/*.css'])                   //- 需要处理的css文件，放到一个字符串数组里
//         .pipe(concat('app.min.css'))                        //- 合并后的文件名
//         .pipe(minifyCss())                                  //- 压缩处理成一行
//         .pipe(rev())                                        //- 文件名加MD5后缀
//         .pipe(gulp.dest('build/assets/css'))                       //- 输出文件本地
//         .pipe(rev.manifest())                               //- 生成一个rev-manifest.json
//         .pipe(gulp.dest('build/assets/css'));                      //- 将 rev-manifest.json 保存
//
//     callback();
// });
//
// gulp.task('rev-css', ['concatCss'], function (callback) {
//     return gulp.src(['build/assets/css/*.json', 'view/**/*.html'])   //- 读取 rev-manifest.json 文件以及需要进行css名替换的文件
//         .pipe(revCollector())                           //- 执行文件内css名的替换
//         .pipe(gulp.dest('build/'));                     //- 替换后的文件输出的目录
//
//     callback();
// });

// //给js文件生成版本号并替换文件引用
// gulp.task("md5JS", function (callback) {
//     gulp.src(['dist/**'])
//         .pipe(rev())
//         .pipe(gulp.dest('build/js/dist'))
//         .pipe(rev.manifest())
//         .pipe(gulp.dest('build/js/dist'));
//
//     callback();
// });

//给js文件生成版本号并替换文件引用
// gulp.task("copyCommonJS", function (callback) {
//     gulp.src(['dist/**'])
//         .pipe(gulp.dest('build/js/dist'));
//
//     callback();
// });
//
// gulp.task('rev-js', function (callback) {
//     return gulp.src(['build/js/dist/*.json', 'build/**/*.html'])   //- 读取 rev-manifest.json 文件以及需要进行css名替换的文件
//         .pipe(revCollector())
//         .pipe(gulp.dest('build/'));                     //- 替换后的文件输出的目录
//     callback();
// });
//
// //检查代码规范
// gulp.task("eslint", function (callback) {
//     return gulp.src(['src/**/*.js'])
//         .pipe(eslint({
//             env:eslintConfig.env,
//             rules:eslintConfig.rules
//         }))
//         .pipe(eslint.format())
//     //.pipe(eslint.result(result => {
//     //    console.log(`ESLint result: ${result.filePath}`);
//     //    //console.log(`# Messages: ${result.messages.length}`);
//     //    //console.log(`# Warnings: ${result.warningCount}`);
//     //    //console.log(`# Errors: ${result.errorCount}`);
//     //}));
//     callback()
// });
