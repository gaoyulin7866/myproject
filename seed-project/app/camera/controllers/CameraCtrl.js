'use strict';

angular.module('app.camera').controller('CameraCtrl', function($scope) {
    var canvas = null,
        context = null,
        video = null;
    //开始拍照  
    function startPat() {
        setTimeout(function() { //防止调用过快  
            if (context) {
                context.drawImage(video, 0, 0, 320, 320);
                CatchCode();
            }
        }, 200);
    };
    // 抓屏获取图像流，并上传到服务器
    function CatchCode(content) {
        if (canvas != null) {
            //以下开始编 数据     
            var imgData = canvas.toDataURL('image/png', 0.92); //将图片转换为base64
            var base64Data = imgData;
            //开始异步上  
            $.post("./saveing.php", {
                "img": base64Data
            }, function(result) {
                printHtml("解析结果：" + result.data);
                if (result.status == "success" && result.data != "") {
                    alert("解析结果成功！");
                } else {
                    alert("解析失败，重新解析");
                    startPat(); //如果没有解析出来则重新抓拍解析         
                }
            }, "json");
        }
    };
    //打印内容到页面  
    function printHtml(content) {
        $(window.document.body).append(content + "<br/>")
    };
    if (typeof(Worker) !== "undefined") {
        console.log(11111);

        var canvas = document.getElementById("canvas");
        var context = canvas.getContext("2d");
        var video = document.getElementById("video");
        $("#snap").show();

        var videoObj = {
            'video': true,
            audio: false
        };
        var flag = true,
            MediaErr = function(error) {
                flag = false;
                if (error.PERMISSION_DENIED) {
                    alert('用户拒绝了浏览器请求媒体的权限', '提示');
                } else if (error.NOT_SUPPORTED_ERROR) {
                    alert('对不起，您的浏览器不支持拍照功能，请使用其他浏览器', '提示');
                } else if (error.MANDATORY_UNSATISFIED_ERROR) {
                    alert('指定的媒体类型未接收到媒体流', '提示');
                } else {
                    alert('系统未能获取到摄像头，请确保摄像头已正确安装。或尝试刷新页面，重试', '提示');
                }
            };
        //获取媒体的兼容代码，目前只支持（Firefox,Chrome,Opera）  
        if (navigator.getUserMedia) {
            //qq浏览器不支持  
            if (navigator.userAgent.indexOf('MQQBrowser') > -1) {
                alert(navigator.userAgent + '对不起，您的浏览器不支持拍照功能，请使用其他浏览器', '提示');
                return false;
            };
            navigator.getUserMedia({ 'video': true }, function(stream) {
                video.src = window.URL.createObjectURL(stream);
                video.play();
            }, MediaErr);
        } else if (navigator.webkitGetUserMedia) {
            navigator.webkitGetUserMedia(videoObj, function(stream) {
                video.src = window.URL.createObjectURL(stream);
                video.play();
            }, MediaErr);
        } else if (navigator.mediaDevices.getUserMedia) { //火狐
            navigator.mozGetUserMedia(videoObj, function(stream) {
                video.src = window.URL.createObjectURL(stream);
                video.play();
            }, MediaErr);
        } else if (navigator.msGetUserMedia) {
            navigator.msGetUserMedia(videoObj, function(stream) {
                $(document).scrollTop($(window).height());
                video.src = window.URL.createObjectURL(stream);
                video.play();
            }, MediaErr);
        } else {
            alert('对不起，您的浏览器不支持拍照功能，请使用其他浏览器');
            return false;
        };
        if (flag) {
            alert('为了获得更准确的测试结果，请尽量将二维码置于框中，然后进行拍摄、扫描。 请确保浏览器有权限使用摄像功能');
        };
        //这个是拍照按钮的事件，  
        $scope.dianji = function() {
            startPat();
        };
    } else {
        console.log(33333);
        printHtml("浏览器不支持HTML5 CANVAS");
    };
});