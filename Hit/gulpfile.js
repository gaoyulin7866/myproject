/*var PORT = 8888;
var http = require("http");
var url = require("url");
var fs = require("fs");
var path = require("path");
var mime = require("./mime").types;
var config = require("./config");
var zlib = require("zlib");
var server = http.createServer(function(request, response) {
 response.setHeader("Server", "Node/V5");
 var pathname = url.parse(request.url).pathname;
 console.log("url = " + pathname);
 if (pathname.slice(-1) === "/") {
  pathname = pathname + config.Welcome.file;
 }
 var realPath = __dirname + "/" + path.join("", path.normalize(pathname.replace(/\.\./g, "")));
 console.log("realPath = " + realPath);
 var pathHandle = function (realPath) {
  fs.stat(realPath, function (err, stats) {
   if (err) {
    response.writeHead(404, "Not Found", {'Content-Type': 'text/plain'});
    response.write("stats = " + stats);
    response.write("This request URL " + pathname + " was not found on this server.");
    response.end();
   } else {
    if (stats.isDirectory()) {
     realPath = path.join(realPath, "/", config.Welcome.file);
     pathHandle(realPath);
    } else {
     var ext = path.extname(realPath);
     ext = ext ? ext.slice(1) : 'unknown';
     var contentType = mime[ext] || "text/plain";
     response.setHeader("Content-Type", contentType);
     //获得文件的修改时间 
     var lastModified = stats.mtime.toUTCString();
     var ifModifiedSince = "If-Modified-Since".toLowerCase();
     //设置Last-Modified
     //服务器给浏览器返回文件最后一次修改时间Last-Modified
     response.setHeader("Last-Modified", lastModified);
 
     if (ext.match(config.Expires.fileMatch)) {
      var expires = new Date();
      expires.setTime(expires.getTime() + config.Expires.maxAge * 1000);
      response.setHeader("Expires", expires.toUTCString());
      response.setHeader("Cache-Control", "max-age=" + config.Expires.maxAge);
     }
     //服务器接收浏览器发送过来的If-Modified-Since报文头
     //日期相同表示该资源没有变化则返回304
     //告诉浏览器该资源你已经有了,不需要再请求了
     if (request.headers[ifModifiedSince] && lastModified == request.headers[ifModifiedSince]) {
      response.writeHead(304, "Not Modified");
      response.end();
     } else {
      var raw = fs.createReadStream(realPath);
      var acceptEncoding = request.headers['accept-encoding'] || "";
      var matched = ext.match(config.Compress.match); 
      if (matched && acceptEncoding.match(/\bgzip\b/)) {
       response.writeHead(200, "Ok", {'Content-Encoding': 'gzip'});
       raw.pipe(zlib.createGzip()).pipe(response);
      } else if (matched && acceptEncoding.match(/\bdeflate\b/)) {
       response.writeHead(200, "Ok", {'Content-Encoding': 'deflate'});
       raw.pipe(zlib.createDeflate()).pipe(response);
      } else {
       response.writeHead(200, "Ok");
       raw.pipe(response);
      }
     }
    }
   }
  });
 };
 
 pathHandle(realPath);
});
server.listen(PORT);
console.log("Server runing at port: " + PORT + ".");
*/
//npm install --save-dev gulp-replace
var gulp = require('gulp');
// 引入组件
htmlmin = require('gulp-htmlmin'); //html压缩
imagemin = require('gulp-imagemin');//图片压缩
pngcrush = require('imagemin-pngcrush');
clean = require('gulp-clean-css');//css压缩
less = require('gulp-less');//css编译
jshint = require('gulp-jshint');//js检测
uglify = require('gulp-uglify');//js压缩
concat = require('gulp-concat');//文件合并
rename = require('gulp-rename');//文件更名
notify = require('gulp-notify');//提示信息
replace = require('gulp-replace');
chinese2unicode = require('gulp-chinese2unicode');//将文件中的中文转换成unicode编码
imageisux = require('gulp-imageisux');//腾讯智图
livereload = require('gulp-livereload');
del = require('del');

gulp.task('default', function() {
  	//编译src目录下的所有less文件
    gulp.task('default', ['less','css','js','js_model','js_main','html']);
    //gulp.run('less','css','js','js_main','html');
    // 监听html文件变化
	//gulp.watch('node/**/*.html', function(){
        //gulp.task('html', ['html']);
		//gulp.run('html');
	//});
    gulp.watch('./hit/**/*.html', ['html']);
  	gulp.watch('./hit/less/*.less', ['less']);
  	gulp.watch('./hit/css/*.css', ['css']);
  	gulp.watch('./hit/js/*.js', ['js']);
    gulp.watch('./hit/js/model/*.js', ['js_model']);
    gulp.watch('./hit/js/main/*.js', ['js_main']);
	//gulp.watch('node/images/*', ['imagesTX']);
});

gulp.task('css', function () {
    //编译src目录下的所有less文件
    //除了reset.less和test.less（**匹配src/less的0个或多个子文件夹）
    gulp.src('./hit/css/*.css') 
        //.pipe(less())
        //.pipe(clean()) //压缩css
        .pipe(gulp.dest('./build/css'));
});

gulp.task('less', function () {
    //编译src目录下的所有less文件
    //除了reset.less和test.less（**匹配src/less的0个或多个子文件夹）
    gulp.src('./hit/less/*.less') 
        .pipe(less())
        .pipe(clean()) //压缩css
        .pipe(gulp.dest('./build/css'));
});
gulp.task('js', function() {
    gulp.src('./hit/js/*.js')
        .pipe(gulp.dest('./build/js'));  //输出
});
gulp.task('js_model', function() {
    gulp.src('./hit/js/model/*.js')
        .pipe(uglify())    //压缩
        // .pipe(chinese2unicode())  //将文件中的中文转换成unicode编码
        .pipe(gulp.dest('./build/js/model'));  //输出
});
gulp.task('js_main', function() {
    gulp.src('./hit/js/main/*.js')
        .pipe(concat('main.js'))    //合并所有js到main.js
        //.pipe(gulp.dest('js'))    //输出main.js到文件夹
        //.pipe(rename({suffix: '.min'}))   //rename压缩后的文件名
        .pipe(uglify())    //压缩
        // .pipe(chinese2unicode())  //将文件中的中文转换成unicode编码
        .pipe(gulp.dest('./build/js'));  //输出
});
/*gulp.task('js_main', function() {
    return gulp.src('node/js/main/*.js')
        .pipe(concat('main.js'))    //合并所有js到main.js
        //.pipe(gulp.dest('js'))    //输出main.js到文件夹
        .pipe(rename({suffix: '.min'}))   //rename压缩后的文件名
        .pipe(uglify())    //压缩
        .pipe(gulp.dest('./js'));  //输出
});
gulp.task('js_footer', function() {
    return gulp.src('node/js/footer/*.js')
        .pipe(concat('footer.js'))    //合并所有js到main.js
        //.pipe(gulp.dest('js'))    //输出main.js到文件夹
        .pipe(rename({suffix: '.min'}))   //rename压缩后的文件名
        .pipe(uglify())    //压缩
        .pipe(gulp.dest('./js'));  //输出
});
*/

gulp.task('imagesTX', function() {
    gulp.src('./hit/images/*')
    	.pipe(imageisux('./../../images',false));
});

// 压缩图片
gulp.task('images', function() {
    gulp.src('./hit/images/*')
    .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [pngcrush()]
    }))
    .pipe(gulp.dest('./build/images'))
    //.pipe(notify({ message: 'img task ok' }));
});

// 压缩html
gulp.task('html', function() {
    //var version = (new Date).valueOf();
    var version = Date.parse(new Date())
    var options = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    };
    gulp.src('./hit/**/*.html')
    .pipe(htmlmin(options))
    .pipe(replace('.css">', '.css?v=' + version + '">'))
    .pipe(replace('.js"></script>', '.js?v=' + version + '"></script>'))
    .pipe(gulp.dest('./build/'))
    //.pipe(notify({ message: 'html task ok' })); 
});