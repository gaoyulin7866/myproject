

"use strict";


angular
.module('app.camera', ['ngResource','ui.router'])
.config(function ($stateProvider) {

    $stateProvider
        .state('app.camera', {
            url: '/camera',
            views: {
                content: {
                    templateUrl: 'app/camera/views/camera.html'
                }
            },
            data:{
                title: 'camera'
            }
        });
});


