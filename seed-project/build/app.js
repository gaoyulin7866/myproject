'use strict';



var appConfig = window.appConfig || {};

appConfig.menu_speed = 200;

appConfig.smartSkin = "smart-style-0";

appConfig.skins = [
    {name: "smart-style-0",
        logo: "styles/img/logo.png",
        class: "btn btn-block btn-xs txt-color-white margin-right-5",
        style: "background-color:#4E463F;",
        label: "Smart Default"},

    {name: "smart-style-1",
        logo: "styles/img/logo-white.png",
        class: "btn btn-block btn-xs txt-color-white",
        style: "background:#3A4558;",
        label: "Dark Elegance"},

    {name: "smart-style-2",
        logo: "styles/img/logo-blue.png",
        class: "btn btn-xs btn-block txt-color-darken margin-top-5",
        style: "background:#fff;",
        label: "Ultra Light"},

    {name: "smart-style-3",
        logo: "styles/img/logo-pale.png",
        class: "btn btn-xs btn-block txt-color-white margin-top-5",
        style: "background:#f78c40",
        label: "Google Skin"},

    {name: "smart-style-4",
        logo: "styles/img/logo-pale.png",
        class: "btn btn-xs btn-block txt-color-white margin-top-5",
        style: "background: #bbc0cf; border: 1px solid #59779E; color: #17273D !important;",
        label: "PixelSmash"},

    {name: "smart-style-5",
        logo: "styles/img/logo-pale.png",
        class: "btn btn-xs btn-block txt-color-white margin-top-5",
        style: "background: rgba(153, 179, 204, 0.2); border: 1px solid rgba(121, 161, 221, 0.8); color: #17273D !important;",
        label: "Glass"},

    {name: "smart-style-6",
        logo: "styles/img/logo-pale.png",
        class: "btn btn-xs btn-block txt-color-white margin-top-5",
        style: "background: #2196F3; border: 1px solid rgba(121, 161, 221, 0.8); color: #FFF !important;",
        beta: true,
        label: "MaterialDesign"
    }


];



appConfig.sound_path = "sound/";
appConfig.sound_on = true; 


/*
* DEBUGGING MODE
* debugState = true; will spit all debuging message inside browser console.
* The colors are best displayed in chrome browser.
*/


appConfig.debugState = false;	
appConfig.debugStyle = 'font-weight: bold; color: #00f;';
appConfig.debugStyle_green = 'font-weight: bold; font-style:italic; color: #46C246;';
appConfig.debugStyle_red = 'font-weight: bold; color: #ed1c24;';
appConfig.debugStyle_warning = 'background-color:yellow';
appConfig.debugStyle_success = 'background-color:green; font-weight:bold; color:#fff;';
appConfig.debugStyle_error = 'background-color:#ed1c24; font-weight:bold; color:#fff;';


appConfig.voice_command = true;
appConfig.voice_command_auto = false;

/*
 *  Sets the language to the default 'en-US'. (supports over 50 languages 
 *  by google)
 * 
 *  Afrikaans         ['af-ZA']
 *  Bahasa Indonesia  ['id-ID']
 *  Bahasa Melayu     ['ms-MY']
 *  CatalГ            ['ca-ES']
 *  ДЊeЕЎtina         ['cs-CZ']
 *  Deutsch           ['de-DE']
 *  English           ['en-AU', 'Australia']
 *                    ['en-CA', 'Canada']
 *                    ['en-IN', 'India']
 *                    ['en-NZ', 'New Zealand']
 *                    ['en-ZA', 'South Africa']
 *                    ['en-GB', 'United Kingdom']
 *                    ['en-US', 'United States']
 *  EspaГ±ol          ['es-AR', 'Argentina']
 *                    ['es-BO', 'Bolivia']
 *                    ['es-CL', 'Chile']
 *                    ['es-CO', 'Colombia']
 *                    ['es-CR', 'Costa Rica']
 *                    ['es-EC', 'Ecuador']
 *                    ['es-SV', 'El Salvador']
 *                    ['es-ES', 'EspaГ±a']
 *                    ['es-US', 'Estados Unidos']
 *                    ['es-GT', 'Guatemala']
 *                    ['es-HN', 'Honduras']
 *                    ['es-MX', 'MГ©xico']
 *                    ['es-NI', 'Nicaragua']
 *                    ['es-PA', 'PanamГЎ']
 *                    ['es-PY', 'Paraguay']
 *                    ['es-PE', 'PerГє']
 *                    ['es-PR', 'Puerto Rico']
 *                    ['es-DO', 'RepГєblica Dominicana']
 *                    ['es-UY', 'Uruguay']
 *                    ['es-VE', 'Venezuela']
 *  Euskara           ['eu-ES']
 *  FranГ§ais         ['fr-FR']
 *  Galego            ['gl-ES']
 *  Hrvatski          ['hr_HR']
 *  IsiZulu           ['zu-ZA']
 *  ГЌslenska         ['is-IS']
 *  Italiano          ['it-IT', 'Italia']
 *                    ['it-CH', 'Svizzera']
 *  Magyar            ['hu-HU']
 *  Nederlands        ['nl-NL']
 *  Norsk bokmГҐl     ['nb-NO']
 *  Polski            ['pl-PL']
 *  PortuguГЄs        ['pt-BR', 'Brasil']
 *                    ['pt-PT', 'Portugal']
 *  RomГўnДѓ          ['ro-RO']
 *  SlovenДЌina       ['sk-SK']
 *  Suomi             ['fi-FI']
 *  Svenska           ['sv-SE']
 *  TГјrkГ§e          ['tr-TR']
 *  Р±СЉР»РіР°СЂСЃРєРё['bg-BG']
 *  PСѓСЃСЃРєРёР№     ['ru-RU']
 *  РЎСЂРїСЃРєРё      ['sr-RS']
 *  н•њкµ­м–ґ         ['ko-KR']
 *  дё­ж–‡            ['cmn-Hans-CN', 'ж™®йЂљиЇќ (дё­е›Ѕе¤§й™†)']
 *                    ['cmn-Hans-HK', 'ж™®йЂљиЇќ (й¦™жёЇ)']
 *                    ['cmn-Hant-TW', 'дё­ж–‡ (еЏ°зЃЈ)']
 *                    ['yue-Hant-HK', 'зІµиЄћ (й¦™жёЇ)']
 *  ж—Ґжњ¬иЄћ         ['ja-JP']
 *  Lingua latД«na    ['la']
 */
appConfig.voice_command_lang = 'en-US';
/*
 *  Use localstorage to remember on/off (best used with HTML Version)
 */ 
appConfig.voice_localStorage = false;
/*
 * Voice Commands
 * Defines all voice command variables and functions
 */ 
if (appConfig.voice_command) {
        
     	appConfig.commands = {
                
        'show dashboard' : function() { window.location.hash = "dashboard" },
        'show inbox' : function() {  window.location.hash = "inbox/" },
        'show graphs' : function() {  window.location.hash = "graphs/flot" },
        'show flotchart' : function() { window.location.hash = "graphs/flot" },
        'show morris chart' : function() { window.location.hash = "graphs/morris" },
        'show inline chart' : function() { window.location.hash = "graphs/inline-charts" },
        'show dygraphs' : function() { window.location.hash = "graphs/dygraphs" },
        'show tables' : function() { window.location.hash = "tables/table" },
        'show data table' : function() { window.location.hash = "tables/datatable" },
        'show jquery grid' : function() { window.location.hash = "tables/jqgrid" },
        'show form' : function() { window.location.hash = "forms/form-elements" },
        'show form layouts' : function() { window.location.hash = "forms/form-templates" },
        'show form validation' : function() { window.location.hash = "forms/validation" },
        'show form elements' : function() { window.location.hash = "forms/bootstrap-forms" },
        'show form plugins' : function() { window.location.hash = "forms/plugins" },
        'show form wizards' : function() { window.location.hash = "forms/wizards" },
        'show bootstrap editor' : function() { window.location.hash = "forms/other-editors" },
        'show dropzone' : function() { window.location.hash = "forms/dropzone" },
        'show image cropping' : function() { window.location.hash = "forms/image-editor" },
        'show general elements' : function() { window.location.hash = "ui/general-elements" },
        'show buttons' : function() { window.location.hash = "ui/buttons" },
        'show fontawesome' : function() { window.location.hash = "ui/icons/fa" },
        'show glyph icons' : function() { window.location.hash = "ui/icons/glyph" },
        'show flags' : function() { window.location.hash = "ui/icons/flags" },
        'show grid' : function() { window.location.hash = "ui/grid" },
        'show tree view' : function() { window.location.hash = "ui/treeview" },
        'show nestable lists' : function() { window.location.hash = "ui/nestable-list" },
        'show jquery U I' : function() { window.location.hash = "ui/jqui" },
        'show typography' : function() { window.location.hash = "ui/typography" },
        'show calendar' : function() { window.location.hash = "calendar" },
        'show widgets' : function() { window.location.hash = "widgets" },
        'show gallery' : function() { window.location.hash = "gallery" },
        'show maps' : function() { window.location.hash = "gmap-xml" },
        'go back' :  function() { history.back(1); }, 
        'scroll up' : function () { $('html, body').animate({ scrollTop: 0 }, 100); },
        'scroll down' : function () { $('html, body').animate({ scrollTop: $(document).height() }, 100);},
        'hide navigation' : function() { 
            if ($( ":root" ).hasClass("container") && !$( ":root" ).hasClass("menu-on-top")){
                $('span.minifyme').trigger("click");
            } else {
                $('#hide-menu > span > a').trigger("click"); 
            }
        },
        'show navigation' : function() { 
            if ($( ":root" ).hasClass("container") && !$( ":root" ).hasClass("menu-on-top")){
                $('span.minifyme').trigger("click");
            } else {
                $('#hide-menu > span > a').trigger("click"); 
            }
        },
        'mute' : function() {
            appConfig.sound_on = false;
            $.smallBox({
                title : "MUTE",
                content : "All sounds have been muted!",
                color : "#a90329",
                timeout: 4000,
                icon : "fa fa-volume-off"
            });
        },
        'sound on' : function() {
            appConfig.sound_on = true;
            $.speechApp.playConfirmation();
            $.smallBox({
                title : "UNMUTE",
                content : "All sounds have been turned on!",
                color : "#40ac2b",
                sound_file: 'voice_alert',
                timeout: 5000,
                icon : "fa fa-volume-up"
            });
        },
        'stop' : function() {
            smartSpeechRecognition.abort();
            $( ":root" ).removeClass("voice-command-active");
            $.smallBox({
                title : "VOICE COMMAND OFF",
                content : "Your voice commands has been successfully turned off. Click on the <i class='fa fa-microphone fa-lg fa-fw'></i> icon to turn it back on.",
                color : "#40ac2b",
                sound_file: 'voice_off',
                timeout: 8000,
                icon : "fa fa-microphone-slash"
            });
            if ($('#speech-btn .popover').is(':visible')) {
                $('#speech-btn .popover').fadeOut(250);
            }
        },
        'help' : function() {

            $('#voiceModal').removeData('modal').modal( { remote: "app/layout/partials/voice-commands.tpl.html", show: true } );
            if ($('#speech-btn .popover').is(':visible')) {
                $('#speech-btn .popover').fadeOut(250);
            }

        },      
        'got it' : function() {
            $('#voiceModal').modal('hide');
        },  
        'logout' : function() {
            $.speechApp.stop();
            window.location = $('#logout > span > a').attr("href");
        }
    };
}

appConfig.apiRootUrl = 'api';

window.appConfig = appConfig;

/*
* END APP.appConfig
*/
'use strict';

$.sound_path = appConfig.sound_path;
$.sound_on = appConfig.sound_on;


$(function () {

    // moment.js default language
    moment.locale('en')

    angular.bootstrap(document, ['app']);
 
});

'use strict';

/**
 * @ngdoc overview
 * @name app [smartadminApp]
 * @description
 * # app [smartadminApp]
 *
 * Main module of the application.
 */

angular.module('app', [
    'ngSanitize',
    'ngAnimate',
    'restangular',
    'ui.router',
    'ui.bootstrap',

    // Smartadmin Angular Common Module
    'SmartAdmin',

    // App
    'app.auth',
    'app.layout',
    //'app.chat',
    //'app.dashboard',
    //'app.calendar',
    //'app.inbox',
    'app.graphs',
    //'app.tables',
    //'app.forms',
    //'app.ui',
    //'app.widgets',
    //'app.maps',
    //'app.appViews',
    //'app.misc',
    //'app.smartAdmin',
    //'app.eCommerce'
    'app.camera',
    'app.home'
])
.config(function ($provide, $httpProvider, RestangularProvider) {


    // Intercept http calls.
    $provide.factory('ErrorHttpInterceptor', function ($q) {
        var errorCounter = 0;
        function notifyError(rejection){
            console.log(rejection);
            $.bigBox({
                title: rejection.status + ' ' + rejection.statusText,
                content: rejection.data,
                color: "#C46A69",
                icon: "fa fa-warning shake animated",
                number: ++errorCounter,
                timeout: 6000
            });
        }

        return {
            // On request failure
            requestError: function (rejection) {
                // show notification
                notifyError(rejection);

                // Return the promise rejection.
                return $q.reject(rejection);
            },

            // On response failure
            responseError: function (rejection) {
                // show notification
                notifyError(rejection);
                // Return the promise rejection.
                return $q.reject(rejection);
            }
        };
    });

    // Add the interceptor to the $httpProvider.
    $httpProvider.interceptors.push('ErrorHttpInterceptor');

    RestangularProvider.setBaseUrl(location.pathname.replace(/[^\/]+?$/, ''));

})
.constant('APP_CONFIG', window.appConfig)

.run(function ($rootScope
    , $state, $stateParams
    ) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    // editableOptions.theme = 'bs3';

});



(function(){
    "use strict";

    angular.module('SmartAdmin', [
        "SmartAdmin.Forms",
        "SmartAdmin.Layout",
        "SmartAdmin.UI",
    ]);
})();
"use strict";


angular.module('app.appViews', ['ui.router'])
.config(function ($stateProvider) {

    $stateProvider
        .state('app.appViews', {
            abstract: true,
            data: {
                title: 'App views'
            }
        })

        .state('app.appViews.projects', {
            url: '/projects',
            data: {
                title: 'Projects'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/app-views/views/project-list.html',
                    controller: 'ProjectsDemoCtrl',
                    resolve: {
                        projects: function($http, APP_CONFIG){
                            return $http.get(APP_CONFIG.apiRootUrl + '/project-list.json')
                        }
                    }
                }
            }, 
            resolve: {
                scripts: function(lazyScript){
                    return lazyScript.register([
                        'build/vendor.datatables.js'
                    ]);
                }
            }
        })

        .state('app.appViews.blogDemo', {
            url: '/blog',
            data: {
                title: 'Blog'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/app-views/views/blog-demo.html'
                }
            }
        })

        .state('app.appViews.galleryDemo', {
            url: '/gallery',
            data: {
                title: 'Gallery'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/app-views/views/gallery-demo.html'
                }
            }, 
            resolve: {
                scripts: function(lazyScript){
                    return lazyScript.register([
                        'smartadmin-plugin/legacy/superbox/superbox.min.js'
                    ]);
                }
            }
        })

        .state('app.appViews.forumDemo', {
            url: '/forum',
            data: {
                title: 'Forum'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/app-views/views/forum-demo.html'
                }
            }
        })

        .state('app.appViews.forumTopicDemo', {
            url: '/forum-topic',
            data: {
                title: 'Forum Topic'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/app-views/views/forum-topic-demo.html'
                }
            }
        })

        .state('app.appViews.forumPostDemo', {
            url: '/forum-post',
            data: {
                title: 'Forum Post'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/app-views/views/forum-post-demo.html'
                }
            }, 
            resolve: {
                scripts: function(lazyScript){
                    return lazyScript.register([
                        'build/vendor.ui.js'
                    ]);
                }
            }
        })


        .state('app.appViews.profileDemo', {
            url: '/profile',
            data: {
                title: 'Profile'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/app-views/views/profile-demo.html'
                }
            }
        })


        .state('app.appViews.timelineDemo', {
            url: '/timeline',
            data: {
                title: 'Timeline'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/app-views/views/timeline-demo.html'
                }
            }
        })
});

"use strict";

angular.module('app.auth', [
    'ui.router'
//        ,
//        'ezfb',
//        'googleplus'
]).config(function ($stateProvider
//        , ezfbProvider
//        , GooglePlusProvider
    ) {
//        GooglePlusProvider.init({
//            clientId: authKeys.googleClientId
//        });
//
//        ezfbProvider.setInitParams({
//            appId: authKeys.facebookAppId
//        });
    $stateProvider.state('realLogin', {
        url: '/real-login',

        views: {
            root: {
                templateUrl: "app/auth/login/login.html",
                controller: 'LoginCtrl'
            }
        },
        data: {
            title: 'Login',
            rootId: 'extra-page'
        }

    })

    .state('login', {
        url: '/login',
        views: {
            root: {
                templateUrl: 'app/auth/views/login.html'
            }
        },
        data: {
            title: 'Login',
            htmlId: 'extr-page'
        },
        resolve: {
            srcipts: function(lazyScript){
                return lazyScript.register([
                    'build/vendor.ui.js'
                ])

            }
        }
    })

    .state('register', {
        url: '/register',
        views: {
            root: {
                templateUrl: 'app/auth/views/register.html'
            }
        },
        data: {
            title: 'Register',
            htmlId: 'extr-page'
        }
    })

    .state('forgotPassword', {
        url: '/forgot-password',
        views: {
            root: {
                templateUrl: 'app/auth/views/forgot-password.html'
            }
        },
        data: {
            title: 'Forgot Password',
            htmlId: 'extr-page'
        }
    })

    .state('lock', {
        url: '/lock',
        views: {
            root: {
                templateUrl: 'app/auth/views/lock.html'
            }
        },
        data: {
            title: 'Locked Screen',
            htmlId: 'lock-page'
        }
    })


}).constant('authKeys', {
    googleClientId: '',
    facebookAppId: ''
});



"use strict";


angular
.module('app.calendar', ['ngResource','ui.router'])
.config(function ($stateProvider) {

    $stateProvider
        .state('app.calendar', {
            url: '/calendar',
            views: {
                content: {
                    templateUrl: 'app/calendar/views/calendar.tpl.html'
                }
            },
            data:{
                title: 'Calendar'
            }
        });
});





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



'use strict';

angular.module('app.dashboard', [
    'ui.router',
    'ngResource'
])

.config(function ($stateProvider) {
    $stateProvider
        .state('app.dashboard', {
            url: '/dashboard',
            views: {
                "content@app": {
                    controller: 'DashboardCtrl',
                    templateUrl: 'app/dashboard/dashboard.html'
                }
            },
            data:{
                title: 'Dashboard'
            }
        })
        .state('app.dashboard-social', {
            url: '/dashboard-social',
            views: {
                "content@app": {
                    templateUrl: 'app/dashboard/social-wall.html'
                }
            },
            data:{
                title: 'Dashboard Social'
            }
        });
});

"use strict";


angular.module('app.eCommerce', ['ui.router'])
.config(function ($stateProvider) {

    $stateProvider
        .state('app.eCommerce', {
            abstract: true,
            data: {
                title: 'E-Commerce'
            }
        })

        .state('app.eCommerce.orders', {
            url: '/e-commerce/orders',
            data: {
                title: 'Orders'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/e-commerce/views/orders.html',
                    controller: 'OrdersDemoCtrl',
                    resolve: {
                        orders: function($http, APP_CONFIG){
                            return $http.get(APP_CONFIG.apiRootUrl + '/e-commerce/orders.json')
                        }
                    }
                }
            }, 
            resolve: {
                scripts: function(lazyScript){
                    return lazyScript.register([
                        'build/vendor.datatables.js'
                    ]);
                }
            }
        })

        .state('app.eCommerce.products', {
            url: '/e-commerce/products-view',
            data: {
                title: 'Products View'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/e-commerce/views/products.html'
                }
            }
        })

        .state('app.eCommerce.detail', {
            url: '/e-commerce/products-detail',
            data: {
                title: 'Products Detail'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/e-commerce/views/detail.html'
                }
            }
        })
});

"use strict";


angular.module('app.forms', ['ui.router'])


angular.module('app.forms').config(function ($stateProvider) {

    $stateProvider
        .state('app.form', {
            abstract: true,
            data: {
                title: 'Forms'
            }
        })

        .state('app.form.elements', {
            url: '/form/elements',
            data: {
                title: 'Form Elements'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/forms/views/form-elements.html'
                }
            }
        })

        .state('app.form.layouts', {
            url: '/form/layouts',
            data: {
                title: 'Form Layouts'
            },
            views: {
                "content@app": {
                    controller: 'FormLayoutsCtrl',
                    templateUrl: 'app/forms/views/form-layouts/form-layouts-demo.html'
                }
            }
        })

        .state('app.form.validation', {
            url: '/form/validation',
            data: {
                title: 'Form Validation'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/forms/views/form-validation.html'
                }
            }
        })

        .state('app.form.bootstrapForms', {
            url: '/form/bootstrap-forms',
            data: {
                title: 'Bootstrap Forms'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/forms/views/bootstrap-forms.html'
                }
            }
        })

        .state('app.form.bootstrapValidation', {
            url: '/form/bootstrap-validation',
            data: {
                title: 'Bootstrap Validation'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/forms/views/bootstrap-validation.html'
                }
            },
            resolve: {
                srcipts: function(lazyScript){
                    return lazyScript.register([
                        'build/vendor.ui.js'
                    ])

                }
            }
        })

        .state('app.form.plugins', {
            url: '/form/plugins',
            data: {
                title: 'Form Plugins'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/forms/views/form-plugins.html',
                    controller: 'FormPluginsCtrl'
                }
            },
            resolve: {
                srcipts: function(lazyScript){
                    return lazyScript.register([
                        "build/vendor.ui.js"
                    ])

                }
            }
        })
        .state('app.form.wizards', {
            url: '/form/wizards',
            data: {
                title: 'Wizards'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/forms/views/form-wizards.html',
                    controller: 'FormWizardCtrl'
                }
            },
            resolve: {
                srcipts: function(lazyScript){
                    return lazyScript.register([
                        "build/vendor.ui.js"
                    ])

                }
            }
        })
        .state('app.form.editors', {
            url: '/form/editors',
            data: {
                title: 'Editors'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/forms/views/form-editors.html'
                }
            },
            resolve: {
                scripts: function(lazyScript){
                    return lazyScript.register([
                        "build/vendor.ui.js"
                    ])
                }
            }
        })
        .state('app.form.dropzone', {
            url: '/form/dropzone',
            data: {
                title: 'Dropzone'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/forms/views/dropzone.html',
                    controller: function($scope){
                        $scope.dropzoneConfig = {
                            'options': { // passed into the Dropzone constructor
                                'url': '/api/plug'
                            },
                            'eventHandlers': {
                                'sending': function (file, xhr, formData) {
                                },
                                'success': function (file, response) {
                                }
                            }
                        };
                    }
                }
            },
            resolve: {
                scripts: function(lazyScript){
                    return lazyScript.register('build/vendor.ui.js')
                }
            }
        })
        .state('app.form.imageEditor', {
            url: '/form/image-editor',
            data: {
                title: 'Image Editor'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/forms/views/image-editor.html',
                    controller: 'ImageEditorCtrl'
                }
            },
            resolve: {
                scripts: function(lazyScript){
                    return lazyScript.register([
                        'build/vendor.ui.js'
                    ])
                }
            }
        })


});
"use strict";

angular.module('app.graphs', [
    'ui.router'
]).config(function ($stateProvider) {
    $stateProvider
        .state('app.graphs', {
            abstract: true,
            data: {
                title: 'Graphs'
            }
        })

        .state('app.graphs.flot', {
            url: '/graphs/flot',
            data: {
                title: 'Flot Charts'
            },
            views: {
                "content@app": {
                    controller: 'FlotCtrl',
                    templateUrl: "app/graphs/views/flot-charts.html"
                }
            }
        })

        .state('app.graphs.morris', {
            url: '/graphs/morris',
            data: {
                title: 'Morris Charts'
            },
            views: {
                "content@app": {
                    templateUrl: "app/graphs/views/morris-charts.html"
                }
            },
            resolve: {
                scripts: function(lazyScript){
                    return lazyScript.register([
                        'build/vendor.graphs.js'
                    ]);
                }
            }
        })

        .state('app.graphs.sparkline', {
            url: '/graphs/sparkline',
            data: {
                title: 'Sparklines'
            },
            views: {
                "content@app": {
                    templateUrl: "app/graphs/views/sparkline.html"
                }
            }
        })
        .state('app.graphs.easyPieCharts', {
            url: '/graphs/easy-pie',
            data: {
                title: 'Easy Pie Charts'
            },
            views: {
                "content@app": {
                    templateUrl: "app/graphs/views/easy-pie-charts.html"
                }
            }
        })

        .state('app.graphs.dygraphs', {
            url: '/graphs/dygraphs',
            data: {
                title: 'Dygraphs Charts'
            },
            views: {
                "content@app": {
                    templateUrl: "app/graphs/views/dygraphs-charts.html"
                }
            },
            resolve: {
                scripts: function(lazyScript){
                    return lazyScript.register([
                        'build/vendor.graphs.js'
                    ]);
                }
            }
        })

        .state('app.graphs.chartjs', {
            url: '/graphs/chartjs',
            data: {
                title: 'Chart.js'
            },
            views: {
                "content@app": {
                    templateUrl: "app/graphs/views/chartjs-charts.html"
                }
            },
            resolve: {
                scripts: function(lazyScript){
                    return lazyScript.register([
                        'build/vendor.graphs.js'
                    ]);
                }
            }
        })


        .state('app.graphs.highchartTables', {
            url: '/graphs/highchart-tables',
            data: {
                title: 'Highchart Tables'
            },
            views: {
                "content@app": {
                    templateUrl: "app/graphs/views/highchart-tables.html"
                }
            }
        })
});
"use strict";


angular.module('app.home', ['ui.router'])
.config(function ($stateProvider) {

    $stateProvider
        .state('app.home', {
            url: '/home',
            data: {
                title: 'Blank'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/home/views/home.html',
                    controller: 'HomeController'
                }
            }
        })
});

'use strict';

angular.module('app.inbox', [
    'ui.router',
    'ngResource'
])
.config(function ($stateProvider) {
    
    $stateProvider
        .state('app.inbox', {
            url: '/inbox',
            data: {
                title: 'Inbox'
            },
            views: {
                content: {
                    templateUrl: 'app/inbox/views/inbox-layout.html',
                    controller: function ($scope, config) {
                        $scope.config = config.data;
                        $scope.deleteSelected = function(){
                            $scope.$broadcast('$inboxDeleteMessages')
                        }
                    },
                    controllerAs: 'inboxCtrl',
                    resolve: {
                        config: function (InboxConfig) {
                            return InboxConfig;
                        }
                    }
                }
            }

        })
        .state('app.inbox.folder', {
            url: '/:folder',
            views: {
                inbox: {
                    templateUrl: 'app/inbox/views/inbox-folder.html',
                    controller: function ($scope, messages, $stateParams) {
                        $scope.$parent.selectedFolder = _.find($scope.$parent.config.folders, {key: $stateParams.folder});
                        $scope.messages = messages;

                        $scope.$on('$inboxDeleteMessages', function(event){
                            angular.forEach($scope.messages, function(message, idx){
                                if(message.selected){
                                    message.$delete(function(){
                                        $scope.messages.splice(idx, 1);
                                    })
                                }
                            });
                        });

                    },
                    resolve: {
                        messages: function (InboxMessage, $stateParams) {
                            return InboxMessage.query({folder: $stateParams.folder});
                        }
                    }
                }
            }
        })
        .state('app.inbox.folder.detail', {
            url: '/detail/:message',
            views: {
                "inbox@app.inbox": {
                    templateUrl: 'app/inbox/views/inbox-detail.html',
                    controller: function ($scope, message) {
                        $scope.message = message;
                    },
                    resolve: {
                        message: function (InboxMessage, $stateParams) {
                            return InboxMessage.get({id: $stateParams.message})
                        }
                    }
                }
            }
        })
        .state('app.inbox.folder.replay', {
            url: '/replay/:message',
            views: {
                "inbox@app.inbox": {
                    templateUrl: 'app/inbox/views/inbox-replay.html',
                    controller: function ($scope, $timeout, $state, replayTo) {
                        $scope.replayTo = replayTo;
                        $scope.sending = false;
                        $scope.send = function(){
                            $scope.sending = true;
                            $timeout(function(){
                                $state.go('app.inbox.folder')
                            }, 1000);
                        }
                    },
                    controllerAs: 'replayCtrl',
                    resolve: {
                        replayTo: function (InboxMessage, $stateParams) {
                            return InboxMessage.get({id: $stateParams.message})
                        }
                    }
                }
            }
        })
        .state('app.inbox.folder.compose', {
            url: '/compose',
            views: {
                "inbox@app.inbox": {
                    templateUrl: 'app/inbox/views/inbox-compose.html',
                    controller: function ($scope, $timeout, $state) {
                        $scope.sending = false;
                        $scope.send = function(){
                            $scope.sending = true;
                            $timeout(function(){
                                $state.go('app.inbox.folder')
                            }, 1000);
                        }
                    },
                    controllerAs: 'composeCtrl'
                }
            }
        });
});
"use strict";


angular.module('app.layout', ['ui.router'])

.config(function ($stateProvider, $urlRouterProvider) {


    $stateProvider
        .state('app', {
            abstract: true,
            views: {
                root: {
                    templateUrl: 'app/layout/layout.tpl.html'
                }
            }
        });
    $urlRouterProvider.otherwise('/home');

})


    "use strict";


    angular.module('app.maps', ['ui.router',
        'uiGmapgoogle-maps'
    ])
    //.config(function(uiGmapGoogleMapApiProvider) {
    //    uiGmapGoogleMapApiProvider.configure({
    //        //    key: 'your api key',
    //        v: '3.20', //defaults to latest 3.X anyhow
    //        libraries: 'weather,geometry,visualization'
    //    });
    //})


    angular.module('app.maps').config(function ($stateProvider) {

        $stateProvider
            .state('app.maps', {
                url: '/maps',
                data: {
                    title: 'Maps'
                },
                views: {
                    "content@app": {
                        controller: 'MapsDemoCtrl',
                        templateUrl: 'app/maps/views/maps-demo.html'
                    }
                }
            })
    });
"use strict";

angular.module('app.misc', ['ui.router']);


angular.module('app.misc').config(function ($stateProvider) {

    $stateProvider
        .state('app.misc', {
            abstract: true,
            data: {
                title: 'Miscellaneous'
            }
        })

        .state('app.misc.pricingTable', {
            url: '/pricing-table',
            data: {
                title: 'Pricing Table'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/misc/views/pricing-table.html'
                }
            }
        })

        .state('app.misc.invoice', {
            url: '/invoice',
            data: {
                title: 'Invoice'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/misc/views/invoice.html'
                }
            }
        })

        .state('app.misc.error404', {
            url: '/404',
            data: {
                title: 'Error 404'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/misc/views/error404.html'
                }
            }
        })

        .state('app.misc.error500', {
            url: '/500',
            data: {
                title: 'Error 500'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/misc/views/error500.html'
                }
            }
        })

        .state('app.misc.blank', {
            url: '/blank',
            data: {
                title: 'Blank'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/misc/views/blank.html'
                }
            }
        })

        .state('app.misc.test', {
            url: '/test',
            data: {
                title: 'Test'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/misc/views/test.html'
                }
            }
        })

        .state('app.misc.emailTemplate', {
            url: '/email-template',
            data: {
                title: 'Email Template'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/misc/views/email-template.html'
                }
            }
        })

        .state('app.misc.search', {
            url: '/search',
            data: {
                title: 'Search'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/misc/views/search.html'
                }
            }
        })

        .state('app.misc.ckeditor', {
            url: '/ckeditor',
            data: {
                title: 'CK Editor'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/misc/views/ckeditor.html'
                }
            },
            resolve:{
                scripts: function(lazyScript){
                    return lazyScript.register('smartadmin-plugin/legacy/ckeditor/ckeditor.js');
                }
            }
        })
});
"use strict";


angular.module('app.smartAdmin', ['ui.router']);


angular.module('app.smartAdmin').config(function ($stateProvider) {

    $stateProvider
        .state('app.smartAdmin', {
            abstract: true,
            data: {
                title: 'SmartAdmin Intel'
            }
        })

        .state('app.smartAdmin.appLayout', {
            url: '/app-layout',
            data: {
                title: 'App Layout'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/smart-admin/views/app-layout.html'
                }
            }
        })

        .state('app.smartAdmin.diffVer', {
            url: '/different-versions',
            data: {
                title: 'Different Versions'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/smart-admin/views/different-versions.html'
                }
            }
        })

        .state('app.smartAdmin.appLayouts', {
            url: '/app-layouts',
            data: {
                title: 'App Layouts'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/smart-admin/views/app-layouts.html'
                }
            }
        })

        .state('app.smartAdmin.prebuiltSkins', {
            url: '/prebuilt-skins',
            data: {
                title: 'Prebuilt Skins'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/smart-admin/views/prebuilt-skins.html'
                }
            }
        })
});
"use strict";

angular.module('app.tables', [ 'ui.router', 'datatables', 'datatables.bootstrap']);

angular.module('app.tables').config(function ($stateProvider) {

    $stateProvider
        .state('app.tables', {
            abstract: true,
            data: {
                title: 'Tables'
            }
        })

        .state('app.tables.normal', {
            url: '/tables/normal',
            data: {
                title: 'Normal Tables'
            },
            views: {
                "content@app": {
                    templateUrl: "app/tables/views/normal.html"

                }
            }
        })

        .state('app.tables.datatables', {
            url: '/tables/datatables',
            data: {
                title: 'Data Tables'
            },
            views: {
                "content@app": {
                    controller: 'DatatablesCtrl as datatables',
                    templateUrl: "app/tables/views/datatables.html"
                }
            }
        })

        .state('app.tables.jqgrid', {
            url: '/tables/jqgrid',
            data: {
                title: 'Jquery Grid'
            },
            views: {
                "content@app": {
                    controller: 'JqGridCtrl',
                    templateUrl: "app/tables/views/jqgrid.html"
                }
            },
            resolve: {
                scripts: function(lazyScript){
                    return lazyScript.register([
                        'smartadmin-plugin/legacy/jqgrid/js/minified/jquery.jqGrid.min.js',
                        'smartadmin-plugin/legacy/jqgrid/js/i18n/grid.locale-en.js'
                    ])

                }
            }
        })
});
'use strict'

angular.module('app.ui', ['ui.router']);

angular.module('app.ui').config(function($stateProvider){

    $stateProvider
        .state('app.ui', {
            abstract: true,
            data: {
                title: 'UI Elements'
            }
        })
        .state('app.ui.general', {
            url: '/ui/general',
            data: {
                title: 'General Elements'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/ui/views/general-elements.html',
                    controller: 'GeneralElementsCtrl'
                }
            }
        })
        .state('app.ui.buttons', {
            url: '/ui/buttons',
            data: {
                title: 'Buttons'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/ui/views/buttons.html',
                    controller: 'GeneralElementsCtrl'
                }
            }
        })
        .state('app.ui.iconsFa', {
            url: '/ui/icons-font-awesome',
            data: {
                title: 'Font Awesome'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/ui/views/icons-fa.html'
                }
            }
        })
        .state('app.ui.iconsGlyph', {
            url: '/ui/icons-glyph',
            data: {
                title: 'Glyph Icons'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/ui/views/icons-glyph.html'
                }
            }
        })
        .state('app.ui.iconsFlags', {
            url: '/ui/icons-flags',
            data: {
                title: 'Flags'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/ui/views/icons-flags.html'
                }
            }
        })
        .state('app.ui.grid', {
            url: '/ui/grid',
            data: {
                title: 'Grid'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/ui/views/grid.html'
                }
            }
        })
        .state('app.ui.treeView', {
            url: '/ui/tree-view',
            data: {
                title: 'Tree View'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/ui/views/tree-view.html',
                    controller: 'TreeviewCtrl'
                }
            }
        })
        .state('app.ui.nestableLists', {
            url: '/ui/nestable-lists',
            data: {
                title: 'Nestable Lists'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/ui/views/nestable-lists.html'
                }
            },
            resolve: {
                srcipts: function(lazyScript){
                    return lazyScript.register([
                        'build/vendor.ui.js'
                    ])

                }
            }
        })
        .state('app.ui.jqueryUi', {
            url: '/ui/jquery-ui',
            data: {
                title: 'JQuery UI'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/ui/views/jquery-ui.html',
                    controller: 'JquiCtrl'
                }
            },
            resolve: {
                srcipts: function(lazyScript){
                    return lazyScript.register([
                        'build/vendor.ui.js'
                    ])

                }
            }
        })
        .state('app.ui.typography', {
            url: '/ui/typography',
            data: {
                title: 'JQuery UI'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/ui/views/typography.html'
                }
            }
        })
});
"use strict";

angular.module('app.widgets', ['ui.router'])


.config(function ($stateProvider) {

    $stateProvider
        .state('app.widgets', {
            url: '/widgets',
            data: {
                title: 'Widgets'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/widgets/views/widgets-demo.html'

                }
            }

        })

});

(function(){
    "use strict";

    angular.module('SmartAdmin.Forms', []);
})();
(function(){
    "use strict";

    angular.module('SmartAdmin.Layout', []);
})();
(function(){
    "use strict";

    angular.module('SmartAdmin.UI', []);
})();
    "use strict";


angular.module('app.chat', ['ngSanitize'])
.run(function ($templateCache) {

    $templateCache.put("template/popover/popover.html",
        "<div class=\"popover {{placement}}\" ng-class=\"{ in: isOpen(), fade: animation() }\">\n" +
        "  <div class=\"arrow\"></div>\n" +
        "\n" +
        "  <div class=\"popover-inner\">\n" +
        "      <h3 class=\"popover-title\" ng-bind-html=\"title | unsafe\" ng-show=\"title\"></h3>\n" +
        "      <div class=\"popover-content\"ng-bind-html=\"content | unsafe\"></div>\n" +
        "  </div>\n" +
        "</div>\n" +
        "");

}).filter('unsafe', ['$sce', function ($sce) {
    return function (val) {
        return $sce.trustAsHtml(val);
    };
}]);
'use strict';

angular.module('app.dashboard').controller('DashboardCtrl', function ($scope, $interval, CalendarEvent) {

    // Live Feeds Widget Data And Display Controls
    // Live Stats Tab


    function getFakeItem(index, prevValue){
        var limitUp = Math.min(100, prevValue + 5),
            limitDown = Math.abs(prevValue - 5);
        return [
            index,
            _.random(limitDown, limitUp, true)
        ]
    }

    function getFakeData() {
        return _(_.range(199)).reduce(function (out, number) {

            out.push(getFakeItem(number+1, _.last(out)[1]));
            return out;
        }, [
            [0, 50] // starting point
        ])
    }

    $scope.autoUpdate = false;

    var updateInterval;
    $scope.$watch('autoUpdate', function(autoUpdate){

        if(autoUpdate){
            updateInterval = $interval(function(){
                var stats = _.rest($scope.liveStats[0]).map(function(elem, i){
                    elem[0] = i;
                    return elem;
                });
                stats.push([199, _.last(stats)[1]]);
                $scope.liveStats = [stats];
            }, 1500)
        } else {
            $interval.cancel(updateInterval);
        }
    });


    $scope.liveStats = [getFakeData()];



    $scope.liveStatsOptions = {
        yaxis: {
            min: 0,
            max: 100
        },
        xaxis: {
            min: 0,
            max: 100
        },
        colors: ['rgb(87, 136, 156)'],
        series: {
            lines: {
                lineWidth: 1,
                fill: true,
                fillColor: {
                    colors: [
                        {
                            opacity: 0.4
                        },
                        {
                            opacity: 0
                        }
                    ]
                },
                steps: false

            }
        }
    };


    // Stats Display With Flot Chart

    var twitter = [
        [1, 27],
        [2, 34],
        [3, 51],
        [4, 48],
        [5, 55],
        [6, 65],
        [7, 61],
        [8, 70],
        [9, 65],
        [10, 75],
        [11, 57],
        [12, 59],
        [13, 62]
    ];
    var facebook = [
        [1, 25],
        [2, 31],
        [3, 45],
        [4, 37],
        [5, 38],
        [6, 40],
        [7, 47],
        [8, 55],
        [9, 43],
        [10, 50],
        [11, 47],
        [12, 39],
        [13, 47]
    ];
    $scope.statsData = [
        {
            label: "Twitter",
            data: twitter,
            lines: {
                show: true,
                lineWidth: 1,
                fill: true,
                fillColor: {
                    colors: [
                        {
                            opacity: 0.1
                        },
                        {
                            opacity: 0.13
                        }
                    ]
                }
            },
            points: {
                show: true
            }
        },
        {
            label: "Facebook",
            data: facebook,
            lines: {
                show: true,
                lineWidth: 1,
                fill: true,
                fillColor: {
                    colors: [
                        {
                            opacity: 0.1
                        },
                        {
                            opacity: 0.13
                        }
                    ]
                }
            },
            points: {
                show: true
            }
        }
    ];

    $scope.statsDisplayOptions = {
        grid: {
            hoverable: true
        },
        colors: ["#568A89", "#3276B1"],
        tooltip: true,
        tooltipOpts: {
            //content : "Value <b>$x</b> Value <span>$y</span>",
            defaultTheme: false
        },
        xaxis: {
            ticks: [
                [1, "JAN"],
                [2, "FEB"],
                [3, "MAR"],
                [4, "APR"],
                [5, "MAY"],
                [6, "JUN"],
                [7, "JUL"],
                [8, "AUG"],
                [9, "SEP"],
                [10, "OCT"],
                [11, "NOV"],
                [12, "DEC"],
                [13, "JAN+1"]
            ]
        },
        yaxes: {

        }
    };


    /* Live stats TAB 3: Revenew  */

    var trgt = [[1354586000000, 153], [1364587000000, 658], [1374588000000, 198], [1384589000000, 663], [1394590000000, 801], [1404591000000, 1080], [1414592000000, 353], [1424593000000, 749], [1434594000000, 523], [1444595000000, 258], [1454596000000, 688], [1464597000000, 364]],
        prft = [[1354586000000, 53], [1364587000000, 65], [1374588000000, 98], [1384589000000, 83], [1394590000000, 980], [1404591000000, 808], [1414592000000, 720], [1424593000000, 674], [1434594000000, 23], [1444595000000, 79], [1454596000000, 88], [1464597000000, 36]],
        sgnups = [[1354586000000, 647], [1364587000000, 435], [1374588000000, 784], [1384589000000, 346], [1394590000000, 487], [1404591000000, 463], [1414592000000, 479], [1424593000000, 236], [1434594000000, 843], [1444595000000, 657], [1454596000000, 241], [1464597000000, 341]];

    var targets = {
        label : "Target Profit",
        data : trgt,
        bars : {
            show : true,
            align : "center",
            barWidth : 30 * 30 * 60 * 1000 * 80
        }
    };
    $scope.targetsShow = true;

    $scope.$watch('targetsShow', function(toggle){
        reveniewElementToggle(targets, toggle);
    });


    var actuals = {
        label : "Actual Profit",
        data : prft,
        color : '#3276B1',
        lines : {
            show : true,
            lineWidth : 3
        },
        points : {
            show : true
        }
    };

    $scope.actualsShow = true;

    $scope.$watch('actualsShow', function(toggle){
        reveniewElementToggle(actuals, toggle);
    });

    var signups = {
        label : "Actual Signups",
        data : sgnups,
        color : '#71843F',
        lines : {
            show : true,
            lineWidth : 1
        },
        points : {
            show : true
        }
    };
    $scope.signupsShow = true;

    $scope.$watch('signupsShow', function(toggle){
        reveniewElementToggle(signups, toggle);
    });

    $scope.revenewData = [targets, actuals, signups];

    function reveniewElementToggle(element, toggle){
        if(toggle){
            if($scope.revenewData.indexOf(element) == -1)
                $scope.revenewData.push(element)
        } else {
            $scope.revenewData = _.without($scope.revenewData, element);
        }
    }

    $scope.revenewDisplayOptions = {
        grid : {
            hoverable : true
        },
        tooltip : true,
        tooltipOpts : {
            //content: '%x - %y',
            //dateFormat: '%b %y',
            defaultTheme : false
        },
        xaxis : {
            mode : "time"
        },
        yaxes : {
            tickFormatter : function(val, axis) {
                return "$" + val;
            },
            max : 1200
        }

    };

    // bird eye widget data
    $scope.countriesVisitsData = {
        "US": 4977,
        "AU": 4873,
        "IN": 3671,
        "BR": 2476,
        "TR": 1476,
        "CN": 146,
        "CA": 134,
        "BD": 100
    };

    $scope.events = [];

    // Queriing our events from CalendarEvent resource...
    // Scope update will automatically update the calendar
    CalendarEvent.query().$promise.then(function (events) {
        $scope.events = events;
    });


});
'use strict'

angular.module('app.forms').value('formsCommon', {
        countries: [
            {key: "244", value: "Aaland Islands"},
            {key: "1", value: "Afghanistan"},
            {key: "2", value: "Albania"},
            {key: "3", value: "Algeria"},
            {key: "4", value: "American Samoa"},
            {key: "5", value: "Andorra"},
            {key: "6", value: "Angola"},
            {key: "7", value: "Anguilla"},
            {key: "8", value: "Antarctica"},
            {key: "9", value: "Antigua and Barbuda"},
            {key: "10", value: "Argentina"},
            {key: "11", value: "Armenia"},
            {key: "12", value: "Aruba"},
            {key: "13", value: "Australia"},
            {key: "14", value: "Austria"},
            {key: "15", value: "Azerbaijan"},
            {key: "16", value: "Bahamas"},
            {key: "17", value: "Bahrain"},
            {key: "18", value: "Bangladesh"},
            {key: "19", value: "Barbados"},
            {key: "20", value: "Belarus"},
            {key: "21", value: "Belgium"},
            {key: "22", value: "Belize"},
            {key: "23", value: "Benin"},
            {key: "24", value: "Bermuda"},
            {key: "25", value: "Bhutan"},
            {key: "26", value: "Bolivia"},
            {key: "245", value: "Bonaire, Sint Eustatius and Saba"},
            {key: "27", value: "Bosnia and Herzegovina"},
            {key: "28", value: "Botswana"},
            {key: "29", value: "Bouvet Island"},
            {key: "30", value: "Brazil"},
            {key: "31", value: "British Indian Ocean Territory"},
            {key: "32", value: "Brunei Darussalam"},
            {key: "33", value: "Bulgaria"},
            {key: "34", value: "Burkina Faso"},
            {key: "35", value: "Burundi"},
            {key: "36", value: "Cambodia"},
            {key: "37", value: "Cameroon"},
            {key: "38", value: "Canada"},
            {key: "251", value: "Canary Islands"},
            {key: "39", value: "Cape Verde"},
            {key: "40", value: "Cayman Islands"},
            {key: "41", value: "Central African Republic"},
            {key: "42", value: "Chad"},
            {key: "43", value: "Chile"},
            {key: "44", value: "China"},
            {key: "45", value: "Christmas Island"},
            {key: "46", value: "Cocos (Keeling) Islands"},
            {key: "47", value: "Colombia"},
            {key: "48", value: "Comoros"},
            {key: "49", value: "Congo"},
            {key: "50", value: "Cook Islands"},
            {key: "51", value: "Costa Rica"},
            {key: "52", value: "Cote D'Ivoire"},
            {key: "53", value: "Croatia"},
            {key: "54", value: "Cuba"},
            {key: "246", value: "Curacao"},
            {key: "55", value: "Cyprus"},
            {key: "56", value: "Czech Republic"},
            {key: "237", value: "Democratic Republic of Congo"},
            {key: "57", value: "Denmark"},
            {key: "58", value: "Djibouti"},
            {key: "59", value: "Dominica"},
            {key: "60", value: "Dominican Republic"},
            {key: "61", value: "East Timor"},
            {key: "62", value: "Ecuador"},
            {key: "63", value: "Egypt"},
            {key: "64", value: "El Salvador"},
            {key: "65", value: "Equatorial Guinea"},
            {key: "66", value: "Eritrea"},
            {key: "67", value: "Estonia"},
            {key: "68", value: "Ethiopia"},
            {key: "69", value: "Falkland Islands (Malvinas)"},
            {key: "70", value: "Faroe Islands"},
            {key: "71", value: "Fiji"},
            {key: "72", value: "Finland"},
            {key: "74", value: "France, skypolitan"},
            {key: "75", value: "French Guiana"},
            {key: "76", value: "French Polynesia"},
            {key: "77", value: "French Southern Territories"},
            {key: "126", value: "FYROM"},
            {key: "78", value: "Gabon"},
            {key: "79", value: "Gambia"},
            {key: "80", value: "Georgia"},
            {key: "81", value: "Germany"},
            {key: "82", value: "Ghana"},
            {key: "83", value: "Gibraltar"},
            {key: "84", value: "Greece"},
            {key: "85", value: "Greenland"},
            {key: "86", value: "Grenada"},
            {key: "87", value: "Guadeloupe"},
            {key: "88", value: "Guam"},
            {key: "89", value: "Guatemala"},
            {key: "241", value: "Guernsey"},
            {key: "90", value: "Guinea"},
            {key: "91", value: "Guinea-Bissau"},
            {key: "92", value: "Guyana"},
            {key: "93", value: "Haiti"},
            {key: "94", value: "Heard and Mc Donald Islands"},
            {key: "95", value: "Honduras"},
            {key: "96", value: "Hong Kong"},
            {key: "97", value: "Hungary"},
            {key: "98", value: "Iceland"},
            {key: "99", value: "India"},
            {key: "100", value: "Indonesia"},
            {key: "101", value: "Iran (Islamic Republic of)"},
            {key: "102", value: "Iraq"},
            {key: "103", value: "Ireland"},
            {key: "104", value: "Israel"},
            {key: "105", value: "Italy"},
            {key: "106", value: "Jamaica"},
            {key: "107", value: "Japan"},
            {key: "240", value: "Jersey"},
            {key: "108", value: "Jordan"},
            {key: "109", value: "Kazakhstan"},
            {key: "110", value: "Kenya"},
            {key: "111", value: "Kiribati"},
            {key: "113", value: "Korea, Republic of"},
            {key: "114", value: "Kuwait"},
            {key: "115", value: "Kyrgyzstan"},
            {key: "116", value: "Lao People's Democratic Republic"},
            {key: "117", value: "Latvia"},
            {key: "118", value: "Lebanon"},
            {key: "119", value: "Lesotho"},
            {key: "120", value: "Liberia"},
            {key: "121", value: "Libyan Arab Jamahiriya"},
            {key: "122", value: "Liechtenstein"},
            {key: "123", value: "Lithuania"},
            {key: "124", value: "Luxembourg"},
            {key: "125", value: "Macau"},
            {key: "127", value: "Madagascar"},
            {key: "128", value: "Malawi"},
            {key: "129", value: "Malaysia"},
            {key: "130", value: "Maldives"},
            {key: "131", value: "Mali"},
            {key: "132", value: "Malta"},
            {key: "133", value: "Marshall Islands"},
            {key: "134", value: "Martinique"},
            {key: "135", value: "Mauritania"},
            {key: "136", value: "Mauritius"},
            {key: "137", value: "Mayotte"},
            {key: "138", value: "Mexico"},
            {key: "139", value: "Micronesia, Federated States of"},
            {key: "140", value: "Moldova, Republic of"},
            {key: "141", value: "Monaco"},
            {key: "142", value: "Mongolia"},
            {key: "242", value: "Montenegro"},
            {key: "143", value: "Montserrat"},
            {key: "144", value: "Morocco"},
            {key: "145", value: "Mozambique"},
            {key: "146", value: "Myanmar"},
            {key: "147", value: "Namibia"},
            {key: "148", value: "Nauru"},
            {key: "149", value: "Nepal"},
            {key: "150", value: "Netherlands"},
            {key: "151", value: "Netherlands Antilles"},
            {key: "152", value: "New Caledonia"},
            {key: "153", value: "New Zealand"},
            {key: "154", value: "Nicaragua"},
            {key: "155", value: "Niger"},
            {key: "156", value: "Nigeria"},
            {key: "157", value: "Niue"},
            {key: "158", value: "Norfolk Island"},
            {key: "112", value: "North Korea"},
            {key: "159", value: "Northern Mariana Islands"},
            {key: "160", value: "Norway"},
            {key: "161", value: "Oman"},
            {key: "162", value: "Pakistan"},
            {key: "163", value: "Palau"},
            {key: "247", value: "Palestinian Territory, Occupied"},
            {key: "164", value: "Panama"},
            {key: "165", value: "Papua New Guinea"},
            {key: "166", value: "Paraguay"},
            {key: "167", value: "Peru"},
            {key: "168", value: "Philippines"},
            {key: "169", value: "Pitcairn"},
            {key: "170", value: "Poland"},
            {key: "171", value: "Portugal"},
            {key: "172", value: "Puerto Rico"},
            {key: "173", value: "Qatar"},
            {key: "174", value: "Reunion"},
            {key: "175", value: "Romania"},
            {key: "176", value: "Russian Federation"},
            {key: "177", value: "Rwanda"},
            {key: "178", value: "Saint Kitts and Nevis"},
            {key: "179", value: "Saint Lucia"},
            {key: "180", value: "Saint Vincent and the Grenadines"},
            {key: "181", value: "Samoa"},
            {key: "182", value: "San Marino"},
            {key: "183", value: "Sao Tome and Principe"},
            {key: "184", value: "Saudi Arabia"},
            {key: "185", value: "Senegal"},
            {key: "243", value: "Serbia"},
            {key: "186", value: "Seychelles"},
            {key: "187", value: "Sierra Leone"},
            {key: "188", value: "Singapore"},
            {key: "189", value: "Slovak Republic"},
            {key: "190", value: "Slovenia"},
            {key: "191", value: "Solomon Islands"},
            {key: "192", value: "Somalia"},
            {key: "193", value: "South Africa"},
            {key: "194", value: "South Georgia &amp; South Sandwich Islands"},
            {key: "248", value: "South Sudan"},
            {key: "195", value: "Spain"},
            {key: "196", value: "Sri Lanka"},
            {key: "249", value: "St. Barthelemy"},
            {key: "197", value: "St. Helena"},
            {key: "250", value: "St. Martin (French part)"},
            {key: "198", value: "St. Pierre and Miquelon"},
            {key: "199", value: "Sudan"},
            {key: "200", value: "Suriname"},
            {key: "201", value: "Svalbard and Jan Mayen Islands"},
            {key: "202", value: "Swaziland"},
            {key: "203", value: "Sweden"},
            {key: "204", value: "Switzerland"},
            {key: "205", value: "Syrian Arab Republic"},
            {key: "206", value: "Taiwan"},
            {key: "207", value: "Tajikistan"},
            {key: "208", value: "Tanzania, United Republic of"},
            {key: "209", value: "Thailand"},
            {key: "210", value: "Togo"},
            {key: "211", value: "Tokelau"},
            {key: "212", value: "Tonga"},
            {key: "213", value: "Trinidad and Tobago"},
            {key: "214", value: "Tunisia"},
            {key: "215", value: "Turkey"},
            {key: "216", value: "Turkmenistan"},
            {key: "217", value: "Turks and Caicos Islands"},
            {key: "218", value: "Tuvalu"},
            {key: "219", value: "Uganda"},
            {key: "220", value: "Ukraine"},
            {key: "221", value: "United Arab Emirates"},
            {key: "222", value: "United Kingdom"},
            {key: "223", value: "United States"},
            {key: "224", value: "United States Minor Outlying Islands"},
            {key: "225", value: "Uruguay"},
            {key: "226", value: "Uzbekistan"},
            {key: "227", value: "Vanuatu"},
            {key: "228", value: "Vatican City State (Holy See)"},
            {key: "229", value: "Venezuela"},
            {key: "230", value: "Viet Nam"},
            {key: "231", value: "Virgin Islands (British)"},
            {key: "232", value: "Virgin Islands (U.S.)"},
            {key: "233", value: "Wallis and Futuna Islands"},
            {key: "234", value: "Western Sahara"},
            {key: "235", value: "Yemen"},
            {key: "238", value: "Zambia"},
            {key: "239", value: "Zimbabwe"}
        ],
        validateOptions: {
            errorElement: 'em',
            errorClass: 'invalid',
            highlight: function(element, errorClass, validClass) {
                $(element).addClass(errorClass).removeClass(validClass);
                $(element).parent().addClass('state-error').removeClass('state-success');

            },
            unhighlight: function(element, errorClass, validClass) {
                $(element).removeClass(errorClass).addClass(validClass);
                $(element).parent().removeClass('state-error').addClass('state-success');
            },
            errorPlacement : function(error, element) {
                error.insertAfter(element.parent());
            }
        }
    });
angular.module("app").run(["$templateCache", function($templateCache) {$templateCache.put("app/dashboard/live-feeds.tpl.html","<div jarvis-widget id=\"live-feeds-widget\" data-widget-togglebutton=\"false\" data-widget-editbutton=\"false\"\n     data-widget-fullscreenbutton=\"false\" data-widget-colorbutton=\"false\" data-widget-deletebutton=\"false\">\n<!-- widget options:\nusage: <div class=\"jarviswidget\" id=\"wid-id-0\" data-widget-editbutton=\"false\">\n\ndata-widget-colorbutton=\"false\"\ndata-widget-editbutton=\"false\"\ndata-widget-togglebutton=\"false\"\ndata-widget-deletebutton=\"false\"\ndata-widget-fullscreenbutton=\"false\"\ndata-widget-custombutton=\"false\"\ndata-widget-collapsed=\"true\"\ndata-widget-sortable=\"false\"\n\n-->\n<header>\n    <span class=\"widget-icon\"> <i class=\"glyphicon glyphicon-stats txt-color-darken\"></i> </span>\n\n    <h2>Live Feeds </h2>\n\n    <ul class=\"nav nav-tabs pull-right in\" id=\"myTab\">\n        <li class=\"active\">\n            <a data-toggle=\"tab\" href=\"#s1\"><i class=\"fa fa-clock-o\"></i> <span class=\"hidden-mobile hidden-tablet\">Live Stats</span></a>\n        </li>\n\n        <li>\n            <a data-toggle=\"tab\" href=\"#s2\"><i class=\"fa fa-facebook\"></i> <span class=\"hidden-mobile hidden-tablet\">Social Network</span></a>\n        </li>\n\n        <li>\n            <a data-toggle=\"tab\" href=\"#s3\"><i class=\"fa fa-dollar\"></i> <span class=\"hidden-mobile hidden-tablet\">Revenue</span></a>\n        </li>\n    </ul>\n\n</header>\n\n<!-- widget div-->\n<div class=\"no-padding\">\n\n    <div class=\"widget-body\">\n        <!-- content -->\n        <div id=\"myTabContent\" class=\"tab-content\">\n            <div class=\"tab-pane fade active in padding-10 no-padding-bottom\" id=\"s1\">\n                <div class=\"row no-space\">\n                    <div class=\"col-xs-12 col-sm-12 col-md-8 col-lg-8\">\n														<span class=\"demo-liveupdate-1\"> <span\n                                                                class=\"onoffswitch-title\">Live switch</span> <span\n                                                                class=\"onoffswitch\">\n																<input type=\"checkbox\" name=\"start_interval\" ng-model=\"autoUpdate\"\n                                                                       class=\"onoffswitch-checkbox\" id=\"start_interval\">\n																<label class=\"onoffswitch-label\" for=\"start_interval\">\n                                                                    <span class=\"onoffswitch-inner\"\n                                                                          data-swchon-text=\"ON\"\n                                                                          data-swchoff-text=\"OFF\"></span>\n                                                                    <span class=\"onoffswitch-switch\"></span>\n                                                                </label> </span> </span>\n\n                        <div id=\"updating-chart\" class=\"chart-large txt-color-blue\" flot-basic flot-data=\"liveStats\" flot-options=\"liveStatsOptions\"></div>\n\n                    </div>\n                    <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4 show-stats\">\n\n                        <div class=\"row\">\n                            <div class=\"col-xs-6 col-sm-6 col-md-12 col-lg-12\"><span class=\"text\"> My Tasks <span\n                                    class=\"pull-right\">130/200</span> </span>\n\n                                <div class=\"progress\">\n                                    <div class=\"progress-bar bg-color-blueDark\" style=\"width: 65%;\"></div>\n                                </div>\n                            </div>\n                            <div class=\"col-xs-6 col-sm-6 col-md-12 col-lg-12\"><span class=\"text\"> Transfered <span\n                                    class=\"pull-right\">440 GB</span> </span>\n\n                                <div class=\"progress\">\n                                    <div class=\"progress-bar bg-color-blue\" style=\"width: 34%;\"></div>\n                                </div>\n                            </div>\n                            <div class=\"col-xs-6 col-sm-6 col-md-12 col-lg-12\"><span class=\"text\"> Bugs Squashed<span\n                                    class=\"pull-right\">77%</span> </span>\n\n                                <div class=\"progress\">\n                                    <div class=\"progress-bar bg-color-blue\" style=\"width: 77%;\"></div>\n                                </div>\n                            </div>\n                            <div class=\"col-xs-6 col-sm-6 col-md-12 col-lg-12\"><span class=\"text\"> User Testing <span\n                                    class=\"pull-right\">7 Days</span> </span>\n\n                                <div class=\"progress\">\n                                    <div class=\"progress-bar bg-color-greenLight\" style=\"width: 84%;\"></div>\n                                </div>\n                            </div>\n\n                            <span class=\"show-stat-buttons\"> <span class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\"> <a\n                                    href-void class=\"btn btn-default btn-block hidden-xs\">Generate PDF</a> </span> <span\n                                    class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\"> <a href-void\n                                                                                     class=\"btn btn-default btn-block hidden-xs\">Report\n                                a bug</a> </span> </span>\n\n                        </div>\n\n                    </div>\n                </div>\n\n                <div class=\"show-stat-microcharts\" data-sparkline-container data-easy-pie-chart-container>\n                    <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3\">\n\n                        <div class=\"easy-pie-chart txt-color-orangeDark\" data-percent=\"33\" data-pie-size=\"50\">\n                            <span class=\"percent percent-sign\">35</span>\n                        </div>\n                        <span class=\"easy-pie-title\"> Server Load <i class=\"fa fa-caret-up icon-color-bad\"></i> </span>\n                        <ul class=\"smaller-stat hidden-sm pull-right\">\n                            <li>\n                                <span class=\"label bg-color-greenLight\"><i class=\"fa fa-caret-up\"></i> 97%</span>\n                            </li>\n                            <li>\n                                <span class=\"label bg-color-blueLight\"><i class=\"fa fa-caret-down\"></i> 44%</span>\n                            </li>\n                        </ul>\n                        <div class=\"sparkline txt-color-greenLight hidden-sm hidden-md pull-right\"\n                             data-sparkline-type=\"line\" data-sparkline-height=\"33px\" data-sparkline-width=\"70px\"\n                             data-fill-color=\"transparent\">\n                            130, 187, 250, 257, 200, 210, 300, 270, 363, 247, 270, 363, 247\n                        </div>\n                    </div>\n                    <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3\">\n                        <div class=\"easy-pie-chart txt-color-greenLight\" data-percent=\"78.9\" data-pie-size=\"50\">\n                            <span class=\"percent percent-sign\">78.9 </span>\n                        </div>\n                        <span class=\"easy-pie-title\"> Disk Space <i class=\"fa fa-caret-down icon-color-good\"></i></span>\n                        <ul class=\"smaller-stat hidden-sm pull-right\">\n                            <li>\n                                <span class=\"label bg-color-blueDark\"><i class=\"fa fa-caret-up\"></i> 76%</span>\n                            </li>\n                            <li>\n                                <span class=\"label bg-color-blue\"><i class=\"fa fa-caret-down\"></i> 3%</span>\n                            </li>\n                        </ul>\n                        <div class=\"sparkline txt-color-blue hidden-sm hidden-md pull-right\" data-sparkline-type=\"line\"\n                             data-sparkline-height=\"33px\" data-sparkline-width=\"70px\" data-fill-color=\"transparent\">\n                            257, 200, 210, 300, 270, 363, 130, 187, 250, 247, 270, 363, 247\n                        </div>\n                    </div>\n                    <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3\">\n                        <div class=\"easy-pie-chart txt-color-blue\" data-percent=\"23\" data-pie-size=\"50\">\n                            <span class=\"percent percent-sign\">23 </span>\n                        </div>\n                        <span class=\"easy-pie-title\"> Transfered <i class=\"fa fa-caret-up icon-color-good\"></i></span>\n                        <ul class=\"smaller-stat hidden-sm pull-right\">\n                            <li>\n                                <span class=\"label bg-color-darken\">10GB</span>\n                            </li>\n                            <li>\n                                <span class=\"label bg-color-blueDark\"><i class=\"fa fa-caret-up\"></i> 10%</span>\n                            </li>\n                        </ul>\n                        <div class=\"sparkline txt-color-darken hidden-sm hidden-md pull-right\"\n                             data-sparkline-type=\"line\" data-sparkline-height=\"33px\" data-sparkline-width=\"70px\"\n                             data-fill-color=\"transparent\">\n                            200, 210, 363, 247, 300, 270, 130, 187, 250, 257, 363, 247, 270\n                        </div>\n                    </div>\n                    <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3\">\n                        <div class=\"easy-pie-chart txt-color-darken\" data-percent=\"36\" data-pie-size=\"50\">\n                            <span class=\"percent degree-sign\">36 <i class=\"fa fa-caret-up\"></i></span>\n                        </div>\n                        <span class=\"easy-pie-title\"> Temperature <i\n                                class=\"fa fa-caret-down icon-color-good\"></i></span>\n                        <ul class=\"smaller-stat hidden-sm pull-right\">\n                            <li>\n                                <span class=\"label bg-color-red\"><i class=\"fa fa-caret-up\"></i> 124</span>\n                            </li>\n                            <li>\n                                <span class=\"label bg-color-blue\"><i class=\"fa fa-caret-down\"></i> 40 F</span>\n                            </li>\n                        </ul>\n                        <div class=\"sparkline txt-color-red hidden-sm hidden-md pull-right\" data-sparkline-type=\"line\"\n                             data-sparkline-height=\"33px\" data-sparkline-width=\"70px\" data-fill-color=\"transparent\">\n                            2700, 3631, 2471, 2700, 3631, 2471, 1300, 1877, 2500, 2577, 2000, 2100, 3000\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n            <!-- end s1 tab pane -->\n\n            <div class=\"tab-pane fade\" id=\"s2\">\n                <div class=\"widget-body-toolbar bg-color-white\">\n\n                    <form class=\"form-inline\" role=\"form\">\n\n                        <div class=\"form-group\">\n                            <label class=\"sr-only\" for=\"s123\">Show From</label>\n                            <input type=\"email\" class=\"form-control input-sm\" id=\"s123\" placeholder=\"Show From\">\n                        </div>\n                        <div class=\"form-group\">\n                            <input type=\"email\" class=\"form-control input-sm\" id=\"s124\" placeholder=\"To\">\n                        </div>\n\n                        <div class=\"btn-group hidden-phone pull-right\">\n                            <a class=\"btn dropdown-toggle btn-xs btn-default\" data-toggle=\"dropdown\"><i\n                                    class=\"fa fa-cog\"></i> More <span class=\"caret\"> </span> </a>\n                            <ul class=\"dropdown-menu pull-right\">\n                                <li>\n                                    <a href-void><i class=\"fa fa-file-text-alt\"></i> Export to PDF</a>\n                                </li>\n                                <li>\n                                    <a href-void><i class=\"fa fa-question-sign\"></i> Help</a>\n                                </li>\n                            </ul>\n                        </div>\n\n                    </form>\n\n                </div>\n                <div class=\"padding-10\">\n                    <div id=\"statsChart\" class=\"chart-large has-legend-unique\" flot-basic flot-data=\"statsData\" flot-options=\"statsDisplayOptions\"></div>\n                </div>\n\n            </div>\n            <!-- end s2 tab pane -->\n\n            <div class=\"tab-pane fade\" id=\"s3\">\n\n                <div class=\"widget-body-toolbar bg-color-white smart-form\" id=\"rev-toggles\">\n\n                    <div class=\"inline-group\">\n\n                        <label for=\"gra-0\" class=\"checkbox\">\n                            <input type=\"checkbox\" id=\"gra-0\" ng-model=\"targetsShow\">\n                            <i></i> Target </label>\n                        <label for=\"gra-1\" class=\"checkbox\">\n                            <input type=\"checkbox\" id=\"gra-1\" ng-model=\"actualsShow\">\n                            <i></i> Actual </label>\n                        <label for=\"gra-2\" class=\"checkbox\">\n                            <input type=\"checkbox\" id=\"gra-2\" ng-model=\"signupsShow\">\n                            <i></i> Signups </label>\n                    </div>\n\n                    <div class=\"btn-group hidden-phone pull-right\">\n                        <a class=\"btn dropdown-toggle btn-xs btn-default\" data-toggle=\"dropdown\"><i\n                                class=\"fa fa-cog\"></i> More <span class=\"caret\"> </span> </a>\n                        <ul class=\"dropdown-menu pull-right\">\n                            <li>\n                                <a href-void><i class=\"fa fa-file-text-alt\"></i> Export to PDF</a>\n                            </li>\n                            <li>\n                                <a href-void><i class=\"fa fa-question-sign\"></i> Help</a>\n                            </li>\n                        </ul>\n                    </div>\n\n                </div>\n\n                <div class=\"padding-10\">\n                    <div id=\"flotcontainer\" class=\"chart-large has-legend-unique\" flot-basic flot-data=\"revenewData\" flot-options=\"revenewDisplayOptions\" ></div>\n                </div>\n            </div>\n            <!-- end s3 tab pane -->\n        </div>\n\n        <!-- end content -->\n    </div>\n\n</div>\n<!-- end widget div -->\n</div>\n");
$templateCache.put("app/layout/layout.tpl.html","<!-- HEADER -->\n<div data-smart-include=\"app/layout/partials/header.tpl.html\" class=\"placeholder-header\"></div>\n<!-- END HEADER -->\n\n\n<!-- Left panel : Navigation area -->\n<!-- Note: This width of the aside area can be adjusted through LESS variables -->\n<div data-smart-include=\"app/layout/partials/navigation.tpl.html\" class=\"placeholder-left-panel\"></div>\n\n<!-- END NAVIGATION -->\n\n<!-- MAIN PANEL -->\n<div id=\"main\" role=\"main\">\n\n    <!-- RIBBON -->\n    <div id=\"ribbon\">\n\n        <!-- breadcrumb -->\n        <state-breadcrumbs></state-breadcrumbs>\n        <!-- end breadcrumb -->\n\n\n    </div>\n    <!-- END RIBBON -->\n\n\n    <div data-smart-router-animation-wrap=\"content content@app\" data-wrap-for=\"#content\">\n        <div data-ui-view=\"content\" data-autoscroll=\"false\"></div>\n    </div>\n\n</div>\n<!-- END MAIN PANEL -->\n\n<!-- PAGE FOOTER -->\n<div data-smart-include=\"app/layout/partials/footer.tpl.html\"></div>\n\n<div data-smart-include=\"app/layout/shortcut/shortcut.tpl.html\"></div>\n\n<!-- END PAGE FOOTER -->\n\n\n");
$templateCache.put("app/auth/directives/login-info.tpl.html","<div class=\"login-info ng-cloak\">\n    <span> <!-- User image size is adjusted inside CSS, it should stay as it -->\n        <a  href=\"\" toggle-shortcut>\n            <img ng-src=\"{{user.picture}}\" alt=\"me\" class=\"online\">\n                <span>{{user.username}}\n                </span>\n            <i class=\"fa fa-angle-down\"></i>\n        </a>\n     </span>\n</div>");
$templateCache.put("app/calendar/directives/full-calendar.tpl.html","<div jarvis-widget data-widget-color=\"blueDark\">\n    <header>\n        <span class=\"widget-icon\"> <i class=\"fa fa-calendar\"></i> </span>\n\n        <h2> My Events </h2>\n\n        <div class=\"widget-toolbar\">\n            <!-- add: non-hidden - to disable auto hide -->\n            <div class=\"btn-group dropdown\" dropdown >\n                <button class=\"btn dropdown-toggle btn-xs btn-default\" data-toggle=\"dropdown\">\n                    Showing <i class=\"fa fa-caret-down\"></i>\n                </button>\n                <ul class=\"dropdown-menu js-status-update pull-right\">\n                    <li>\n                        <a ng-click=\"changeView(\'month\')\">Month</a>\n                    </li>\n                    <li>\n                        <a ng-click=\"changeView(\'agendaWeek\')\">Agenda</a>\n                    </li>\n                    <li>\n                        <a ng-click=\"changeView(\'agendaDay\')\">Today</a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </header>\n\n    <!-- widget div-->\n    <div>\n        <div class=\"widget-body no-padding\">\n            <!-- content goes here -->\n            <div class=\"widget-body-toolbar\">\n\n                <div id=\"calendar-buttons\">\n\n                    <div class=\"btn-group\">\n                        <a ng-click=\"prev()\" class=\"btn btn-default btn-xs\"><i\n                                class=\"fa fa-chevron-left\"></i></a>\n                        <a ng-click=\"next()\" class=\"btn btn-default btn-xs\"><i\n                                class=\"fa fa-chevron-right\"></i></a>\n                    </div>\n                </div>\n            </div>\n            <div id=\"calendar\"></div>\n\n            <!-- end content -->\n        </div>\n\n    </div>\n    <!-- end widget div -->\n</div>\n");
$templateCache.put("app/calendar/views/calendar.tpl.html","<!-- MAIN CONTENT -->\n<div id=\"content\">\n\n    <div class=\"row\">\n        <big-breadcrumbs items=\"[\'Home\', \'Calendar\']\" class=\"col-xs-12 col-sm-7 col-md-7 col-lg-4\"></big-breadcrumbs>\n        <div smart-include=\"app/layout/partials/sub-header.tpl.html\"></div>\n    </div>\n    <!-- widget grid -->\n    <section id=\"widget-grid\" widget-grid>\n        <!-- row -->\n        <div class=\"row\" ng-controller=\"CalendarCtrl\" >\n\n\n            <div class=\"col-sm-12 col-md-12 col-lg-3\">\n                <!-- new widget -->\n                <div class=\"jarviswidget jarviswidget-color-blueDark\">\n                    <header>\n                        <h2> Add Events </h2>\n                    </header>\n\n                    <!-- widget div-->\n                    <div>\n\n                        <div class=\"widget-body\">\n                            <!-- content goes here -->\n\n                            <form id=\"add-event-form\">\n                                <fieldset>\n\n                                    <div class=\"form-group\">\n                                        <label>Select Event Icon</label>\n                                        <div class=\"btn-group btn-group-sm btn-group-justified\" data-toggle=\"buttons\" > <!--  -->\n                                            <label class=\"btn btn-default active\">\n                                                <input type=\"radio\" name=\"iconselect\" id=\"icon-1\" value=\"fa-info\" radio-toggle ng-model=\"newEvent.icon\">\n                                                <i class=\"fa fa-info text-muted\"></i> </label>\n                                            <label class=\"btn btn-default\">\n                                                <input type=\"radio\" name=\"iconselect\" id=\"icon-2\" value=\"fa-warning\" radio-toggle  ng-model=\"newEvent.icon\">\n                                                <i class=\"fa fa-warning text-muted\"></i> </label>\n                                            <label class=\"btn btn-default\">\n                                                <input type=\"radio\" name=\"iconselect\" id=\"icon-3\" value=\"fa-check\" radio-toggle  ng-model=\"newEvent.icon\">\n                                                <i class=\"fa fa-check text-muted\"></i> </label>\n                                            <label class=\"btn btn-default\">\n                                                <input type=\"radio\" name=\"iconselect\" id=\"icon-4\" value=\"fa-user\" radio-toggle  ng-model=\"newEvent.icon\">\n                                                <i class=\"fa fa-user text-muted\"></i> </label>\n                                            <label class=\"btn btn-default\">\n                                                <input type=\"radio\" name=\"iconselect\" id=\"icon-5\" value=\"fa-lock\" radio-toggle  ng-model=\"newEvent.icon\">\n                                                <i class=\"fa fa-lock text-muted\"></i> </label>\n                                            <label class=\"btn btn-default\">\n                                                <input type=\"radio\" name=\"iconselect\" id=\"icon-6\" value=\"fa-clock-o\" radio-toggle  ng-model=\"newEvent.icon\">\n                                                <i class=\"fa fa-clock-o text-muted\"></i> </label>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"form-group\">\n                                        <label>Event Title</label>\n                                        <input ng-model=\"newEvent.title\" class=\"form-control\"  id=\"title\" name=\"title\" maxlength=\"40\" type=\"text\" placeholder=\"Event Title\">\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <label>Event Description</label>\n                                        <textarea  ng-model=\"newEvent.description\" class=\"form-control\" placeholder=\"Please be brief\" rows=\"3\" maxlength=\"40\" id=\"description\"></textarea>\n                                        <p class=\"note\">Maxlength is set to 40 characters</p>\n                                    </div>\n\n                                    <div class=\"form-group\">\n                                        <label>Select Event Color</label>\n                                        <div class=\"btn-group btn-group-justified btn-select-tick\" data-toggle=\"buttons\" >\n                                            <label class=\"btn bg-color-darken active\">\n                                                <input   ng-model=\"newEvent.className\" radio-toggle   type=\"radio\" name=\"priority\" id=\"option1\" value=\"bg-color-darken txt-color-white\" >\n                                                <i class=\"fa fa-check txt-color-white\"></i> </label>\n                                            <label class=\"btn bg-color-blue\">\n                                                <input  ng-model=\"newEvent.className\" radio-toggle   type=\"radio\" name=\"priority\" id=\"option2\" value=\"bg-color-blue txt-color-white\">\n                                                <i class=\"fa fa-check txt-color-white\"></i> </label>\n                                            <label class=\"btn bg-color-orange\">\n                                                <input  ng-model=\"newEvent.className\" radio-toggle   type=\"radio\" name=\"priority\" id=\"option3\" value=\"bg-color-orange txt-color-white\">\n                                                <i class=\"fa fa-check txt-color-white\"></i> </label>\n                                            <label class=\"btn bg-color-greenLight\">\n                                                <input  ng-model=\"newEvent.className\" radio-toggle   type=\"radio\" name=\"priority\" id=\"option4\" value=\"bg-color-greenLight txt-color-white\">\n                                                <i class=\"fa fa-check txt-color-white\"></i> </label>\n                                            <label class=\"btn bg-color-blueLight\">\n                                                <input  ng-model=\"newEvent.className\" radio-toggle   type=\"radio\" name=\"priority\" id=\"option5\" value=\"bg-color-blueLight txt-color-white\">\n                                                <i class=\"fa fa-check txt-color-white\"></i> </label>\n                                            <label class=\"btn bg-color-red\">\n                                                <input  ng-model=\"newEvent.className\" radio-toggle   type=\"radio\" name=\"priority\" id=\"option6\" value=\"bg-color-red txt-color-white\">\n                                                <i class=\"fa fa-check txt-color-white\"></i> </label>\n                                        </div>\n                                    </div>\n\n                                </fieldset>\n                                <div class=\"form-actions\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-12\">\n                                            <button class=\"btn btn-default\" type=\"button\" id=\"add-event\" ng-click=\"addEvent()\" >\n                                                Add Event\n                                            </button>\n                                        </div>\n                                    </div>\n                                </div>\n                            </form>\n\n                            <!-- end content -->\n                        </div>\n\n                    </div>\n                    <!-- end widget div -->\n                </div>\n                <!-- end widget -->\n\n                <div class=\"well well-sm\" id=\"event-container\">\n                    <form>\n                        <legend>\n                            Draggable Events\n                        </legend>\n                        <ul id=\'external-events\' class=\"list-unstyled\">\n\n                            <li ng-repeat=\"event in eventsExternal\" dragable-event>\n                                <span class=\"{{event.className}}\" \n                                    data-description=\"{{event.description}}\"\n                                    data-icon=\"{{event.icon}}\"\n                                >\n                                {{event.title}}</span>\n                            </li>\n                            \n                        </ul>\n\n                        <!-- <ul id=\'external-events\' class=\"list-unstyled\">\n                            <li>\n                                <span class=\"bg-color-darken txt-color-white\" data-description=\"Currently busy\" data-icon=\"fa-time\">Office Meeting</span>\n                            </li>\n                            <li>\n                                <span class=\"bg-color-blue txt-color-white\" data-description=\"No Description\" data-icon=\"fa-pie\">Lunch Break</span>\n                            </li>\n                            <li>\n                                <span class=\"bg-color-red txt-color-white\" data-description=\"Urgent Tasks\" data-icon=\"fa-alert\">URGENT</span>\n                            </li>\n                        </ul> -->\n\n                        <div class=\"checkbox\">\n                            <label>\n                                <input type=\"checkbox\" id=\"drop-remove\" class=\"checkbox style-0\" checked=\"checked\">\n                                <span>remove after drop</span> </label>\n\n                        </div>\n                    </form>\n\n                </div>\n            </div>\n\n\n            <article class=\"col-sm-12 col-md-12 col-lg-9\">\n                <full-calendar id=\"main-calendar-widget\" data-events=\"events\"></full-calendar>\n            </article>\n        </div>\n    </section>\n</div>");
$templateCache.put("app/dashboard/projects/recent-projects.tpl.html","<div class=\"project-context hidden-xs dropdown\" dropdown>\n\n    <span class=\"label\">{{getWord(\'Projects\')}}:</span>\n    <span class=\"project-selector dropdown-toggle\" data-toggle=\"dropdown\">{{getWord(\'Recent projects\')}} <i ng-if=\"projects.length\"\n            class=\"fa fa-angle-down\"></i></span>\n\n    <ul class=\"dropdown-menu\" ng-if=\"projects.length\">\n        <li ng-repeat=\"project in projects\">\n            <a href=\"{{project.href}}\">{{project.title}}</a>\n        </li>\n        <li class=\"divider\"></li>\n        <li>\n            <a ng-click=\"clearProjects()\"><i class=\"fa fa-power-off\"></i> Clear</a>\n        </li>\n    </ul>\n\n</div>");
$templateCache.put("app/dashboard/todo/todo-widget.tpl.html","<div id=\"todo-widget\" jarvis-widget data-widget-editbutton=\"false\" data-widget-color=\"blue\"\n     ng-controller=\"TodoCtrl\">\n    <header>\n        <span class=\"widget-icon\"> <i class=\"fa fa-check txt-color-white\"></i> </span>\n\n        <h2> ToDo\'s </h2>\n\n        <div class=\"widget-toolbar\">\n            <!-- add: non-hidden - to disable auto hide -->\n            <button class=\"btn btn-xs btn-default\" ng-class=\"{active: newTodo}\" ng-click=\"toggleAdd()\"><i ng-class=\"{ \'fa fa-plus\': !newTodo, \'fa fa-times\': newTodo}\"></i> Add</button>\n\n        </div>\n    </header>\n    <!-- widget div-->\n    <div>\n        <div class=\"widget-body no-padding smart-form\">\n            <!-- content goes here -->\n            <div ng-show=\"newTodo\">\n                <h5 class=\"todo-group-title\"><i class=\"fa fa-plus-circle\"></i> New Todo</h5>\n\n                <form name=\"newTodoForm\" class=\"smart-form\">\n                    <fieldset>\n                        <section>\n                            <label class=\"input\">\n                                <input type=\"text\" required class=\"input-lg\" ng-model=\"newTodo.title\"\n                                       placeholder=\"What needs to be done?\">\n                            </label>\n                        </section>\n                        <section>\n                            <div class=\"col-xs-6\">\n                                <label class=\"select\">\n                                    <select class=\"input-sm\" ng-model=\"newTodo.state\"\n                                            ng-options=\"state as state for state in states\"></select> <i></i> </label>\n                            </div>\n                        </section>\n                    </fieldset>\n                    <footer>\n                        <button ng-disabled=\"newTodoForm.$invalid\" type=\"button\" class=\"btn btn-primary\"\n                                ng-click=\"createTodo()\">\n                            Add\n                        </button>\n                        <button type=\"button\" class=\"btn btn-default\" ng-click=\"toggleAdd()\">\n                            Cancel\n                        </button>\n                    </footer>\n                </form>\n            </div>\n\n            <todo-list state=\"Critical\"  title=\"Critical Tasks\" icon=\"warning\" todos=\"todos\"></todo-list>\n\n            <todo-list state=\"Important\" title=\"Important Tasks\" icon=\"exclamation\" todos=\"todos\"></todo-list>\n\n            <todo-list state=\"Completed\" title=\"Completed Tasks\" icon=\"check\" todos=\"todos\"></todo-list>\n\n            <!-- end content -->\n        </div>\n\n    </div>\n    <!-- end widget div -->\n</div>");
$templateCache.put("app/layout/language/language-selector.tpl.html","<ul class=\"header-dropdown-list hidden-xs ng-cloak\" ng-controller=\"LanguagesCtrl\">\n    <li class=\"dropdown\" dropdown>\n        <a class=\"dropdown-toggle\"  data-toggle=\"dropdown\" href> <img src=\"styles/img/blank.gif\" class=\"flag flag-{{currentLanguage.key}}\" alt=\"{{currentLanguage.alt}}\"> <span> {{currentLanguage.title}} </span>\n            <i class=\"fa fa-angle-down\"></i> </a>\n        <ul class=\"dropdown-menu pull-right\">\n            <li ng-class=\"{active: language==currentLanguage}\" ng-repeat=\"language in languages\">\n                <a ng-click=\"selectLanguage(language)\" ><img src=\"styles/img/blank.gif\" class=\"flag flag-{{language.key}}\"\n                                                   alt=\"{{language.alt}}\"> {{language.title}}</a>\n            </li>\n        </ul>\n    </li>\n</ul>");
$templateCache.put("app/layout/partials/footer.tpl.html","<div class=\"page-footer\">\n    <div class=\"row\">\n        <div class=\"col-xs-12 col-sm-6\">\n            <span class=\"txt-color-white\">SmartAdmin WebApp © 2013-2016</span>\n        </div>\n\n        <div class=\"col-xs-6 col-sm-6 text-right hidden-xs\">\n            <div class=\"txt-color-white inline-block\">\n                <i class=\"txt-color-blueLight hidden-mobile\">Last account activity <i class=\"fa fa-clock-o\"></i>\n                    <strong>52 mins ago &nbsp;</strong> </i>\n\n                <div class=\"btn-group dropup\">\n                    <button class=\"btn btn-xs dropdown-toggle bg-color-blue txt-color-white\" data-toggle=\"dropdown\">\n                        <i class=\"fa fa-link\"></i> <span class=\"caret\"></span>\n                    </button>\n                    <ul class=\"dropdown-menu pull-right text-left\">\n                        <li>\n                            <div class=\"padding-5\">\n                                <p class=\"txt-color-darken font-sm no-margin\">Download Progress</p>\n\n                                <div class=\"progress progress-micro no-margin\">\n                                    <div class=\"progress-bar progress-bar-success\" style=\"width: 50%;\"></div>\n                                </div>\n                            </div>\n                        </li>\n                        <li class=\"divider\"></li>\n                        <li>\n                            <div class=\"padding-5\">\n                                <p class=\"txt-color-darken font-sm no-margin\">Server Load</p>\n\n                                <div class=\"progress progress-micro no-margin\">\n                                    <div class=\"progress-bar progress-bar-success\" style=\"width: 20%;\"></div>\n                                </div>\n                            </div>\n                        </li>\n                        <li class=\"divider\"></li>\n                        <li>\n                            <div class=\"padding-5\">\n                                <p class=\"txt-color-darken font-sm no-margin\">Memory Load <span class=\"text-danger\">*critical*</span>\n                                </p>\n\n                                <div class=\"progress progress-micro no-margin\">\n                                    <div class=\"progress-bar progress-bar-danger\" style=\"width: 70%;\"></div>\n                                </div>\n                            </div>\n                        </li>\n                        <li class=\"divider\"></li>\n                        <li>\n                            <div class=\"padding-5\">\n                                <button class=\"btn btn-block btn-default\">refresh</button>\n                            </div>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");
$templateCache.put("app/layout/partials/header.tpl.html","<header id=\"header\">\n<div id=\"logo-group\">\n\n    <!-- PLACE YOUR LOGO HERE -->\n    <span id=\"logo\"> <img src=\"styles/img/logo.png\" alt=\"SmartAdmin\"> </span>\n    <!-- END LOGO PLACEHOLDER -->\n\n    <!-- Note: The activity badge color changes when clicked and resets the number to 0\n    Suggestion: You may want to set a flag when this happens to tick off all checked messages / notifications -->\n    <span id=\"activity\" class=\"activity-dropdown\" activities-dropdown-toggle> \n        <i class=\"fa fa-user\"></i> \n        <b class=\"badge bg-color-red\">21</b> \n    </span>\n    <div smart-include=\"app/dashboard/activities/activities.html\"></div>\n</div>\n\n\n<recent-projects></recent-projects>\n\n\n\n<!-- pulled right: nav area -->\n<div class=\"pull-right\">\n\n    <!-- collapse menu button -->\n    <div id=\"hide-menu\" class=\"btn-header pull-right\">\n        <span> <a toggle-menu title=\"Collapse Menu\"><i\n                class=\"fa fa-reorder\"></i></a> </span>\n    </div>\n    <!-- end collapse menu -->\n\n    <!-- #MOBILE -->\n    <!-- Top menu profile link : this shows only when top menu is active -->\n    <ul id=\"mobile-profile-img\" class=\"header-dropdown-list hidden-xs padding-5\">\n        <li class=\"\">\n            <a href=\"#\" class=\"dropdown-toggle no-margin userdropdown\" data-toggle=\"dropdown\">\n                <img src=\"styles/img/avatars/sunny.png\" alt=\"John Doe\" class=\"online\"/>\n            </a>\n            <ul class=\"dropdown-menu pull-right\">\n                <li>\n                    <a href-void class=\"padding-10 padding-top-0 padding-bottom-0\"><i\n                            class=\"fa fa-cog\"></i> Setting</a>\n                </li>\n                <li class=\"divider\"></li>\n                <li>\n                    <a ui-sref=\"app.appViews.profileDemo\" class=\"padding-10 padding-top-0 padding-bottom-0\"> <i class=\"fa fa-user\"></i>\n                        <u>P</u>rofile</a>\n                </li>\n                <li class=\"divider\"></li>\n                <li>\n                    <a href-void class=\"padding-10 padding-top-0 padding-bottom-0\"\n                       data-action=\"toggleShortcut\"><i class=\"fa fa-arrow-down\"></i> <u>S</u>hortcut</a>\n                </li>\n                <li class=\"divider\"></li>\n                <li>\n                    <a href-void class=\"padding-10 padding-top-0 padding-bottom-0\"\n                       data-action=\"launchFullscreen\"><i class=\"fa fa-arrows-alt\"></i> Full <u>S</u>creen</a>\n                </li>\n                <li class=\"divider\"></li>\n                <li>\n                    <a href=\"#/login\" class=\"padding-10 padding-top-5 padding-bottom-5\" data-action=\"userLogout\"><i\n                            class=\"fa fa-sign-out fa-lg\"></i> <strong><u>L</u>ogout</strong></a>\n                </li>\n            </ul>\n        </li>\n    </ul>\n\n    <!-- logout button -->\n    <div id=\"logout\" class=\"btn-header transparent pull-right\">\n        <span> <a ui-sref=\"login\" title=\"Sign Out\" data-action=\"userLogout\"\n                  data-logout-msg=\"You can improve your security further after logging out by closing this opened browser\"><i\n                class=\"fa fa-sign-out\"></i></a> </span>\n    </div>\n    <!-- end logout button -->\n\n    <!-- search mobile button (this is hidden till mobile view port) -->\n    <div id=\"search-mobile\" class=\"btn-header transparent pull-right\" data-search-mobile>\n        <span> <a href=\"#\" title=\"Search\"><i class=\"fa fa-search\"></i></a> </span>\n    </div>\n    <!-- end search mobile button -->\n\n    <!-- input: search field -->\n    <form action=\"#/search\" class=\"header-search pull-right\">\n        <input id=\"search-fld\" type=\"text\" name=\"param\" placeholder=\"Find reports and more\" data-autocomplete=\'[\n					\"ActionScript\",\n					\"AppleScript\",\n					\"Asp\",\n					\"BASIC\",\n					\"C\",\n					\"C++\",\n					\"Clojure\",\n					\"COBOL\",\n					\"ColdFusion\",\n					\"Erlang\",\n					\"Fortran\",\n					\"Groovy\",\n					\"Haskell\",\n					\"Java\",\n					\"JavaScript\",\n					\"Lisp\",\n					\"Perl\",\n					\"PHP\",\n					\"Python\",\n					\"Ruby\",\n					\"Scala\",\n					\"Scheme\"]\'>\n        <button type=\"submit\">\n            <i class=\"fa fa-search\"></i>\n        </button>\n        <a href=\"$\" id=\"cancel-search-js\" title=\"Cancel Search\"><i class=\"fa fa-times\"></i></a>\n    </form>\n    <!-- end input: search field -->\n\n    <!-- fullscreen button -->\n    <div id=\"fullscreen\" class=\"btn-header transparent pull-right\">\n        <span> <a full-screen title=\"Full Screen\"><i\n                class=\"fa fa-arrows-alt\"></i></a> </span>\n    </div>\n    <!-- end fullscreen button -->\n\n\n    <!-- multiple lang dropdown : find all flags in the flags page -->\n    <language-selector></language-selector>\n    <!-- end multiple lang -->\n\n</div>\n<!-- end pulled right: nav area -->\n\n</header>");
$templateCache.put("app/layout/partials/navigation.tpl.html","<aside id=\"left-panel\">\n    <!-- User info -->\n    <div login-info></div>\n    <!-- end user info -->\n    <nav>\n        <!-- NOTE: Notice the gaps after each icon usage <i></i>..\n        Please note that these links work a bit different than\n        traditional href=\"\" links. See documentation for details.\n        -->\n        <ul data-smart-menu>\n            <li data-ui-sref-active=\"active\">\n                <a data-ui-sref=\"app.home\" title=\"Outlook\">\n                    <i class=\"fa fa-lg fa-fw fa-home\"></i> <span class=\"menu-item-parent\">{{getWord(\'Home\')}}</span></a>\n            </li>\n            <li data-menu-collapse>\n                <a href=\"#\"><i class=\"fa fa-lg fa-fw fa-bar-chart-o\"></i> <span class=\"menu-item-parent\">{{getWord(\'Graphs\')}}</span></a>\n                <ul>\n                    <li data-ui-sref-active=\"active\">\n                        <a data-ui-sref=\"app.graphs.dygraphs\">{{getWord(\'Dygraphs\')}}</a>\n                    </li>\n                </ul>\n            </li>\n            <li data-ui-sref-active=\"active\">\n                <a data-ui-sref=\"app.camera\" title=\"Outlook\">\n                    <i class=\"fa fa-lg fa-fw fa-home\"></i> <span class=\"menu-item-parent\">{{getWord(\'Camera\')}}</span></a>\n            </li>\n        </ul>\n        <!-- NOTE: This allows you to pull menu items from server -->\n        <!-- <ul data-smart-menu-items=\"/api/menu-items.json\"></ul> -->\n    </nav>\n    <span class=\"minifyme\" data-action=\"minifyMenu\" minify-menu>\n    <i class=\"fa fa-arrow-circle-left hit\"></i>\n  </span>\n</aside>");
$templateCache.put("app/layout/partials/sub-header.tpl.html","<div class=\"col-xs-12 col-sm-5 col-md-5 col-lg-8\" data-sparkline-container>\n    <ul id=\"sparks\" class=\"\">\n        <li class=\"sparks-info\">\n            <h5> My Income <span class=\"txt-color-blue\">$47,171</span></h5>\n            <div class=\"sparkline txt-color-blue hidden-mobile hidden-md hidden-sm\">\n                1300, 1877, 2500, 2577, 2000, 2100, 3000, 2700, 3631, 2471, 2700, 3631, 2471\n            </div>\n        </li>\n        <li class=\"sparks-info\">\n            <h5> Site Traffic <span class=\"txt-color-purple\"><i class=\"fa fa-arrow-circle-up\"></i>&nbsp;45%</span></h5>\n            <div class=\"sparkline txt-color-purple hidden-mobile hidden-md hidden-sm\">\n                110,150,300,130,400,240,220,310,220,300, 270, 210\n            </div>\n        </li>\n        <li class=\"sparks-info\">\n            <h5> Site Orders <span class=\"txt-color-greenDark\"><i class=\"fa fa-shopping-cart\"></i>&nbsp;2447</span></h5>\n            <div class=\"sparkline txt-color-greenDark hidden-mobile hidden-md hidden-sm\">\n                110,150,300,130,400,240,220,310,220,300, 270, 210\n            </div>\n        </li>\n    </ul>\n</div>\n			");
$templateCache.put("app/layout/partials/voice-commands.tpl.html","<!-- TRIGGER BUTTON:\n<a href=\"/my-ajax-page.html\" data-toggle=\"modal\" data-target=\"#remoteModal\" class=\"btn btn-default\">Open Modal</a>  -->\n\n<!-- MODAL PLACE HOLDER\n<div class=\"modal fade\" id=\"remoteModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"remoteModalLabel\" aria-hidden=\"true\">\n<div class=\"modal-dialog\">\n<div class=\"modal-content\"></div>\n</div>\n</div>   -->\n<!--////////////////////////////////////-->\n\n<!--<div class=\"modal-header\">\n<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\n&times;\n</button>\n<h4 class=\"modal-title\" id=\"myModalLabel\">Command List</h4>\n</div>-->\n<div class=\"modal-body\">\n\n	<h1><i class=\"fa fa-microphone text-muted\"></i>&nbsp;&nbsp; SmartAdmin Voice Command</h1>\n	<hr class=\"simple\">\n	<h5>Instruction</h5>\n\n	Click <span class=\"text-success\">\"Allow\"</span> to access your microphone and activate Voice Command.\n	You will notice a <span class=\"text-primary\"><strong>BLUE</strong> Flash</span> on the microphone icon indicating activation.\n	The icon will appear <span class=\"text-danger\"><strong>RED</strong></span> <span class=\"label label-danger\"><i class=\"fa fa-microphone fa-lg\"></i></span> if you <span class=\"text-danger\">\"Deny\"</span> access or don\'t have any microphone installed.\n	<br>\n	<br>\n	As a security precaution, your browser will disconnect the microphone every 60 to 120 seconds (sooner if not being used). In which case Voice Command will prompt you again to <span class=\"text-success\">\"Allow\"</span> or <span class=\"text-danger\">\"Deny\"</span> access to your microphone.\n	<br>\n	<br>\n	If you host your page over <strong>http<span class=\"text-success\">s</span></strong> (secure socket layer) protocol you can wave this security measure and have an unintrupted Voice Command.\n	<br>\n	<br>\n	<h5>Commands</h5>\n	<ul>\n		<li>\n			<strong>\'show\' </strong> then say the <strong>*page*</strong> you want to go to. For example <strong>\"show inbox\"</strong> or <strong>\"show calendar\"</strong>\n		</li>\n		<li>\n			<strong>\'mute\' </strong> - mutes all sound effects for the theme.\n		</li>\n		<li>\n			<strong>\'sound on\'</strong> - unmutes all sound effects for the theme.\n		</li>\n		<li>\n			<span class=\"text-danger\"><strong>\'stop\'</strong></span> - deactivates voice command.\n		</li>\n		<li>\n			<span class=\"text-primary\"><strong>\'help\'</strong></span> - brings up the command list\n		</li>\n		<li>\n			<span class=\"text-danger\"><strong>\'got it\'</strong></span> - closes help modal\n		</li>\n		<li>\n			<strong>\'hide navigation\'</strong> - toggle navigation collapse\n		</li>\n		<li>\n			<strong>\'show navigation\'</strong> - toggle navigation to open (can be used again to close)\n		</li>\n		<li>\n			<strong>\'scroll up\'</strong> - scrolls to the top of the page\n		</li>\n		<li>\n			<strong>\'scroll down\'</strong> - scrollts to the bottom of the page\n		</li>\n		<li>\n			<strong>\'go back\' </strong> - goes back in history (history -1 click)\n		</li>\n		<li>\n			<strong>\'logout\'</strong> - logs you out\n		</li>\n	</ul>\n	<br>\n	<h5>Adding your own commands</h5>\n	Voice Command supports up to 80 languages. Adding your own commands is extreamly easy. All commands are stored inside <strong>app.config.js</strong> file under the <code>var commands = {...}</code>. \n\n	<hr class=\"simple\">\n	<div class=\"text-right\">\n		<button type=\"button\" class=\"btn btn-success btn-lg\" data-dismiss=\"modal\">\n			Got it!\n		</button>\n	</div>\n\n</div>\n<!--<div class=\"modal-footer\">\n<button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Got it!</button>\n</div> -->");
$templateCache.put("app/layout/shortcut/shortcut.tpl.html","<div id=\"shortcut\">\n	<ul>\n		<li>\n			<a href=\"#/inbox/\" class=\"jarvismetro-tile big-cubes bg-color-blue\"> <span class=\"iconbox\"> <i class=\"fa fa-envelope fa-4x\"></i> <span>Mail <span class=\"label pull-right bg-color-darken\">14</span></span> </span> </a>\n		</li>\n		<li>\n			<a href=\"#/calendar\" class=\"jarvismetro-tile big-cubes bg-color-orangeDark\"> <span class=\"iconbox\"> <i class=\"fa fa-calendar fa-4x\"></i> <span>Calendar</span> </span> </a>\n		</li>\n		<li>\n			<a href=\"#/maps\" class=\"jarvismetro-tile big-cubes bg-color-purple\"> <span class=\"iconbox\"> <i class=\"fa fa-map-marker fa-4x\"></i> <span>Maps</span> </span> </a>\n		</li>\n		<li>\n			<a href=\"#/invoice\" class=\"jarvismetro-tile big-cubes bg-color-blueDark\"> <span class=\"iconbox\"> <i class=\"fa fa-book fa-4x\"></i> <span>Invoice <span class=\"label pull-right bg-color-darken\">99</span></span> </span> </a>\n		</li>\n		<li>\n			<a href=\"#/gallery\" class=\"jarvismetro-tile big-cubes bg-color-greenLight\"> <span class=\"iconbox\"> <i class=\"fa fa-picture-o fa-4x\"></i> <span>Gallery </span> </span> </a>\n		</li>\n		<li>\n			<a href=\"#/profile\" class=\"jarvismetro-tile big-cubes selected bg-color-pinkDark\"> <span class=\"iconbox\"> <i class=\"fa fa-user fa-4x\"></i> <span>My Profile </span> </span> </a>\n		</li>\n	</ul>\n</div>");
$templateCache.put("app/dashboard/chat/directives/aside-chat-widget.tpl.html","<ul>\n    <li>\n        <div class=\"display-users\">\n            <input class=\"form-control chat-user-filter\" placeholder=\"Filter\" type=\"text\">\n            <dl>\n                <dt>\n                    <a href=\"#\" class=\"usr\"\n                       data-chat-id=\"cha1\"\n                       data-chat-fname=\"Sadi\"\n                       data-chat-lname=\"Orlaf\"\n                       data-chat-status=\"busy\"\n                       data-chat-alertmsg=\"Sadi Orlaf is in a meeting. Please do not disturb!\"\n                       data-chat-alertshow=\"true\"\n                       popover-trigger=\"hover\"\n                       popover-placement=\"right\"\n                       smart-popover-html=\"\n										<div class=\'usr-card\'>\n											<img src=\'styles/img/avatars/5.png\' alt=\'Sadi Orlaf\'>\n											<div class=\'usr-card-content\'>\n												<h3>Sadi Orlaf</h3>\n												<p>Marketing Executive</p>\n											</div>\n										</div>\n									\">\n                        <i></i>Sadi Orlaf\n                    </a>\n                </dt>\n                <dt>\n                    <a href=\"#\" class=\"usr\"\n                       data-chat-id=\"cha2\"\n                       data-chat-fname=\"Jessica\"\n                       data-chat-lname=\"Dolof\"\n                       data-chat-status=\"online\"\n                       data-chat-alertmsg=\"\"\n                       data-chat-alertshow=\"false\"\n                       popover-trigger=\"hover\"\n                       popover-placement=\"right\"\n                       smart-popover-html=\"\n										<div class=\'usr-card\'>\n											<img src=\'styles/img/avatars/1.png\' alt=\'Jessica Dolof\'>\n											<div class=\'usr-card-content\'>\n												<h3>Jessica Dolof</h3>\n												<p>Sales Administrator</p>\n											</div>\n										</div>\n									\">\n                        <i></i>Jessica Dolof\n                    </a>\n                </dt>\n                <dt>\n                    <a href=\"#\" class=\"usr\"\n                       data-chat-id=\"cha3\"\n                       data-chat-fname=\"Zekarburg\"\n                       data-chat-lname=\"Almandalie\"\n                       data-chat-status=\"online\"\n                       popover-trigger=\"hover\"\n                       popover-placement=\"right\"\n                       smart-popover-html=\"\n										<div class=\'usr-card\'>\n											<img src=\'styles/img/avatars/3.png\' alt=\'Zekarburg Almandalie\'>\n											<div class=\'usr-card-content\'>\n												<h3>Zekarburg Almandalie</h3>\n												<p>Sales Admin</p>\n											</div>\n										</div>\n									\">\n                        <i></i>Zekarburg Almandalie\n                    </a>\n                </dt>\n                <dt>\n                    <a href=\"#\" class=\"usr\"\n                       data-chat-id=\"cha4\"\n                       data-chat-fname=\"Barley\"\n                       data-chat-lname=\"Krazurkth\"\n                       data-chat-status=\"away\"\n                       popover-trigger=\"hover\"\n                       popover-placement=\"right\"\n                       smart-popover-html=\"\n										<div class=\'usr-card\'>\n											<img src=\'styles/img/avatars/4.png\' alt=\'Barley Krazurkth\'>\n											<div class=\'usr-card-content\'>\n												<h3>Barley Krazurkth</h3>\n												<p>Sales Director</p>\n											</div>\n										</div>\n									\">\n                        <i></i>Barley Krazurkth\n                    </a>\n                </dt>\n                <dt>\n                    <a href=\"#\" class=\"usr offline\"\n                       data-chat-id=\"cha5\"\n                       data-chat-fname=\"Farhana\"\n                       data-chat-lname=\"Amrin\"\n                       data-chat-status=\"incognito\"\n                       popover-trigger=\"hover\"\n                       popover-placement=\"right\"\n                       smart-popover-html=\"\n										<div class=\'usr-card\'>\n											<img src=\'styles/img/avatars/female.png\' alt=\'Farhana Amrin\'>\n											<div class=\'usr-card-content\'>\n												<h3>Farhana Amrin</h3>\n												<p>Support Admin <small><i class=\'fa fa-music\'></i> Playing Beethoven Classics</small></p>\n											</div>\n										</div>\n									\">\n                        <i></i>Farhana Amrin (offline)\n                    </a>\n                </dt>\n                <dt>\n                    <a href=\"#\" class=\"usr offline\"\n                       data-chat-id=\"cha6\"\n                       data-chat-fname=\"Lezley\"\n                       data-chat-lname=\"Jacob\"\n                       data-chat-status=\"incognito\"\n                       popover-trigger=\"hover\"\n                       popover-placement=\"right\"\n                       smart-popover-html=\"\n										<div class=\'usr-card\'>\n											<img src=\'styles/img/avatars/male.png\' alt=\'Lezley Jacob\'>\n											<div class=\'usr-card-content\'>\n												<h3>Lezley Jacob</h3>\n												<p>Sales Director</p>\n											</div>\n										</div>\n									\">\n                        <i></i>Lezley Jacob (offline)\n                    </a>\n                </dt>\n            </dl>\n\n\n            <!--<a href=\"chat.html\" class=\"btn btn-xs btn-default btn-block sa-chat-learnmore-btn\">About the API</a>-->\n        </div>\n    </li>\n</ul>");
$templateCache.put("app/dashboard/chat/directives/chat-users.tpl.html","<div id=\"chat-container\" ng-class=\"{open: open}\">\n    <span class=\"chat-list-open-close\" ng-click=\"openToggle()\"><i class=\"fa fa-user\"></i><b>!</b></span>\n\n    <div class=\"chat-list-body custom-scroll\">\n        <ul id=\"chat-users\">\n            <li ng-repeat=\"chatUser in chatUsers | filter: chatUserFilter\">\n                <a ng-click=\"messageTo(chatUser)\"><img ng-src=\"{{chatUser.picture}}\">{{chatUser.username}} <span\n                        class=\"badge badge-inverse\">{{chatUser.username.length}}</span><span class=\"state\"><i\n                        class=\"fa fa-circle txt-color-green pull-right\"></i></span></a>\n            </li>\n        </ul>\n    </div>\n    <div class=\"chat-list-footer\">\n        <div class=\"control-group\">\n            <form class=\"smart-form\">\n                <section>\n                    <label class=\"input\" >\n                        <input type=\"text\" ng-model=\"chatUserFilter\" id=\"filter-chat-list\" placeholder=\"Filter\">\n                    </label>\n                </section>\n            </form>\n        </div>\n    </div>\n</div>");
$templateCache.put("app/dashboard/chat/directives/chat-widget.tpl.html","<div id=\"chat-widget\" jarvis-widget data-widget-color=\"blueDark\" data-widget-editbutton=\"false\"\n     data-widget-fullscreenbutton=\"false\">\n\n\n    <header>\n        <span class=\"widget-icon\"> <i class=\"fa fa-comments txt-color-white\"></i> </span>\n\n        <h2> SmartMessage </h2>\n\n        <div class=\"widget-toolbar\">\n            <!-- add: non-hidden - to disable auto hide -->\n\n            <div class=\"btn-group\" data-dropdown>\n                <button class=\"btn dropdown-toggle btn-xs btn-success\" data-toggle=\"dropdown\">\n                    Status <i class=\"fa fa-caret-down\"></i>\n                </button>\n                <ul class=\"dropdown-menu pull-right js-status-update\">\n                    <li>\n                        <a href-void><i class=\"fa fa-circle txt-color-green\"></i> Online</a>\n                    </li>\n                    <li>\n                        <a href-void><i class=\"fa fa-circle txt-color-red\"></i> Busy</a>\n                    </li>\n                    <li>\n                        <a href-void><i class=\"fa fa-circle txt-color-orange\"></i> Away</a>\n                    </li>\n                    <li class=\"divider\"></li>\n                    <li>\n                        <a href-void><i class=\"fa fa-power-off\"></i> Log Off</a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </header>\n\n    <!-- widget div-->\n    <div>\n        <div class=\"widget-body widget-hide-overflow no-padding\">\n            <!-- content goes here -->\n\n            <chat-users></chat-users>\n\n            <!-- CHAT BODY -->\n            <div id=\"chat-body\" class=\"chat-body custom-scroll\">\n                <ul>\n                    <li class=\"message\" ng-repeat=\"message in chatMessages\">\n                        <img class=\"message-picture online\" ng-src=\"{{message.user.picture}}\">\n\n                        <div class=\"message-text\">\n                            <time>\n                                {{message.date | date }}\n                            </time>\n                            <a ng-click=\"messageTo(message.user)\" class=\"username\">{{message.user.username}}</a>\n                            <div ng-bind-html=\"message.body\"></div>\n\n                        </div>\n                    </li>\n                </ul>\n            </div>\n\n            <!-- CHAT FOOTER -->\n            <div class=\"chat-footer\">\n\n                <!-- CHAT TEXTAREA -->\n                <div class=\"textarea-div\">\n\n                    <div class=\"typearea\">\n                        <textarea placeholder=\"Write a reply...\" id=\"textarea-expand\"\n                                  class=\"custom-scroll\" ng-model=\"newMessage\"></textarea>\n                    </div>\n\n                </div>\n\n                <!-- CHAT REPLY/SEND -->\n											<span class=\"textarea-controls\">\n												<button class=\"btn btn-sm btn-primary pull-right\" ng-click=\"sendMessage()\">\n                                                    Reply\n                                                </button> <span class=\"pull-right smart-form\"\n                                                                style=\"margin-top: 3px; margin-right: 10px;\"> <label\n                                                    class=\"checkbox pull-right\">\n                                                <input type=\"checkbox\" name=\"subscription\" id=\"subscription\">\n                                                <i></i>Press <strong> ENTER </strong> to send </label> </span> <a\n                                                    href-void class=\"pull-left\"><i\n                                                    class=\"fa fa-camera fa-fw fa-lg\"></i></a> </span>\n\n            </div>\n\n            <!-- end content -->\n        </div>\n\n    </div>\n    <!-- end widget div -->\n</div>");
$templateCache.put("app/dashboard/todo/directives/todo-list.tpl.html","<div>\n    <h5 class=\"todo-group-title\"><i class=\"fa fa-{{icon}}\"></i> {{title}} (\n        <small class=\"num-of-tasks\">{{scopeItems.length}}</small>\n        )\n    </h5>\n    <ul class=\"todo\">\n        <li ng-class=\"{complete: todo.completedAt}\" ng-repeat=\"todo in todos | orderBy: todo._id | filter: filter  track by todo._id\" >\n    	<span class=\"handle\"> <label class=\"checkbox\">\n            <input type=\"checkbox\" ng-click=\"todo.toggle()\" ng-checked=\"todo.completedAt\"\n                   name=\"checkbox-inline\">\n            <i></i> </label> </span>\n\n            <p>\n                <strong>Ticket #{{$index + 1}}</strong> - {{todo.title}}\n                <span class=\"text-muted\" ng-if=\"todo.description\">{{todo.description}}</span>\n                <span class=\"date\">{{todo.createdAt | date}} &dash; <a ng-click=\"deleteTodo(todo)\" class=\"text-muted\"><i\n                        class=\"fa fa-trash\"></i></a></span>\n\n            </p>\n        </li>\n    </ul>\n</div>");
$templateCache.put("app/_common/forms/directives/bootstrap-validation/bootstrap-attribute-form.tpl.html","<form id=\"attributeForm\" class=\"form-horizontal\"\n      data-bv-message=\"This value is not valid\"\n      data-bv-feedbackicons-valid=\"glyphicon glyphicon-ok\"\n      data-bv-feedbackicons-invalid=\"glyphicon glyphicon-remove\"\n      data-bv-feedbackicons-validating=\"glyphicon glyphicon-refresh\">\n\n    <fieldset>\n        <legend>\n            Set validator options via HTML attributes\n        </legend>\n\n        <div class=\"alert alert-warning\">\n            <code>&lt; input\n                data-bv-validatorname\n                data-bv-validatorname-validatoroption=\"...\" / &gt;</code>\n\n            <br>\n            <br>\n            More validator options can be found here:\n            <a href=\"http://bootstrapvalidator.com/validators/\" target=\"_blank\">http://bootstrapvalidator.com/validators/</a>\n        </div>\n\n        <div class=\"form-group\">\n            <label class=\"col-lg-3 control-label\">Full name</label>\n            <div class=\"col-lg-4\">\n                <input type=\"text\" class=\"form-control\" name=\"firstName\" placeholder=\"First name\"\n                       data-bv-notempty=\"true\"\n                       data-bv-notempty-message=\"The first name is required and cannot be empty\" />\n            </div>\n            <div class=\"col-lg-4\">\n                <input type=\"text\" class=\"form-control\" name=\"lastName\" placeholder=\"Last name\"\n                       data-bv-notempty=\"true\"\n                       data-bv-notempty-message=\"The last name is required and cannot be empty\" />\n            </div>\n        </div>\n    </fieldset>\n\n    <fieldset>\n        <div class=\"form-group\">\n            <label class=\"col-lg-3 control-label\">Username</label>\n            <div class=\"col-lg-5\">\n                <input type=\"text\" class=\"form-control\" name=\"username\"\n                       data-bv-message=\"The username is not valid\"\n\n                       data-bv-notempty=\"true\"\n                       data-bv-notempty-message=\"The username is required and cannot be empty\"\n\n                       data-bv-regexp=\"true\"\n                       data-bv-regexp-regexp=\"^[a-zA-Z0-9_\\.]+$\"\n                       data-bv-regexp-message=\"The username can only consist of alphabetical, number, dot and underscore\"\n\n                       data-bv-stringlength=\"true\"\n                       data-bv-stringlength-min=\"6\"\n                       data-bv-stringlength-max=\"30\"\n                       data-bv-stringlength-message=\"The username must be more than 6 and less than 30 characters long\"\n\n                       data-bv-different=\"true\"\n                       data-bv-different-field=\"password\"\n                       data-bv-different-message=\"The username and password cannot be the same as each other\" />\n            </div>\n        </div>\n    </fieldset>\n\n    <fieldset>\n        <div class=\"form-group\">\n            <label class=\"col-lg-3 control-label\">Email address</label>\n            <div class=\"col-lg-5\">\n                <input class=\"form-control\" name=\"email\" type=\"email\"\n                       data-bv-emailaddress=\"true\"\n                       data-bv-emailaddress-message=\"The input is not a valid email address\" />\n            </div>\n        </div>\n    </fieldset>\n\n    <fieldset>\n        <div class=\"form-group\">\n            <label class=\"col-lg-3 control-label\">Password</label>\n            <div class=\"col-lg-5\">\n                <input type=\"password\" class=\"form-control\" name=\"password\"\n                       data-bv-notempty=\"true\"\n                       data-bv-notempty-message=\"The password is required and cannot be empty\"\n\n                       data-bv-identical=\"true\"\n                       data-bv-identical-field=\"confirmPassword\"\n                       data-bv-identical-message=\"The password and its confirm are not the same\"\n\n                       data-bv-different=\"true\"\n                       data-bv-different-field=\"username\"\n                       data-bv-different-message=\"The password cannot be the same as username\" />\n            </div>\n        </div>\n    </fieldset>\n\n    <fieldset>\n        <div class=\"form-group\">\n            <label class=\"col-lg-3 control-label\">Retype password</label>\n            <div class=\"col-lg-5\">\n                <input type=\"password\" class=\"form-control\" name=\"confirmPassword\"\n                       data-bv-notempty=\"true\"\n                       data-bv-notempty-message=\"The confirm password is required and cannot be empty\"\n\n                       data-bv-identical=\"true\"\n                       data-bv-identical-field=\"password\"\n                       data-bv-identical-message=\"The password and its confirm are not the same\"\n\n                       data-bv-different=\"true\"\n                       data-bv-different-field=\"username\"\n                       data-bv-different-message=\"The password cannot be the same as username\" />\n            </div>\n        </div>\n    </fieldset>\n\n    <fieldset>\n        <div class=\"form-group\">\n            <label class=\"col-lg-3 control-label\">Languages</label>\n            <div class=\"col-lg-5\">\n                <div class=\"checkbox\">\n                    <label>\n                        <input type=\"checkbox\" name=\"languages[]\" value=\"english\"\n                               data-bv-message=\"Please specify at least one language you can speak\"\n                               data-bv-notempty=\"true\" />\n                        English </label>\n                </div>\n                <div class=\"checkbox\">\n                    <label>\n                        <input type=\"checkbox\" name=\"languages[]\" value=\"french\" />\n                        French </label>\n                </div>\n                <div class=\"checkbox\">\n                    <label>\n                        <input type=\"checkbox\" name=\"languages[]\" value=\"german\" />\n                        German </label>\n                </div>\n                <div class=\"checkbox\">\n                    <label>\n                        <input type=\"checkbox\" name=\"languages[]\" value=\"russian\" />\n                        Russian </label>\n                </div>\n                <div class=\"checkbox\">\n                    <label>\n                        <input type=\"checkbox\" name=\"languages[]\" value=\"other\" />\n                        Other </label>\n                </div>\n            </div>\n        </div>\n    </fieldset>\n\n    <div class=\"form-actions\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <button class=\"btn btn-default\" type=\"submit\">\n                    <i class=\"fa fa-eye\"></i>\n                    Validate\n                </button>\n            </div>\n        </div>\n    </div>\n\n</form>\n     ");
$templateCache.put("app/_common/forms/directives/bootstrap-validation/bootstrap-button-group-form.tpl.html","<form id=\"buttonGroupForm\" method=\"post\" class=\"form-horizontal\">\n\n    <fieldset>\n        <legend>\n            Default Form Elements\n        </legend>\n        <div class=\"form-group\">\n            <label class=\"col-lg-3 control-label\">Gender</label>\n            <div class=\"col-lg-9\">\n                <div class=\"btn-group\" data-toggle=\"buttons\">\n                    <label class=\"btn btn-default\">\n                        <input type=\"radio\" name=\"gender\" value=\"male\" />\n                        Male </label>\n                    <label class=\"btn btn-default\">\n                        <input type=\"radio\" name=\"gender\" value=\"female\" />\n                        Female </label>\n                    <label class=\"btn btn-default\">\n                        <input type=\"radio\" name=\"gender\" value=\"other\" />\n                        Other </label>\n                </div>\n            </div>\n        </div>\n    </fieldset>\n\n    <fieldset>\n        <div class=\"form-group\">\n            <label class=\"col-lg-3 control-label\">Languages</label>\n            <div class=\"col-lg-9\">\n                <div class=\"btn-group\" data-toggle=\"buttons\">\n                    <label class=\"btn btn-default\">\n                        <input type=\"checkbox\" name=\"languages[]\" value=\"english\" />\n                        English </label>\n                    <label class=\"btn btn-default\">\n                        <input type=\"checkbox\" name=\"languages[]\" value=\"german\" />\n                        German </label>\n                    <label class=\"btn btn-default\">\n                        <input type=\"checkbox\" name=\"languages[]\" value=\"french\" />\n                        French </label>\n                    <label class=\"btn btn-default\">\n                        <input type=\"checkbox\" name=\"languages[]\" value=\"russian\" />\n                        Russian </label>\n                    <label class=\"btn btn-default\">\n                        <input type=\"checkbox\" name=\"languages[]\" value=\"italian\">\n                        Italian </label>\n                </div>\n            </div>\n        </div>\n    </fieldset>\n\n    <div class=\"form-actions\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <button class=\"btn btn-default\" type=\"submit\">\n                    <i class=\"fa fa-eye\"></i>\n                    Validate\n                </button>\n            </div>\n        </div>\n    </div>\n\n</form>\n");
$templateCache.put("app/_common/forms/directives/bootstrap-validation/bootstrap-contact-form.tpl.html","<form id=\"contactForm\" method=\"post\" class=\"form-horizontal\">\n\n    <fieldset>\n        <legend>Showing messages in custom area</legend>\n        <div class=\"form-group\">\n            <label class=\"col-md-3 control-label\">Full name</label>\n            <div class=\"col-md-6\">\n                <input type=\"text\" class=\"form-control\" name=\"fullName\" />\n            </div>\n        </div>\n    </fieldset>\n\n    <fieldset>\n        <div class=\"form-group\">\n            <label class=\"col-md-3 control-label\">Email</label>\n            <div class=\"col-md-6\">\n                <input type=\"text\" class=\"form-control\" name=\"email\" />\n            </div>\n        </div>\n    </fieldset>\n\n    <fieldset>\n        <div class=\"form-group\">\n            <label class=\"col-md-3 control-label\">Title</label>\n            <div class=\"col-md-6\">\n                <input type=\"text\" class=\"form-control\" name=\"title\" />\n            </div>\n        </div>\n    </fieldset>\n\n    <fieldset>\n        <div class=\"form-group\">\n            <label class=\"col-md-3 control-label\">Content</label>\n            <div class=\"col-md-6\">\n                <textarea class=\"form-control\" name=\"content\" rows=\"5\"></textarea>\n            </div>\n        </div>\n    </fieldset>\n\n    <fieldset>\n        <!-- #messages is where the messages are placed inside -->\n        <div class=\"form-group\">\n            <div class=\"col-md-9 col-md-offset-3\">\n                <div id=\"messages\"></div>\n            </div>\n        </div>\n    </fieldset>\n\n    <div class=\"form-actions\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <button class=\"btn btn-default\" type=\"submit\">\n                    <i class=\"fa fa-eye\"></i>\n                    Validate\n                </button>\n            </div>\n        </div>\n    </div>\n\n</form>\n");
$templateCache.put("app/_common/forms/directives/bootstrap-validation/bootstrap-movie-form.tpl.html","\n<form id=\"movieForm\" method=\"post\">\n\n    <fieldset>\n        <legend>\n            Default Form Elements\n        </legend>\n        <div class=\"form-group\">\n            <div class=\"row\">\n                <div class=\"col-md-8\">\n                    <label class=\"control-label\">Movie title</label>\n                    <input type=\"text\" class=\"form-control\" name=\"title\" />\n                </div>\n\n                <div class=\"col-md-4 selectContainer\">\n                    <label class=\"control-label\">Genre</label>\n                    <select class=\"form-control\" name=\"genre\">\n                        <option value=\"\">Choose a genre</option>\n                        <option value=\"action\">Action</option>\n                        <option value=\"comedy\">Comedy</option>\n                        <option value=\"horror\">Horror</option>\n                        <option value=\"romance\">Romance</option>\n                    </select>\n                </div>\n            </div>\n        </div>\n    </fieldset>\n\n    <fieldset>\n        <div class=\"form-group\">\n            <div class=\"row\">\n                <div class=\"col-sm-12 col-md-4\">\n                    <label class=\"control-label\">Director</label>\n                    <input type=\"text\" class=\"form-control\" name=\"director\" />\n                </div>\n\n                <div class=\"col-sm-12 col-md-4\">\n                    <label class=\"control-label\">Writer</label>\n                    <input type=\"text\" class=\"form-control\" name=\"writer\" />\n                </div>\n\n                <div class=\"col-sm-12 col-md-4\">\n                    <label class=\"control-label\">Producer</label>\n                    <input type=\"text\" class=\"form-control\" name=\"producer\" />\n                </div>\n            </div>\n        </div>\n    </fieldset>\n\n    <fieldset>\n        <div class=\"form-group\">\n            <div class=\"row\">\n                <div class=\"col-sm-12 col-md-6\">\n                    <label class=\"control-label\">Website</label>\n                    <input type=\"text\" class=\"form-control\" name=\"website\" />\n                </div>\n\n                <div class=\"col-sm-12 col-md-6\">\n                    <label class=\"control-label\">Youtube trailer</label>\n                    <input type=\"text\" class=\"form-control\" name=\"trailer\" />\n                </div>\n            </div>\n        </div>\n    </fieldset>\n\n    <fieldset>\n        <div class=\"form-group\">\n            <label class=\"control-label\">Review</label>\n            <textarea class=\"form-control\" name=\"review\" rows=\"8\"></textarea>\n        </div>\n    </fieldset>\n\n    <fieldset>\n        <div class=\"form-group\">\n\n            <div class=\"row\">\n                <div class=\"col-sm-12 col-md-12\">\n                    <label class=\"control-label\">Rating</label>\n                </div>\n\n                <div class=\"col-sm-12 col-md-10\">\n\n                    <label class=\"radio radio-inline no-margin\">\n                        <input type=\"radio\" name=\"rating\" value=\"terrible\" class=\"radiobox style-2\" />\n                        <span>Terrible</span> </label>\n\n                    <label class=\"radio radio-inline\">\n                        <input type=\"radio\" name=\"rating\" value=\"watchable\" class=\"radiobox style-2\" />\n                        <span>Watchable</span> </label>\n                    <label class=\"radio radio-inline\">\n                        <input type=\"radio\" name=\"rating\" value=\"best\" class=\"radiobox style-2\" />\n                        <span>Best ever</span> </label>\n\n                </div>\n\n            </div>\n\n        </div>\n    </fieldset>\n\n    <div class=\"form-actions\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <button class=\"btn btn-default\" type=\"submit\">\n                    <i class=\"fa fa-eye\"></i>\n                    Validate\n                </button>\n            </div>\n        </div>\n    </div>\n\n</form>\n\n ");
$templateCache.put("app/_common/forms/directives/bootstrap-validation/bootstrap-product-form.tpl.html","<form id=\"productForm\" class=\"form-horizontal\">\n\n    <fieldset>\n        <legend>\n            Default Form Elements\n        </legend>\n        <div class=\"form-group\">\n            <label class=\"col-xs-2 col-lg-3 control-label\">Price</label>\n            <div class=\"col-xs-9 col-lg-6 inputGroupContainer\">\n                <div class=\"input-group\">\n                    <input type=\"text\" class=\"form-control\" name=\"price\" />\n                    <span class=\"input-group-addon\">$</span>\n                </div>\n            </div>\n        </div>\n    </fieldset>\n\n    <fieldset>\n        <div class=\"form-group\">\n            <label class=\"col-xs-2 col-lg-3 control-label\">Amount</label>\n            <div class=\"col-xs-9 col-lg-6 inputGroupContainer\">\n                <div class=\"input-group\">\n                    <span class=\"input-group-addon\">&#8364;</span>\n                    <input type=\"text\" class=\"form-control\" name=\"amount\" />\n                </div>\n            </div>\n        </div>\n    </fieldset>\n\n    <fieldset>\n        <div class=\"form-group\">\n            <label class=\"col-xs-2 col-lg-3 control-label\">Color</label>\n            <div class=\"col-xs-9 col-lg-6 selectContainer\">\n                <select class=\"form-control\" name=\"color\">\n                    <option value=\"\">Choose a color</option>\n                    <option value=\"blue\">Blue</option>\n                    <option value=\"green\">Green</option>\n                    <option value=\"red\">Red</option>\n                    <option value=\"yellow\">Yellow</option>\n                    <option value=\"white\">White</option>\n                </select>\n            </div>\n        </div>\n    </fieldset>\n\n    <fieldset>\n        <div class=\"form-group\">\n            <label class=\"col-xs-2 col-lg-3 control-label\">Size</label>\n            <div class=\"col-xs-9 col-lg-6 selectContainer\">\n                <select class=\"form-control\" name=\"size\">\n                    <option value=\"\">Choose a size</option>\n                    <option value=\"S\">S</option>\n                    <option value=\"M\">M</option>\n                    <option value=\"L\">L</option>\n                    <option value=\"XL\">XL</option>\n                </select>\n            </div>\n        </div>\n    </fieldset>\n\n    <div class=\"form-actions\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <button class=\"btn btn-default\" type=\"submit\">\n                    <i class=\"fa fa-eye\"></i>\n                    Validate\n                </button>\n            </div>\n        </div>\n    </div>\n</form>\n\n");
$templateCache.put("app/_common/forms/directives/bootstrap-validation/bootstrap-profile-form.tpl.html","<form id=\"profileForm\">\n\n    <fieldset>\n        <legend>\n            Default Form Elements\n        </legend>\n        <div class=\"form-group\">\n            <label>Email address</label>\n            <input type=\"text\" class=\"form-control\" name=\"email\" />\n        </div>\n    </fieldset>\n    <fieldset>\n        <div class=\"form-group\">\n            <label>Password</label>\n            <input type=\"password\" class=\"form-control\" name=\"password\" />\n        </div>\n    </fieldset>\n\n    <div class=\"form-actions\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <button class=\"btn btn-default\" type=\"submit\">\n                    <i class=\"fa fa-eye\"></i>\n                    Validate\n                </button>\n            </div>\n        </div>\n    </div>\n</form>\n");
$templateCache.put("app/_common/forms/directives/bootstrap-validation/bootstrap-toggling-form.tpl.html","<form id=\"togglingForm\" method=\"post\" class=\"form-horizontal\">\n\n    <fieldset>\n        <legend>\n            Default Form Elements\n        </legend>\n        <div class=\"form-group\">\n            <label class=\"col-lg-3 control-label\">Full name <sup>*</sup></label>\n            <div class=\"col-lg-4\">\n                <input type=\"text\" class=\"form-control\" name=\"firstName\" placeholder=\"First name\" />\n            </div>\n            <div class=\"col-lg-4\">\n                <input type=\"text\" class=\"form-control\" name=\"lastName\" placeholder=\"Last name\" />\n            </div>\n        </div>\n    </fieldset>\n\n    <fieldset>\n        <div class=\"form-group\">\n            <label class=\"col-lg-3 control-label\">Company <sup>*</sup></label>\n            <div class=\"col-lg-5\">\n                <input type=\"text\" class=\"form-control\" name=\"company\"\n                       required data-bv-notempty-message=\"The company name is required\" />\n            </div>\n            <div class=\"col-lg-2\">\n                <button type=\"button\" class=\"btn btn-info btn-sm\" data-toggle=\"#jobInfo\">\n                    Add more info\n                </button>\n            </div>\n        </div>\n    </fieldset>\n\n    <!-- These fields will not be validated as long as they are not visible -->\n    <div id=\"jobInfo\" style=\"display: none;\">\n        <fieldset>\n            <div class=\"form-group\">\n                <label class=\"col-lg-3 control-label\">Job title <sup>*</sup></label>\n                <div class=\"col-lg-5\">\n                    <input type=\"text\" class=\"form-control\" name=\"job\" />\n                </div>\n            </div>\n        </fieldset>\n\n        <fieldset>\n            <div class=\"form-group\">\n                <label class=\"col-lg-3 control-label\">Department <sup>*</sup></label>\n                <div class=\"col-lg-5\">\n                    <input type=\"text\" class=\"form-control\" name=\"department\" />\n                </div>\n            </div>\n        </fieldset>\n    </div>\n\n    <fieldset>\n        <div class=\"form-group\">\n            <label class=\"col-lg-3 control-label\">Mobile phone <sup>*</sup></label>\n            <div class=\"col-lg-5\">\n                <input type=\"text\" class=\"form-control\" name=\"mobilePhone\" />\n            </div>\n            <div class=\"col-lg-2\">\n                <button type=\"button\" class=\"btn btn-info btn-sm\" data-toggle=\"#phoneInfo\">\n                    Add more phone numbers\n                </button>\n            </div>\n        </div>\n    </fieldset>\n    <!-- These fields will not be validated as long as they are not visible -->\n    <div id=\"phoneInfo\" style=\"display: none;\">\n\n        <fieldset>\n            <div class=\"form-group\">\n                <label class=\"col-lg-3 control-label\">Home phone</label>\n                <div class=\"col-lg-5\">\n                    <input type=\"text\" class=\"form-control\" name=\"homePhone\" />\n                </div>\n            </div>\n        </fieldset>\n        <fieldset>\n            <div class=\"form-group\">\n                <label class=\"col-lg-3 control-label\">Office phone</label>\n                <div class=\"col-lg-5\">\n                    <input type=\"text\" class=\"form-control\" name=\"officePhone\" />\n                </div>\n            </div>\n        </fieldset>\n    </div>\n\n    <div class=\"form-actions\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <button class=\"btn btn-default\" type=\"submit\">\n                    <i class=\"fa fa-eye\"></i>\n                    Validate\n                </button>\n            </div>\n        </div>\n    </div>\n</form>");
$templateCache.put("app/_common/layout/directives/demo/demo-states.tpl.html","<div class=\"demo\"><span id=\"demo-setting\"><i class=\"fa fa-cog txt-color-blueDark\"></i></span>\n\n    <form>\n        <legend class=\"no-padding margin-bottom-10\">Layout Options</legend>\n        <section>\n            <label><input type=\"checkbox\" ng-model=\"fixedHeader\"\n                          class=\"checkbox style-0\"><span>Fixed Header</span></label>\n            <label><input type=\"checkbox\"\n                          ng-model=\"fixedNavigation\"\n                          class=\"checkbox style-0\"><span>Fixed Navigation</span></label>\n            <label><input type=\"checkbox\"\n                          ng-model=\"fixedRibbon\"\n                          class=\"checkbox style-0\"><span>Fixed Ribbon</span></label>\n            <label><input type=\"checkbox\"\n                          ng-model=\"fixedPageFooter\"\n                          class=\"checkbox style-0\"><span>Fixed Footer</span></label>\n            <label><input type=\"checkbox\"\n                          ng-model=\"insideContainer\"\n                          class=\"checkbox style-0\"><span>Inside <b>.container</b></span></label>\n            <label><input type=\"checkbox\"\n                          ng-model=\"rtl\"\n                          class=\"checkbox style-0\"><span>RTL</span></label>\n            <label><input type=\"checkbox\"\n                          ng-model=\"menuOnTop\"\n                          class=\"checkbox style-0\"><span>Menu on <b>top</b></span></label>\n            <label><input type=\"checkbox\"\n                          ng-model=\"colorblindFriendly\"\n                          class=\"checkbox style-0\"><span>For Colorblind <div\n                    class=\"font-xs text-right\">(experimental)\n            </div></span>\n            </label><span id=\"smart-bgimages\"></span></section>\n        <section><h6 class=\"margin-top-10 semi-bold margin-bottom-5\">Clear Localstorage</h6><a\n                ng-click=\"factoryReset()\" class=\"btn btn-xs btn-block btn-primary\" id=\"reset-smart-widget\"><i\n                class=\"fa fa-refresh\"></i> Factory Reset</a></section>\n\n        <h6 class=\"margin-top-10 semi-bold margin-bottom-5\">SmartAdmin Skins</h6>\n\n\n        <section id=\"smart-styles\">\n            <a ng-repeat=\"skin in skins\" ng-click=\"setSkin(skin)\" class=\"{{skin.class}}\" style=\"{{skin.style}}\"><i ng-if=\"skin.name == $parent.smartSkin\" class=\"fa fa-check fa-fw\"></i> {{skin.label}} <sup ng-if=\"skin.beta\">beta</sup></a>\n        </section>\n    </form>\n</div>");}]);
'use strict';

angular.module('app.appViews').controller('ProjectsDemoCtrl', function ($scope, projects) {

    $scope.projects = projects.data;

    $scope.tableOptions =  {
        "data": projects.data.data,
//            "bDestroy": true,
        "iDisplayLength": 15,
        "columns": [
            {
                "class":          'details-control',
                "orderable":      false,
                "data":           null,
                "defaultContent": ''
            },
            { "data": "name" },
            { "data": "est" },
            { "data": "contacts" },
            { "data": "status" },
            { "data": "target-actual" },
            { "data": "starts" },
            { "data": "ends" },
            { "data": "tracker" }
        ],
        "order": [[1, 'asc']]
    }
});
"use strict";

angular.module('app.auth').directive('loginInfo', function(User){

    return {
        restrict: 'A',
        templateUrl: 'app/auth/directives/login-info.tpl.html',
        link: function(scope, element){
            User.initialized.then(function(){
                scope.user = User
            });
        }
    }
})

"use strict";

angular.module('app.auth').controller('LoginCtrl', function ($scope, $state, GooglePlus, User, ezfb) {

    $scope.$on('event:google-plus-signin-success', function (event, authResult) {
        if (authResult.status.method == 'PROMPT') {
            GooglePlus.getUser().then(function (user) {
                User.username = user.name;
                User.picture = user.picture;
                $state.go('app.dashboard');
            });
        }
    });

    $scope.$on('event:facebook-signin-success', function (event, authResult) {
        ezfb.api('/me', function (res) {
            User.username = res.name;
            User.picture = 'https://graph.facebook.com/' + res.id + '/picture';
            $state.go('app.dashboard');
        });
    });
})



'use strict';

angular.module('app.auth').factory('User', function ($http, $q, APP_CONFIG) {
    var dfd = $q.defer();

    var UserModel = {
        initialized: dfd.promise,
        username: undefined,
        picture: undefined
    };
     $http.get(APP_CONFIG.apiRootUrl + '/user.json').then(function(response){
         UserModel.username = response.data.username;
         UserModel.picture= response.data.picture;
         dfd.resolve(UserModel)
     });

    return UserModel;
});

'use strict';

angular.module('app.calendar').controller('CalendarCtrl', function ($scope, $log, CalendarEvent) {


    // Events scope
    $scope.events = [];

    // Unassigned events scope
    $scope.eventsExternal = [
        {
            title: "Office Meeting",
            description: "Currently busy",
            className: "bg-color-darken txt-color-white",
            icon: "fa-time"
        },
        {
            title: "Lunch Break",
            description: "No Description",
            className: "bg-color-blue txt-color-white",
            icon: "fa-pie"
        },
        {
            title: "URGENT",
            description: "urgent tasks",
            className: "bg-color-red txt-color-white",
            icon: "fa-alert"
        }
    ];


    // Queriing our events from CalendarEvent resource...
    // Scope update will automatically update the calendar
    CalendarEvent.query().$promise.then(function (events) {
        $scope.events = events;
    });


    $scope.newEvent = {};

    $scope.addEvent = function() {

        $log.log("Adding new event:", $scope.newEvent);

        var newEventDefaults = {
            title: "Untitled Event",
            description: "no description",
            className: "bg-color-darken txt-color-white",
            icon: "fa-info"
        };


        $scope.newEvent = angular.extend(newEventDefaults, $scope.newEvent);

        $scope.eventsExternal.unshift($scope.newEvent);

        $scope.newEvent = {};

        // $log.log("New events now:", $scope.eventsExternal);

    };


});

"use strict";

angular.module('app.calendar').directive('dragableEvent', function ($log) {
    return {
        restrict: 'A',
        link: function (scope, element) {

            // $log.log(element.scope());

            var eventObject = element.scope().event;

            element.data('eventObject', eventObject);


            element.draggable({
                zIndex: 999,
                revert: true, // will cause the event to go back to its
                revertDuration: 0 //  original position after the drag
            });


        }
    }
})
"use strict";

angular.module('app.calendar').directive('fullCalendar', function (CalendarEvent, $log, $timeout) {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/calendar/directives/full-calendar.tpl.html',
        scope: {
            events: "=events"
        },
        link: function (scope, element) {


            var $calendar = $("#calendar");

            var calendar = null;


            function initCalendar() {

                // $log.log(events);


                calendar = $calendar.fullCalendar({
                    lang: 'en',
                    editable: true,
                    draggable: true,
                    selectable: false,
                    selectHelper: true,
                    unselectAuto: false,
                    disableResizing: false,
                    droppable: true,

                    header: {
                        left: 'title', //,today
                        center: 'prev, next, today',
                        right: 'month, agendaWeek, agendaDay' //month, agendaDay,
                    },

                    drop: function (date, allDay) { // this function is called when something is dropped

                        // retrieve the dropped element's stored Event Object
                        var originalEventObject = $(this).data('eventObject');
            
                        // we need to copy it, so that multiple events don't have a reference to the same object
                        var copiedEventObject = $.extend({}, originalEventObject);
            
                        // assign it the date that was reported
                        copiedEventObject.start = date;
                        copiedEventObject.allDay = allDay;

                        // $log.log(scope);
            
                        // render the event on the calendar
                        // the last `true` argument determines if the event "sticks" (http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
                        $('#calendar').fullCalendar('renderEvent', copiedEventObject, true);
            
                        // is the "remove after drop" checkbox checked?
                        if ($('#drop-remove').is(':checked')) {

                            // if so, remove the element from the "Draggable Events" list
                            // $(this).remove();
                            // $log.log($(this).scope());
                            var index = $(this).scope().$index;

                            $("#external-events").scope().eventsExternal.splice(index, 1);
                            $(this).remove();

                        }
            
                    },

                    select: function (start, end, allDay) {
                        var title = prompt('Event Title:');
                        if (title) {
                            calendar.fullCalendar('renderEvent', {
                                    title: title,
                                    start: start,
                                    end: end,
                                    allDay: allDay
                                }, true // make the event "stick"
                            );
                        }
                        calendar.fullCalendar('unselect');
                    },

                    // events: scope.events,

                    events: function(start, end, timezone, callback) {

                        callback(scope.events);

                    },

                    eventRender: function (event, element, icon) {
                        if (!event.description == "") {
                            element.find('.fc-event-title').append("<br/><span class='ultra-light'>" + event.description + "</span>");
                        }
                        if (!event.icon == "") {
                            element.find('.fc-event-title').append("<i class='air air-top-right fa " + event.icon + " '></i>");
                        }
                    }
                });

                $('.fc-header-right, .fc-header-center', $calendar).hide();
            }


            initCalendar();


            // Now events will be refetched every time events scope is updated in controller!!!
            scope.$watch("events", function(newValue, oldValue) {

                $calendar.fullCalendar( 'refetchEvents' );

            }, true);


            scope.next = function () {
                $('.fc-button-next', $calendar).click();
            };
            scope.prev = function () {
                $('.fc-button-prev', $calendar).click();
            };
            scope.today = function () {
                $('.fc-button-today', $calendar).click();
            };
            scope.changeView = function (period) {
                $calendar.fullCalendar('changeView', period);
            };
        }
    }
});

"use strict";

angular.module('app.calendar').factory('CalendarEvent', function($resource, APP_CONFIG){
    return $resource( APP_CONFIG.apiRootUrl + '/events.json', {_id:'@id'})
});
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

"use strict";

angular.module('app.camera').factory('CalendarEvent', function($resource, APP_CONFIG){
    return $resource( APP_CONFIG.apiRootUrl + '/events.json', {_id:'@id'})
});
"use strict";	

angular.module('app').controller("ActivitiesCtrl", function ActivitiesCtrl($scope, $log, activityService){

	$scope.activeTab = 'default';
	$scope.currentActivityItems = [];
	
	// Getting different type of activites
	activityService.get(function(data){

		$scope.activities = data.activities;
		
	});


	$scope.isActive = function(tab){
		return $scope.activeTab === tab;
	};

	$scope.setTab = function(activityType){
		$scope.activeTab = activityType;

		activityService.getbytype(activityType, function(data) {

			$scope.currentActivityItems = data.data;

		});

	};

});
"use strict";

angular.module('app').directive('activitiesDropdownToggle', function($log) {

	var link = function($scope,$element, attrs){
		var ajax_dropdown = null;

		$element.on('click',function(){
			var badge = $(this).find('.badge');

			if (badge.hasClass('bg-color-red')) {

				badge.removeClass('bg-color-red').text(0);

			}

			ajax_dropdown = $(this).next('.ajax-dropdown');

			if (!ajax_dropdown.is(':visible')) {

				ajax_dropdown.fadeIn(150);

				$(this).addClass('active');

			}
			 else {
				
				ajax_dropdown.fadeOut(150);
				
				$(this).removeClass('active');

			}

		})

		$(document).mouseup(function(e) {
			if (ajax_dropdown && !ajax_dropdown.is(e.target) && ajax_dropdown.has(e.target).length === 0) {
				ajax_dropdown.fadeOut(150);
				$element.removeClass('active');
			}
		});
	}
	
	return{
		restrict:'EA',
		link:link
	}
});
"use strict";

angular.module('app').factory('activityService', function($http, $log, APP_CONFIG) {

	function getActivities(callback){

		$http.get(APP_CONFIG.apiRootUrl + '/activities/activity.json').success(function(data){

			callback(data);
				
		}).error(function(){

			$log.log('Error');
			callback([]);

		});

	}

	function getActivitiesByType(type, callback){

		$http.get(APP_CONFIG.apiRootUrl + '/activities/activity-' + type + '.json').success(function(data){

			callback(data);
				
		}).error(function(){

			$log.log('Error');
			callback([]);

		});

	}
	
	return{
		get:function(callback){
			getActivities(callback);
		},
		getbytype:function(type,callback){
			getActivitiesByType(type, callback);
		}
	}
});
"use strict";

angular.module('app').factory('Project', function($http, APP_CONFIG){
    return {
        list: $http.get(APP_CONFIG.apiRootUrl + '/projects.json')
    }
});
"use strict";

angular.module('app').directive('recentProjects', function(Project){
    return {
        restrict: "EA",
        replace: true,
        templateUrl: "app/dashboard/projects/recent-projects.tpl.html",
        scope: true,
        link: function(scope, element){

            Project.list.then(function(response){
                scope.projects = response.data;
            });
            scope.clearProjects = function(){
                scope.projects = [];
            }
        }
    }
});
"use strict";

angular.module('app').controller('TodoCtrl', function ($scope, $timeout, Todo) {
    $scope.newTodo = undefined;

    $scope.states = ['Critical', 'Important', 'Completed'];

    $scope.todos = Todo.getList().$object;

    // $scope.$watch('todos', function(){ }, true)

    $scope.toggleAdd = function () {
        if (!$scope.newTodo) {
            $scope.newTodo = {
                state: 'Important'
            };
        } else {
            $scope.newTodo = undefined;
        }
    };

    $scope.createTodo = function () {
        $scope.todos.push(
           Todo.normalize($scope.newTodo)
        );
        $scope.newTodo = undefined;

    };

    $scope.deleteTodo = function (todo) {
        todo.remove().then(function () {
            $scope.todos.splice($scope.todos.indexOf(todo), 1);
        });

    };

});
'use strict';

angular.module('app.eCommerce').controller('OrdersDemoCtrl', function ($scope, orders) {

    $scope.orders = orders.data;

    $scope.tableOptions =  {
        "data": orders.data.data,
//            "bDestroy": true,
        "iDisplayLength": 15,
        columns: [
            {data: "orderId"},
            {data: "customerId"},
            {data: "purchase"},
            {data: "delivery"},
            {data: "basePrice"},
            {data: "postalZip"},
            {data: "status"}
        ],
        "order": [[1, 'asc']]
    }
});

"use strict";

angular.module('app.forms').controller('FormLayoutsCtrl', function($scope, $modal, $log){

    $scope.openModal = function () {
        var modalInstance = $modal.open({
            templateUrl: 'app/forms/views/form-layout-modal.html',
            controller: 'ModalDemoCtrl' 
        });

        modalInstance.result.then(function () {
            $log.info('Modal closed at: ' + new Date());

        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });


    };

    $scope.registration = {};

    $scope.$watch('registration.date', function(changed){
        console.log('registration model changed', $scope.registration)
    })


});

"use strict";

angular.module('app.forms').controller('FormPluginsCtrl', function($scope, $log){

	$scope.editableOptions =  {
		mode: 'popup',
		disabled: false
	};

	$scope.toggleInline = function() {
		if($scope.editableOptions.mode == 'popup') {
			$scope.editableOptions.mode = 'inline';
		}
		else {
			$scope.editableOptions.mode = 'popup'
		}
	};

	$scope.toggleDisabled = function() {
		$scope.editableOptions.disabled = !$scope.editableOptions.disabled;
	};


	$scope.datepickerOptions = {
		changeMonth: true,
		changeYear: true
	}
});
"use strict";


angular.module('app.forms').controller('FormWizardCtrl', function($scope){

    $scope.wizard1CompleteCallback = function(wizardData){
        console.log('wizard1CompleteCallback', wizardData);
        $.smallBox({
            title: "Congratulations! Smart wizard finished",
            content: "<i class='fa fa-clock-o'></i> <i>1 seconds ago...</i>",
            color: "#5F895F",
            iconSmall: "fa fa-check bounce animated",
            timeout: 4000
        });
    };

    $scope.wizard2CompleteCallback = function(wizardData){
        console.log('wizard2CompleteCallback', wizardData);
        $.smallBox({
            title: "Congratulations! Smart fuekux wizard finished",
            content: "<i class='fa fa-clock-o'></i> <i>1 seconds ago...</i>",
            color: "#5F895F",
            iconSmall: "fa fa-check bounce animated",
            timeout: 4000
        });

    };

});
"use strict";

angular.module('app.forms').controller('FormXeditableCtrl', function($scope, $log){

    $scope.username = 'superuser';
    $scope.firstname = null;
    $scope.sex = 'not selected';
    $scope.group = "Admin";
    $scope.vacation = "25.02.2013";
    $scope.combodate = "15/05/1984";
    $scope.event = null;
    $scope.comments = 'awesome user!';
    $scope.state2 = 'California';
    $scope.fruits = 'peach<br/>apple';
    

    $scope.fruits_data = [
        {value: 'banana', text: 'banana'},
        {value: 'peach', text: 'peach'},
        {value: 'apple', text: 'apple'},
        {value: 'watermelon', text: 'watermelon'},
        {value: 'orange', text: 'orange'}]
    ;


    $scope.genders =  [
        {value: 'not selected', text: 'not selected'},
        {value: 'Male', text: 'Male'},
        {value: 'Female', text: 'Female'}
    ];

    $scope.groups =  [
        {value: 'Guest', text: 'Guest'},
        {value: 'Service', text: 'Service'},
        {value: 'Customer', text: 'Customer'},
        {value: 'Operator', text: 'Operator'},
        {value: 'Support', text: 'Support'},
        {value: 'Admin', text: 'Admin'}
    ]; 

});
"use strict";


angular.module('app.forms').controller('ImageEditorCtrl', function ($scope) {

    // api tab
    $scope.apiDemoSelection = [100, 100, 400, 300];

    $scope.apiDemoOptions = {
        allowSelect: true,
        allowResize: true,
        allowMove: true,
        animate: false
    };

    $scope.apiRandomSelection = function () {
        $scope.apiDemoOptions.animate = false;
        $scope.apiDemoSelection = [
            Math.round(Math.random() * 600),
            Math.round(Math.random() * 400),
            Math.round(Math.random() * 600),
            Math.round(Math.random() * 400)
        ]
    };

    $scope.apiRandomAnimation = function () {
        $scope.apiDemoOptions.animate = true;
        $scope.apiDemoSelection = [
            Math.round(Math.random() * 600),
            Math.round(Math.random() * 400),
            Math.round(Math.random() * 600),
            Math.round(Math.random() * 400)
        ]
    };

    $scope.apiReleaseSelection = function () {
        $scope.apiDemoOptions.animate = true;
        $scope.apiDemoSelection = 'release';
    };


    $scope.apiToggleDisable = function () {
        $scope.apiDemoOptions.disabled = !$scope.apiDemoOptions.disabled;
    };

    $scope.apiToggleDestroy = function () {
        $scope.apiDemoOptions.destroyed = !$scope.apiDemoOptions.destroyed;
    };

    $scope.apiDemoShowAspect = false;
    $scope.apiDemoToggleAspect = function () {
        $scope.apiDemoShowAspect = !$scope.apiDemoShowAspect;
        if ($scope.apiDemoShowAspect)
            $scope.apiDemoOptions.aspectRatio = 4 / 3;
        else
            $scope.apiDemoOptions.aspectRatio = 0;
    };

    $scope.apiDemoShowSizeRestrict = false;
    $scope.apiDemoToggleSizeRestrict = function () {
        $scope.apiDemoShowSizeRestrict = !$scope.apiDemoShowSizeRestrict;
        if ($scope.apiDemoShowSizeRestrict) {
            $scope.apiDemoOptions.minSizeWidth = 80;
            $scope.apiDemoOptions.minSizeHeight = 80;
            $scope.apiDemoOptions.maxSizeWidth = 350;
            $scope.apiDemoOptions.maxSizeHeight = 350;
        } else {
            $scope.apiDemoOptions.minSizeWidth = 0;
            $scope.apiDemoOptions.minSizeHeight = 0;
            $scope.apiDemoOptions.maxSizeWidth = 0;
            $scope.apiDemoOptions.maxSizeHeight = 0;
        }

    };


    $scope.setApiDemoImage = function (image) {
        $scope.apiDemoImage = image;
        $scope.apiDemoOptions.src = image.src;
        $scope.apiDemoOptions.bgOpacity = image.bgOpacity;
        $scope.apiDemoOptions.outerImage = image.outerImage;
        $scope.apiRandomAnimation();
    };

    $scope.apiDemoImages = [
        {
            name: 'Lego',
            src: 'styles/img/superbox/superbox-full-24.jpg',
            bgOpacity: .6
        },
        {
            name: 'Breakdance',
            src: 'styles/img/superbox/superbox-full-7.jpg',
            bgOpacity: .6
        },
        {
            name: 'Dragon Fly',
            src: 'styles/img/superbox/superbox-full-20.jpg',
            bgOpacity: 1,
            outerImage: 'styles/img/superbox/superbox-full-20-bw.jpg'
        }
    ];

    $scope.apiDemoImage = $scope.apiDemoImages[1];

    // animations tab
    $scope.animationsDemoOptions = {
        bgOpacity: undefined,
        bgColor: undefined,
        bgFade: true,
        shade: false,
        animate: true
    };
    $scope.animationsDemoSelection = undefined;
    $scope.selections = {
        1: [217, 122, 382, 284],
        2: [20, 20, 580, 380],
        3: [24, 24, 176, 376],
        4: [347, 165, 550, 355],
        5: [136, 55, 472, 183],
        Release: 'release'
    };

    $scope.opacities = {
        Low: .2,
        Mid: .5,
        High: .8,
        Full: 1
    };

    $scope.colors = {
        R: '#900',
        B: '#4BB6F0',
        Y: '#F0B207',
        G: '#46B81C',
        W: 'white',
        K: 'black'
    };


    // styling tab

    $scope.styles = [
        {
            name: 'jcrop-light',
            bgFade: true,
            animate: true,
            selection: [130, 65, 130 + 350, 65 + 285],
            bgColor: 'white',
            bgOpacity: 0.5
        },
        {
            name: 'jcrop-dark',
            bgFade: true,
            animate: true,
            selection: [130, 65, 130 + 350, 65 + 285],
            bgColor: 'black',
            bgOpacity: 0.4
        },
        {
            name: 'jcrop-normal',
            bgFade: true,
            animate: true,
            selection: [130, 65, 130 + 350, 65 + 285],
            bgColor: 'black',
            bgOpacity: 0.6
        }
    ];

    $scope.demoStyle = $scope.styles[0]
});
'use strict'

angular.module('app.forms').controller('ModalDemoCtrl', function($scope, $modalInstance){
    $scope.closeModal = function(){
        $modalInstance.dismiss('cancel');
    }
});
"use strict";

angular.module('app.graphs').controller('FlotCtrl', function ($scope) {


    $scope.salesChartData = [
        [1196463600000, 0],
        [1196550000000, 0],
        [1196636400000, 0],
        [1196722800000, 77],
        [1196809200000, 3636],
        [1196895600000, 3575],
        [1196982000000, 2736],
        [1197068400000, 1086],
        [1197154800000, 676],
        [1197241200000, 1205],
        [1197327600000, 906],
        [1197414000000, 710],
        [1197500400000, 639],
        [1197586800000, 540],
        [1197673200000, 435],
        [1197759600000, 301],
        [1197846000000, 575],
        [1197932400000, 481],
        [1198018800000, 591],
        [1198105200000, 608],
        [1198191600000, 459],
        [1198278000000, 234],
        [1198364400000, 1352],
        [1198450800000, 686],
        [1198537200000, 279],
        [1198623600000, 449],
        [1198710000000, 468],
        [1198796400000, 392],
        [1198882800000, 282],
        [1198969200000, 208],
        [1199055600000, 229],
        [1199142000000, 177],
        [1199228400000, 374],
        [1199314800000, 436],
        [1199401200000, 404],
        [1199487600000, 253],
        [1199574000000, 218],
        [1199660400000, 476],
        [1199746800000, 462],
        [1199833200000, 500],
        [1199919600000, 700],
        [1200006000000, 750],
        [1200092400000, 600],
        [1200178800000, 500],
        [1200265200000, 900],
        [1200351600000, 930],
        [1200438000000, 1200],
        [1200524400000, 980],
        [1200610800000, 950],
        [1200697200000, 900],
        [1200783600000, 1000],
        [1200870000000, 1050],
        [1200956400000, 1150],
        [1201042800000, 1100],
        [1201129200000, 1200],
        [1201215600000, 1300],
        [1201302000000, 1700],
        [1201388400000, 1450],
        [1201474800000, 1500],
        [1201561200000, 546],
        [1201647600000, 614],
        [1201734000000, 954],
        [1201820400000, 1700],
        [1201906800000, 1800],
        [1201993200000, 1900],
        [1202079600000, 2000],
        [1202166000000, 2100],
        [1202252400000, 2200],
        [1202338800000, 2300],
        [1202425200000, 2400],
        [1202511600000, 2550],
        [1202598000000, 2600],
        [1202684400000, 2500],
        [1202770800000, 2700],
        [1202857200000, 2750],
        [1202943600000, 2800],
        [1203030000000, 3245],
        [1203116400000, 3345],
        [1203202800000, 3000],
        [1203289200000, 3200],
        [1203375600000, 3300],
        [1203462000000, 3400],
        [1203548400000, 3600],
        [1203634800000, 3700],
        [1203721200000, 3800],
        [1203807600000, 4000],
        [1203894000000, 4500]
    ]
        .map(function (item) {
            return [
                item[0] + 60 * 60 * 1000,
                item[1]
            ]
        });

    $scope.barChartData = _.range(3).map(function (barNum) {
        return {
            data: _.range(12).map(function (i) {
                return [i, parseInt(Math.random() * 30)]
            }),
            bars: {
                show: true,
                barWidth: 0.2,
                order: barNum + 1
            }
        }
    });

    $scope.horizontalBarChartData = _.range(3).map(function (barNum) {
        return {
            data: _.range(4).map(function (i) {
                return [i, parseInt(Math.random() * 30)]
            }),
            bars: {
                horizontal: true,
                show: true,
                barWidth: 0.2,
                order: barNum + 1
            }
        }
    });

    $scope.sinChartData = [
        {
            data: _.range(16).map(function (i) {
                return [i, Math.sin(i)];
            }),
            label: "sin(x)"
        },
        {
            data: _.range(16).map(function (i) {
                return [i, Math.cos(i)];
            }),
            label: "cos(x)"
        }
    ];


    // fill chart

    var males = {
        '15%' : [[2, 88.0], [3, 93.3], [4, 102.0], [5, 108.5], [6, 115.7], [7, 115.6], [8, 124.6], [9, 130.3], [10, 134.3], [11, 141.4], [12, 146.5], [13, 151.7], [14, 159.9], [15, 165.4], [16, 167.8], [17, 168.7], [18, 169.5], [19, 168.0]],
        '90%' : [[2, 96.8], [3, 105.2], [4, 113.9], [5, 120.8], [6, 127.0], [7, 133.1], [8, 139.1], [9, 143.9], [10, 151.3], [11, 161.1], [12, 164.8], [13, 173.5], [14, 179.0], [15, 182.0], [16, 186.9], [17, 185.2], [18, 186.3], [19, 186.6]],
        '25%' : [[2, 89.2], [3, 94.9], [4, 104.4], [5, 111.4], [6, 117.5], [7, 120.2], [8, 127.1], [9, 132.9], [10, 136.8], [11, 144.4], [12, 149.5], [13, 154.1], [14, 163.1], [15, 169.2], [16, 170.4], [17, 171.2], [18, 172.4], [19, 170.8]],
        '10%' : [[2, 86.9], [3, 92.6], [4, 99.9], [5, 107.0], [6, 114.0], [7, 113.5], [8, 123.6], [9, 129.2], [10, 133.0], [11, 140.6], [12, 145.2], [13, 149.7], [14, 158.4], [15, 163.5], [16, 166.9], [17, 167.5], [18, 167.1], [19, 165.3]],
        'mean' : [[2, 91.9], [3, 98.5], [4, 107.1], [5, 114.4], [6, 120.6], [7, 124.7], [8, 131.1], [9, 136.8], [10, 142.3], [11, 150.0], [12, 154.7], [13, 161.9], [14, 168.7], [15, 173.6], [16, 175.9], [17, 176.6], [18, 176.8], [19, 176.7]],
        '75%' : [[2, 94.5], [3, 102.1], [4, 110.8], [5, 117.9], [6, 124.0], [7, 129.3], [8, 134.6], [9, 141.4], [10, 147.0], [11, 156.1], [12, 160.3], [13, 168.3], [14, 174.7], [15, 178.0], [16, 180.2], [17, 181.7], [18, 181.3], [19, 182.5]],
        '85%' : [[2, 96.2], [3, 103.8], [4, 111.8], [5, 119.6], [6, 125.6], [7, 131.5], [8, 138.0], [9, 143.3], [10, 149.3], [11, 159.8], [12, 162.5], [13, 171.3], [14, 177.5], [15, 180.2], [16, 183.8], [17, 183.4], [18, 183.5], [19, 185.5]],
        '50%' : [[2, 91.9], [3, 98.2], [4, 106.8], [5, 114.6], [6, 120.8], [7, 125.2], [8, 130.3], [9, 137.1], [10, 141.5], [11, 149.4], [12, 153.9], [13, 162.2], [14, 169.0], [15, 174.8], [16, 176.0], [17, 176.8], [18, 176.4], [19, 177.4]]
    };

    var females = {
        '15%' : [[2, 84.8], [3, 93.7], [4, 100.6], [5, 105.8], [6, 113.3], [7, 119.3], [8, 124.3], [9, 131.4], [10, 136.9], [11, 143.8], [12, 149.4], [13, 151.2], [14, 152.3], [15, 155.9], [16, 154.7], [17, 157.0], [18, 156.1], [19, 155.4]],
        '90%' : [[2, 95.6], [3, 104.1], [4, 111.9], [5, 119.6], [6, 127.6], [7, 133.1], [8, 138.7], [9, 147.1], [10, 152.8], [11, 161.3], [12, 166.6], [13, 167.9], [14, 169.3], [15, 170.1], [16, 172.4], [17, 169.2], [18, 171.1], [19, 172.4]],
        '25%' : [[2, 87.2], [3, 95.9], [4, 101.9], [5, 107.4], [6, 114.8], [7, 121.4], [8, 126.8], [9, 133.4], [10, 138.6], [11, 146.2], [12, 152.0], [13, 153.8], [14, 155.7], [15, 158.4], [16, 157.0], [17, 158.5], [18, 158.4], [19, 158.1]],
        '10%' : [[2, 84.0], [3, 91.9], [4, 99.2], [5, 105.2], [6, 112.7], [7, 118.0], [8, 123.3], [9, 130.2], [10, 135.0], [11, 141.1], [12, 148.3], [13, 150.0], [14, 150.7], [15, 154.3], [16, 153.6], [17, 155.6], [18, 154.7], [19, 153.1]],
        'mean' : [[2, 90.2], [3, 98.3], [4, 105.2], [5, 112.2], [6, 119.0], [7, 125.8], [8, 131.3], [9, 138.6], [10, 144.2], [11, 151.3], [12, 156.7], [13, 158.6], [14, 160.5], [15, 162.1], [16, 162.9], [17, 162.2], [18, 163.0], [19, 163.1]],
        '75%' : [[2, 93.2], [3, 101.5], [4, 107.9], [5, 116.6], [6, 122.8], [7, 129.3], [8, 135.2], [9, 143.7], [10, 148.7], [11, 156.9], [12, 160.8], [13, 163.0], [14, 165.0], [15, 165.8], [16, 168.7], [17, 166.2], [18, 167.6], [19, 168.0]],
        '85%' : [[2, 94.5], [3, 102.8], [4, 110.4], [5, 119.0], [6, 125.7], [7, 131.5], [8, 137.9], [9, 146.0], [10, 151.3], [11, 159.9], [12, 164.0], [13, 166.5], [14, 167.5], [15, 168.5], [16, 171.5], [17, 168.0], [18, 169.8], [19, 170.3]],
        '50%' : [[2, 90.2], [3, 98.1], [4, 105.2], [5, 111.7], [6, 118.2], [7, 125.6], [8, 130.5], [9, 138.3], [10, 143.7], [11, 151.4], [12, 156.7], [13, 157.7], [14, 161.0], [15, 162.0], [16, 162.8], [17, 162.2], [18, 162.8], [19, 163.3]]
    };

    $scope.fillChartData = [{
        label : 'female mean',
        data : females['mean'],
        lines : {
            show : true
        },
        color : "rgb(255,50,50)"
    }, {
        id : 'f15%',
        data : females['15%'],
        lines : {
            show : true,
            lineWidth : 0,
            fill : false
        },
        color : "rgb(255,50,50)"
    }, {
        id : 'f25%',
        data : females['25%'],
        lines : {
            show : true,
            lineWidth : 0,
            fill : 0.2
        },
        color : "rgb(255,50,50)",
        fillBetween : 'f15%'
    }, {
        id : 'f50%',
        data : females['50%'],
        lines : {
            show : true,
            lineWidth : 0.5,
            fill : 0.4,
            shadowSize : 0
        },
        color : "rgb(255,50,50)",
        fillBetween : 'f25%'
    }, {
        id : 'f75%',
        data : females['75%'],
        lines : {
            show : true,
            lineWidth : 0,
            fill : 0.4
        },
        color : "rgb(255,50,50)",
        fillBetween : 'f50%'
    }, {
        id : 'f85%',
        data : females['85%'],
        lines : {
            show : true,
            lineWidth : 0,
            fill : 0.2
        },
        color : "rgb(255,50,50)",
        fillBetween : 'f75%'
    }, {
        label : 'male mean',
        data : males['mean'],
        lines : {
            show : true
        },
        color : "rgb(50,50,255)"
    }, {
        id : 'm15%',
        data : males['15%'],
        lines : {
            show : true,
            lineWidth : 0,
            fill : false
        },
        color : "rgb(50,50,255)"
    }, {
        id : 'm25%',
        data : males['25%'],
        lines : {
            show : true,
            lineWidth : 0,
            fill : 0.2
        },
        color : "rgb(50,50,255)",
        fillBetween : 'm15%'
    }, {
        id : 'm50%',
        data : males['50%'],
        lines : {
            show : true,
            lineWidth : 0.5,
            fill : 0.4,
            shadowSize : 0
        },
        color : "rgb(50,50,255)",
        fillBetween : 'm25%'
    }, {
        id : 'm75%',
        data : males['75%'],
        lines : {
            show : true,
            lineWidth : 0,
            fill : 0.4
        },
        color : "rgb(50,50,255)",
        fillBetween : 'm50%'
    }, {
        id : 'm85%',
        data : males['85%'],
        lines : {
            show : true,
            lineWidth : 0,
            fill : 0.2
        },
        color : "rgb(50,50,255)",
        fillBetween : 'm75%'
    }];



    //
    $scope.pieChartData = _.range(Math.floor(Math.random() * 10) + 1).map(function(i){
        return {
            label : "Series" + (i + 1),
            data : Math.floor(Math.random() * 100) + 1
        }
    });

    var pageviews = [[1, 75], [3, 87], [4, 93], [5, 127], [6, 116], [7, 137], [8, 135], [9, 130], [10, 167], [11, 169], [12, 179], [13, 185], [14, 176], [15, 180], [16, 174], [17, 193], [18, 186], [19, 177], [20, 153], [21, 149], [22, 130], [23, 100], [24, 50]];
    var visitors = [[1, 65], [3, 50], [4, 73], [5, 100], [6, 95], [7, 103], [8, 111], [9, 97], [10, 125], [11, 100], [12, 95], [13, 141], [14, 126], [15, 131], [16, 146], [17, 158], [18, 160], [19, 151], [20, 125], [21, 110], [22, 100], [23, 85], [24, 37]];

    $scope.siteStatsData = [{
        data : pageviews,
        label : "Your pageviews"
    }, {
        data : visitors,
        label : "Site visitors"
    }];
});
'use strict';

angular.module('app.home').controller('HomeController', function ($scope) {


});
"use strict";

angular.module('app.inbox').directive('messageLabels', function (InboxConfig) {
    return {
        replace: true,
        restrict: 'AE',
        link: function (scope, element) {

            if (scope.message.labels && scope.message.labels.length) {
                InboxConfig.success(function (config) {
                    var html = _.map(scope.message.labels, function (label) {
                        return '<span class="label bg-color-'+config.labels[label].color +'">' + config.labels[label].name + '</span>';
                    }).join('');
                    element.replaceWith(html);
                });

            } else {
                element.replaceWith('');
            }
        }
    }
});
"use strict";

angular.module('app.inbox').directive('unreadMessagesCount', function(InboxConfig){
    return {
        restrict: 'A',
        link: function(scope, element){
            InboxConfig.success(function(config){
                element.html(_.find(config.folders, {key: 'inbox'}).unread);
            })
        }
    }
});
"use strict";

angular.module('app.inbox').factory('InboxConfig', function($http, APP_CONFIG){
    return $http.get(APP_CONFIG.apiRootUrl + '/inbox.json');
})
"use strict";

angular.module('app.inbox').factory('InboxMessage', function($resource, APP_CONFIG){
   var InboxMessage = $resource(APP_CONFIG.apiRootUrl + '/messages.json/:id', {'id': '@_id'}, {
        get:{
            url: APP_CONFIG.apiRootUrl + '/message.json',
            isArray: false
        }
    });

    _.extend(InboxMessage.prototype, {
        selected: false,
        hasAttachments: function(){
            return (_.isArray(this.attachments) && this.attachments.length)
        },
        fullAttachmentsTootlip: function(){
            return 'FILES: ' + _.pluck(this.attachments, 'name').join(', ');
        },
        getBodyTeaser: function(){
            var clearBody  = this.body.replace(/<[^<>]+?>/gm, ' ').replace(/(\s{2}|\n)/gm, ' ');

            var teaserMaxLength = 55 - this.subject.length;

            return clearBody.length > teaserMaxLength ? clearBody.substring(0, teaserMaxLength) + '...' : clearBody;
        }
    });

    return InboxMessage;

});
"use strict";

angular.module('app').factory('Language', function($http, APP_CONFIG){

	function getLanguage(key, callback) {

		$http.get(APP_CONFIG.apiRootUrl + '/langs/' + key + '.json').success(function(data){

			callback(data);
			
		}).error(function(){

			$log.log('Error');
			callback([]);

		});

	}

	function getLanguages(callback) {

		$http.get(APP_CONFIG.apiRootUrl + '/languages.json').success(function(data){

			callback(data);
			
		}).error(function(){

			$log.log('Error');
			callback([]);

		});

	}

	return {
		getLang: function(type, callback) {
			getLanguage(type, callback);
		},
		getLanguages:function(callback){
			getLanguages(callback);
		}
	}

});
"use strict";

angular.module('app').controller("LanguagesCtrl",  function LanguagesCtrl($scope, $rootScope, $log, Language){

    $rootScope.lang = {};
    
    Language.getLanguages(function(data){

        $rootScope.currentLanguage = data[0];

        $rootScope.languages = data;

        Language.getLang(data[0].key,function(data){

            $rootScope.lang = data;
        });

    });

    $scope.selectLanguage = function(language){
        $rootScope.currentLanguage = language;
        
        Language.getLang(language.key,function(data){

            $rootScope.lang = data;
            
        });
    }

    $rootScope.getWord = function(key){
        if(angular.isDefined($rootScope.lang[key])){
            return $rootScope.lang[key];
        } 
        else {
            return key;
        }
    }

});
"use strict";

angular.module('app').directive('languageSelector', function(Language){
    return {
        restrict: "EA",
        replace: true,
        templateUrl: "app/layout/language/language-selector.tpl.html",
        scope: true
    }
});
"use strict";

angular.module('app').directive('toggleShortcut', function($log,$timeout) {

	var initDomEvents = function($element){

		var shortcut_dropdown = $('#shortcut');

		$element.on('click',function(){
		
			if (shortcut_dropdown.is(":visible")) {
				shortcut_buttons_hide();
			} else {
				shortcut_buttons_show();
			}

		})

		shortcut_dropdown.find('a').click(function(e) {
			e.preventDefault();
			window.location = $(this).attr('href');
			setTimeout(shortcut_buttons_hide, 300);
		});

		

		// SHORTCUT buttons goes away if mouse is clicked outside of the area
		$(document).mouseup(function(e) {
			if (shortcut_dropdown && !shortcut_dropdown.is(e.target) && shortcut_dropdown.has(e.target).length === 0) {
				shortcut_buttons_hide();
			}
		});

		// SHORTCUT ANIMATE HIDE
		function shortcut_buttons_hide() {
			shortcut_dropdown.animate({
				height : "hide"
			}, 300, "easeOutCirc");
			$('body').removeClass('shortcut-on');

		}

		// SHORTCUT ANIMATE SHOW
		function shortcut_buttons_show() {
			shortcut_dropdown.animate({
				height : "show"
			}, 200, "easeOutCirc");
			$('body').addClass('shortcut-on');
		}
	}

	var link = function($scope,$element){
		$timeout(function(){
			initDomEvents($element);
		});
	}

	return{
		restrict:'EA',
		link:link
	}
})
'use strict';

angular.module('app.maps').controller('MapsDemoCtrl',
    function ($scope, $http, $q, SmartMapStyle, uiGmapGoogleMapApi) {


        $scope.styles = SmartMapStyle.styles;

        $scope.setType = function (key) {
            SmartMapStyle.getMapType(key).then(function (type) {
                $scope.map.control.getGMap().mapTypes.set(key, type);
                $scope.map.control.getGMap().setMapTypeId(key);
            });
            $scope.currentType = key;
        };


        $scope.map = {
            center: {latitude: 45, longitude: -73},
            zoom: 8,
            control: {}
        };


        uiGmapGoogleMapApi.then(function (maps) {

            })
            .then(function () {
                return SmartMapStyle.getMapType('colorful')
            }).then(function () {
            $scope.setType('colorful')
        });



    });
"use strict";


angular.module('app.maps').factory('SmartMapStyle', function ($q, $http, APP_CONFIG) {

    var styles = {
        'colorful': { name: 'Colorful', url: APP_CONFIG.apiRootUrl + '/maps/colorful.json'},
        'greyscale': { name: 'greyscale', url: APP_CONFIG.apiRootUrl + '/maps/greyscale.json'},
        'metro': { name: 'metro', url: APP_CONFIG.apiRootUrl + '/maps/metro.json'},
        'mono-color': { name: 'mono-color', url: APP_CONFIG.apiRootUrl + '/maps/mono-color.json'},
        'monochrome': { name: 'monochrome', url: APP_CONFIG.apiRootUrl + '/maps/monochrome.json'},
        'nightvision': { name: 'Nightvision', url: APP_CONFIG.apiRootUrl + '/maps/nightvision.json'},
        'nightvision-highlight': { name: 'nightvision-highlight', url: APP_CONFIG.apiRootUrl + '/maps/nightvision-highlight.json'},
        'old-paper': { name: 'Old Paper', url: APP_CONFIG.apiRootUrl + '/maps/old-paper.json'}
    };


    function getMapType(key){
        var keyData = styles[key];

        if(!keyData.cache){
            keyData.cache = createMapType(keyData)
        }

        return keyData.cache;
    }

    function createMapType(keyData){
        var dfd = $q.defer();
        $http.get(keyData.url).then(function(resp){
            var styleData = resp.data;
            var type = new google.maps.StyledMapType(styleData, {name: keyData.name})
            dfd.resolve(type);
        }, function(reason){
            console.error(reason);
            dfd.reject(reason);
        });

        return dfd.promise;
    }


    return {
        getMapType: getMapType,
        styles: styles
    }



});
/**
 * Created by griga on 2/9/16.
 */


angular.module('app.tables').controller('DatatablesCtrl', function(DTOptionsBuilder, DTColumnBuilder){


    this.standardOptions = DTOptionsBuilder
        .fromSource('api/tables/datatables.standard.json')
         //Add Bootstrap compatibility
        .withDOM("<'dt-toolbar'<'col-xs-12 col-sm-6'f><'col-sm-6 col-xs-12 hidden-xs'l>r>" +
            "t" +
            "<'dt-toolbar-footer'<'col-sm-6 col-xs-12 hidden-xs'i><'col-xs-12 col-sm-6'p>>")
        .withBootstrap();
    this.standardColumns = [
        DTColumnBuilder.newColumn('id').withClass('text-danger'),
        DTColumnBuilder.newColumn('name'),
        DTColumnBuilder.newColumn('phone'),
        DTColumnBuilder.newColumn('company'),
        DTColumnBuilder.newColumn('zip'),
        DTColumnBuilder.newColumn('city'),
        DTColumnBuilder.newColumn('date')
    ];


});
'use strict';

angular.module('app.tables').controller('JqGridCtrl', function ($scope) {
    $scope.gridData = {
        data: [
            {
                id: "1",
                date: "2007-10-01",
                name: "test",
                note: "note",
                amount: "200.00",
                tax: "10.00",
                total: "210.00"
            },
            {
                id: "2",
                date: "2007-10-02",
                name: "test2",
                note: "note2",
                amount: "300.00",
                tax: "20.00",
                total: "320.00"
            },
            {
                id: "3",
                date: "2007-09-01",
                name: "test3",
                note: "note3",
                amount: "400.00",
                tax: "30.00",
                total: "430.00"
            },
            {
                id: "4",
                date: "2007-10-04",
                name: "test",
                note: "note",
                amount: "200.00",
                tax: "10.00",
                total: "210.00"
            },
            {
                id: "5",
                date: "2007-10-05",
                name: "test2",
                note: "note2",
                amount: "300.00",
                tax: "20.00",
                total: "320.00"
            },
            {
                id: "6",
                date: "2007-09-06",
                name: "test3",
                note: "note3",
                amount: "400.00",
                tax: "30.00",
                total: "430.00"
            },
            {
                id: "7",
                date: "2007-10-04",
                name: "test",
                note: "note",
                amount: "200.00",
                tax: "10.00",
                total: "210.00"
            },
            {
                id: "8",
                date: "2007-10-03",
                name: "test2",
                note: "note2",
                amount: "300.00",
                tax: "20.00",
                total: "320.00"
            },
            {
                id: "9",
                date: "2007-09-01",
                name: "test3",
                note: "note3",
                amount: "400.00",
                tax: "30.00",
                total: "430.00"
            },
            {
                id: "10",
                date: "2007-10-01",
                name: "test",
                note: "note",
                amount: "200.00",
                tax: "10.00",
                total: "210.00"
            },
            {
                id: "11",
                date: "2007-10-02",
                name: "test2",
                note: "note2",
                amount: "300.00",
                tax: "20.00",
                total: "320.00"
            },
            {
                id: "12",
                date: "2007-09-01",
                name: "test3",
                note: "note3",
                amount: "400.00",
                tax: "30.00",
                total: "430.00"
            },
            {
                id: "13",
                date: "2007-10-04",
                name: "test",
                note: "note",
                amount: "200.00",
                tax: "10.00",
                total: "210.00"
            },
            {
                id: "14",
                date: "2007-10-05",
                name: "test2",
                note: "note2",
                amount: "300.00",
                tax: "20.00",
                total: "320.00"
            },
            {
                id: "15",
                date: "2007-09-06",
                name: "test3",
                note: "note3",
                amount: "400.00",
                tax: "30.00",
                total: "430.00"
            },
            {
                id: "16",
                date: "2007-10-04",
                name: "test",
                note: "note",
                amount: "200.00",
                tax: "10.00",
                total: "210.00"
            },
            {
                id: "17",
                date: "2007-10-03",
                name: "test2",
                note: "note2",
                amount: "300.00",
                tax: "20.00",
                total: "320.00"
            },
            {
                id: "18",
                date: "2007-09-01",
                name: "test3",
                note: "note3",
                amount: "400.00",
                tax: "30.00",
                total: "430.00"
            }
        ],
        colNames: ['Actions', 'Inv No', 'Date', 'Client', 'Amount', 'Tax', 'Total', 'Notes'],
        colModel: [
            {
                name: 'act',
                index: 'act',
                sortable: false
            },
            {
                name: 'id',
                index: 'id'
            },
            {
                name: 'date',
                index: 'date',
                editable: true
            },
            {
                name: 'name',
                index: 'name',
                editable: true
            },
            {
                name: 'amount',
                index: 'amount',
                align: "right",
                editable: true
            },
            {
                name: 'tax',
                index: 'tax',
                align: "right",
                editable: true
            },
            {
                name: 'total',
                index: 'total',
                align: "right",
                editable: true
            },
            {
                name: 'note',
                index: 'note',
                sortable: false,
                editable: true
            }
        ]
    }


    $scope.getSelection = function(){
        alert(jQuery('table').jqGrid('getGridParam', 'selarrrow'));
    };

    $scope.selectRow = function(row){
       jQuery('table').jqGrid('setSelection', row);

    }
});
"use strict";

angular.module('app.ui').controller('GeneralElementsCtrl', function ($scope, $sce) {
    /*
     * Smart Notifications
     */
    $scope.eg1 = function () {

        $.bigBox({
            title: "Big Information box",
            content: "This message will dissapear in 6 seconds!",
            color: "#C46A69",
            //timeout: 6000,
            icon: "fa fa-warning shake animated",
            number: "1",
            timeout: 6000
        });
    };

    $scope.eg2 = function () {

        $.bigBox({
            title: "Big Information box",
            content: "Lorem ipsum dolor sit amet, test consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
            color: "#3276B1",
            //timeout: 8000,
            icon: "fa fa-bell swing animated",
            number: "2"
        });

    };

    $scope.eg3 = function () {

        $.bigBox({
            title: "Shield is up and running!",
            content: "Lorem ipsum dolor sit amet, test consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
            color: "#C79121",
            //timeout: 8000,
            icon: "fa fa-shield fadeInLeft animated",
            number: "3"
        });

    };

    $scope.eg4 = function () {

        $.bigBox({
            title: "Success Message Example",
            content: "Lorem ipsum dolor sit amet, test consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
            color: "#739E73",
            //timeout: 8000,
            icon: "fa fa-check",
            number: "4"
        }, function () {
            $scope.closedthis();
        });

    };


    $scope.eg5 = function() {

        $.smallBox({
            title: "Ding Dong!",
            content: "Someone's at the door...shall one get it sir? <p class='text-align-right'><a href-void class='btn btn-primary btn-sm'>Yes</a> <a href-void class='btn btn-danger btn-sm'>No</a></p>",
            color: "#296191",
            //timeout: 8000,
            icon: "fa fa-bell swing animated"
        });
    };


    $scope.eg6 = function() {

        $.smallBox({
            title: "Big Information box",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
            color: "#5384AF",
            //timeout: 8000,
            icon: "fa fa-bell"
        });

    };

    $scope.eg7 = function() {

        $.smallBox({
            title: "James Simmons liked your comment",
            content: "<i class='fa fa-clock-o'></i> <i>2 seconds ago...</i>",
            color: "#296191",
            iconSmall: "fa fa-thumbs-up bounce animated",
            timeout: 4000
        });

    };

    $scope.closedthis = function() {
        $.smallBox({
            title: "Great! You just closed that last alert!",
            content: "This message will be gone in 5 seconds!",
            color: "#739E73",
            iconSmall: "fa fa-cloud",
            timeout: 5000
        });
    };

    /*
     * SmartAlerts
     */
    // With Callback
    $scope.smartModEg1 =  function () {
        $.SmartMessageBox({
            title: "Smart Alert!",
            content: "This is a confirmation box. Can be programmed for button callback",
            buttons: '[No][Yes]'
        }, function (ButtonPressed) {
            if (ButtonPressed === "Yes") {

                $.smallBox({
                    title: "Callback function",
                    content: "<i class='fa fa-clock-o'></i> <i>You pressed Yes...</i>",
                    color: "#659265",
                    iconSmall: "fa fa-check fa-2x fadeInRight animated",
                    timeout: 4000
                });
            }
            if (ButtonPressed === "No") {
                $.smallBox({
                    title: "Callback function",
                    content: "<i class='fa fa-clock-o'></i> <i>You pressed No...</i>",
                    color: "#C46A69",
                    iconSmall: "fa fa-times fa-2x fadeInRight animated",
                    timeout: 4000
                });
            }

        });
    };

    // With Input
    $scope.smartModEg2 =  function () {
        $.SmartMessageBox({
            title: "Smart Alert: Input",
            content: "Please enter your user name",
            buttons: "[Accept]",
            input: "text",
            placeholder: "Enter your user name"
        }, function (ButtonPress, Value) {
            alert(ButtonPress + " " + Value);
        });
    };

    // With Buttons
    $scope.smartModEg3 =  function () {
        $.SmartMessageBox({
            title: "Smart Notification: Buttons",
            content: "Lots of buttons to go...",
            buttons: '[Need?][You][Do][Buttons][Many][How]'
        });

    }
    // With Select
    $scope.smartModEg4 =  function () {
        $.SmartMessageBox({
            title: "Smart Alert: Select",
            content: "You can even create a group of options.",
            buttons: "[Done]",
            input: "select",
            options: "[Costa Rica][United States][Autralia][Spain]"
        }, function (ButtonPress, Value) {
            alert(ButtonPress + " " + Value);
        });

    };

    // With Login
    $scope.smartModEg5 =  function () {

        $.SmartMessageBox({
            title: "Login form",
            content: "Please enter your user name",
            buttons: "[Cancel][Accept]",
            input: "text",
            placeholder: "Enter your user name"
        }, function (ButtonPress, Value) {
            if (ButtonPress == "Cancel") {
                alert("Why did you cancel that? :(");
                return 0;
            }

            var Value1 = Value.toUpperCase();
            var ValueOriginal = Value;
            $.SmartMessageBox({
                title: "Hey! <strong>" + Value1 + ",</strong>",
                content: "And now please provide your password:",
                buttons: "[Login]",
                input: "password",
                placeholder: "Password"
            }, function (ButtonPress, Value) {
                alert("Username: " + ValueOriginal + " and your password is: " + Value);
            });
        });

    };

    $scope.tabsPopoverContent = $sce.trustAsHtml("<ul id='popup-tab' class='nav nav-tabs bordered'><li class='active'><a href='#pop-1' data-toggle='tab'>Active Tab </a></li><li><a href='#pop-2' data-toggle='tab'>Tab 2</a></li></ul><div id='popup-tab-content' class='tab-content padding-10'><div class='tab-pane fade in active' id='pop-1'><p>I have six locks on my door all in a row. When I go out, I lock every other one. I figure no matter how long somebody stands there picking the locks, they are always locking three.</p></div><div class='tab-pane fade' id='pop-2'><p>Food truck fixie locavore, accusamus mcsweeneys marfa nulla single-origin coffee squid. wes anderson artisan four loko farm-to-table craft beer twee.</p></div></div>")

    $scope.formPopoverContent = $sce.trustAsHtml("<form action='/api/plug' style='min-width:170px'><div class='checkbox'><label><input type='checkbox' class='checkbox style-0' checked='checked'><span>Read</span></label></div><div class='checkbox'><label><input type='checkbox' class='checkbox style-0'><span>Write</span></label></div><div class='checkbox'><label><input type='checkbox' class='checkbox style-0'><span>Execute</span></label></div><div class='form-actions'><div class='row'><div class='col-md-12'><button class='btn btn-primary btn-sm' type='submit'>SAVE</button></div></div></div></form>")

});

"use strict";


angular.module('app.ui').controller('JquiCtrl', function ($scope) {
    $scope.demoAutocompleteWords = [
        "ActionScript",
        "AppleScript",
        "Asp",
        "BASIC",
        "C",
        "C++",
        "Clojure",
        "COBOL",
        "ColdFusion",
        "Erlang",
        "Fortran",
        "Groovy",
        "Haskell",
        "Java",
        "JavaScript",
        "Lisp",
        "Perl",
        "PHP",
        "Python",
        "Ruby",
        "Scala",
        "Scheme"];


    $scope.demoAjaxAutocomplete = '';


    $scope.modalDemo1 = function(){
        console.log('modalDemo1');
    }

    $scope.modalDemo2 = function(){
        console.log('modalDemo2');
    }


});
"use strict";


angular.module('app.ui').controller('TreeviewCtrl', function ($scope) {
    $scope.demoTree1 = [
        {"content": "<span><i class=\"fa fa-lg fa-calendar\"></i> 2013, Week 2</span>", "expanded": true, "children": [
            {"content": "<span class=\"label label-success\"><i class=\"fa fa-lg fa-plus-circle\"></i> Monday, January 7: 8.00 hours</span>", "expanded": true, "children": [
                {"content": "<span><i class=\"fa fa-clock-o\"></i> 8.00</span> &ndash; <a> Changed CSS to accomodate...</a>"}
            ]},
            {"content": "<span><i class=\"fa fa-clock-o\"></i> 8.00</span> &ndash; <a> Changed CSS to accomodate...</a>"},
            {"content": "<span class=\"label label-success\"><i class=\"fa fa-lg fa-minus-circle\"></i> Tuesday, January 8: 8.00 hours</span>", "expanded": true, "children": [
                {"content": "<span><i class=\"fa fa-clock-o\"></i> 6.00</span> &ndash; <a> Altered code...</a>"},
                {"content": "<span><i class=\"fa fa-clock-o\"></i> 2.00</span> &ndash; <a> Simplified our approach to...</a>"}
            ]},
            {"content": "<span><i class=\"fa fa-clock-o\"></i> 6.00</span> &ndash; <a> Altered code...</a>"},
            {"content": "<span><i class=\"fa fa-clock-o\"></i> 2.00</span> &ndash; <a> Simplified our approach to...</a>"},
            {"content": "<span class=\"label label-warning\"><i class=\"fa fa-lg fa-minus-circle\"></i> Wednesday, January 9: 6.00 hours</span>", "children": [
                {"content": "<span><i class=\"fa fa-clock-o\"></i> 3.00</span> &ndash; <a> Fixed bug caused by...</a>"},
                {"content": "<span><i class=\"fa fa-clock-o\"></i> 3.00</span> &ndash; <a> Comitting latest code to Git...</a>"}
            ]},
            {"content": "<span><i class=\"fa fa-clock-o\"></i> 3.00</span> &ndash; <a> Fixed bug caused by...</a>"},
            {"content": "<span><i class=\"fa fa-clock-o\"></i> 3.00</span> &ndash; <a> Comitting latest code to Git...</a>"},
            {"content": "<span class=\"label label-danger\"><i class=\"fa fa-lg fa-minus-circle\"></i> Wednesday, January 9: 4.00 hours</span>", "children": [
                {"content": "<span><i class=\"fa fa-clock-o\"></i> 2.00</span> &ndash; <a> Create component that...</a>"}
            ]},
            {"content": "<span><i class=\"fa fa-clock-o\"></i> 2.00</span> &ndash; <a> Create component that...</a>"}
        ]},
        {"content": "<span><i class=\"fa fa-lg fa-calendar\"></i> 2013, Week 3</span>", "children": [
            {"content": "<span class=\"label label-success\"><i class=\"fa fa-lg fa-minus-circle\"></i> Monday, January 14: 8.00 hours</span>", "children": [
                {"content": "<span><i class=\"fa fa-clock-o\"></i> 7.75</span> &ndash; <a> Writing documentation...</a>"},
                {"content": "<span><i class=\"fa fa-clock-o\"></i> 0.25</span> &ndash; <a> Reverting code back to...</a>"}
            ]},
            {"content": "<span><i class=\"fa fa-clock-o\"></i> 7.75</span> &ndash; <a> Writing documentation...</a>"},
            {"content": "<span><i class=\"fa fa-clock-o\"></i> 0.25</span> &ndash; <a> Reverting code back to...</a>"}
        ]}
    ]

    $scope.demoTree2 = [
        {"content": "<span><i class=\"fa fa-lg fa-folder-open\"></i> Parent</span>", "expanded": true, "children": [
            {"content": "<span><i class=\"fa fa-lg fa-plus-circle\"></i> Administrators</span>", "expanded": true, "children": [
                {"content": "<span> <label class=\"checkbox inline-block\"><input type=\"checkbox\" name=\"checkbox-inline\"><i></i>Michael.Jackson</label> </span>"},
                {"content": "<span> <label class=\"checkbox inline-block\"><input type=\"checkbox\" checked=\"checked\" name=\"checkbox-inline\"><i></i>Sunny.Ahmed</label> </span>"},
                {"content": "<span> <label class=\"checkbox inline-block\"><input type=\"checkbox\" checked=\"checked\" name=\"checkbox-inline\"><i></i>Jackie.Chan</label> </span>"}
            ]},
            {"content": "<span> <label class=\"checkbox inline-block\"><input type=\"checkbox\" name=\"checkbox-inline\"><i></i>Michael.Jackson</label> </span>"},
            {"content": "<span> <label class=\"checkbox inline-block\"><input type=\"checkbox\" checked=\"checked\" name=\"checkbox-inline\"><i></i>Sunny.Ahmed</label> </span>"},
            {"content": "<span> <label class=\"checkbox inline-block\"><input type=\"checkbox\" checked=\"checked\" name=\"checkbox-inline\"><i></i>Jackie.Chan</label> </span>"},
            {"content": "<span><i class=\"fa fa-lg fa-minus-circle\"></i> Child</span>", "expanded": true, "children": [
                {"content": "<span><i class=\"icon-leaf\"></i> Grand Child</span>"},
                {"content": "<span><i class=\"icon-leaf\"></i> Grand Child</span>"},
                {"content": "<span><i class=\"fa fa-lg fa-plus-circle\"></i> Grand Child</span>",  "children": [
                    {"content": "<span><i class=\"fa fa-lg fa-plus-circle\"></i> Great Grand Child</span>", "children": [
                        {"content": "<span><i class=\"icon-leaf\"></i> Great great Grand Child</span>"},
                        {"content": "<span><i class=\"icon-leaf\"></i> Great great Grand Child</span>"}
                    ]},
                    {"content": "<span><i class=\"icon-leaf\"></i> Great great Grand Child</span>"},
                    {"content": "<span><i class=\"icon-leaf\"></i> Great great Grand Child</span>"},
                    {"content": "<span><i class=\"icon-leaf\"></i> Great Grand Child</span>"},
                    {"content": "<span><i class=\"icon-leaf\"></i> Great Grand Child</span>"}
                ]},
                {"content": "<span><i class=\"fa fa-lg fa-plus-circle\"></i> Great Grand Child</span>", "children": [
                    {"content": "<span><i class=\"icon-leaf\"></i> Great great Grand Child</span>"},
                    {"content": "<span><i class=\"icon-leaf\"></i> Great great Grand Child</span>"}
                ]},
                {"content": "<span><i class=\"icon-leaf\"></i> Great great Grand Child</span>"},
                {"content": "<span><i class=\"icon-leaf\"></i> Great great Grand Child</span>"},
                {"content": "<span><i class=\"icon-leaf\"></i> Great Grand Child</span>"},
                {"content": "<span><i class=\"icon-leaf\"></i> Great Grand Child</span>"}
            ]},
            {"content": "<span><i class=\"icon-leaf\"></i> Grand Child</span>"},
            {"content": "<span><i class=\"icon-leaf\"></i> Grand Child</span>"},
            {"content": "<span><i class=\"fa fa-lg fa-plus-circle\"></i> Grand Child</span>", "children": [
                {"content": "<span><i class=\"fa fa-lg fa-plus-circle\"></i> Great Grand Child</span>", "children": [
                    {"content": "<span><i class=\"icon-leaf\"></i> Great great Grand Child</span>"},
                    {"content": "<span><i class=\"icon-leaf\"></i> Great great Grand Child</span>"}
                ]},
                {"content": "<span><i class=\"icon-leaf\"></i> Great great Grand Child</span>"},
                {"content": "<span><i class=\"icon-leaf\"></i> Great great Grand Child</span>"},
                {"content": "<span><i class=\"icon-leaf\"></i> Great Grand Child</span>"},
                {"content": "<span><i class=\"icon-leaf\"></i> Great Grand Child</span>"}
            ]},
            {"content": "<span><i class=\"fa fa-lg fa-plus-circle\"></i> Great Grand Child</span>", "children": [
                {"content": "<span><i class=\"icon-leaf\"></i> Great great Grand Child</span>"},
                {"content": "<span><i class=\"icon-leaf\"></i> Great great Grand Child</span>"}
            ]},
            {"content": "<span><i class=\"icon-leaf\"></i> Great great Grand Child</span>"},
            {"content": "<span><i class=\"icon-leaf\"></i> Great great Grand Child</span>"},
            {"content": "<span><i class=\"icon-leaf\"></i> Great Grand Child</span>"},
            {"content": "<span><i class=\"icon-leaf\"></i> Great Grand Child</span>"}
        ]},
        {"content": "<span><i class=\"fa fa-lg fa-folder-open\"></i> Parent2</span>", "children": [
            {"content": "<span><i class=\"icon-leaf\"></i> Child</span>"}
        ]}
    ]
});
'use strict';

angular.module('app.ui').directive('smartClassFilter', function () {
    return {
        restrict: 'A',
        scope: {
            model: '=',
            displayElements: '@',
            filterElements: '@'
        },
        link: function (scope, element) {
            scope.$watch('model', function (model) {
                if (angular.isString(model)) {
                    var search = model.trim();
                    if (search) {
                        angular.element(scope.displayElements, element).hide();

                        angular.element(scope.filterElements, element)
                            .filter(function () {
                                var r = new RegExp(search, 'i');
                                return r.test($(this).attr('class') + $(this).attr('alt'))
                            })
                            .closest(scope.displayElements).show();
                    } else {
                        angular.element(scope.displayElements, element).show();
                    }
                }
            })
        }
    }
});
'use strict';

angular.module('app.ui').directive('smartJquiAccordion', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attributes) {

            element.accordion({
                autoHeight : false,
                heightStyle : "content",
                collapsible : true,
                animate : 300,
                icons: {
                    header: "fa fa-plus",    // custom icon class
                    activeHeader: "fa fa-minus" // custom icon class
                },
                header : "h4"
            })
        }
    }
});

'use strict';

angular.module('app.ui').directive('smartJquiAjaxAutocomplete', function () {
    return {
        restrict: 'A',
        scope: {
            ngModel: '='
        },
        link: function (scope, element, attributes) {
            function split(val) {
                return val.split(/,\s*/);
            }

            function extractLast(term) {
                return split(term).pop();
            }

            function extractFirst(term) {
                return split(term)[0];
            }


            element.autocomplete({
                source: function (request, response) {
                    jQuery.getJSON(
                            "http://gd.geobytes.com/AutoCompleteCity?callback=?&q=" + extractLast(request.term),
                        function (data) {
                            response(data);
                        }
                    );
                },
                minLength: 3,
                select: function (event, ui) {
                    var selectedObj = ui.item,
                    placeName = selectedObj.value;
                    if (typeof placeName == "undefined") placeName = element.val();

                    if (placeName) {
                        var terms = split(element.val());
                        // remove the current input
                        terms.pop();
                        // add the selected item (city only)
                        terms.push(extractFirst(placeName));
                        // add placeholder to get the comma-and-space at the end
                        terms.push("");

                        scope.$apply(function(){
                            scope.ngModel = terms.join(", ")
                        });
                    }

                    return false;
                },
                focus: function() {
                    // prevent value inserted on focus
                    return false;
                },
                delay: 100
            });
        }
    }
});
'use strict';

angular.module('app.ui').directive('smartJquiAutocomplete', function () {
    return {
        restrict: 'A',
        scope: {
            'source': '='
        },
        link: function (scope, element, attributes) {

            element.autocomplete({
                source: scope.source
            });
        }
    }
});
'use strict';

/*
 * CONVERT DIALOG TITLE TO HTML
 * REF: http://stackoverflow.com/questions/14488774/using-html-in-a-dialogs-title-in-jquery-ui-1-10
 */
$.widget("ui.dialog", $.extend({}, $.ui.dialog.prototype, {
    _title: function (title) {
        if (!this.options.title) {
            title.html("&#160;");
        } else {
            title.html(this.options.title);
        }
    }
}));


angular.module('app.ui').directive('smartJquiDialog', function () {

    var optionAttributes = ['autoOpen', 'modal', 'width', 'resizable'];

    var defaults = {
        width: Math.min($(window).width() * .7, 600),
        autoOpen: false,
        resizable: false
    };


    return {
        restrict: 'A',
        link: function (scope, element, attributes) {

            var title = element.find('[data-dialog-title]').remove().html();

            var options = _.clone(defaults);

            optionAttributes.forEach(function (option) {
                if (element.data(option)) {
                    options[option] = element.data(option);
                }
            });

            var buttons = element.find('[data-dialog-buttons]').remove()
                .find('button').map(function (idx, button) {
                    return {
                        class: button.className,
                        html: button.innerHTML,
                        click: function () {
                            if ($(button).data('action'))
                                scope.$eval($(button).data('action'));
                            element.dialog("close");
                        }
                    }
                });

            element.dialog(_.extend({
                title: title,
                buttons: buttons
            }, options));

        }
    }
});
'use strict';

//    $.widget("ui.dialog", $.extend({}, $.ui.dialog.prototype, {
//        _title: function (title) {
//            if (!this.options.title) {
//                title.html("&#160;");
//            } else {
//                title.html(this.options.title);
//            }
//        }
//    }));


angular.module('app.ui').directive('smartJquiDialogLauncher', function () {
    return {
        restrict: 'A',
        compile: function (element, attributes) {
            element.removeAttr('smart-jqui-dialog-launcher data-smart-jqui-dialog-launcher');
            element.on('click', function (e) {
                $(attributes.smartJquiDialogLauncher).dialog('open');
                e.preventDefault();
            })
        }
    }
});
'use strict';

angular.module('app.ui').directive('smartJquiDynamicTabs', function ($timeout) {

	
	function addDomEvents(element){

		$('#tabs2').tabs();

		var tabTitle = $("#tab_title"), tabContent = $("#tab_content"), tabTemplate = "<li style='position:relative;'> <span class='air air-top-left delete-tab' style='top:7px; left:7px;'><button class='btn btn-xs font-xs btn-default hover-transparent'><i class='fa fa-times'></i></button></span></span><a href='#{href}'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; #{label}</a></li>", tabCounter = 2;

		var tabs = $('#tabs2').tabs();

		// modal dialog init: custom buttons and a "close" callback reseting the form inside
		var dialog = $("#addtab").dialog({
			autoOpen : false,
			width : 600,
			resizable : false,
			modal : true,
			buttons : [{
			html : "<i class='fa fa-times'></i>&nbsp; Cancel",
			"class" : "btn btn-default",
			click : function() {
			$(this).dialog("close");

		}
		}, {

			html : "<i class='fa fa-plus'></i>&nbsp; Add",
			"class" : "btn btn-danger",
			click : function() {
				addTab();
				$(this).dialog("close");
			}
		}]
		});

		// addTab form: calls addTab function on submit and closes the dialog
		var form = dialog.find("form").submit(function(event) {
			addTab();
			dialog.dialog("close");
			event.preventDefault();
		});

		// actual addTab function: adds new tab using the input from the form above
		function addTab() {
			var label = tabTitle.val() || "Tab " + tabCounter, id = "tabs-" + tabCounter, li = $(tabTemplate.replace(/#\{href\}/g, "#" + id).replace(/#\{label\}/g, label)), tabContentHtml = tabContent.val() || "Tab " + tabCounter + " content.";

			tabs.find(".ui-tabs-nav").append(li);
			tabs.append("<div id='" + id + "'><p>" + tabContentHtml + "</p></div>");
			tabs.tabs("refresh");
			tabCounter++;

			// clear fields
			$("#tab_title").val("");
			$("#tab_content").val("");
		}

		// addTab button: just opens the dialog
		$("#add_tab").button().click(function() {
			dialog.dialog("open");
		});

		// close icon: removing the tab on click
		$("#tabs2").on("click", 'span.delete-tab', function() {

			var panelId = $(this).closest("li").remove().attr("aria-controls");
			$("#" + panelId).remove();
			tabs.tabs("refresh");

		});

	}

	function link(element){

		$timeout(function(){
			addDomEvents(element);
		});

	}


    return {
        restrict: 'A',
        link: link
    }
});

'use strict';

angular.module('app.ui').directive('smartJquiMenu', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attributes) {

            element.menu();
        }
    }
});
'use strict';

angular.module('app.ui').directive('smartJquiTabs', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attributes) {

            element.tabs();
        }
    }
});
'use strict';

angular.module('app.ui').directive('smartNestable', function () {
    return {
        restrict: 'A',
        scope: {
            group: '@',
            output: '='
        },
        link: function (scope, element, attributes) {
            var options = {};
            if(scope.group){
                options.group = scope.group;
            }
            element.nestable(options);
            if(attributes.output){
                element.on('change', function(){
                    scope.$apply(function(){
                        scope.output = element.nestable('serialize');
                    });
                });
                scope.output = element.nestable('serialize');
            }

        }
    }
});
'use strict';

angular.module('app.ui').directive('smartProgressbar', function (lazyScript) {
    return {
        restrict: 'A',
        compile: function (tElement, tAttributes) {
        	lazyScript.register('build/vendor.ui.js').then(function(){
        		tElement.removeAttr('smart-progressbar data-smart-progressbar');
        		tElement.progressbar({
        		    display_text : 'fill'
        		})
        	})

        }
    }
});
'use strict';

angular.module('app.ui').directive('smartRideCarousel', function () {
    return {
        restrict: 'A',
        compile: function (tElement, tAttributes) {
            tElement.removeAttr('smart-ride-carousel data-smart-ride-carousel');
            tElement.carousel(tElement.data());
        }
    }
});
'use strict';

angular.module('app.ui').directive('smartSuperBox', function () {
    return {
        restrict: 'A',
        compile: function (tElement, tAttributes) {

            tElement.removeAttr('smart-super-box data-smart-super-box');

            tElement.SuperBox();
        }
    }
});
'use strict';

angular.module('app.ui').directive('smartTreeviewContent', function ($compile) {
    return {
        restrict: 'E',
        link: function (scope, element) {
            var $content = $(scope.item.content);

            function handleExpanded(){
                $content.find('>i')
                    .toggleClass('fa-plus-circle', !scope.item.expanded)
                    .toggleClass('fa-minus-circle', !!scope.item.expanded)

            }


            if (scope.item.children && scope.item.children.length) {
                $content.on('click', function(){
                    scope.$apply(function(){
                        scope.item.expanded = !scope.item.expanded;
                        handleExpanded();
                    });


                });
                handleExpanded();
            }

            element.replaceWith($content);


        }
    }
});

angular.module('app.ui').directive('smartTreeview', function ($compile, $sce) {
    return {
        restrict: 'A',
        scope: {
            'items': '='
        },
        template: '<li ng-class="{parent_li: item.children.length}" ng-repeat="item in items" role="treeitem">' +
            '<smart-treeview-content></smart-treeview-content>' +
            '<ul ng-if="item.children.length" smart-treeview ng-show="item.expanded"  items="item.children" role="group" class="smart-treeview-group" ></ul>' +
            '</li>',
        compile: function (element) {
            // Break the recursion loop by removing the contents
            var contents = element.contents().remove();
            var compiledContents;
            return {
                post: function (scope, element) {
                    // Compile the contents
                    if (!compiledContents) {
                        compiledContents = $compile(contents);
                    }
                    // Re-add the compiled contents to the element
                    compiledContents(scope, function (clone) {
                        element.append(clone);
                    });
                }
            };
        }
    };
});
'use strict';

angular.module('SmartAdmin.Layout').directive('bigBreadcrumbs', function () {
    return {
        restrict: 'EA',
        replace: true,
        template: '<div><h1 class="page-title txt-color-blueDark"></h1></div>',
        scope: {
            items: '=',
            icon: '@'
        },
        link: function (scope, element) {
            var first = _.first(scope.items);

            var icon = scope.icon || 'home';
            element.find('h1').append('<i class="fa-fw fa fa-' + icon + '"></i> ' + first);
            _.rest(scope.items).forEach(function (item) {
                element.find('h1').append(' <span>> ' + item + '</span>')
            })
        }
    }
});

'use strict';

angular.module('SmartAdmin.Layout').directive('dismisser', function () {
    return {
        restrict: 'A',
        compile: function (element) {
            element.removeAttr('dismisser data-dissmiser')
            var closer = '<button class="close">&times;</button>';
            element.prepend(closer);
            element.on('click', '>button.close', function(){
                element.fadeOut('fast',function(){ $(this).remove(); });

            })
        }
    }
});
'use strict';

angular.module('SmartAdmin.Layout').directive('hrefVoid', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attributes) {
            element.attr('href','#');
            element.on('click', function(e){
                e.preventDefault();
                e.stopPropagation();
            })
        }
    }
});
'use strict';

/*
* Directive for toggling a ng-model with a button
* Source: https://gist.github.com/aeife/9374784
*/

angular.module('SmartAdmin.Layout').directive('radioToggle', function ($log) {
    return {
        scope: {
            model: "=ngModel",
            value: "@value"
        },
        link: function(scope, element, attrs) {

            element.parent().on('click', function() {
                scope.model = scope.value;
                scope.$apply();
            });
        }
    }
});
/**
 * DETECT MOBILE DEVICES
 * Description: Detects mobile device - if any of the listed device is
 *
 * detected class is inserted to <tElement>.
 *
 *  (so far this is covering most hand held devices)
 */
'use strict';

angular.module('SmartAdmin.Layout').directive('smartDeviceDetect', function () {
    return {
        restrict: 'A',
        compile: function (tElement, tAttributes) {
            tElement.removeAttr('smart-device-detect data-smart-device-detect');

            var isMobile = (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));
            
            tElement.toggleClass('desktop-detected', !isMobile);
            tElement.toggleClass('mobile-detected', isMobile);


        }
    }
});
/**
 *
 * Description: Directive utilizes FastClick library.
 *
 *
 * FastClick is a simple, easy-to-use library for eliminating the
 * 300ms delay between a physical tap and the firing of a click event on mobile browsers.
 * FastClick doesn't attach any listeners on desktop browsers.
 * @link: https://github.com/ftlabs/fastclick
 *
 * On mobile devices 'needsclick' class is attached to <tElement>
 *
 */


'use strict';

angular.module('SmartAdmin.Layout').directive('smartFastClick', function () {
    return {
        restrict: 'A',
        compile: function (tElement, tAttributes) {
            tElement.removeAttr('smart-fast-click data-smart-fast-click');

            FastClick.attach(tElement);

            if(!FastClick.notNeeded())
                tElement.addClass('needsclick')
        }
    }
});

/*'use strict';

angular.module('SmartAdmin.Layout').directive('smartFitAppView', function ($rootScope, SmartCss) {
    return {
        restrict: 'A',
        compile: function (element, attributes) {
            element.removeAttr('smart-fit-app-view data-smart-fit-app-view leading-y data-leading-y');

            var leadingY = attributes.leadingY ? parseInt(attributes.leadingY) : 0;

            var selector = attributes.smartFitAppView;

            if(SmartCss.appViewSize && SmartCss.appViewSize.height){
                var height =  SmartCss.appViewSize.height - leadingY < 252 ? 252 :  SmartCss.appViewSize.height - leadingY;
                SmartCss.add(selector, 'height', height+'px');
            }

            var listenerDestroy = $rootScope.$on('$smartContentResize', function (event, data) {
                var height = data.height - leadingY < 252 ? 252 : data.height - leadingY;
                SmartCss.add(selector, 'height', height+'px');
            });

            element.on('$destroy', function () {
                listenerDestroy();
                SmartCss.remove(selector, 'height');
            });


        }
    }
});*/

"use strict";

angular.module('SmartAdmin.Layout').directive('smartInclude', function () {
        return {
            replace: true,
            restrict: 'A',
            templateUrl: function (element, attr) {
                return attr.smartInclude;
            },
            compile: function(element){
                element[0].className = element[0].className.replace(/placeholder[^\s]+/g, '');
            }
        };
    }
);


'use strict';

angular.module('SmartAdmin.Layout').directive('smartLayout', function ($rootScope, $timeout, $interval, $q, SmartCss, APP_CONFIG) {
    
    var _debug = 0;

    function getDocHeight() {
        var D = document;
        return Math.max(
            D.body.scrollHeight, D.documentElement.scrollHeight,
            D.body.offsetHeight, D.documentElement.offsetHeight,
            D.body.clientHeight, D.documentElement.clientHeight
        );
    }

    var initialized = false, 
           initializedResolver = $q.defer();
    initializedResolver.promise.then(function () {
        initialized = true;
    });

    var $window = $(window),
        $document = $(document),
        $html = $('html'),
        $body = $('body'),
        $navigation ,
        $menu,
        $ribbon,
        $footer,
        $contentAnimContainer;


    (function cacheElements() {
        $navigation = $('#header');
        $menu = $('#left-panel');
        $ribbon = $('#ribbon');
        $footer = $('.page-footer');
        if (_.every([$navigation, $menu, $ribbon, $footer], function ($it) {
            return angular.isNumber($it.height())
        })) {
            initializedResolver.resolve();
        } else {
            $timeout(cacheElements, 100);
        }
    })();

    (function applyConfigSkin(){
        if(APP_CONFIG.smartSkin){
            $body.removeClass(_.pluck(APP_CONFIG.skins, 'name').join(' '));
            $body.addClass(APP_CONFIG.smartSkin);
        }
    })();


    return {
        priority: 2014,
        restrict: 'A',
        compile: function (tElement, tAttributes) {
            tElement.removeAttr('smart-layout data-smart-layout');

            var appViewHeight = 0 ,
                appViewWidth = 0,
                calcWidth,
                calcHeight,
                deltaX,
                deltaY;

            var forceResizeTrigger = false;

            function resizeListener() {

//                    full window height appHeight = Math.max($menu.outerHeight() - 10, getDocHeight() - 10);

                var menuHeight = $body.hasClass('menu-on-top') && $menu.is(':visible') ? $menu.height() : 0;
                var menuWidth = !$body.hasClass('menu-on-top') && $menu.is(':visible') ? $menu.width() + $menu.offset().left : 0;

                var $content = $('#content');
                var contentXPad = $content.outerWidth(true) - $content.width();
                var contentYPad = $content.outerHeight(true) - $content.height();


                calcWidth = $window.width() - menuWidth - contentXPad;
                calcHeight = $window.height() - menuHeight - contentYPad - $navigation.height() - $ribbon.height() - $footer.height();

                deltaX = appViewWidth - calcWidth;
                deltaY = appViewHeight - calcHeight;
                if (Math.abs(deltaX) || Math.abs(deltaY) || forceResizeTrigger) {

                    //console.log('exec', calcWidth, calcHeight);
                    $rootScope.$broadcast('$smartContentResize', {
                        width: calcWidth,
                        height: calcHeight,
                        deltaX: deltaX,
                        deltaY: deltaY
                    });
                    appViewWidth = calcWidth;
                    appViewHeight = calcHeight;
                    forceResizeTrigger = false;
                }
            }


            var looping = false;
            $interval(function () {
                if (looping) loop();
            }, 300);

            var debouncedRun = _.debounce(function () {
                run(300)
            }, 300);

            function run(delay) {
                initializedResolver.promise.then(function () {
                    attachOnResize(delay);
                });
            }

            run(10);

            function detachOnResize() {
                looping = false;
            }

            function attachOnResize(delay) {
                $timeout(function () {
                    looping = true;
                }, delay);
            }

            function loop() {
                $body.toggleClass('mobile-view-activated', $window.width() < 979);

                if ($window.width() < 979)
                    $body.removeClass('minified');

                resizeListener();
            }

            function handleHtmlId(toState) {
                if (toState.data && toState.data.htmlId) $html.attr('id', toState.data.htmlId);
                else $html.removeAttr('id');
            }

            $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
                //console.log(1, '$stateChangeStart', event, toState, toParams, fromState, fromParams);

                handleHtmlId(toState);
                detachOnResize();
            });

            // initialized with 1 cause we came here with one $viewContentLoading request
            var viewContentLoading = 1;
            $rootScope.$on('$viewContentLoading', function (event, viewConfig) {
                //console.log(2, '$viewContentLoading', event, viewConfig);
                viewContentLoading++;
            });

            $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
                //console.log(3, '$stateChangeSuccess', event, toState, toParams, fromState, fromParams);
                forceResizeTrigger = true;
            });

            $rootScope.$on('$viewContentLoaded', function (event) {
                //console.log(4, '$viewContentLoaded', event);
                viewContentLoading--;

                if (viewContentLoading == 0 && initialized) {
                    debouncedRun();
                }
            });
        }
    }
});



'use strict';

angular.module('SmartAdmin.Layout').directive('smartPageTitle', function ($rootScope, $timeout) {
    return {
        restrict: 'A',
        compile: function (element, attributes) {
            element.removeAttr('smart-page-title data-smart-page-title');

            var defaultTitle = attributes.smartPageTitle;
            var listener = function(event, toState, toParams, fromState, fromParams) {
                var title = defaultTitle;
                if (toState.data && toState.data.title) title = toState.data.title + ' | ' + title;
                // Set asynchronously so page changes before title does
                $timeout(function() {
                    $('html head title').text(title);
                });
            };

            $rootScope.$on('$stateChangeStart', listener);

        }
    }
});
'use strict';

angular.module('SmartAdmin.Layout').directive('smartRouterAnimationWrap', function ($rootScope,$timeout) {
    return {
        restrict: 'A',
        compile: function (element, attributes) {
            element.removeAttr('smart-router-animation-wrap data-smart-router-animation-wrap wrap-for data-wrap-for');

            element.addClass('router-animation-container');


            var $loader = $('<div class="router-animation-loader"><i class="fa fa-gear fa-4x fa-spin"></i></div>')
                .css({
                    position: 'absolute',
                    top: 50,
                    left: 10
                }).hide().appendTo(element);


            var animateElementSelector = attributes.wrapFor;
            var viewsToMatch = attributes.smartRouterAnimationWrap.split(/\s/);

            var needRunContentViewAnimEnd = false;
            function contentViewAnimStart() {
                needRunContentViewAnimEnd = true;
                element.css({
                    height: element.height() + 'px',
                    overflow: 'hidden'
                }).addClass('active');
                $loader.fadeIn();

                $(animateElementSelector).addClass('animated faster fadeOutDown');
            }

            function contentViewAnimEnd() {
                if(needRunContentViewAnimEnd){
                    element.css({
                        height: 'auto',
                        overflow: 'visible'
                    }).removeClass('active');
                    

                    $(animateElementSelector).addClass('animated faster fadeInUp');

                    needRunContentViewAnimEnd = false;

                    $timeout(function(){
                        $(animateElementSelector).removeClass('animated');
                    },10);
                }
                $loader.fadeOut();
            }


            var destroyForStart = $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
                var isAnimRequired = _.any(viewsToMatch, function(view){
                   return _.has(toState.views, view) || _.has(fromState.views, view);
                });
                if(isAnimRequired){
                    contentViewAnimStart()
                }
            });

            var destroyForEnd = $rootScope.$on('$viewContentLoaded', function (event) {
                contentViewAnimEnd();
            });

            element.on('$destroy', function(){
                destroyForStart();
                destroyForEnd();

            });



        }
    }
});
angular.module('SmartAdmin.Layout').directive('speechRecognition', function ($log) {
	'use strict';

	$.root_ = $('body');
	var root, commands;

    root = window;
    window.appConfig = window.appConfig || {};

	if (appConfig.voice_command) {
		commands = appConfig.commands;
	}


	/*
	 * SMART VOICE
	 * Author: MyOrange | @bootstraphunt
	 * http://www.myorange.ca
	 */

	var SpeechRecognition = root.SpeechRecognition || root.webkitSpeechRecognition || root.mozSpeechRecognition || root.msSpeechRecognition || root.oSpeechRecognition;

// ref: http://updates.html5rocks.com/2013/01/Voice-Driven-Web-Apps-Introduction-to-the-Web-Speech-API


// function
	$.speechApp = (function(speech) {

		speech.start = function() {

			// Add our commands to smartSpeechRecognition
			smartSpeechRecognition.addCommands(commands);

			if (smartSpeechRecognition) {
				// activate plugin
				smartSpeechRecognition.start();
				// add btn class
				$.root_.addClass("voice-command-active");
				// play sound
				$.speechApp.playON();
				// set localStorage when switch is on manually
				if (appConfig.voice_localStorage) {
					localStorage.setItem('sm-setautovoice', 'true');
				}

			} else {
				// if plugin not found
				alert("speech plugin not loaded");
			}

		};
		speech.stop = function() {

			if (smartSpeechRecognition) {
				// deactivate plugin
				smartSpeechRecognition.abort();
				// remove btn class
				$.root_.removeClass("voice-command-active");
				// sound
				$.speechApp.playOFF();
				// del localStorage when switch if off manually
				if (appConfig.voice_localStorage) {
					localStorage.setItem('sm-setautovoice', 'false');
				}
				// remove popover if visible
				if ($('#speech-btn .popover').is(':visible')) {
					$('#speech-btn .popover').fadeOut(250);
				}
			}

		};

		// play sound
		speech.playON = function() {

			var audioElement = document.createElement('audio');

			if (navigator.userAgent.match('Firefox/'))
				audioElement.setAttribute('src', appConfig.sound_path + 'voice_on' + ".ogg");
			else
				audioElement.setAttribute('src', appConfig.sound_path + 'voice_on' + ".mp3");

			//$.get();
			audioElement.addEventListener("load", function() {
				audioElement.play();
			}, true);

			if (appConfig.sound_on) {
				audioElement.pause();
				audioElement.play();
			}
		};

		speech.playOFF = function() {

			var audioElement = document.createElement('audio');

			if (navigator.userAgent.match('Firefox/'))
				audioElement.setAttribute('src', appConfig.sound_path + 'voice_off' + ".ogg");
			else
				audioElement.setAttribute('src', appConfig.sound_path + 'voice_off' + ".mp3");

			$.get();
			audioElement.addEventListener("load", function() {
				audioElement.play();
			}, true);

			if (appConfig.sound_on) {
				audioElement.pause();
				audioElement.play();
			}
		};

		speech.playConfirmation = function() {

			var audioElement = document.createElement('audio');

			if (navigator.userAgent.match('Firefox/'))
				audioElement.setAttribute('src', appConfig.sound_path + 'voice_alert' + ".ogg");
			else
				audioElement.setAttribute('src', appConfig.sound_path + 'voice_alert' + ".mp3");

			$.get();
			audioElement.addEventListener("load", function() {
				audioElement.play();
			}, true);

			if (appConfig.sound_on) {
				audioElement.pause();
				audioElement.play();
			}
		};

		return speech;

	})({});



	/*
	 * SPEECH RECOGNITION ENGINE
	 * Copyright (c) 2013 Tal Ater
	 * Modified by MyOrange
	 * All modifications made are hereby copyright (c) 2014 MyOrange
	 */

	(function(undefined) {"use strict";

		// Check browser support
		// This is done as early as possible, to make it as fast as possible for unsupported browsers
		if (!SpeechRecognition) {
			root.smartSpeechRecognition = null;
			return undefined;
		}

		var commandsList = [], recognition, callbacks = {
				start : [],
				error : [],
				end : [],
				result : [],
				resultMatch : [],
				resultNoMatch : [],
				errorNetwork : [],
				errorPermissionBlocked : [],
				errorPermissionDenied : []
			}, autoRestart, lastStartedAt = 0,
		//debugState = false, // decleared in app.appConfig.js
		//appConfig.debugStyle = 'font-weight: bold; color: #00f;', // decleared in app.appConfig.js

		// The command matching code is a modified version of Backbone.Router by Jeremy Ashkenas, under the MIT license.
			optionalParam = /\s*\((.*?)\)\s*/g, optionalRegex = /(\(\?:[^)]+\))\?/g, namedParam = /(\(\?)?:\w+/g, splatParam = /\*\w+/g, escapeRegExp = /[\-{}\[\]+?.,\\\^$|#]/g, commandToRegExp = function(command) {
				command = command.replace(escapeRegExp, '\\$&').replace(optionalParam, '(?:$1)?').replace(namedParam, function(match, optional) {
					return optional ? match : '([^\\s]+)';
				}).replace(splatParam, '(.*?)').replace(optionalRegex, '\\s*$1?\\s*');
				return new RegExp('^' + command + '$', 'i');
			};

		// This method receives an array of callbacks to iterate over, and invokes each of them
		var invokeCallbacks = function(callbacks) {
			callbacks.forEach(function(callback) {
				callback.callback.apply(callback.context);
			});
		};

		var initIfNeeded = function() {
			if (!isInitialized()) {
				root.smartSpeechRecognition.init({}, false);
			}
		};

		var isInitialized = function() {
			return recognition !== undefined;
		};

		root.smartSpeechRecognition = {
			// Initialize smartSpeechRecognition with a list of commands to recognize.
			// e.g. smartSpeechRecognition.init({'hello :name': helloFunction})
			// smartSpeechRecognition understands commands with named variables, splats, and optional words.
			init : function(commands, resetCommands) {

				// resetCommands defaults to true
				if (resetCommands === undefined) {
					resetCommands = true;
				} else {
					resetCommands = !!resetCommands;
				}

				// Abort previous instances of recognition already running
				if (recognition && recognition.abort) {
					recognition.abort();
				}

				// initiate SpeechRecognition
				recognition = new SpeechRecognition();

				// Set the max number of alternative transcripts to try and match with a command
				recognition.maxAlternatives = 5;
				recognition.continuous = true;
				// Sets the language to the default 'en-US'. This can be changed with smartSpeechRecognition.setLanguage()
				recognition.lang = appConfig.voice_command_lang || 'en-US';

				recognition.onstart = function() {
					invokeCallbacks(callbacks.start);
					//debugState
					if (appConfig.debugState) {
						root.console.log('%c ✔ SUCCESS: User allowed access the microphone service to start ', appConfig.debugStyle_success);
						root.console.log('Language setting is set to: ' + recognition.lang, appConfig.debugStyle);
					}
					$.root_.removeClass("service-not-allowed");
					$.root_.addClass("service-allowed");
				};

				recognition.onerror = function(event) {
					invokeCallbacks(callbacks.error);
					switch (event.error) {
						case 'network':
							invokeCallbacks(callbacks.errorNetwork);
							break;
						case 'not-allowed':
						case 'service-not-allowed':
							// if permission to use the mic is denied, turn off auto-restart
							autoRestart = false;
							$.root_.removeClass("service-allowed");
							$.root_.addClass("service-not-allowed");
							//debugState
							if (appConfig.debugState) {
								root.console.log('%c WARNING: Microphone was not detected (either user denied access or it is not installed properly) ', appConfig.debugStyle_warning);
							}
							// determine if permission was denied by user or automatically.
							if (new Date().getTime() - lastStartedAt < 200) {
								invokeCallbacks(callbacks.errorPermissionBlocked);
							} else {
								invokeCallbacks(callbacks.errorPermissionDenied);
								//console.log("You need your mic to be active")
							}
							break;
					}
				};

				recognition.onend = function() {
					invokeCallbacks(callbacks.end);
					// smartSpeechRecognition will auto restart if it is closed automatically and not by user action.
					if (autoRestart) {
						// play nicely with the browser, and never restart smartSpeechRecognition automatically more than once per second
						var timeSinceLastStart = new Date().getTime() - lastStartedAt;
						if (timeSinceLastStart < 1000) {
							setTimeout(root.smartSpeechRecognition.start, 1000 - timeSinceLastStart);
						} else {
							root.smartSpeechRecognition.start();
						}
					}
				};

				recognition.onresult = function(event) {
					invokeCallbacks(callbacks.result);

					var results = event.results[event.resultIndex], commandText;

					// go over each of the 5 results and alternative results received (we've set maxAlternatives to 5 above)
					for (var i = 0; i < results.length; i++) {
						// the text recognized
						commandText = results[i].transcript.trim();
						if (appConfig.debugState) {
							root.console.log('Speech recognized: %c' + commandText, appConfig.debugStyle);
						}

						// try and match recognized text to one of the commands on the list
						for (var j = 0, l = commandsList.length; j < l; j++) {
							var result = commandsList[j].command.exec(commandText);
							if (result) {
								var parameters = result.slice(1);
								if (appConfig.debugState) {
									root.console.log('command matched: %c' + commandsList[j].originalPhrase, appConfig.debugStyle);
									if (parameters.length) {
										root.console.log('with parameters', parameters);
									}
								}
								// execute the matched command
								commandsList[j].callback.apply(this, parameters);
								invokeCallbacks(callbacks.resultMatch);

								// for commands "sound on", "stop" and "mute" do not play sound or display message
								//var myMatchedCommand = commandsList[j].originalPhrase;

								var ignoreCallsFor = ["sound on", "mute", "stop"];

								if (ignoreCallsFor.indexOf(commandsList[j].originalPhrase) < 0) {
									// play sound when match found
									console.log(2);
									$.smallBox({
										title : (commandsList[j].originalPhrase),
										content : "loading...",
										color : "#333",
										sound_file : 'voice_alert',
										timeout : 2000
									});

									if ($('#speech-btn .popover').is(':visible')) {
										$('#speech-btn .popover').fadeOut(250);
									}
								}// end if

								return true;
							}
						} // end for
					}// end for

					invokeCallbacks(callbacks.resultNoMatch);
					//console.log("no match found for: " + commandText)
					$.smallBox({
						title : "Error: <strong>" + ' " ' + commandText + ' " ' + "</strong> no match found!",
						content : "Please speak clearly into the microphone",
						color : "#a90329",
						timeout : 5000,
						icon : "fa fa-microphone"
					});
					if ($('#speech-btn .popover').is(':visible')) {
						$('#speech-btn .popover').fadeOut(250);
					}
					return false;
				};

				// build commands list
				if (resetCommands) {
					commandsList = [];
				}
				if (commands.length) {
					this.addCommands(commands);
				}
			},

			// Start listening (asking for permission first, if needed).
			// Call this after you've initialized smartSpeechRecognition with commands.
			// Receives an optional options object:
			// { autoRestart: true }
			start : function(options) {
				initIfNeeded();
				options = options || {};
				if (options.autoRestart !== undefined) {
					autoRestart = !!options.autoRestart;
				} else {
					autoRestart = true;
				}
				lastStartedAt = new Date().getTime();
				recognition.start();
			},

			// abort the listening session (aka stop)
			abort : function() {
				autoRestart = false;
				if (isInitialized) {
					recognition.abort();
				}
			},

			// Turn on output of debug messages to the console. Ugly, but super-handy!
			debug : function(newState) {
				if (arguments.length > 0) {
					appConfig.debugState = !!newState;
				} else {
					appConfig.debugState = true;
				}
			},

			// Set the language the user will speak in. If not called, defaults to 'en-US'.
			// e.g. 'fr-FR' (French-France), 'es-CR' (Español-Costa Rica)
			setLanguage : function(language) {
				initIfNeeded();
				recognition.lang = language;
			},

			// Add additional commands that smartSpeechRecognition will respond to. Similar in syntax to smartSpeechRecognition.init()
			addCommands : function(commands) {
				var cb, command;

				initIfNeeded();

				for (var phrase in commands) {
					if (commands.hasOwnProperty(phrase)) {
						cb = root[commands[phrase]] || commands[phrase];
						if ( typeof cb !== 'function') {
							continue;
						}
						//convert command to regex
						command = commandToRegExp(phrase);

						commandsList.push({
							command : command,
							callback : cb,
							originalPhrase : phrase
						});
					}
				}
				if (appConfig.debugState) {
					root.console.log('Commands successfully loaded: %c' + commandsList.length, appConfig.debugStyle);
				}
			},

			// Remove existing commands. Called with a single phrase, array of phrases, or methodically. Pass no params to remove all commands.
			removeCommands : function(commandsToRemove) {
				if (commandsToRemove === undefined) {
					commandsList = [];
					return;
				}
				commandsToRemove = Array.isArray(commandsToRemove) ? commandsToRemove : [commandsToRemove];
				commandsList = commandsList.filter(function(command) {
					for (var i = 0; i < commandsToRemove.length; i++) {
						if (commandsToRemove[i] === command.originalPhrase) {
							return false;
						}
					}
					return true;
				});
			},

			// Lets the user add a callback of one of 9 types:
			// start, error, end, result, resultMatch, resultNoMatch, errorNetwork, errorPermissionBlocked, errorPermissionDenied
			// Can also optionally receive a context for the callback function as the third argument
			addCallback : function(type, callback, context) {
				if (callbacks[type] === undefined) {
					return;
				}
				var cb = root[callback] || callback;
				if ( typeof cb !== 'function') {
					return;
				}
				callbacks[type].push({
					callback : cb,
					context : context || this
				});
			}
		};

	}).call(this);

	var autoStart = function() {

		smartSpeechRecognition.addCommands(commands);

		if (smartSpeechRecognition) {
			// activate plugin
			smartSpeechRecognition.start();
			// add btn class
			$.root_.addClass("voice-command-active");
			// set localStorage when switch is on manually
			if (appConfig.voice_localStorage) {
				localStorage.setItem('sm-setautovoice', 'true');
			}

		} else {
			// if plugin not found
			alert("speech plugin not loaded");
		}
	}
// if already running with localstorage
	if (SpeechRecognition && appConfig.voice_command && localStorage.getItem('sm-setautovoice') == 'true') {
		autoStart();
	}

// auto start
	if (SpeechRecognition && appConfig.voice_command_auto && appConfig.voice_command) {
		autoStart();
	}


	var link = function(scope, element) {


		if (SpeechRecognition && appConfig.voice_command) {

			// create dynamic modal instance
			var modal = $('<div class="modal fade" id="voiceModal" tabindex="-1" role="dialog" aria-labelledby="remoteModalLabel" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"></div></div></div>');
			// attach to body
			modal.appendTo("body");

			element.on("click", function(e) {

            	if ($.root_.hasClass("voice-command-active")) {
					$.speechApp.stop();
					//$('#speech-btn > span > a > i').removeClass().addClass('fa fa-microphone-slash');
				} else {
					$.speechApp.start();
					//add popover
					$('#speech-btn .popover').fadeIn(350);
					//$('#speech-btn > span > a > i').removeClass().addClass('fa fa-microphone')

				}

				e.preventDefault();

            });

			//remove popover
			$(document).mouseup(function(e) {
				if (!$('#speech-btn .popover').is(e.target) && $('#speech-btn .popover').has(e.target).length === 0) {
					$('#speech-btn .popover').fadeOut(250);
				}
			});


			$("#speech-help-btn").on("click", function() {
				commands.help();
			});

		}
		else {
			$("#speech-btn").addClass("display-none");
		}


	}



    return {
        restrict: 'AE',
        link: link
    }
});

'use strict';

angular.module('SmartAdmin.Layout').directive('stateBreadcrumbs', function ($rootScope, $state) {


    return {
        restrict: 'EA',
        replace: true,
        template: '<ol class="breadcrumb"><li>Home</li></ol>',
        link: function (scope, element) {

            function setBreadcrumbs(breadcrumbs) {
                var html = '<li>Home</li>';
                angular.forEach(breadcrumbs, function (crumb) {
                    html += '<li>' + crumb + '</li>'
                });
                element.html(html)
            }

            function fetchBreadcrumbs(stateName, breadcrunbs) {

                var state = $state.get(stateName);

                if (state && state.data && state.data.title && breadcrunbs.indexOf(state.data.title) == -1) {
                    breadcrunbs.unshift(state.data.title)
                }

                var parentName = stateName.replace(/.?\w+$/, '');
                if (parentName) {
                    return fetchBreadcrumbs(parentName, breadcrunbs);
                } else {
                    return breadcrunbs;
                }
            }

            function processState(state) {
                var breadcrumbs;
                if (state.data && state.data.breadcrumbs) {
                    breadcrumbs = state.data.breadcrumbs;
                } else {
                    breadcrumbs = fetchBreadcrumbs(state.name, []);
                }
                setBreadcrumbs(breadcrumbs);
            }

            processState($state.current);

            $rootScope.$on('$stateChangeStart', function (event, state) {
                processState(state);
            })
        }
    }
});
"use strict";

angular.module('SmartAdmin.Layout').directive('fullScreen', function(){
    return {
        restrict: 'A',
        link: function(scope, element){
            var $body = $('body');
            var toggleFullSceen = function(e){
                if (!$body.hasClass("full-screen")) {
                    $body.addClass("full-screen");
                    if (document.documentElement.requestFullscreen) {
                        document.documentElement.requestFullscreen();
                    } else if (document.documentElement.mozRequestFullScreen) {
                        document.documentElement.mozRequestFullScreen();
                    } else if (document.documentElement.webkitRequestFullscreen) {
                        document.documentElement.webkitRequestFullscreen();
                    } else if (document.documentElement.msRequestFullscreen) {
                        document.documentElement.msRequestFullscreen();
                    }
                } else {
                    $body.removeClass("full-screen");
                    if (document.exitFullscreen) {
                        document.exitFullscreen();
                    } else if (document.mozCancelFullScreen) {
                        document.mozCancelFullScreen();
                    } else if (document.webkitExitFullscreen) {
                        document.webkitExitFullscreen();
                    }
                }
            };

            element.on('click', toggleFullSceen);

        }
    }
});
"use strict";

angular.module('SmartAdmin.Layout').directive('minifyMenu', function(){
    return {
        restrict: 'A',
        link: function(scope, element){
                var $body = $('body');
            var minifyMenu = function() {
                if (!$body.hasClass("menu-on-top")) {
                    $body.toggleClass("minified");
                    $body.removeClass("hidden-menu");
                    $('html').removeClass("hidden-menu-mobile-lock");
                }
            };

            element.on('click', minifyMenu);
        }
    }
})
'use strict';

angular.module('SmartAdmin.Layout').directive('reloadState', function ($rootScope) {
    return {
        restrict: 'A',
        compile: function (tElement, tAttributes) {
            tElement.removeAttr('reload-state data-reload-state');
            tElement.on('click', function (e) {
                $rootScope.$state.transitionTo($rootScope.$state.current, $rootScope.$stateParams, {
                    reload: true,
                    inherit: false,
                    notify: true
                });
                e.preventDefault();
            })
        }
    }
});

"use strict";

angular.module('SmartAdmin.Layout').directive('resetWidgets', function($state){

    return {
        restrict: 'A',
        link: function(scope, element){
            element.on('click', function(){
                $.SmartMessageBox({
                    title : "<i class='fa fa-refresh' style='color:green'></i> Clear Local Storage",
                    content : "Would you like to RESET all your saved widgets and clear LocalStorage?1",
                    buttons : '[No][Yes]'
                }, function(ButtonPressed) {
                    if (ButtonPressed == "Yes" && localStorage) {
                        localStorage.clear();
                        location.reload()
                    }
                });

            });
        }
    }

});

'use strict';

angular.module('SmartAdmin.Layout').directive('searchMobile', function () {
    return {
        restrict: 'A',
        compile: function (element, attributes) {
            element.removeAttr('search-mobile data-search-mobile');

            element.on('click', function (e) {
                $('body').addClass('search-mobile');
                e.preventDefault();
            });

            $('#cancel-search-js').on('click', function (e) {
                $('body').removeClass('search-mobile');
                e.preventDefault();
            });
        }
    }
});
"use strict";

angular.module('SmartAdmin.Layout').directive('toggleMenu', function(){
    return {
        restrict: 'A',
        link: function(scope, element){
            var $body = $('body');

            var toggleMenu = function(){
                if (!$body.hasClass("menu-on-top")){
                    $('html').toggleClass("hidden-menu-mobile-lock");
                    $body.toggleClass("hidden-menu");
                    $body.removeClass("minified");
                } else if ( $body.hasClass("menu-on-top") && $body.hasClass("mobile-view-activated") ) {
                    $('html').toggleClass("hidden-menu-mobile-lock");
                    $body.toggleClass("hidden-menu");
                    $body.removeClass("minified");
                }
            };

            element.on('click', toggleMenu);

            scope.$on('requestToggleMenu', function(){
                toggleMenu();
            });
        }
    }
});
'use strict';

angular.module('SmartAdmin.Layout').factory('SmartCss', function ($rootScope, $timeout) {

    var sheet = (function () {
        // Create the <style> tag
        var style = document.createElement("style");

        // Add a media (and/or media query) here if you'd like!
        // style.setAttribute("media", "screen")
        // style.setAttribute("media", "@media only screen and (max-width : 1024px)")

        // WebKit hack :(
        style.appendChild(document.createTextNode(""));

        // Add the <style> element to the page
        document.head.appendChild(style);

        return style.sheet;
    })();

    var _styles = {};


    var SmartCss = {
        writeRule: function(selector){
            SmartCss.deleteRuleFor(selector);
            if(_.has(_styles, selector)){
                var css = selector + '{ ' + _.map(_styles[selector], function(v, k){
                    return  k + ':' +  v + ';'
                }).join(' ') +'}';
                sheet.insertRule(css, _.size(_styles) - 1);
            }
        },
        add: function (selector, property, value, delay) {
            if(!_.has(_styles, selector))
                _styles[selector] = {};

            if(value == undefined || value == null || value == '')
                delete _styles[selector][property];
            else
                _styles[selector][property] = value;


            if(_.keys(_styles[selector]).length == 0)
                delete _styles[selector];

            if(!delay)
                delay = 0;
            $timeout(function(){
                SmartCss.writeRule(selector);
            }, delay);

        },
        remove: function(selector, property, delay){
            SmartCss.add(selector, property, null, delay);
        },
        deleteRuleFor: function (selector) {
            _(sheet.rules).forEach(function (rule, idx) {
                if (rule.selectorText == selector) {
                    sheet.deleteRule(idx);
                }
            });
        },
        appViewSize: null
    };

    $rootScope.$on('$smartContentResize', function (event, data) {
        SmartCss.appViewSize = data;
    });

    return SmartCss;

});




'use strict';

angular.module('SmartAdmin.Layout').factory('lazyScript', function($q, $http){

    var cache = {};

    function isPending(scriptName){
        return (cache.hasOwnProperty(scriptName) && cache[scriptName].promise && cache[scriptName].promise.$$state.pending)
    }

    function isRegistered(scriptName){
        return cache.hasOwnProperty(scriptName)
    }
    function loadScript(scriptName){
        if(!cache[scriptName]){
            cache[scriptName] = $q.defer();
            var el = document.createElement( 'script' );
            el.onload = function(script){
                console.log('script is lazy loaded:', scriptName)
                cache[scriptName].resolve(scriptName);
            };
            el.src = scriptName;
            var x = document.getElementsByTagName('script')[0];
            x.parentNode.insertBefore(el, x);
            
        }
        return cache[scriptName].promise;

    }

    function register(scriptName){
        if(isPending(scriptName)){
            return cache[scriptName].promise
        }
        if(isRegistered(scriptName)){
            return $q.resolve(scriptName);
        } else {
            var dfd = $q.defer();

            loadScript(scriptName).then(function(){
                dfd.resolve(scriptName);
            });

            return dfd.promise; 

        }
    }
    return {
        register: function (scripts) {
            
            var dfd = $q.defer();
            var promises = [];
            if (angular.isString(scripts))
                scripts = [scripts];

            angular.forEach(scripts, function(script){
                promises.push(register(script));
            })

            $q.all(promises).then(function(resolves){
                dfd.resolve(resolves);
            })
            return dfd.promise;

        }
    };
});

"use strict";

angular.module('SmartAdmin.UI').directive('smartPopoverHtml', function () {
    return {
        restrict: "A",
        link: function(scope, element, attributes){
            var options = {};
            options.content = attributes.smartPopoverHtml;
            options.placement = attributes.popoverPlacement || 'top';
            options.html = true;
            options.trigger =  attributes.popoverTrigger || 'click';
            options.title =  attributes.popoverTitle || attributes.title;
            element.popover(options)

        }

    };
});


"use strict";

angular.module('SmartAdmin.UI').directive('smartTooltipHtml', function () {
        return {
            restrict: 'A',
            link: function(scope, element, attributes){
                element.tooltip({
                    placement: attributes.tooltipPlacement || 'top',
                    html: true,
                    title: attributes.smartTooltipHtml
                })
            }
        };
    }
);

"use strict";

angular.module('app.auth').directive('facebookSignin', function ($rootScope, ezfb) {
    return {
        replace: true,
        restrict: 'E',
        template: '<a class="btn btn-block btn-social btn-facebook"><i class="fa fa-facebook"></i> Sign in with Facebook</a>',
        link: function(scope, element){
            element.on('click', function(){
                ezfb.login(function (res) {
                    if (res.authResponse) {
                        $rootScope.$broadcast('event:facebook-signin-success', res.authResponse);
                    }
                }, {scope: 'public_profile'});
            })

        }
    }
});
"use strict";

angular.module('app.auth').directive('googleSignin', function ($rootScope, GooglePlus) {
    return {
        restrict: 'E',
        template: '<a class="g-signin btn btn-block btn-social btn-google-plus"><i class="fa fa-google-plus"></i> Sign in with Google</a>',
        replace: true,
        link: function (scope, element) {
            element.on('click', function(){
                GooglePlus.login().then(function (authResult) {
                    $rootScope.$broadcast('event:google-plus-signin-success', authResult);

                }, function (err) {
                    $rootScope.$broadcast('event:google-plus-signin-failure', err);

                });
            })
        }
    };
});

'use strict';

angular.module('app.chat').factory('ChatApi', function ($q, $rootScope, User, $http, APP_CONFIG) {
    var dfd = $q.defer();
    var _user;
    var ChatSrv = {
        initialized: dfd.promise,
        users: [],
        messages: [],
        statuses: ['Online', 'Busy', 'Away', 'Log Off'],
        status: 'Online',
        setUser: function (user) {
            if (ChatSrv.users.indexOf(_user) != -1)
                ChatSrv.users.splice(ChatSrv.users.indexOf(_user), 1);
            _user = user;
            ChatSrv.users.push(_user);
        },
        sendMessage: function (text) {
            var message = {
                user: _user,
                body: text,
                date: new Date()
            };
            this.messages.push(message);
        }
    };


    $http.get(APP_CONFIG.apiRootUrl + '/chat.json').then(function(res){
        ChatSrv.messages = res.data.messages;
        ChatSrv.users = res.data.users;
        dfd.resolve();
    });

    ChatSrv.initialized.then(function () {

        User.initialized.then(function () {
            ChatSrv.setUser({
                username: User.username,
                picture: User.picture,
                status: ChatSrv.status
            });
        });

        $rootScope.$watch(function () {
            return User.username
        }, function (name, oldName) {
            if (name != oldName) {
                ChatSrv.setUser({
                    username: User.username,
                    picture: User.picture,
                    status: ChatSrv.status
                });
            }
        });
    });


    return ChatSrv;

});
(function() {
        
   'use strict';

    /*
    * SMARTCHAT PLUGIN ARRAYS & CONFIG
    * Dependency: js/plugin/moment/moment.min.js 
    *             js/plugin/cssemotions/jquery.cssemoticons.min.js 
    *             js/smart-chat-ui/smart.chat.ui.js
    * (DO NOT CHANGE) 
    */ 
        var boxList = [],
        showList = [],
        nameList = [],
        idList = [];
    /*
    * Width of the chat boxes, and the gap inbetween in pixel (minus padding)
    */ 
        var chatbox_config = {
            width: 200,
            gap: 35,
            offset: 0
        };



    /*
    * SMART CHAT ENGINE
    * Copyright (c) 2013 Wen Pu
    * Modified by MyOrange
    * All modifications made are hereby copyright (c) 2014-2015 MyOrange
    */

    // TODO: implement destroy()
    (function($) {
    $.widget("ui.chatbox", {
        options: {
            id: null, //id for the DOM element
            title: null, // title of the chatbox
            user: null, // can be anything associated with this chatbox
            hidden: false,
            offset: 0, // relative to right edge of the browser window
            width: 300, // width of the chatbox
            status: 'online', //
            alertmsg: null,
            alertshow: null,
            messageSent: function(id, user, msg) {
                // override this
                this.boxManager.addMsg(user.first_name, msg);
            },
            boxClosed: function(id) {
            }, // called when the close icon is clicked
            boxManager: {
                // thanks to the widget factory facility
                // similar to http://alexsexton.com/?p=51
                init: function(elem) {
                    this.elem = elem;
                },
                addMsg: function(peer, msg) {
                    var self = this;
                    var box = self.elem.uiChatboxLog;
                    var e = document.createElement('div');
                    box.append(e);
                    $(e).hide();

                    var systemMessage = false;

                    if (peer) {
                        var peerName = document.createElement("b");
                        $(peerName).text(peer + ": ");
                        e.appendChild(peerName);
                    } else {
                        systemMessage = true;
                    }

                    var msgElement = document.createElement(
                        systemMessage ? "i" : "span");
                    $(msgElement).text(msg);
                    e.appendChild(msgElement);
                    $(e).addClass("ui-chatbox-msg");
                    $(e).css("maxWidth", $(box).width());
                    $(e).fadeIn();
                    //$(e).prop( 'title', moment().calendar() ); // add dep: moment.js
                    $(e).find("span").emoticonize(); // add dep: jquery.cssemoticons.js
                    self._scrollToBottom();

                    if (!self.elem.uiChatboxTitlebar.hasClass("ui-state-focus")
                        && !self.highlightLock) {
                        self.highlightLock = true;
                        self.highlightBox();
                    }
                },
                highlightBox: function() {
                    var self = this;
                    self.elem.uiChatboxTitlebar.effect("highlight", {}, 300);
                    self.elem.uiChatbox.effect("bounce", {times: 2}, 300, function() {
                        self.highlightLock = false;
                        self._scrollToBottom();
                    });
                },
                toggleBox: function() {
                    this.elem.uiChatbox.toggle();
                },
                _scrollToBottom: function() {
                    var box = this.elem.uiChatboxLog;
                    box.scrollTop(box.get(0).scrollHeight);
                }
            }
        },
        toggleContent: function(event) {
            this.uiChatboxContent.toggle();
            if (this.uiChatboxContent.is(":visible")) {
                this.uiChatboxInputBox.focus();
            }
        },
        widget: function() {
            return this.uiChatbox
        },
        _create: function() {
            var self = this,
            options = self.options,
            title = options.title || "No Title",
            // chatbox
            uiChatbox = (self.uiChatbox = $('<div></div>'))
                .appendTo(document.body)
                .addClass('ui-widget ' +
                          //'ui-corner-top ' +
                          'ui-chatbox'
                         )
                .attr('outline', 0)
                .focusin(function() {
                    // ui-state-highlight is not really helpful here
                    //self.uiChatbox.removeClass('ui-state-highlight');
                    self.uiChatboxTitlebar.addClass('ui-state-focus');
                })
                .focusout(function() {
                    self.uiChatboxTitlebar.removeClass('ui-state-focus');
                }),
            // titlebar
            uiChatboxTitlebar = (self.uiChatboxTitlebar = $('<div></div>'))
                .addClass('ui-widget-header ' +
                          //'ui-corner-top ' +
                          'ui-chatbox-titlebar ' +
                          self.options.status +
                          ' ui-dialog-header' // take advantage of dialog header style
                         )
                .click(function(event) {
                    self.toggleContent(event);
                })
                .appendTo(uiChatbox),
            uiChatboxTitle = (self.uiChatboxTitle = $('<span></span>'))
                .html(title)
                .appendTo(uiChatboxTitlebar),
            uiChatboxTitlebarClose = (self.uiChatboxTitlebarClose = $('<a href="#" rel="tooltip" data-placement="top" data-original-title="Hide"></a>'))
                .addClass(//'ui-corner-all ' +
                          'ui-chatbox-icon '
                         )
                .attr('role', 'button')
                .hover(function() { uiChatboxTitlebarClose.addClass('ui-state-hover'); },
                       function() { uiChatboxTitlebarClose.removeClass('ui-state-hover'); })
                .click(function(event) {
                    uiChatbox.hide();
                    self.options.boxClosed(self.options.id);
                    return false;
                })
                .appendTo(uiChatboxTitlebar),
            uiChatboxTitlebarCloseText = $('<i></i>')
                .addClass('fa ' +
                          'fa-times')
                .appendTo(uiChatboxTitlebarClose),
            uiChatboxTitlebarMinimize = (self.uiChatboxTitlebarMinimize = $('<a href="#" rel="tooltip" data-placement="top" data-original-title="Minimize"></a>'))
                .addClass(//'ui-corner-all ' +
                          'ui-chatbox-icon'
                         )
                .attr('role', 'button')
                .hover(function() { uiChatboxTitlebarMinimize.addClass('ui-state-hover'); },
                       function() { uiChatboxTitlebarMinimize.removeClass('ui-state-hover'); })
                .click(function(event) {
                    self.toggleContent(event);
                    return false;
                })
                .appendTo(uiChatboxTitlebar),
            uiChatboxTitlebarMinimizeText = $('<i></i>')
                .addClass('fa ' +
                          'fa-minus')
                .appendTo(uiChatboxTitlebarMinimize),
            // content
            uiChatboxContent = (self.uiChatboxContent = $('<div class="'+ self.options.alertshow +'"><span class="alert-msg">'+ self.options.alertmsg + '</span></div>'))
                .addClass('ui-widget-content ' +
                          'ui-chatbox-content '
                         )
                .appendTo(uiChatbox),
            uiChatboxLog = (self.uiChatboxLog = self.element)
                .addClass('ui-widget-content ' +
                          'ui-chatbox-log ' +
                          'custom-scroll'
                         )
                .appendTo(uiChatboxContent),
            uiChatboxInput = (self.uiChatboxInput = $('<div></div>'))
                .addClass('ui-widget-content ' +
                          'ui-chatbox-input'
                         )
                .click(function(event) {
                    // anything?
                })
                .appendTo(uiChatboxContent),
            uiChatboxInputBox = (self.uiChatboxInputBox = $('<textarea></textarea>'))
                .addClass('ui-widget-content ' +
                          'ui-chatbox-input-box '
                         )
                .appendTo(uiChatboxInput)
                .keydown(function(event) {
                    if (event.keyCode && event.keyCode == $.ui.keyCode.ENTER) {
                        var msg = $.trim($(this).val());
                        if (msg.length > 0) {
                            self.options.messageSent(self.options.id, self.options.user, msg);
                        }
                        $(this).val('');
                        return false;
                    }
                })
                .focusin(function() {
                    uiChatboxInputBox.addClass('ui-chatbox-input-focus');
                    var box = $(this).parent().prev();
                    box.scrollTop(box.get(0).scrollHeight);
                })
                .focusout(function() {
                    uiChatboxInputBox.removeClass('ui-chatbox-input-focus');
                });

            // disable selection
            uiChatboxTitlebar.find('*').add(uiChatboxTitlebar).disableSelection();

            // switch focus to input box when whatever clicked
            uiChatboxContent.children().click(function() {
                // click on any children, set focus on input box
                self.uiChatboxInputBox.focus();
            });

            self._setWidth(self.options.width);
            self._position(self.options.offset);

            self.options.boxManager.init(self);

            if (!self.options.hidden) {
                uiChatbox.show();
            }
            
            $(".ui-chatbox [rel=tooltip]").tooltip();
            //console.log("tooltip created");
        },
        _setOption: function(option, value) {
            if (value != null) {
                switch (option) {
                case "hidden":
                    if (value)
                        this.uiChatbox.hide();
                    else
                        this.uiChatbox.show();
                    break;
                case "offset":
                    this._position(value);
                    break;
                case "width":
                    this._setWidth(value);
                    break;
                }
            }
            $.Widget.prototype._setOption.apply(this, arguments);
        },
        _setWidth: function(width) {
            this.uiChatbox.width((width + 28) + "px");
            //this.uiChatboxTitlebar.width((width + 28) + "px");
            //this.uiChatboxLog.width(width + "px");
           // this.uiChatboxInput.css("maxWidth", width + "px");
            // padding:2, boarder:2, margin:5
            this.uiChatboxInputBox.css("width", (width + 18) + "px");
        },
        _position: function(offset) {
            this.uiChatbox.css("right", offset);
        }
    });
    }(jQuery));


    /*
    * jQuery CSSEmoticons plugin 0.2.9
    *
    * Copyright (c) 2010 Steve Schwartz (JangoSteve)
    *
    * Dual licensed under the MIT and GPL licenses:
    *   http://www.opensource.org/licenses/mit-license.php
    *   http://www.gnu.org/licenses/gpl.html
    *
    * Date: Sun Oct 22 1:00:00 2010 -0500
    */
    (function($) {
    $.fn.emoticonize = function(options) {

    var opts = $.extend({}, $.fn.emoticonize.defaults, options);

    var escapeCharacters = [ ")", "(", "*", "[", "]", "{", "}", "|", "^", "<", ">", "\\", "?", "+", "=", "." ];

    var threeCharacterEmoticons = [
        // really weird bug if you have :{ and then have :{) in the same container anywhere *after* :{ then :{ doesn't get matched, e.g. :] :{ :) :{) :) :-) will match everything except :{
        //  But if you take out the :{) or even just move :{ to the right of :{) then everything works fine. This has something to do with the preMatch string below I think, because
        //  it'll work again if you set preMatch equal to '()'
        //  So for now, we'll just remove :{) from the emoticons, because who actually uses this mustache man anyway?
      // ":{)",
      ":-)", ":o)", ":c)", ":^)", ":-D", ":-(", ":-9", ";-)", ":-P", ":-p", ":-Þ", ":-b", ":-O", ":-/", ":-X", ":-#", ":'(", "B-)", "8-)", ";*(", ":-*", ":-\\",
      "?-)", // <== This is my own invention, it's a smiling pirate (with an eye-patch)!
      // and the twoCharacterEmoticons from below, but with a space inserted
      ": )", ": ]", "= ]", "= )", "8 )", ": }", ": D", "8 D", "X D", "x D", "= D", ": (", ": [", ": {", "= (", "; )", "; ]", "; D", ": P", ": p", "= P", "= p", ": b", ": Þ", ": O", "8 O", ": /", "= /", ": S", ": #", ": X", "B )", ": |", ": \\", "= \\", ": *", ": &gt;", ": &lt;"//, "* )"
    ];

    var twoCharacterEmoticons = [ // separate these out so that we can add a letter-spacing between the characters for better proportions
      ":)", ":]", "=]", "=)", "8)", ":}", ":D", ":(", ":[", ":{", "=(", ";)", ";]", ";D", ":P", ":p", "=P", "=p", ":b", ":Þ", ":O", ":/", "=/", ":S", ":#", ":X", "B)", ":|", ":\\", "=\\", ":*", ":&gt;", ":&lt;"//, "*)"
    ];

    var specialEmoticons = { // emoticons to be treated with a special class, hash specifies the additional class to add, along with standard css-emoticon class
      "&gt;:)": { cssClass: "red-emoticon small-emoticon spaced-emoticon" },
      "&gt;;)": { cssClass: "red-emoticon small-emoticon spaced-emoticon"},
      "&gt;:(": { cssClass: "red-emoticon small-emoticon spaced-emoticon" },
      "&gt;: )": { cssClass: "red-emoticon small-emoticon" },
      "&gt;; )": { cssClass: "red-emoticon small-emoticon"},
      "&gt;: (": { cssClass: "red-emoticon small-emoticon" },
      ";(":     { cssClass: "red-emoticon spaced-emoticon" },
      "&lt;3":  { cssClass: "pink-emoticon counter-rotated" },
      "O_O":    { cssClass: "no-rotate" },
      "o_o":    { cssClass: "no-rotate" },
      "0_o":    { cssClass: "no-rotate" },
      "O_o":    { cssClass: "no-rotate" },
      "T_T":    { cssClass: "no-rotate" },
      "^_^":    { cssClass: "no-rotate" },
      "O:)":    { cssClass: "small-emoticon spaced-emoticon" },
      "O: )":   { cssClass: "small-emoticon" },
      "8D":     { cssClass: "small-emoticon spaced-emoticon" },
      "XD":     { cssClass: "small-emoticon spaced-emoticon" },
      "xD":     { cssClass: "small-emoticon spaced-emoticon" },
      "=D":     { cssClass: "small-emoticon spaced-emoticon" },
      "8O":     { cssClass: "small-emoticon spaced-emoticon" },
      "[+=..]":  { cssClass: "no-rotate nintendo-controller" }
      //"OwO":  { cssClass: "no-rotate" }, // these emoticons overflow and look weird even if they're made even smaller, could probably fix this with some more css trickery
      //"O-O":  { cssClass: "no-rotate" },
      //"O=)":    { cssClass: "small-emoticon" } 
    }

    var specialRegex = new RegExp( '(\\' + escapeCharacters.join('|\\') + ')', 'g' );
    // One of these characters must be present before the matched emoticon, or the matched emoticon must be the first character in the container HTML
    //  This is to ensure that the characters in the middle of HTML properties or URLs are not matched as emoticons
    //  Below matches ^ (first character in container HTML), \s (whitespace like space or tab), or \0 (NULL character)
    // (<\\S+.*>) matches <\\S+.*> (matches an HTML tag like <span> or <div>), but haven't quite gotten it working yet, need to push this fix now
    var preMatch = '(^|[\\s\\0])';

    for ( var i=threeCharacterEmoticons.length-1; i>=0; --i ){
      threeCharacterEmoticons[i] = threeCharacterEmoticons[i].replace(specialRegex,'\\$1');
      threeCharacterEmoticons[i] = new RegExp( preMatch+'(' + threeCharacterEmoticons[i] + ')', 'g' );
    }

    for ( var i=twoCharacterEmoticons.length-1; i>=0; --i ){
      twoCharacterEmoticons[i] = twoCharacterEmoticons[i].replace(specialRegex,'\\$1');
      twoCharacterEmoticons[i] = new RegExp( preMatch+'(' + twoCharacterEmoticons[i] + ')', 'g' );
    }

    for ( var emoticon in specialEmoticons ){
      specialEmoticons[emoticon].regexp = emoticon.replace(specialRegex,'\\$1');
      specialEmoticons[emoticon].regexp = new RegExp( preMatch+'(' + specialEmoticons[emoticon].regexp + ')', 'g' );
    }

    var exclude = 'span.css-emoticon';
    if(opts.exclude){ exclude += ','+opts.exclude; }
    var excludeArray = exclude.split(',')

    return this.not(exclude).each(function() {
      var container = $(this);
      var cssClass = 'css-emoticon'
      if(opts.animate){ cssClass += ' un-transformed-emoticon animated-emoticon'; }
      
      for( var emoticon in specialEmoticons ){
        var specialCssClass = cssClass + " " + specialEmoticons[emoticon].cssClass;
        container.html(container.html().replace(specialEmoticons[emoticon].regexp,"$1<span class='" + specialCssClass + "'>$2</span>"));
      }
      $(threeCharacterEmoticons).each(function(){
        container.html(container.html().replace(this,"$1<span class='" + cssClass + "'>$2</span>"));
      });                                                          
      $(twoCharacterEmoticons).each(function(){                    
        container.html(container.html().replace(this,"$1<span class='" + cssClass + " spaced-emoticon'>$2</span>"));
      });
      // fix emoticons that got matched more then once (where one emoticon is a subset of another emoticon), and thus got nested spans
      $.each(excludeArray,function(index,item){
        container.find($.trim(item)+" span.css-emoticon").each(function(){
          $(this).replaceWith($(this).text());
        });
      });
      if(opts.animate){
        setTimeout(function(){$('.un-transformed-emoticon').removeClass('un-transformed-emoticon');}, opts.delay);
      }
    });
    }

    $.fn.unemoticonize = function(options) {
    var opts = $.extend({}, $.fn.emoticonize.defaults, options);
    return this.each(function() {
      var container = $(this);
      container.find('span.css-emoticon').each(function(){
        // add delay equal to animate speed if animate is not false
        var span = $(this);
        if(opts.animate){
          span.addClass('un-transformed-emoticon');
          setTimeout(function(){span.replaceWith(span.text());}, opts.delay); 
        }else{
          span.replaceWith(span.text());
        }
      });
    });
    }

    $.fn.emoticonize.defaults = {animate: true, delay: 500, exclude: 'pre,code,.no-emoticons'}
    })(jQuery);

    var chatboxManager = function () {
        
    var init = function (options) {
        $.extend(chatbox_config, options)
    };


    var delBox = function (id) {
        // TODO
    };

    var getNextOffset = function () {
        return (chatbox_config.width + chatbox_config.gap) * showList.length;
    };

    var boxClosedCallback = function (id) {
        // close button in the titlebar is clicked
        var idx = showList.indexOf(id);
        if (idx != -1) {
            showList.splice(idx, 1);
            var diff = chatbox_config.width + chatbox_config.gap;
            for (var i = idx; i < showList.length; i++) {
                chatbox_config.offset = $("#" + showList[i]).chatbox("option", "offset");
                $("#" + showList[i]).chatbox("option", "offset", chatbox_config.offset - diff);
            }
        } else {
            alert("NOTE: Id missing from array: " + id);
        }
    };

    // caller should guarantee the uniqueness of id
    var addBox = function (id, user, name) {
        var idx1 = showList.indexOf(id);
        var idx2 = boxList.indexOf(id);
        if (idx1 != -1) {
            // found one in show box, do nothing
        } else if (idx2 != -1) {
            // exists, but hidden
            // show it and put it back to showList
            $("#" + id).chatbox("option", "offset", getNextOffset());
            var manager = $("#" + id).chatbox("option", "boxManager");
            manager.toggleBox();
            showList.push(id);
        } else {
            var el = document.createElement('div');
            el.setAttribute('id', id);
            $(el).chatbox({
                id: id,
                user: user,
                title: '<i title="' + user.status + '"></i>' + user.first_name + " " + user.last_name,
                hidden: false,
                offset: getNextOffset(),
                width: chatbox_config.width,
                status: user.status,
                alertmsg: user.alertmsg,
                alertshow: user.alertshow,
                messageSent: dispatch,
                boxClosed: boxClosedCallback
            });
            boxList.push(id);
            showList.push(id);
            nameList.push(user.first_name);
        }
    };

    var messageSentCallback = function (id, user, msg) {
        var idx = boxList.indexOf(id);
        chatbox_config.messageSent(nameList[idx], msg);
    };

    // not used in demo
    var dispatch = function (id, user, msg) {
        //$("#log").append("<i>" + moment().calendar() + "</i> you said to <b>" + user.first_name + " " + user.last_name + ":</b> " + msg + "<br/>");
        if ($('#chatlog').length){
            $("#chatlog").append("You said to <b>" + user.first_name + " " + user.last_name + ":</b> " + msg + "<br/>").effect("highlight", {}, 500);;
        }
        $("#" + id).chatbox("option", "boxManager").addMsg("Me", msg);
    }

    return {
        init: init,
        addBox: addBox,
        delBox: delBox,
        dispatch: dispatch
    };
    }();

    var link = function (scope, element, attributes) {

        $('a[data-chat-id]').click(function (event, ui) {
            if(!$(this).hasClass('offline')){

                var $this = $(this),
                    temp_chat_id = $this.attr("data-chat-id"),
                    fname = $this.attr("data-chat-fname"),
                    lname = $this.attr("data-chat-lname"),
                    status = $this.attr("data-chat-status") || "online",
                    alertmsg = $this.attr("data-chat-alertmsg"),
                    alertshow =  $this.attr("data-chat-alertshow") || false;


                chatboxManager.addBox(temp_chat_id, {
                    // dest:"dest" + counter, 
                    // not used in demo
                    title: "username" + temp_chat_id,
                    first_name: fname,
                    last_name: lname,
                    status: status,
                    alertmsg: alertmsg,
                    alertshow: alertshow
                    //you can add your own options too
                });
            }

            event.preventDefault();

        });

    }

    angular.module('app.chat').directive('asideChatWidget', function (ChatApi) {
        return {
            restrict: 'A',
            replace: true,
            templateUrl: 'app/dashboard/chat/directives/aside-chat-widget.tpl.html',
            link: link
        }
    });

})(); 
"use strict";

angular.module('app.chat').directive('chatUsers', function(ChatApi){
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/dashboard/chat/directives/chat-users.tpl.html',
        scope: true,
        link: function(scope, element){
            scope.open = false;
            scope.openToggle = function(){
                scope.open = !scope.open;
            };

            scope.chatUserFilter = '';

            ChatApi.initialized.then(function () {
                scope.chatUsers = ChatApi.users;
            });
        }
    }
});

"use strict";

angular.module('app.chat').directive('chatWidget', function (ChatApi) {
    return {
        replace: true,
        restrict: 'E',
        templateUrl: 'app/dashboard/chat/directives/chat-widget.tpl.html',
        scope: {},
        link: function (scope, element) {
            scope.newMessage = '';

            scope.sendMessage = function () {
                ChatApi.sendMessage(scope.newMessage);
                scope.newMessage = '';
            };

            scope.messageTo = function(user){
                scope.newMessage += (user.username + ', ');
            };

            ChatApi.initialized.then(function () {
                scope.chatMessages = ChatApi.messages;
            });
            scope.$watch(function () {
                return ChatApi.messages.length
            }, function (count) {
                if (count){
                    var $body = $('.chat-body', element);
                    $body.animate({scrollTop: $body[0].scrollHeight});
                }
            })
        }
    }
});
"use strict";

 angular.module('app').directive('todoList', function ($timeout, Todo) {

    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/dashboard/todo/directives/todo-list.tpl.html',
        scope: {
            todos: '='
        },
        link: function (scope, element, attributes) {
            scope.title = attributes.title
            scope.icon = attributes.icon
            scope.state = attributes.state
            scope.filter = {
                state: scope.state
            }

            element.find('.todo').sortable({
                handle: '.handle',
                connectWith: ".todo",
                receive: function (event, ui) {

                    console.log(ui.item.scope().todo,scope.state)
                    var todo = ui.item.scope().todo;
                    var state = scope.state
                    // // console.log(ui.item, todo, state)
                    // // console.log(state, todo)
                    if (todo && state) {
                        todo.setState(state);
                         // ui.sender.sortable("cancel");
                        // scope.$apply();
                    } else {
                        console.log('Wat', todo, state);
                    }
                    
                }
            }).disableSelection();

        }
    }
});
"use strict";

angular.module('app').factory('Todo', function (Restangular, APP_CONFIG, $httpBackend) {

    var normalize = function(todo) {
        if(!todo._id){
            todo._id = _.unique('todo')
        }
        todo.toggle = function(){
            if (!todo.completedAt) {
                todo.state = 'Completed';
                todo.completedAt = JSON.stringify(new Date());
            } else {
                todo.state = 'Critical';
                todo.completedAt = null;
            }
        };

        todo.setState = function(state){
            todo.state = state;
            if (state == 'Completed') {
                todo.completedAt = JSON.stringify(new Date());
            } else {
                todo.completedAt = null;
            }
        };

        return todo;
    };

    var Todo = Restangular.all(APP_CONFIG.apiRootUrl + '/todos.json');

    Restangular.extendModel(APP_CONFIG.apiRootUrl + '/todos.json', normalize);
    Todo.normalize = normalize;

    return Todo
});
'use strict';

angular.module('app.graphs').directive('chartjsBarChart', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attributes) {

            var barOptions = {
                //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
                scaleBeginAtZero : true,
                //Boolean - Whether grid lines are shown across the chart
                scaleShowGridLines : true,
                //String - Colour of the grid lines
                scaleGridLineColor : "rgba(0,0,0,.05)",
                //Number - Width of the grid lines
                scaleGridLineWidth : 1,
                //Boolean - If there is a stroke on each bar
                barShowStroke : true,
                //Number - Pixel width of the bar stroke
                barStrokeWidth : 1,
                //Number - Spacing between each of the X value sets
                barValueSpacing : 5,
                //Number - Spacing between data sets within X values
                barDatasetSpacing : 1,
                //Boolean - Re-draw chart on page resize
                responsive: true,
                //String - A legend template
                legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
            }

            var barData = {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [
                    {
                        label: "My First dataset",
                        fillColor: "rgba(220,220,220,0.5)",
                        strokeColor: "rgba(220,220,220,0.8)",
                        highlightFill: "rgba(220,220,220,0.75)",
                        highlightStroke: "rgba(220,220,220,1)",
                        data: [65, 59, 80, 81, 56, 55, 40]
                    },
                    {
                        label: "My Second dataset",
                        fillColor: "rgba(151,187,205,0.5)",
                        strokeColor: "rgba(151,187,205,0.8)",
                        highlightFill: "rgba(151,187,205,0.75)",
                        highlightStroke: "rgba(151,187,205,1)",
                        data: [28, 48, 40, 19, 86, 27, 90]
                    }
                ]
            };

            var ctx = element[0].getContext("2d");
            new Chart(ctx).Bar(barData, barOptions);

        }
    }
});
'use strict';

angular.module('app.graphs').directive('chartjsDoughnutChart', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attributes) {
            var doughnutOptions = {
                //Boolean - Whether we should show a stroke on each segment
                segmentShowStroke : true,
                //String - The colour of each segment stroke
                segmentStrokeColor : "#fff",
                //Number - The width of each segment stroke
                segmentStrokeWidth : 2,
                //Number - The percentage of the chart that we cut out of the middle
                percentageInnerCutout : 50, // This is 0 for Pie charts
                //Number - Amount of animation steps
                animationSteps : 100,
                //String - Animation easing effect
                animationEasing : "easeOutBounce",
                //Boolean - Whether we animate the rotation of the Doughnut
                animateRotate : true,
                //Boolean - Whether we animate scaling the Doughnut from the centre
                animateScale : false,
                //Boolean - Re-draw chart on page resize
                responsive: true,
                //String - A legend template
                legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
            };

            var doughnutData = [
                {
                    value: 300,
                    color:"rgba(220,220,220,0.8)",
                    highlight: "rgba(220,220,220,0.7)",
                    label: "Grey"
                },
                {
                    value: 50,
                    color: "rgba(151,187,205,1)",
                    highlight: "rgba(151,187,205,0.8)",
                    label: "Blue"
                },
                {
                    value: 100,
                    color: "rgba(169, 3, 41, 0.7)",
                    highlight: "rgba(169, 3, 41, 0.7)",
                    label: "Red"
                }
            ];

            // render chart
            var ctx = element[0].getContext("2d");
            new Chart(ctx).Doughnut(doughnutData, doughnutOptions);
        }}
});
'use strict';

angular.module('app.graphs').directive('chartjsLineChart', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attributes) {

            // LINE CHART
            // ref: http://www.chartjs.org/docs/#line-chart-introduction
            var lineOptions = {
                ///Boolean - Whether grid lines are shown across the chart
                scaleShowGridLines : true,
                //String - Colour of the grid lines
                scaleGridLineColor : "rgba(0,0,0,.05)",
                //Number - Width of the grid lines
                scaleGridLineWidth : 1,
                //Boolean - Whether the line is curved between points
                bezierCurve : true,
                //Number - Tension of the bezier curve between points
                bezierCurveTension : 0.4,
                //Boolean - Whether to show a dot for each point
                pointDot : true,
                //Number - Radius of each point dot in pixels
                pointDotRadius : 4,
                //Number - Pixel width of point dot stroke
                pointDotStrokeWidth : 1,
                //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
                pointHitDetectionRadius : 20,
                //Boolean - Whether to show a stroke for datasets
                datasetStroke : true,
                //Number - Pixel width of dataset stroke
                datasetStrokeWidth : 2,
                //Boolean - Whether to fill the dataset with a colour
                datasetFill : true,
                //Boolean - Re-draw chart on page resize
                responsive: true,
                //String - A legend template
                legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
            };

            var lineData = { labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [
                    {
                        label: "My First dataset",
                        fillColor: "rgba(220,220,220,0.2)",
                        strokeColor: "rgba(220,220,220,1)",
                        pointColor: "rgba(220,220,220,1)",
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: "rgba(220,220,220,1)",
                        data: [65, 59, 80, 81, 56, 55, 40]
                    },
                    {
                        label: "My Second dataset",
                        fillColor: "rgba(151,187,205,0.2)",
                        strokeColor: "rgba(151,187,205,1)",
                        pointColor: "rgba(151,187,205,1)",
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: "rgba(151,187,205,1)",
                        data: [28, 48, 40, 19, 86, 27, 90]
                    }
                ]
            };

            var ctx = element[0].getContext("2d");
            var myNewChart = new Chart(ctx).Line(lineData, lineOptions);



        }
    }
});
'use strict';

angular.module('app.graphs').directive('chartjsPieChart', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attributes) {
            var pieOptions = {
                //Boolean - Whether we should show a stroke on each segment
                segmentShowStroke: true,
                //String - The colour of each segment stroke
                segmentStrokeColor: "#fff",
                //Number - The width of each segment stroke
                segmentStrokeWidth: 2,
                //Number - Amount of animation steps
                animationSteps: 100,
                //String - types of animation
                animationEasing: "easeOutBounce",
                //Boolean - Whether we animate the rotation of the Doughnut
                animateRotate: true,
                //Boolean - Whether we animate scaling the Doughnut from the centre
                animateScale: false,
                //Boolean - Re-draw chart on page resize
                responsive: true,
                //String - A legend template
                legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
            };

            var pieData = [
                {
                    value: 300,
                    color:"rgba(220,220,220,0.9)",
                    highlight: "rgba(220,220,220,0.8)",
                    label: "Grey"
                },
                {
                    value: 50,
                    color: "rgba(151,187,205,1)",
                    highlight: "rgba(151,187,205,0.8)",
                    label: "Blue"
                },
                {
                    value: 100,
                    color: "rgba(169, 3, 41, 0.7)",
                    highlight: "rgba(169, 3, 41, 0.7)",
                    label: "Red"
                }
            ];

            // render chart
            var ctx = element[0].getContext("2d");
            var myNewChart = new Chart(ctx).Pie(pieData, pieOptions);
        }}
});
'use strict';

angular.module('app.graphs').directive('chartjsPolarChart', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attributes) {
            var polarOptions = {
                //Boolean - Show a backdrop to the scale label
                scaleShowLabelBackdrop : true,
                //String - The colour of the label backdrop
                scaleBackdropColor : "rgba(255,255,255,0.75)",
                // Boolean - Whether the scale should begin at zero
                scaleBeginAtZero : true,
                //Number - The backdrop padding above & below the label in pixels
                scaleBackdropPaddingY : 2,
                //Number - The backdrop padding to the side of the label in pixels
                scaleBackdropPaddingX : 2,
                //Boolean - Show line for each value in the scale
                scaleShowLine : true,
                //Boolean - Stroke a line around each segment in the chart
                segmentShowStroke : true,
                //String - The colour of the stroke on each segement.
                segmentStrokeColor : "#fff",
                //Number - The width of the stroke value in pixels
                segmentStrokeWidth : 2,
                //Number - Amount of animation steps
                animationSteps : 100,
                //String - Animation easing effect.
                animationEasing : "easeOutBounce",
                //Boolean - Whether to animate the rotation of the chart
                animateRotate : true,
                //Boolean - Whether to animate scaling the chart from the centre
                animateScale : false,
                //Boolean - Re-draw chart on page resize
                responsive: true,
                //String - A legend template
                legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
            };

            var polarData = [
                {
                    value: 300,
                    color:"rgba(220,220,220,0.8)",
                    highlight: "rgba(220,220,220,0.7)",
                    label: "Grey"
                },
                {
                    value: 50,
                    color: "rgba(151,187,205,1)",
                    highlight: "rgba(151,187,205,0.8)",
                    label: "Blue"
                },
                {
                    value: 100,
                    color: "rgba(169, 3, 41, 0.7)",
                    highlight: "rgba(169, 3, 41, 0.7)",
                    label: "Red"
                },
                {
                    value: 40,
                    color: "#949FB1",
                    highlight: "#A8B3C5",
                    label: "Grey"
                },
                {
                    value: 120,
                    color: "#4D5360",
                    highlight: "#616774",
                    label: "Dark Grey"
                }
            ];

            // render chart
            var ctx = element[0].getContext("2d");
            new Chart(ctx).PolarArea(polarData, polarOptions);
        }}
});
'use strict';

angular.module('app.graphs').directive('chartjsRadarChart', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attributes) {
            var radarData = {
                labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
                datasets: [
                    {
                        label: "My First dataset",
                        fillColor: "rgba(220,220,220,0.2)",
                        strokeColor: "rgba(220,220,220,1)",
                        pointColor: "rgba(220,220,220,1)",
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: "rgba(220,220,220,1)",
                        data: [65, 59, 90, 81, 56, 55, 40]
                    },
                    {
                        label: "My Second dataset",
                        fillColor: "rgba(151,187,205,0.2)",
                        strokeColor: "rgba(151,187,205,1)",
                        pointColor: "rgba(151,187,205,1)",
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: "rgba(151,187,205,1)",
                        data: [28, 48, 40, 19, 96, 27, 100]
                    }
                ]
            };

            var radarOptions = {
                //Boolean - Whether to show lines for each scale point
                scaleShowLine : true,
                //Boolean - Whether we show the angle lines out of the radar
                angleShowLineOut : true,
                //Boolean - Whether to show labels on the scale
                scaleShowLabels : false,
                // Boolean - Whether the scale should begin at zero
                scaleBeginAtZero : true,
                //String - Colour of the angle line
                angleLineColor : "rgba(0,0,0,.1)",
                //Number - Pixel width of the angle line
                angleLineWidth : 1,
                //String - Point label font declaration
                pointLabelFontFamily : "'Arial'",
                //String - Point label font weight
                pointLabelFontStyle : "normal",
                //Number - Point label font size in pixels
                pointLabelFontSize : 10,
                //String - Point label font colour
                pointLabelFontColor : "#666",
                //Boolean - Whether to show a dot for each point
                pointDot : true,
                //Number - Radius of each point dot in pixels
                pointDotRadius : 3,
                //Number - Pixel width of point dot stroke
                pointDotStrokeWidth : 1,
                //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
                pointHitDetectionRadius : 20,
                //Boolean - Whether to show a stroke for datasets
                datasetStroke : true,
                //Number - Pixel width of dataset stroke
                datasetStrokeWidth : 2,
                //Boolean - Whether to fill the dataset with a colour
                datasetFill : true,
                //Boolean - Re-draw chart on page resize
                responsive: true,
                //String - A legend template
                legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
            }

            // render chart
            var ctx = element[0].getContext("2d");
            var myNewChart = new Chart(ctx).Radar(radarData, radarOptions);
        }}
});
'use strict'

angular.module('app.graphs').factory('DygraphsDataDemo',function($http,$rootScope){
    $rootScope.tempArray='';
    $http.post('https://soma.ihangmei.com/soma/api/analytics/train/historic').success(function (data,$rootScope) {
        //console.log(data);
        angular.forEach(data.data,function(i, key) {
            var strData = key.slice(0, 10);
            var str = (data.data[key].Bricked-1) + ';' + data.data[key].Bricked + ';' + (data.data[key].Bricked+1) + '\n';
            $rootScope.tempArray += strData + ',' +str;
            //console.log(_tempArray)
        });
    });
    console.log($rootScope.tempArray)


    var temp = "Date,NY\n20070101,46;51;56\n20070102,43;48;52\n20070103,39;46;53\n20070104,44;51;58\n20070105,51;57;62\n20070106,55;64;72\n20070107,46;51;56\n20070108,40;49;57\n20070109,37;41;45\n20070110,31;35;38\n20070111,29;35;41\n";  
    // return "Date,NY,SF\n20070101,46;51;56,43;45;48\n20070102,43;48;52,48;56;63\n20070103,39;46;53,50;54;62\n20070104,44;51;58,45;52;56\n20070105,51;57;62,44;49;58\n20070106,55;64;72,40;50;60\n20070107,46;51;56,45;53;63\n20070108,40;49;57,43;53;64\n20070109,37;41;45,49;56;66\n20070110,31;35;38,45;49;54\n20070111,29;35;41,41;46;54\n20070112,39;45;50,41;44;49\n20070113,46;52;57,38;44;53\n20070114,42;44;46,36;43;51\n20070115,41;46;51,36;46;55\n20070116,25;41;57,37;45;54\n20070117,21;26;31,41;47;56\n20070118,25;32;38,38;48;61\n20070119,33;38;43,\n20070120,23;29;35,\n20070121,21;26;31,55;60;68\n20070122,28;31;34,44;54;66\n20070123,30;34;38,41;51;64\n20070124,34;37;40,42;51;64\n20070125,17;27;37,45;49;56\n20070126,11;18;24,44;48;52\n20070127,22;32;41,47;52;58\n20070128,32;38;43,48;52;60\n20070129,24;28;32,47;55;64\n20070130,23;30;37,51;54;56\n20070131,27;31;34,49;52;56\n20070201,28;33;37,46;50;52\n20070202,34;37;39,47;51;57\n20070203,25;32;38,42;51;62\n20070204,18;25;31,44;55;69\n20070205,10;15;20,48;55;68\n20070206,13;20;26,48;54;62\n20070207,14;21;27,51;56;62\n20070208,17;24;30,49;54;56\n20070209,20;27;33,55;56;58\n20070210,25;30;34,55;57;60\n20070211,21;28;34,51;55;59\n20070212,30;36;41,48;51;59\n20070213,23;29;34,48;52;58\n20070214,19;25;31,44;52;60\n20070215,17;21;25,49;55;65\n20070216,16;23;30,48;59;72\n20070217,22;29;36,51;62;77\n20070218,20;28;35,48;54;61\n20070219,14;22;29,48;53;61\n20070220,29;39;49,49;53;59\n20070221,39;44;49,50;54;61\n20070222,33;40;46,43;48;54\n20070223,23;32;40,43;48;54\n20070224,22;33;43,46;51;60\n20070225,26;33;39,49;52;55\n20070226,31;34;37,44;49;54\n20070227,35;39;43,40;45;52\n20070228,37;42;46,42;47;53\n20070301,33;39;45,44;49;55\n20070302,36;49;61,45;52;60\n20070303,37;48;59,48;58;68\n20070304,35;39;42,53;60;72\n20070305,23;33;42,52;58;67\n20070306,14;19;24,49;54;66\n20070307,14;20;25,50;53;60\n20070308,20;28;35,48;52;60\n20070309,15;25;34,49;53;58\n20070310,30;43;55,50;57;69\n20070311,40;45;50,53;63;79\n20070312,36;46;56,57;65;78\n20070313,44;49;54,52;58;68\n20070314,46;56;66,50;54;62\n20070315,37;53;69,51;59;75\n20070316,28;33;38,53;62;76\n20070317,27;35;42,50;53;57\n20070318,29;35;41,50;53;61\n20070319,33;38;43,49;53;59\n20070320,35;43;50,50;54;58\n20070321,27;34;41,48;55;62\n20070322,41;54;67,50;58;71\n20070323,46;54;62,49;56;67\n20070324,40;48;55,50;52;56\n20070325,38;46;53,50;53;56\n20070326,41;48;55,48;53;60\n20070327,48;62;75,46;50;56\n20070328,47;55;63,47;52;61\n20070329,40;48;56,49;57;68\n20070330,42;55;67,48;53;64\n20070331,44;51;57,49;55;68\n20070401,42;47;51,49;52;58\n20070402,42;48;54,48;54;68\n20070403,43;52;60,48;54;66\n20070404,41;43;45,50;56;67\n20070405,36;42;47,50;54;63\n20070406,34;39;43,48;51;55\n20070407,34;39;43,51;54;59\n20070408,32;37;42,51;55;61\n20070409,35;42;49,52;55;59\n20070410,36;43;50,50;56;67\n20070411,37;44;51,51;54;57\n20070412,41;43;45,48;53;58\n20070413,44;47;50,49;54;64\n20070414,42;50;57,50;53;56\n20070415,42;49;56,48;55;65\n20070416,40;47;54,52;58;69\n20070417,43;47;50,48;52;56\n20070418,43;48;53,46;50;55\n20070419,46;55;63,46;50;55\n20070420,46;59;71,47;52;60\n20070421,48;63;78,49;52;57\n20070422,52;64;76,51;55;59\n20070423,54;70;85,48;55;65\n20070424,59;67;75,49;54;63\n20070425,49;56;63,51;54;59\n20070426,48;55;62,50;54;63\n20070427,48;52;55,53;62;78\n20070428,53;63;72,52;61;78\n20070429,55;61;66,50;53;61\n20070430,55;68;81,51;57;66\n20070501,52;62;71,50;55;61\n20070502,51;61;71,52;56;62\n20070503,53;63;72,50;53;58\n20070504,52;62;71,50;54;60\n20070505,52;63;73,50;59;70\n20070506,48;55;62,57;72;86\n20070507,48;57;65,69;76;88\n20070508,50;60;70,53;68;79\n20070509,58;70;82,50;55;61\n20070510,62;71;79,50;54;61\n20070511,61;70;78,49;52;56\n20070512,55;64;73,50;54;60\n20070513,53;61;68,47;55;66\n20070514,52;61;69,49;53;60\n20070515,59;73;87,49;52;59\n20070516,63;76;89,48;55;66\n20070517,55;62;68,49;54;61\n20070518,49;52;55,50;55;63\n20070519,52;55;57,52;57;66\n20070520,55;67;78,51;57;67\n20070521,56;65;74,49;59;69\n20070522,55;64;73,52;61;71\n20070523,58;66;74,56;68;83\n20070524,61;75;88,50;56;69\n20070525,69;82;95,50;52;60\n20070526,73;80;86,50;52;60\n20070527,68;77;85,50;52;56\n20070528,67;77;87,50;55;64\n20070529,63;72;81,51;54;59\n20070530,62;73;84,53;54;57\n20070531,67;79;90,52;54;57\n20070601,64;78;92,50;53;59\n20070602,73;82;90,50;52;56\n20070603,65;73;81,51;54;61\n20070604,60;66;71,55;59;65\n20070605,68;77;85,54;57;61\n20070606,58;65;72,52;56;62\n20070607,58;67;76,51;57;68\n20070608,66;76;85,51;54;62\n20070609,64;73;81,50;58;66\n20070610,63;69;74,53;58;64\n20070611,66;76;85,52;58;66\n20070612,68;76;84,52;60;72\n20070613,59;65;70,57;68;80\n20070614,58;63;67,57;67;84\n20070615,62;68;73,54;62;76\n20070616,64;73;82,52;55;59\n20070617,69;80;90,52;59;70\n20070618,70;78;85,52;56;64\n20070619,69;76;83,54;58;65\n20070620,70;75;80,54;56;61\n20070621,65;75;85,53;59;67\n20070622,65;71;77,53;59;67\n20070623,61;69;77,53;58;67\n20070624,63;74;84,52;58;66\n20070625,71;78;84,52;60;75\n20070626,73;84;94,51;57;65\n20070627,73;84;95,53;59;67\n20070628,73;84;94,54;61;72\n20070629,70;75;79,55;61;72\n20070630,68;76;84,53;58;66\n20070701,64;70;75,52;59;68\n20070702,60;68;76,55;62;71\n20070703,65;74;82,54;59;64\n20070704,68;71;73,55;64;75\n20070705,69;76;82,55;62;72\n20070706,70;79;87,53;57;62\n20070707,72;80;88,52;54;58\n20070708,76;85;93,53;57;65\n20070709,71;84;96,55;59;67\n20070710,75;84;93,56;61;70\n20070711,74;81;88,59;65;74\n20070712,69;77;84,58;66;75\n20070713,75;80;85,57;65;78\n20070714,70;78;86,56;60;69\n20070715,75;83;91,57;63;72\n20070716,72;78;83,56;60;67\n20070717,71;80;88,56;62;73\n20070718,71;75;79,61;66;74\n20070719,71;82;92,58;62;72\n20070720,69;75;81,58;64;73\n20070721,67;76;84,60;66;76\n20070722,70;77;84,60;65;74\n20070723,65;71;76,58;64;76\n20070724,63;73;83,56;60;71\n20070725,71;78;85,56;59;64\n20070726,73;80;86,55;58;72\n20070727,75;82;88,55;60;72\n20070728,74;81;88,55;61;70\n20070729,74;77;80,55;60;74\n20070730,72;80;88,55;63;80\n20070731,74;82;90,54;59;68\n20070801,75;84;93,55;60;69\n20070802,76;87;98,55;61;70\n20070803,73;83;93,54;60;71\n20070804,75;84;92,54;58;67\n20070805,72;78;84,55;58;62\n20070806,75;81;86,56;60;68\n20070807,78;84;90,56;61;69\n20070808,75;85;95,56;59;65\n20070809,74;80;85,57;61;72\n20070810,59;67;75,55;62;73\n20070811,60;72;83,56;60;68\n20070812,73;81;88,54;60;70\n20070813,75;82;88,55;61;74\n20070814,71;77;83,55;60;71\n20070815,72;81;89,54;61;70\n20070816,77;82;87,57;62;72\n20070817,66;77;87,53;64;77\n20070818,62;69;76,56;62;71\n20070819,62;68;73,57;64;75\n20070820,61;67;73,59;65;74\n20070821,58;60;62,58;65;80\n20070822,58;64;69,57;65;80\n20070823,63;71;79,56;62;73\n20070824,67;77;86,58;62;70\n20070825,75;83;91,58;62;71\n20070826,75;80;85,57;61;68\n20070827,71;77;83,56;61;71\n20070828,72;78;84,55;66;82\n20070829,72;79;86,61;69;83\n20070830,73;81;88,62;71;82\n20070831,72;77;81,59;64;72\n20070901,66;73;79,58;66;80\n20070902,63;72;80,58;67;86\n20070903,67;77;86,58;63;71\n20070904,73;79;85,60;64;72\n20070905,69;74;79,58;68;84\n20070906,70;77;83,60;64;69\n20070907,72;80;88,59;63;71\n20070908,74;82;90,58;61;66\n20070909,74;80;86,59;61;66\n20070910,73;76;78,60;64;71\n20070911,72;75;77,59;62;70\n20070912,66;72;77,59;62;65\n20070913,65;71;76,59;65;74\n20070914,67;72;77,60;66;74\n20070915,58;65;71,58;62;72\n20070916,55;62;69,59;63;71\n20070917,56;63;70,56;62;71\n20070918,57;65;72,56;60;67\n20070919,59;68;76,54;57;63\n20070920,64;74;83,54;59;72\n20070921,68;76;84,58;62;73\n20070922,68;72;76,58;60;65\n20070923,67;75;82,56;61;67\n20070924,65;73;81,52;62;78\n20070925,66;78;89,54;66;86\n20070926,72;81;90,58;70;92\n20070927,73;79;84,57;61;68\n20070928,64;71;77,55;59;63\n20070929,62;69;76,51;60;74\n20070930,61;67;73,51;60;71\n20071001,62;67;71,56;62;71\n20071002,60;68;75,54;62;76\n20071003,66;73;80,53;59;67\n20071004,69;77;85,53;55;59\n20071005,67;75;83,51;56;62\n20071006,68;77;85,48;57;68\n20071007,67;75;82,51;59;75\n20071008,67;78;89,52;59;78\n20071009,61;72;83,52;59;67\n20071010,62;68;73,\n20071011,59;64;69,\n20071012,51;57;62,\n20071013,49;56;63,\n20071014,52;59;65,\n20071015,53;61;69,\n20071016,58;65;71,\n20071017,60;67;73,\n20071018,64;72;79,\n20071019,66;70;74,\n20071020,64;68;72,\n20071021,59;68;76,\n20071022,62;70;77,\n20071023,67;74;81,\n20071024,54;62;70,\n20071025,52;57;61,\n20071026,53;57;60,\n20071027,59;65;70,\n20071028,46;53;59,\n20071029,43;49;54,\n20071030,49;57;64,\n20071031,51;58;64,53;60;67\n20071101,52;60;67,51;56;72\n20071102,46;51;56,49;60;82\n20071103,47;50;53,50;61;79\n20071104,49;53;56,53;62;80\n20071105,48;53;58,50;54;59\n20071106,45;52;58,50;54;61\n20071107,42;46;50,50;53;59\n20071108,38;43;48,53;56;60\n20071109,40;44;48,53;58;66\n20071110,39;43;47,52;57;62\n20071111,34;41;48,51;56;64\n20071112,40;46;52,47;56;68\n20071113,49;55;61,57;61;73\n20071114,44;53;61,53;61;72\n20071115,45;54;62,56;59;67\n20071116,39;44;48,54;56;61\n20071117,38;43;47,53;56;61\n20071118,41;44;47,53;57;63\n20071119,39;43;46,50;56;60\n20071120,40;45;50,48;54;63\n20071121,44;51;58,44;53;66\n20071122,42;54;66,46;54;68\n20071123,32;37;42,44;57;72\n20071124,28;34;40,44;54;65\n20071125,37;44;50,51;55;62\n20071126,41;52;63,47;54;65\n20071127,46;56;65,50;55;65\n20071128,37;42;47,47;56;66\n20071129,42;47;52,48;53;64\n20071130,37;40;43,45;49;57\n20071201,26;34;42,46;49;56\n20071202,21;30;38,47;54;59\n20071203,34;42;49,52;59;64\n20071204,30;33;35,31;57;69\n20071205,29;32;34,52;56;63\n20071206,23;30;37,51;52;54\n20071207,34;35;36,48;52;57\n20071208,35;40;45,42;49;56\n20071209,36;39;41,44;51;59\n20071210,37;40;43,45;50;59\n20071211,36;41;46,46;52;59\n20071212,37;46;54,42;49;57\n20071213,30;34;38,42;49;59\n20071214,32;39;45,40;48;57\n20071215,30;34;38,43;49;56\n20071216,31;36;40,46;51;57\n20071217,27;31;35,48;52;56\n20071218,31;35;38,49;52;55\n20071219,35;41;47,46;51;57\n20071220,38;42;45,45;51;56\n20071221,36;39;42,43;48;54\n20071222,36;39;42,39;46;53\n20071223,41;52;62,44;51;61\n20071224,39;46;52,49;53;60\n20071225,38;41;44,41;49;57\n20071226,34;38;41,44;48;55\n20071227,37;42;46,41;46;52\n20071228,43;47;50,41;44;45\n20071229,43;48;53,45;48;52\n20071230,37;41;44,46;49;53\n20071231,36;41;46,38;47;56\n20080101,35;42;49,42;50;58\n20080102,19;29;39,43;50;60\n20080103,15;19;23,51;53;58\n20080104,19;28;37,51;53;59\n20080105,33;38;43,46;49;51\n20080106,37;42;47,42;47;51\n20080107,42;52;61,43;48;53\n20080108,52;58;64,44;49;53\n20080109,49;58;66,46;49;52\n20080110,42;47;51,48;50;51\n20080111,41;49;57,48;51;55\n20080112,40;45;49,46;51;58\n20080113,37;42;47,44;51;60\n20080114,34;37;39,46;51;58\n20080115,34;37;40,44;49;57\n20080116,31;36;40,41;50;60\n20080117,30;36;41,44;50;61\n20080118,37;43;49,42;52;63\n20080119,34;36;37,42;50;62\n20080120,19;27;35,46;49;53\n20080121,16;22;28,43;45;46\n20080122,25;33;40,42;44;47\n20080123,32;37;41,42;44;49\n20080124,26;31;35,43;44;45\n20080125,23;29;34,45;49;52\n20080126,27;31;35,52;55;62\n20080127,31;35;39,45;51;54\n20080128,29;36;43,42;46;51\n20080129,33;39;44,41;45;49\n20080130,34;42;50,42;47;54\n20080131,30;35;40,45;48;52\n20080201,33;45;56,40;46;52\n20080202,36;40;44,42;47;53\n20080203,33;42;50,46;49;52\n20080204,34;39;43,43;49;58\n20080205,38;45;52,40;49;58\n20080206,40;55;69,47;50;55\n20080207,39;45;50,43;50;58\n20080208,36;41;46,46;53;65\n20080209,37;41;45,46;57;69\n20080210,17;31;45,49;57;70\n20080211,12;19;25,48;56;69\n20080212,19;25;31,46;54;70\n20080213,31;43;54,48;57;65\n20080214,30;36;41,49;54;64\n20080215,32;40;48,46;52;60\n20080216,25;30;35,45;51;64\n20080217,30;42;53,46;50;55\n20080218,42;53;64,47;50;58\n20080219,29;36;42,48;51;53\n20080220,25;29;33,48;51;57\n20080221,22;28;34,48;51;56\n20080222,26;30;34,46;50;56\n20080223,30;33;36,43;48;54\n20080224,27;34;40,52;54;58\n20080225,33;41;49,49;55;63\n20080226,38;43;48,48;58;70\n20080227,24;36;47,52;58;71\n20080228,20;25;29,48;56;74\n20080229,19;28;36,48;52;62\n20080301,34;40;45,50;53;59\n20080302,30;36;43,49;59;71\n20080303,35;44;52,47;57;72\n20080304,43;53;62,46;55;68\n20080305,39;49;58,46;55;71\n20080306,36;43;49,47;55;65\n20080307,35;40;45,48;56;69\n20080308,38;48;57,49;55;66\n20080309,31;37;43,47;58;76\n20080310,28;37;46,52;58;70\n20080311,36;43;49,50;54;66\n20080312,36;42;48,48;53;63\n20080313,33;39;45,30;55;61\n20080314,39;46;53,49;52;58\n20080315,42;49;55,43;50;57\n20080316,36;42;47,47;55;68\n20080317,32;41;49,49;56;66\n20080318,36;41;46,48;55;64\n20080319,42;47;52,49;52;60\n20080320,37;48;59,46;51;59\n20080321,35;41;47,47;54;67\n20080322,35;43;50,46;55;73\n20080323,32;40;48,46;54;66\n20080324,33;41;49,47;54;64\n20080325,32;39;46,49;53;59\n20080326,43;52;60,48;52;60\n20080327,44;47;50,45;50;59\n20080328,40;45;49,46;52;60\n20080329,34;41;47,48;52;59\n20080330,28;37;46,44;49;56\n20080331,39;48;57,41;50;62\n20080401,55;60;64,49;53;60\n20080402,39;47;54,48;54;62\n20080403,35;42;49,48;53;62\n20080404,42;49;55,45;50;57\n20080405,49;54;59,46;50;57\n20080406,42;46;50,48;52;59\n20080407,41;46;51,45;51;59\n20080408,41;48;55,47;50;55\n20080409,39;48;56,47;52;59\n20080410,48;62;75,46;55;66\n20080411,47;54;61,50;65;84\n20080412,47;61;74,57;71;87\n20080413,44;50;55,51;64;80\n20080414,41;49;56,48;52;58\n20080415,43;51;59,45;51;60\n20080416,46;56;65,46;51;66\n20080417,45;59;72,49;57;75\n20080418,50;67;83,48;52;60\n20080419,51;62;72,45;49;55\n20080420,48;52;56,43;48;55\n20080421,47;52;57,44;49;57\n20080422,48;59;69,48;54;64\n20080423,52;64;76,48;53;60\n20080424,58;68;77,45;53;65\n20080425,55;63;70,48;57;69\n20080426,52;58;63,51;62;78\n20080427,49;52;55,53;62;77\n20080428,48;54;59,49;56;66\n20080429,47;53;58,50;53;61\n20080430,44;51;57,47;52;60\n20080501,45;52;59,47;55;66\n20080502,50;53;55,49;53;60\n20080503,48;52;56,48;54;63\n20080504,49;61;72,49;52;59\n20080505,51;61;71,48;53;61\n20080506,52;65;77,49;56;68\n20080507,58;66;73,49;55;65\n20080508,64;69;74,48;53;62\n20080509,50;57;64,46;54;65\n20080510,50;59;67,47;54;64\n20080511,50;56;61,48;54;64\n20080512,48;53;57,50;56;66\n20080513,52;61;70,49;61;78\n20080514,53;64;74,55;69;85\n20080515,54;64;73,68;81;102\n20080516,51;56;61,65;77;99\n20080517,50;62;74,52;63;73\n20080518,56;62;67,51;54;62\n20080519,51;56;61,50;54;60\n20080520,50;54;58,52;56;63\n20080521,50;60;69,50;57;65\n20080522,50;56;61,52;58;68\n20080523,52;60;68,49;55;65\n20080524,56;63;70,51;54;62\n20080525,58;68;77,50;56;64\n20080526,60;68;76,50;55;62\n20080527,60;73;85,51;56;64\n20080528,53;61;69,52;58;67\n20080529,54;66;78,53;57;63\n20080530,62;72;82,52;56;66\n20080531,63;70;77,52;54;60\n20080601,67;76;84,49;55;63\n20080602,61;71;80,49;54;62\n20080603,65;75;84,51;55;62\n20080604,58;65;71,51;54;62\n20080605,62;67;72,51;58;70\n20080606,59;66;73,51;57;66\n20080607,60;78;96,50;59;70\n20080608,78;87;96,52;61;74\n20080609,76;88;99,54;66;83\n20080610,73;87;100,53;64;77\n20080611,72;80;88,57;65;79\n20080612,71;79;86,55;67;93\n20080613,65;74;82,50;56;65\n20080614,70;80;90,52;56;65\n20080615,65;74;83,50;54;61\n20080616,64;71;78,49;52;58\n20080617,64;71;77,48;60;78\n20080618,60;68;75,54;65;79\n20080619,60;69;77,57;72;92\n20080620,63;71;79,63;80;102\n20080621,65;75;85,56;75;85\n20080622,71;76;80,51;56;63\n20080623,70;77;83,50;52;56\n20080624,70;76;81,50;58;71\n20080625,68;77;85,51;56;64\n20080626,74;80;85,50;57;70\n20080627,76;81;85,52;57;62\n20080628,70;80;90,55;58;64\n20080629,74;82;90,53;57;65\n20080630,73;79;85,52;57;68\n20080701,71;79;86,53;58;67\n20080702,69;78;87,52;56;65\n20080703,73;83;93,54;60;71\n20080704,71;76;80,55;60;69\n20080705,69;72;75,56;62;74\n20080706,68;74;79,56;62;74\n20080707,70;78;85,56;66;80\n20080708,76;84;91,59;69;86\n20080709,75;81;87,62;69;82\n20080710,73;80;87,59;64;72\n20080711,69;79;89,58;64;73\n20080712,73;80;86,60;64;73\n20080713,72;79;85,60;64;71\n20080714,70;77;83,59;62;68\n20080715,72;81;90,59;62;70\n20080716,71;81;90,57;60;66\n20080717,74;83;92,54;58;65\n20080718,76;86;96,52;56;64\n20080719,81;89;97,53;57;63\n20080720,79;87;94,52;55;63\n20080721,75;84;93,54;57;63\n20080722,73;80;87,52;60;73\n20080723,70;76;82,54;61;76\n20080724,70;78;85,52;60;72\n20080725,71;79;87,52;61;72\n20080726,74;81;88,55;65;79\n20080727,70;76;82,55;57;62\n20080728,69;79;88,54;57;65\n20080729,75;83;90,55;59;68\n20080730,73;80;87,56;60;69\n20080731,75;83;90,55;58;69\n20080801,74;81;88,55;62;74\n20080802,69;76;82,55;64;79\n20080803,68;76;83,54;57;62\n20080804,68;77;85,53;56;65\n20080805,73;79;84,52;56;64\n20080806,72;80;88,54;57;68\n20080807,68;77;86,54;57;66\n20080808,68;75;82,54;58;66\n20080809,66;74;82,54;59;67\n20080810,69;76;82,53;64;79\n20080811,60;67;73,56;63;78\n20080812,63;72;81,55;63;79\n20080813,69;75;81,56;64;82\n20080814,68;76;84,55;61;74\n20080815,67;74;81,55;62;75\n20080816,66;74;82,57;60;66\n20080817,69;77;85,57;60;69\n20080818,73;81;88,58;62;68\n20080819,65;74;82,58;62;73\n20080820,61;69;77,58;65;74\n20080821,66;74;81,60;64;73\n20080822,69;76;83,58;62;72\n20080823,67;74;80,57;62;71\n20080824,71;76;81,57;64;73\n20080825,68;77;85,58;62;72\n20080826,62;71;80,55;61;79\n20080827,64;71;77,59;70;88\n20080828,66;75;84,62;72;86\n20080829,68;74;80,59;67;84\n20080830,68;76;84,57;61;70\n20080831,69;77;84,54;61;73\n20080901,68;76;84,57;68;83\n20080902,71;79;86,58;68;85\n20080903,70;76;81,59;69;87\n20080904,72;81;90,60;73;94\n20080905,73;80;86,63;74;92\n20080906,72;78;83,63;72;84\n20080907,70;77;83,56;62;70\n20080908,68;76;83,55;60;67\n20080909,67;73;78,58;60;65\n20080910,63;68;73,57;61;68\n20080911,62;68;73,56;60;66\n20080912,65;69;72,55;57;63\n20080913,68;74;79,55;59;67\n20080914,71;80;89,55;59;67\n20080915,67;76;84,54;58;67\n20080916,63;67;70,54;58;65\n20080917,61;68;75,56;60;67\n20080918,61;68;74,53;60;70\n20080919,55;61;66,55;62;72\n20080920,54;61;68,59;62;69\n20080921,59;70;80,57;61;70\n20080922,62;68;73,55;64;79\n20080923,57;63;69,56;67;85\n20080924,58;64;69,57;64;74\n20080925,56;62;67,57;65;76\n20080926,60;64;68,56;63;75\n20080927,64;67;69,54;62;78\n20080928,67;71;74,55;59;65\n20080929,63;68;73,57;61;67\n20080930,62;68;73,57;63;76\n20081001,61;67;73,59;64;74\n20081002,56;60;64,60;65;73\n20081003,54;60;65,59;63;71\n20081004,53;58;63,58;62;68\n20081005,54;59;63,57;62;69\n20081006,51;57;63,59;64;76\n20081007,48;56;64,56;64;79\n20081008,52;59;66,58;64;75\n20081009,60;69;77,54;61;71\n20081010,61;67;73,54;58;64\n20081011,57;64;71,55;60;67\n20081012,57;64;71,55;62;72\n20081013,60;68;75,58;64;77\n20081014,59;64;68,53;63;80\n20081015,60;66;71,55;65;83\n20081016,57;68;78,58;68;86\n20081017,52;56;60,59;69;86\n20081018,44;51;57,53;58;65\n20081019,43;51;58,52;54;57\n20081020,45;54;62,51;57;65\n20081021,46;55;63,52;62;79\n20081022,42;47;52,55;67;83\n20081023,40;47;54,61;70;85\n20081024,43;50;57,59;66;86\n20081025,54;61;67,57;67;82\n20081026,51;57;63,52;57;66\n20081027,50;57;64,51;55;65\n20081028,41;46;51,50;55;65\n20081029,40;44;48,49;54;64\n20081030,38;44;49,51;56;61\n20081031,42;53;64,58;61;66\n20081101,52;59;65,34;58;63\n20081102,39;46;52,\n20081103,44;52;59,53;56;61\n20081104,50;57;64,51;54;61\n20081105,55;59;63,46;55;66\n20081106,59;62;65,54;60;72\n20081107,58;62;65,52;60;75\n20081108,55;58;60,53;56;62\n20081109,50;53;56,52;56;63\n20081110,44;48;51,49;55;62\n20081111,40;46;51,53;58;64\n20081112,43;47;50,56;59;68\n20081113,47;53;58,52;61;74\n20081114,55;59;63,55;67;80\n20081115,58;62;65,60;70;82\n20081116,42;52;61,58;66;78\n20081117,39;43;47,57;66;77\n20081118,31;36;41,52;56;62\n20081119,28;33;37,52;54;57\n20081120,31;35;39,54;58;66\n20081121,27;33;39,47;55;67\n20081122,25;29;33,47;55;68\n20081123,26;32;37,49;56;69\n20081124,33;43;53,49;56;64\n20081125,38;43;48,52;57;61\n20081126,38;42;45,53;55;58\n20081127,37;41;44,53;55;61\n20081128,38;44;50,50;54;60\n20081129,38;42;45,50;57;68\n20081130,36;40;44,51;58;70\n20081201,43;49;55,53;55;57\n20081202,38;42;46,52;56;64\n20081203,35;39;43,50;54;59\n20081204,39;45;51,47;53;62\n20081205,34;38;42,46;54;66\n20081206,31;34;37,47;53;62\n20081207,22;30;37,44;50;56\n20081208,20;26;31,46;51;55\n20081209,31;44;56,42;50;59\n20081210,44;54;63,47;52;63\n20081211,38;41;44,48;54;63\n20081212,33;40;46,48;53;60\n20081213,28;31;33,45;49;55\n20081214,30;40;49,43;46;50\n20081215,48;58;67,41;46;51\n20081216,31;45;59,39;42;47\n20081217,33;39;44,39;45;53\n20081218,37;40;43,38;47;55\n20081219,30;35;39,45;50;55\n20081220,23;28;32,39;46;54\n20081221,26;33;40,46;48;51\n20081222,14;22;29,44;49;54\n20081223,20;26;31,43;48;53\n20081224,31;45;58,46;50;54\n20081225,35;47;58,45;48;53\n20081226,32;37;41,\n20081227,40;44;48,\n20081228,47;56;65,\n20081229,38;44;49,47;53;63\n20081230,34;39;44,46;51;58\n20081231,19;28;36,45;48;55\n20090101,16;22;27,44;48;51\n20090102,24;30;36,45;50;55\n20090103,30;35;39,40;46;54\n20090104,26;35;43,36;45;54\n20090105,39;42;44,45;46;48\n20090106,31;35;39,44;49;54\n20090107,32;36;40,44;47;52\n20090108,30;35;39,46;49;56\n20090109,27;30;33,41;51;62\n20090110,24;27;30,48;56;66\n20090111,26;29;32,44;55;70\n20090112,23;29;34,49;62;76\n20090113,29;35;41,55;64;75\n20090114,18;28;37,48;59;70\n20090115,17;20;23,48;60;74\n20090116,11;15;18,48;60;72\n20090117,8;15;22,48;57;68\n20090118,22;28;33,49;58;70\n20090119,26;30;33,46;58;71\n20090120,22;26;30,47;58;71\n20090121,19;24;28,52;57;62\n20090122,22;30;37,51;53;55\n20090123,28;37;45,53;55;56\n20090124,18;33;47,49;52;55\n20090125,15;22;28,46;50;55\n20090126,20;25;30,43;49;57\n20090127,26;29;31,43;50;58\n20090128,24;33;42,43;51;61\n20090129,27;32;37,44;56;70\n20090130,28;32;35,47;56;69\n20090131,21;25;28,44;52;69\n20090201,28;41;53,44;54;70\n20090202,33;43;52,47;57;69\n20090203,26;32;37,47;57;71\n20090204,18;25;31,47;55;67\n20090205,14;19;24,51;54;58\n20090206,17;25;32,51;53;55\n20090207,24;37;49,48;54;63\n20090208,38;49;59,45;50;56\n20090209,35;41;46,43;47;56\n20090210,33;42;50,38;47;54\n20090211,38;51;63,43;48;56\n20090212,44;51;57,44;48;55\n20090213,32;38;44,43;46;54\n20090214,29;35;41,43;48;54\n20090215,30;36;42,46;48;51\n20090216,29;35;40,47;49;56\n20090217,26;34;41,47;50;54\n20090218,32;38;43,45;52;60\n20090219,28;39;50,43;54;66\n20090220,24;29;34,49;57;68\n20090221,28;35;42,50;56;63\n20090222,32;38;43,53;55;58\n20090223,25;30;34,52;56;60\n20090224,23;30;37,50;52;53\n20090225,26;34;41,51;55;61\n20090226,35;43;50,48;54;60\n20090227,40;49;58,46;53;62\n20090228,32;43;54,50;56;66\n20090301,28;32;35,54;57;59\n20090302,18;23;28,53;56;61\n20090303,14;21;28,48;52;58\n20090304,19;27;35,44;50;58\n20090305,28;36;43,46;51;60\n20090306,38;46;54,47;52;58\n20090307,46;58;69,43;52;65\n20090308,44;53;62,50;53;60\n20090309,37;42;46,\n20090310,37;42;46,\n20090311,41;50;59,\n20090312,32;38;44,\n20090313,27;33;38,\n20090314,34;42;50,\n20090315,42;48;53,\n20090316,38;42;46,\n20090317,36;44;52,\n20090318,40;51;61,\n20090319,41;46;50,\n20090320,33;39;44,\n20090321,32;40;47,53;55;60\n20090322,36;45;53,45;50;58\n20090323,30;36;42,44;51;59\n20090324,29;38;47,43;54;66\n20090325,36;44;52,47;56;68\n20090326,40;43;45,51;58;68\n20090327,43;53;63,52;61;75\n20090328,42;48;53,51;59;71\n20090329,42;47;52,48;56;64\n20090330,42;47;51,51;57;68\n20090331,40;50;60,47;56;70\n20090401,42;46;50,50;57;68\n20090402,42;51;59,48;52;60\n20090403,44;53;61,47;53;61\n20090404,48;52;55,43;55;70\n20090405,45;56;66,46;61;80\n20090406,44;48;51,51;61;79\n20090407,40;45;50,51;55;63\n20090408,37;43;49,50;55;64\n20090409,38;50;61,50;53;58\n20090410,46;52;58,48;54;63\n20090411,43;47;50,46;53;61\n20090412,38;43;48,49;56;66\n20090413,36;47;57,49;56;65\n20090414,43;48;53,45;50;57\n20090415,43;49;54,46;46;47\n20090416,44;53;62,44;52;61\n20090417,44;57;69,46;54;70\n20090418,56;67;78,52;62;74\n20090419,47;54;61,51;70;92\n20090420,43;47;51,60;77;99\n20090421,47;52;56,64;78;93\n20090422,49;53;57,52;62;71\n20090423,45;51;57,50;54;61\n20090424,45;57;69,48;52;59\n20090425,50;69;88,45;52;60\n20090426,63;77;91,46;53;63\n20090427,53;66;79,48;51;57\n20090428,68;79;89,47;52;60\n20090429,50;59;68,46;53;61\n20090430,46;54;61,47;54;69\n20090501,54;63;72,51;56;62\n20090502,56;62;67,55;59;65\n20090503,53;56;58,53;59;66\n20090504,51;54;56,52;60;71\n20090505,51;54;56,57;61;69\n20090506,49;57;65,55;61;73\n20090507,52;63;73,51;61;72\n20090508,56;65;74,51;60;71\n20090509,57;68;78,50;57;69\n20090510,55;63;70,50;57;68\n20090511,51;59;66,50;56;65\n20090512,52;60;68,47;57;67\n20090513,51;60;68,50;59;70\n20090514,57;62;66,51;58;69\n20090515,58;66;74,51;58;67\n20090516,58;65;71,54;70;93\n20090517,53;59;64,55;70;92\n20090518,50;55;59,51;55;63\n20090519,50;60;69,51;56;64\n20090520,53;67;81,49;55;62\n20090521,64;73;81,49;54;65\n20090522,63;75;86,51;54;63\n20090523,59;68;76,50;52;56\n20090524,57;71;84,49;51;56\n20090525,64;73;81,49;54;63\n20090526,53;60;66,49;59;73\n20090527,52;56;60,52;57;64\n20090528,56;58;59,51;55;62\n20090529,55;65;74,52;57;63\n20090530,63;71;78,54;56;62\n20090531,58;70;82,53;55;60\n20090601,53;61;69,53;56;61\n20090602,63;72;80,52;57;68\n20090603,54;64;73,53;58;67\n20090604,54;62;69,55;59;67\n20090605,55;59;62,57;62;70\n20090606,58;68;78,57;61;68\n20090607,66;74;82,56;61;67\n20090608,63;70;77,55;58;62\n20090609,60;67;73,56;60;66\n20090610,59;62;65,57;61;69\n20090611,59;61;63,56;60;68\n20090612,62;71;80,56;60;67\n20090613,64;68;71,56;62;70\n20090614,61;67;72,57;62;69\n20090615,58;65;71,58;61;68\n20090616,56;62;68,57;59;66\n20090617,57;63;69,57;60;66\n20090618,62;64;66,56;63;75\n20090619,63;71;79,55;62;71\n20090620,63;68;72,53;59;69\n20090621,63;71;78,53;60;70\n20090622,67;71;75,54;62;75\n20090623,67;74;80,54;63;77\n20090624,66;71;75,54;59;69\n20090625,65;73;81,54;58;66\n20090626,65;75;85,53;60;70\n20090627,66;74;81,53;68;85\n20090628,68;75;82,60;68;78\n20090629,68;76;83,56;61;68\n20090630,67;76;84,56;61;68\n20090701,67;73;79,56;61;68\n20090702,66;72;77,56;60;66\n20090703,68;74;80,55;58;65\n20090704,68;75;81,54;60;67\n20090705,64;72;80,55;57;63\n20090706,68;77;85,54;60;69\n20090707,62;73;83,56;58;62\n20090708,61;69;77,52;62;71\n20090709,62;68;73,53;59;68\n20090710,63;69;75,54;59;66\n20090711,65;71;77,53;58;68\n20090712,66;75;83,53;60;70\n20090713,65;72;79,53;66;84\n20090714,66;74;81,58;68;86\n20090715,67;75;83,53;59;66\n20090716,73;79;85,52;57;69\n20090717,69;79;88,52;58;69\n20090718,71;78;84,54;60;74\n20090719,68;76;83,54;61;73\n20090720,68;75;82,54;57;62\n20090721,65;68;71,53;56;61\n20090722,67;75;82,52;56;60\n20090723,64;72;80,52;55;61\n20090724,65;73;80,53;56;62\n20090725,67;77;86,52;56;67\n20090726,71;79;86,53;57;72\n20090727,71;78;85,52;57;70\n20090728,73;80;87,55;58;63\n20090729,73;78;83,58;58;58\n20090730,74;81;87,56;60;65\n20090731,69;79;89,55;58;64\n20090801,69;77;85,55;58;64\n20090802,73;76;78,56;60;66\n20090803,72;79;85,56;62;70\n20090804,72;79;86,57;64;73\n20090805,74;82;89,58;62;72\n20090806,68;74;79,59;63;71\n20090807,67;74;80,58;63;71\n20090808,65;72;78,58;64;76\n20090809,71;76;81,57;66;82\n20090810,71;83;94,59;66;82\n20090811,77;85;92,58;61;66\n20090812,71;76;80,57;66;79\n20090813,70;72;74,57;63;74\n20090814,69;77;85,56;61;70\n20090815,73;81;89,55;62;76\n20090816,75;83;91,55;62;73\n20090817,77;85;93,55;58;64\n20090818,73;82;91,55;59;65\n20090819,75;83;91,57;59;65\n20090820,76;83;89,56;60;67\n20090821,75;84;92,56;62;78\n20090822,72;79;85,56;59;64\n20090823,75;81;86,55;58;65\n20090824,72;78;84,54;58;64\n20090825,71;79;86,55;60;70\n20090826,74;81;87,55;59;68\n20090827,68;74;80,53;66;87\n20090828,66;70;73,63;76;97\n20090829,67;70;73,58;73;87\n20090830,66;75;83,55;57;62\n20090831,64;68;72,54;59;69\n20090901,59;67;74,58;63;72\n20090902,61;69;77,61;70;90\n20090903,64;71;78,58;67;79\n20090904,65;74;83,54;59;66\n20090905,71;78;85,56;62;70\n20090906,64;69;74,57;62;69\n20090907,61;67;72,56;63;73\n20090908,65;70;75,55;61;71\n20090909,65;71;76,54;58;66\n20090910,61;66;71,55;65;82\n20090911,58;64;69,54;62;76\n20090912,65;67;68,58;60;64\n20090913,67;74;81,59;64;73\n20090914,65;72;79,58;63;69\n20090915,68;75;81,57;63;73\n20090916,63;67;71,58;63;72\n20090917,57;61;65,59;67;79\n20090918,58;68;77,62;70;89\n20090919,55;63;71,58;62;73\n20090920,57;66;75,57;63;76\n20090921,61;69;76,56;61;71\n20090922,66;71;75,55;62;77\n20090923,69;76;82,56;58;65\n20090924,68;75;82,55;58;65\n20090925,59;64;69,55;61;73\n20090926,55;61;66,53;66;87\n20090927,60;65;69,59;68;84\n20090928,60;67;74,56;59;63\n20090929,58;63;68,55;58;64\n20090930,51;56;60,51;58;70\n20091001,51;54;57,52;64;79\n20091002,49;58;66,55;63;77\n20091003,65;68;71,52;57;63\n20091004,59;68;76,50;55;62\n20091005,55;62;68,50;57;68\n20091006,54;61;68,50;60;74\n20091007,59;65;71,53;58;68\n20091008,55;60;64,54;57;62\n20091009,61;66;71,52;56;63\n20091010,54;61;68,51;54;59\n20091011,50;58;65,51;54;59\n20091012,46;51;55,56;60;66\n20091013,47;56;64,58;61;64\n20091014,44;49;53,63;66;76\n20091015,39;44;48,64;67;76\n20091016,39;44;49,59;67;79\n20091017,44;47;50,56;64;74\n20091018,43;45;47,56;59;63\n20091019,41;50;58,57;60;68\n20091020,47;58;68,56;59;67\n20091021,53;61;69,54;60;71\n20091022,55;66;76,57;62;72\n20091023,51;59;66,55;63;75\n20091024,53;60;67,55;61;74\n20091025,53;59;65,54;64;81\n20091026,49;55;61,57;62;71\n20091027,50;54;58,54;59;69\n20091028,51;55;58,53;58;67\n20091029,49;54;58,51;58;67\n20091030,52;56;60,52;59;74\n20091031,56;64;71,53;58;72\n20091101,50;55;60,52;63;77\n20091102,48;52;55,56;66;81\n20091103,46;54;62,56;66;80\n20091104,44;48;52,54;58;65\n20091105,44;49;53,57;61;68\n20091106,41;46;50,53;59;63\n20091107,38;46;53,49;56;65\n20091108,48;60;71,50;57;68\n20091109,48;58;67,49;56;64\n20091110,56;60;64,54;58;66\n20091111,49;54;58,54;58;65\n20091112,48;51;53,51;56;62\n20091113,49;52;55,48;53;60\n20091114,52;55;58,50;54;61\n20091115,54;59;63,44;53;65\n20091116,49;54;59,47;54;66\n20091117,46;51;55,45;54;64\n20091118,43;48;53,48;53;62\n20091119,48;55;61,44;53;63\n20091120,50;56;61,46;52;58\n20091121,47;52;57,47;51;59\n20091122,46;51;56,49;53;59\n20091123,45;53;60,44;54;66\n20091124,49;53;57,48;58;69\n20091125,49;51;53,\n20091126,49;52;54,50;55;67\n20091127,44;47;50,51;54;58\n20091128,44;48;51,\n20091129,42;51;59,49;60;71\n20091130,41;49;57,48;55;64\n20091201,38;43;48,46;52;64\n20091202,40;49;57,45;48;55\n20091203,51;59;66,46;50;58\n20091204,46;49;52,44;48;57\n20091205,37;42;47,\n";
    return temp

})


'use strict';

angular.module('app.graphs').directive('dygraphsNoRollPeriod', function (DygraphsDataDemo) {
    return {
        restrict: 'A',
        compile: function () {
            return {
                post: function (scope, element) {
                    new Dygraph(element[0], DygraphsDataDemo.data_temp, {
                        customBars: true,
                        title: 'Daily Temperatures in New York vs. San Francisco',
                        ylabel: 'Temperature (F)',
                        legend: 'always',
                        labelsDivStyles: {
                            'textAlign': 'right'
                        },
                        showRangeSelector: true
                    });
                }
            }
        }
    }
});
'use strict';

angular.module('app.graphs').directive('dygraphsNoRollTimestamp', function (DygraphsDataDemo) {
    return {
        restrict: 'A',
        compile: function () {
            return {
                post: function (scope, element) {
                    new Dygraph(element[0],DygraphsDataDemo, {
                        rollPeriod : 14,
                        showRoller : true,
                        customBars : true,
                        ylabel : 'Temperature (F)',
                        legend : 'always',
                        labelsDivStyles : {
                            'textAlign' : 'right'
                        },
                        showRangeSelector : true,
                        rangeSelectorHeight : 30,
                        rangeSelectorPlotStrokeColor : 'yellow',
                        rangeSelectorPlotFillColor : 'lightyellow'
                    });
                }
            }
        }
    }
});
"use strict";


angular.module('app.graphs').value('FlotConfig', {
    "chartBorderColor": "#efefef",
    "chartGridColor": "#DDD",
    "charMain": "#E24913",
    "chartSecond": "#6595b4",
    "chartThird": "#FF9F01",
    "chartFourth": "#7e9d3a",
    "chartFifth": "#BD362F",
    "chartMono": "#000"

});

"use strict";

angular.module('app.graphs').directive('flotAutoUpdatingChart', function($timeout, FlotConfig){
    return {
        restrict: 'E',
        replace: true,
        template: '<div class="chart"></div>',
        scope: {
            data: '='
        },
        link: function(scope, element){

// For the demo we use generated data, but normally it would be coming from the server
            var data = [], totalPoints = 200;
            function getRandomData() {
                if (data.length > 0)
                    data = data.slice(1);

                // do a random walk
                while (data.length < totalPoints) {
                    var prev = data.length > 0 ? data[data.length - 1] : 50;
                    var y = prev + Math.random() * 10 - 5;
                    if (y < 0)
                        y = 0;
                    if (y > 100)
                        y = 100;
                    data.push(y);
                }

                // zip the generated y values with the x values
                var res = [];
                for (var i = 0; i < data.length; ++i)
                    res.push([i, data[i]])
                return res;
            }

            // setup control widget
            var updateInterval = 1000;
            element.val(updateInterval).change(function() {
                var v = $(this).val();
                if (v && !isNaN(+v)) {
                    updateInterval = +v;
                    if (updateInterval < 1)
                        updateInterval = 1;
                    if (updateInterval > 2000)
                        updateInterval = 2000;
                    $(this).val("" + updateInterval);
                }
            });

            // setup plot
            var options = {
                yaxis : {
                    min : 0,
                    max : 100
                },
                xaxis : {
                    min : 0,
                    max : 100
                },
                colors : [FlotConfig.chartFourth],
                series : {
                    lines : {
                        lineWidth : 1,
                        fill : true,
                        fillColor : {
                            colors : [{
                                opacity : 0.4
                            }, {
                                opacity : 0
                            }]
                        },
                        steps : false

                    }
                }
            };
            var plot = $.plot(element, [getRandomData()], options);

            function update() {
                plot.setData([getRandomData()]);
                // since the axes don't change, we don't need to call plot.setupGrid()
                plot.draw();

                $timeout(update, updateInterval);
            }

            update();
        }
    }
});

"use strict";

angular.module('app.graphs').directive('flotBarChart', function(FlotConfig){
    return {
        restrict: 'E',
        replace: true,
        template: '<div class="chart"></div>',
        scope: {
            data: '='
        },
        link: function(scope, element){

            $.plot(element, scope.data, {
                colors : [FlotConfig.chartSecond, FlotConfig.chartFourth, "#666", "#BBB"],
                grid : {
                    show : true,
                    hoverable : true,
                    clickable : true,
                    tickColor : FlotConfig.chartBorderColor,
                    borderWidth : 0,
                    borderColor : FlotConfig.chartBorderColor
                },
                legend : true,
                tooltip : true,
                tooltipOpts : {
                    content : "<b>%x</b> = <span>%y</span>",
                    defaultTheme : false
                }

            });
        }
    }
});
'use strict';

angular.module('app.graphs').directive('flotBasic', function () {
    return {
        restrict: 'A',
        scope:{
            data:'=flotData',
            options: '=flotOptions'
        },
        link: function (scope, element, attributes) {
            var plot = $.plot(element, scope.data, scope.options);

            scope.$watchCollection('data', function(newData, oldData){
                if(newData != oldData){
                    plot.setData(newData);
                    plot.draw();
                }
            });
        }
    }
});
"use strict";

angular.module('app.graphs').directive('flotFillChart', function(){
    return {
        restrict: 'E',
        replace: true,
        template: '<div class="chart"></div>',
        scope: {
            data: '='
        },
        link: function(scope, element){

            $.plot(element, scope.data, {

                xaxis : {
                    tickDecimals : 0
                },

                yaxis : {
                    tickFormatter : function(v) {
                        return v + " cm";
                    }
                }

            });
        }
    }
})
"use strict";

angular.module('app.graphs').directive('flotHorizontalBarChart', function(FlotConfig){
    return {
        restrict: 'E',
        replace: true,
        template: '<div class="chart"></div>',
        scope: {
            data: '='
        },
        link: function(scope, element){
            $.plot(element, scope.data, {
                colors : [FlotConfig.chartSecond, FlotConfig.chartFourth, "#666", "#BBB"],
                grid : {
                    show : true,
                    hoverable : true,
                    clickable : true,
                    tickColor : FlotConfig.chartBorderColor,
                    borderWidth : 0,
                    borderColor : FlotConfig.chartBorderColor
                },
                legend : true,
                tooltip : true,
                tooltipOpts : {
                    content : "<b>%x</b> = <span>%y</span>",
                    defaultTheme : false
                }
            });
        }
    }
});
"use strict";

angular.module('app.graphs').directive('flotPieChart', function(){
    return {
        restrict: 'E',
        replace: true,
        template: '<div class="chart"></div>',
        scope: {
            data: '='
        },
        link: function(scope, element){
            $.plot(element, scope.data, {
                series : {
                    pie : {
                        show : true,
                        innerRadius : 0.5,
                        radius : 1,
                        label : {
                            show : false,
                            radius : 2 / 3,
                            formatter : function(label, series) {
                                return '<div style="font-size:11px;text-align:center;padding:4px;color:white;">' + label + '<br/>' + Math.round(series.percent) + '%</div>';
                            },
                            threshold : 0.1
                        }
                    }
                },
                legend : {
                    show : true,
                    noColumns : 1, // number of colums in legend table
                    labelFormatter : null, // fn: string -> string
                    labelBoxBorderColor : "#000", // border color for the little label boxes
                    container : null, // container (as jQuery object) to put legend in, null means default on top of graph
                    position : "ne", // position of default legend container within plot
                    margin : [5, 10], // distance from grid edge to default legend container within plot
                    backgroundColor : "#efefef", // null means auto-detect
                    backgroundOpacity : 1 // set to 0 to avoid background
                },
                grid : {
                    hoverable : true,
                    clickable : true
                },
            });

        }
    }
});

"use strict";

angular.module('app.graphs').directive('flotSalesChart', function(FlotConfig){
    return {
        restrict: 'E',
        replace: true,
        template: '<div class="chart"></div>',
        scope: {
            data: '='
        },
        link: function(scope, element){

            $.plot(element, [scope.data], {
                xaxis : {
                    mode : "time",
                    tickLength : 5
                },
                series : {
                    lines : {
                        show : true,
                        lineWidth : 1,
                        fill : true,
                        fillColor : {
                            colors : [{
                                opacity : 0.1
                            }, {
                                opacity : 0.15
                            }]
                        }
                    },
                    //points: { show: true },
                    shadowSize : 0
                },
                selection : {
                    mode : "x"
                },
                grid : {
                    hoverable : true,
                    clickable : true,
                    tickColor : FlotConfig.chartBorderColor,
                    borderWidth : 0,
                    borderColor : FlotConfig.chartBorderColor
                },
                tooltip : true,
                tooltipOpts : {
                    content : "Your sales for <b>%x</b> was <span>$%y</span>",
                    dateFormat : "%y-%0m-%0d",
                    defaultTheme : false
                },
                colors : [FlotConfig.chartSecond]

            });

        }
    }
});
"use strict";

angular.module('app.graphs').directive('flotSinChart', function (FlotConfig) {
    return {
        restrict: 'E',
        replace: true,
        template: '<div class="chart"></div>',
        scope: {
            data: '='
        },
        link: function (scope, element) {

            var plot = $.plot(element, scope.data, {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                grid: {
                    hoverable: true,
                    clickable: true,
                    tickColor: FlotConfig.chartBorderColor,
                    borderWidth: 0,
                    borderColor: FlotConfig.chartBorderColor
                },
                tooltip: true,
                tooltipOpts: {
                    //content : "Value <b>$x</b> Value <span>$y</span>",
                    defaultTheme: false
                },
                colors: [FlotConfig.chartSecond, FlotConfig.chartFourth],
                yaxis: {
                    min: -1.1,
                    max: 1.1
                },
                xaxis: {
                    min: 0,
                    max: 15
                }
            });

            element.on("plotclick", function (event, pos, item) {
                if (item) {
                    $("#clickdata").text("You clicked point " + item.dataIndex + " in " + item.series.label + ".");
                    plot.highlight(item.series, item.datapoint);
                }
            });
        }
    }
});
"use strict";

angular.module('app.graphs').directive('flotSiteStatsChart', function(FlotConfig){
    return {
        restrict: 'E',
        replace: true,
        template: '<div class="chart"></div>',
        scope: {
            data: '='
        },
        link: function(scope, element){

            $.plot(element, scope.data, {
                series : {
                    lines : {
                        show : true,
                        lineWidth : 1,
                        fill : true,
                        fillColor : {
                            colors : [{
                                opacity : 0.1
                            }, {
                                opacity : 0.15
                            }]
                        }
                    },
                    points : {
                        show : true
                    },
                    shadowSize : 0
                },

                yaxes : [{
                    min : 20,
                    tickLength : 5
                }],
                grid : {
                    hoverable : true,
                    clickable : true,
                    tickColor : FlotConfig.chartBorderColor,
                    borderWidth : 0,
                    borderColor : FlotConfig.chartBorderColor
                },
                tooltip : true,
                tooltipOpts : {
                    content : "%s for <b>%x:00 hrs</b> was %y",
                    dateFormat : "%y-%0m-%0d",
                    defaultTheme : false
                },
                colors : [FlotConfig.charMain, FlotConfig.chartSecond],
                xaxis : {
                    mode : "time",
                    tickLength : 10,
                    ticks : 15,
                    tickDecimals : 2
                },
                yaxis : {
                    ticks : 15,
                    tickDecimals : 0
                }
            });

        }
    }
});
'use strict';

angular.module('app.graphs').directive('highchartTable', function (lazyScript) {
    return {
        restrict: 'A',
        link: function (scope, element) {
            lazyScript.register('build/vendor.graphs.js').then(function(){
                element.highchartTable();
            })
        }
    }
});
'use strict';

angular.module('app.graphs').directive('easyPieChartContainer', function () {
    return {
        restrict: 'A',
        link: function (scope, element) {
            /*
             * EASY PIE CHARTS
             * DEPENDENCY: js/plugins/easy-pie-chart/jquery.easy-pie-chart.min.js
             * Usage: <div class="easy-pie-chart txt-color-orangeDark" data-pie-percent="33" data-pie-size="72" data-size="72">
             *			<span class="percent percent-sign">35</span>
             * 	  	  </div>
             */

            if ($.fn.easyPieChart) {

                $('.easy-pie-chart').each(function() {
                    var $this = $(this),
                        barColor = $this.css('color') || $this.data('pie-color'),
                        trackColor = $this.data('pie-track-color') || 'rgba(0,0,0,0.04)',
                        size = parseInt($this.data('pie-size')) || 25;

                    $this.easyPieChart({

                        barColor : barColor,
                        trackColor : trackColor,
                        scaleColor : false,
                        lineCap : 'butt',
                        lineWidth : parseInt(size / 8.5),
                        animate : 1500,
                        rotate : -90,
                        size : size,
                        onStep: function(from, to, percent) {
                            $(this.el).find('.percent').text(Math.round(percent));
                        }

                    });

                    $this = null;
                });

            } // end if
        }
    }
});
"use strict";

angular.module('app.graphs').directive('sparklineContainer', function () {
    return {
        restrict: 'A',
        link: function (scope, element) {
            /*
             * SPARKLINES
             * DEPENDENCY: js/plugins/sparkline/jquery.sparkline.min.js
             * See usage example below...
             */

            /* Usage:
             * 		<div class="sparkline-line txt-color-blue" data-fill-color="transparent" data-sparkline-height="26px">
             *			5,6,7,9,9,5,9,6,5,6,6,7,7,6,7,8,9,7
             *		</div>
             */
            // variable declearations:

            var barColor,
                sparklineHeight,
                sparklineBarWidth,
                sparklineBarSpacing,
                sparklineNegBarColor,
                sparklineStackedColor,
                thisLineColor,
                thisLineWidth,
                thisFill,
                thisSpotColor,
                thisMinSpotColor,
                thisMaxSpotColor,
                thishighlightSpotColor,
                thisHighlightLineColor,
                thisSpotRadius,
                pieColors,
                pieWidthHeight,
                pieBorderColor,
                pieOffset,
                thisBoxWidth,
                thisBoxHeight,
                thisBoxRaw,
                thisBoxTarget,
                thisBoxMin,
                thisBoxMax,
                thisShowOutlier,
                thisIQR,
                thisBoxSpotRadius,
                thisBoxLineColor,
                thisBoxFillColor,
                thisBoxWhisColor,
                thisBoxOutlineColor,
                thisBoxOutlineFill,
                thisBoxMedianColor,
                thisBoxTargetColor,
                thisBulletHeight,
                thisBulletWidth,
                thisBulletColor,
                thisBulletPerformanceColor,
                thisBulletRangeColors,
                thisDiscreteHeight,
                thisDiscreteWidth,
                thisDiscreteLineColor,
                thisDiscreteLineHeight,
                thisDiscreteThrushold,
                thisDiscreteThrusholdColor,
                thisTristateHeight,
                thisTristatePosBarColor,
                thisTristateNegBarColor,
                thisTristateZeroBarColor,
                thisTristateBarWidth,
                thisTristateBarSpacing,
                thisZeroAxis,
                thisBarColor,
                sparklineWidth,
                sparklineValue,
                sparklineValueSpots1,
                sparklineValueSpots2,
                thisLineWidth1,
                thisLineWidth2,
                thisLineColor1,
                thisLineColor2,
                thisSpotRadius1,
                thisSpotRadius2,
                thisMinSpotColor1,
                thisMaxSpotColor1,
                thisMinSpotColor2,
                thisMaxSpotColor2,
                thishighlightSpotColor1,
                thisHighlightLineColor1,
                thishighlightSpotColor2,
                thisHighlightLineColor2,
                thisFillColor1,
                thisFillColor2,
                thisChartMinYRange ,
                thisChartMaxYRange ,
                thisChartMinXRange ,
                thisChartMaxXRange ,
                thisMinNormValue ,
                thisMaxNormValue ,
                thisNormColor ,
                thisDrawNormalOnTop;

            function drawSparklines() {
                $('.sparkline:not(:has(>canvas))', element).each(function () {
                    var $this = $(this),
                        sparklineType = $this.data('sparkline-type') || 'bar';

                    // BAR CHART
                    if (sparklineType == 'bar') {

                        barColor = $this.data('sparkline-bar-color') || $this.css('color') || '#0000f0';
                        sparklineHeight = $this.data('sparkline-height') || '26px';
                        sparklineBarWidth = $this.data('sparkline-barwidth') || 5;
                        sparklineBarSpacing = $this.data('sparkline-barspacing') || 2;
                        sparklineNegBarColor = $this.data('sparkline-negbar-color') || '#A90329';
                        sparklineStackedColor = $this.data('sparkline-barstacked-color') || ["#A90329", "#0099c6", "#98AA56", "#da532c", "#4490B1", "#6E9461", "#990099", "#B4CAD3"];

                        $this.sparkline('html', {
                            barColor: barColor,
                            type: sparklineType,
                            height: sparklineHeight,
                            barWidth: sparklineBarWidth,
                            barSpacing: sparklineBarSpacing,
                            stackedBarColor: sparklineStackedColor,
                            negBarColor: sparklineNegBarColor,
                            zeroAxis: 'false'
                        });

                        $this = null;

                    }

                    // LINE CHART
                    if (sparklineType == 'line') {

                        sparklineHeight = $this.data('sparkline-height') || '20px';
                        sparklineWidth = $this.data('sparkline-width') || '90px';
                        thisLineColor = $this.data('sparkline-line-color') || $this.css('color') || '#0000f0';
                        thisLineWidth = $this.data('sparkline-line-width') || 1;
                        thisFill = $this.data('fill-color') || '#c0d0f0';
                        thisSpotColor = $this.data('sparkline-spot-color') || '#f08000';
                        thisMinSpotColor = $this.data('sparkline-minspot-color') || '#ed1c24';
                        thisMaxSpotColor = $this.data('sparkline-maxspot-color') || '#f08000';
                        thishighlightSpotColor = $this.data('sparkline-highlightspot-color') || '#50f050';
                        thisHighlightLineColor = $this.data('sparkline-highlightline-color') || 'f02020';
                        thisSpotRadius = $this.data('sparkline-spotradius') || 1.5;
                        thisChartMinYRange = $this.data('sparkline-min-y') || 'undefined';
                        thisChartMaxYRange = $this.data('sparkline-max-y') || 'undefined';
                        thisChartMinXRange = $this.data('sparkline-min-x') || 'undefined';
                        thisChartMaxXRange = $this.data('sparkline-max-x') || 'undefined';
                        thisMinNormValue = $this.data('min-val') || 'undefined';
                        thisMaxNormValue = $this.data('max-val') || 'undefined';
                        thisNormColor = $this.data('norm-color') || '#c0c0c0';
                        thisDrawNormalOnTop = $this.data('draw-normal') || false;

                        $this.sparkline('html', {
                            type: 'line',
                            width: sparklineWidth,
                            height: sparklineHeight,
                            lineWidth: thisLineWidth,
                            lineColor: thisLineColor,
                            fillColor: thisFill,
                            spotColor: thisSpotColor,
                            minSpotColor: thisMinSpotColor,
                            maxSpotColor: thisMaxSpotColor,
                            highlightSpotColor: thishighlightSpotColor,
                            highlightLineColor: thisHighlightLineColor,
                            spotRadius: thisSpotRadius,
                            chartRangeMin: thisChartMinYRange,
                            chartRangeMax: thisChartMaxYRange,
                            chartRangeMinX: thisChartMinXRange,
                            chartRangeMaxX: thisChartMaxXRange,
                            normalRangeMin: thisMinNormValue,
                            normalRangeMax: thisMaxNormValue,
                            normalRangeColor: thisNormColor,
                            drawNormalOnTop: thisDrawNormalOnTop

                        });

                        $this = null;

                    }

                    // PIE CHART
                    if (sparklineType == 'pie') {

                        pieColors = $this.data('sparkline-piecolor') || ["#B4CAD3", "#4490B1", "#98AA56", "#da532c", "#6E9461", "#0099c6", "#990099", "#717D8A"];
                        pieWidthHeight = $this.data('sparkline-piesize') || 90;
                        pieBorderColor = $this.data('border-color') || '#45494C';
                        pieOffset = $this.data('sparkline-offset') || 0;

                        $this.sparkline('html', {
                            type: 'pie',
                            width: pieWidthHeight,
                            height: pieWidthHeight,
                            tooltipFormat: '<span style="color: {{color}}">&#9679;</span> ({{percent.1}}%)',
                            sliceColors: pieColors,
                            borderWidth: 1,
                            offset: pieOffset,
                            borderColor: pieBorderColor
                        });

                        $this = null;

                    }

                    // BOX PLOT
                    if (sparklineType == 'box') {

                        thisBoxWidth = $this.data('sparkline-width') || 'auto';
                        thisBoxHeight = $this.data('sparkline-height') || 'auto';
                        thisBoxRaw = $this.data('sparkline-boxraw') || false;
                        thisBoxTarget = $this.data('sparkline-targetval') || 'undefined';
                        thisBoxMin = $this.data('sparkline-min') || 'undefined';
                        thisBoxMax = $this.data('sparkline-max') || 'undefined';
                        thisShowOutlier = $this.data('sparkline-showoutlier') || true;
                        thisIQR = $this.data('sparkline-outlier-iqr') || 1.5;
                        thisBoxSpotRadius = $this.data('sparkline-spotradius') || 1.5;
                        thisBoxLineColor = $this.css('color') || '#000000';
                        thisBoxFillColor = $this.data('fill-color') || '#c0d0f0';
                        thisBoxWhisColor = $this.data('sparkline-whis-color') || '#000000';
                        thisBoxOutlineColor = $this.data('sparkline-outline-color') || '#303030';
                        thisBoxOutlineFill = $this.data('sparkline-outlinefill-color') || '#f0f0f0';
                        thisBoxMedianColor = $this.data('sparkline-outlinemedian-color') || '#f00000';
                        thisBoxTargetColor = $this.data('sparkline-outlinetarget-color') || '#40a020';

                        $this.sparkline('html', {
                            type: 'box',
                            width: thisBoxWidth,
                            height: thisBoxHeight,
                            raw: thisBoxRaw,
                            target: thisBoxTarget,
                            minValue: thisBoxMin,
                            maxValue: thisBoxMax,
                            showOutliers: thisShowOutlier,
                            outlierIQR: thisIQR,
                            spotRadius: thisBoxSpotRadius,
                            boxLineColor: thisBoxLineColor,
                            boxFillColor: thisBoxFillColor,
                            whiskerColor: thisBoxWhisColor,
                            outlierLineColor: thisBoxOutlineColor,
                            outlierFillColor: thisBoxOutlineFill,
                            medianColor: thisBoxMedianColor,
                            targetColor: thisBoxTargetColor

                        });

                        $this = null;

                    }

                    // BULLET
                    if (sparklineType == 'bullet') {

                        var thisBulletHeight = $this.data('sparkline-height') || 'auto';
                        thisBulletWidth = $this.data('sparkline-width') || 2;
                        thisBulletColor = $this.data('sparkline-bullet-color') || '#ed1c24';
                        thisBulletPerformanceColor = $this.data('sparkline-performance-color') || '#3030f0';
                        thisBulletRangeColors = $this.data('sparkline-bulletrange-color') || ["#d3dafe", "#a8b6ff", "#7f94ff"];

                        $this.sparkline('html', {

                            type: 'bullet',
                            height: thisBulletHeight,
                            targetWidth: thisBulletWidth,
                            targetColor: thisBulletColor,
                            performanceColor: thisBulletPerformanceColor,
                            rangeColors: thisBulletRangeColors

                        });

                        $this = null;

                    }

                    // DISCRETE
                    if (sparklineType == 'discrete') {

                        thisDiscreteHeight = $this.data('sparkline-height') || 26;
                        thisDiscreteWidth = $this.data('sparkline-width') || 50;
                        thisDiscreteLineColor = $this.css('color');
                        thisDiscreteLineHeight = $this.data('sparkline-line-height') || 5;
                        thisDiscreteThrushold = $this.data('sparkline-threshold') || 'undefined';
                        thisDiscreteThrusholdColor = $this.data('sparkline-threshold-color') || '#ed1c24';

                        $this.sparkline('html', {

                            type: 'discrete',
                            width: thisDiscreteWidth,
                            height: thisDiscreteHeight,
                            lineColor: thisDiscreteLineColor,
                            lineHeight: thisDiscreteLineHeight,
                            thresholdValue: thisDiscreteThrushold,
                            thresholdColor: thisDiscreteThrusholdColor

                        });

                        $this = null;

                    }

                    // TRISTATE
                    if (sparklineType == 'tristate') {

                        thisTristateHeight = $this.data('sparkline-height') || 26;
                        thisTristatePosBarColor = $this.data('sparkline-posbar-color') || '#60f060';
                        thisTristateNegBarColor = $this.data('sparkline-negbar-color') || '#f04040';
                        thisTristateZeroBarColor = $this.data('sparkline-zerobar-color') || '#909090';
                        thisTristateBarWidth = $this.data('sparkline-barwidth') || 5;
                        thisTristateBarSpacing = $this.data('sparkline-barspacing') || 2;
                        thisZeroAxis = $this.data('sparkline-zeroaxis') || false;

                        $this.sparkline('html', {

                            type: 'tristate',
                            height: thisTristateHeight,
                            posBarColor: thisBarColor,
                            negBarColor: thisTristateNegBarColor,
                            zeroBarColor: thisTristateZeroBarColor,
                            barWidth: thisTristateBarWidth,
                            barSpacing: thisTristateBarSpacing,
                            zeroAxis: thisZeroAxis

                        });

                        $this = null;

                    }

                    //COMPOSITE: BAR
                    if (sparklineType == 'compositebar') {

                        sparklineHeight = $this.data('sparkline-height') || '20px';
                        sparklineWidth = $this.data('sparkline-width') || '100%';
                        sparklineBarWidth = $this.data('sparkline-barwidth') || 3;
                        thisLineWidth = $this.data('sparkline-line-width') || 1;
                        thisLineColor = $this.data('sparkline-color-top') || '#ed1c24';
                        thisBarColor = $this.data('sparkline-color-bottom') || '#333333';

                        $this.sparkline($this.data('sparkline-bar-val'), {

                            type: 'bar',
                            width: sparklineWidth,
                            height: sparklineHeight,
                            barColor: thisBarColor,
                            barWidth: sparklineBarWidth
                            //barSpacing: 5

                        });

                        $this.sparkline($this.data('sparkline-line-val'), {

                            width: sparklineWidth,
                            height: sparklineHeight,
                            lineColor: thisLineColor,
                            lineWidth: thisLineWidth,
                            composite: true,
                            fillColor: false

                        });

                        $this = null;

                    }

                    //COMPOSITE: LINE
                    if (sparklineType == 'compositeline') {

                        sparklineHeight = $this.data('sparkline-height') || '20px';
                        sparklineWidth = $this.data('sparkline-width') || '90px';
                        sparklineValue = $this.data('sparkline-bar-val');
                        sparklineValueSpots1 = $this.data('sparkline-bar-val-spots-top') || null;
                        sparklineValueSpots2 = $this.data('sparkline-bar-val-spots-bottom') || null;
                        thisLineWidth1 = $this.data('sparkline-line-width-top') || 1;
                        thisLineWidth2 = $this.data('sparkline-line-width-bottom') || 1;
                        thisLineColor1 = $this.data('sparkline-color-top') || '#333333';
                        thisLineColor2 = $this.data('sparkline-color-bottom') || '#ed1c24';
                        thisSpotRadius1 = $this.data('sparkline-spotradius-top') || 1.5;
                        thisSpotRadius2 = $this.data('sparkline-spotradius-bottom') || thisSpotRadius1;
                        thisSpotColor = $this.data('sparkline-spot-color') || '#f08000';
                        thisMinSpotColor1 = $this.data('sparkline-minspot-color-top') || '#ed1c24';
                        thisMaxSpotColor1 = $this.data('sparkline-maxspot-color-top') || '#f08000';
                        thisMinSpotColor2 = $this.data('sparkline-minspot-color-bottom') || thisMinSpotColor1;
                        thisMaxSpotColor2 = $this.data('sparkline-maxspot-color-bottom') || thisMaxSpotColor1;
                        thishighlightSpotColor1 = $this.data('sparkline-highlightspot-color-top') || '#50f050';
                        thisHighlightLineColor1 = $this.data('sparkline-highlightline-color-top') || '#f02020';
                        thishighlightSpotColor2 = $this.data('sparkline-highlightspot-color-bottom') ||
                            thishighlightSpotColor1;
                        thisHighlightLineColor2 = $this.data('sparkline-highlightline-color-bottom') ||
                            thisHighlightLineColor1;
                        thisFillColor1 = $this.data('sparkline-fillcolor-top') || 'transparent';
                        thisFillColor2 = $this.data('sparkline-fillcolor-bottom') || 'transparent';

                        $this.sparkline(sparklineValue, {

                            type: 'line',
                            spotRadius: thisSpotRadius1,

                            spotColor: thisSpotColor,
                            minSpotColor: thisMinSpotColor1,
                            maxSpotColor: thisMaxSpotColor1,
                            highlightSpotColor: thishighlightSpotColor1,
                            highlightLineColor: thisHighlightLineColor1,

                            valueSpots: sparklineValueSpots1,

                            lineWidth: thisLineWidth1,
                            width: sparklineWidth,
                            height: sparklineHeight,
                            lineColor: thisLineColor1,
                            fillColor: thisFillColor1

                        });

                        $this.sparkline($this.data('sparkline-line-val'), {

                            type: 'line',
                            spotRadius: thisSpotRadius2,

                            spotColor: thisSpotColor,
                            minSpotColor: thisMinSpotColor2,
                            maxSpotColor: thisMaxSpotColor2,
                            highlightSpotColor: thishighlightSpotColor2,
                            highlightLineColor: thisHighlightLineColor2,

                            valueSpots: sparklineValueSpots2,

                            lineWidth: thisLineWidth2,
                            width: sparklineWidth,
                            height: sparklineHeight,
                            lineColor: thisLineColor2,
                            composite: true,
                            fillColor: thisFillColor2

                        });

                        $this = null;

                    }

                });
            }


            drawSparklines();

        }
    }
});

"use strict";

angular.module('app.graphs').directive('morrisAreaGraph', function(){
    return {
        restrict: 'E',
        replace: true,
        template: '<div class="chart no-padding"></div>',
        link: function(scope, element){
            Morris.Area({
                element : element,
                data : [{
                    x : '2011 Q1',
                    y : 3,
                    z : 3
                }, {
                    x : '2011 Q2',
                    y : 2,
                    z : 0
                }, {
                    x : '2011 Q3',
                    y : 0,
                    z : 2
                }, {
                    x : '2011 Q4',
                    y : 4,
                    z : 4
                }],
                xkey : 'x',
                ykeys : ['y', 'z'],
                labels : ['Y', 'Z']
            });
        }
    }
});

"use strict";

angular.module('app.graphs').directive('morrisBarGraph', function(){
    return {
        restrict: 'E',
        replace: true,
        template: '<div class="chart no-padding"></div>',
        link: function(scope, element){
            Morris.Bar({
                element : element,
                data : [{
                    x : '2011 Q1',
                    y : 0
                }, {
                    x : '2011 Q2',
                    y : 1
                }, {
                    x : '2011 Q3',
                    y : 2
                }, {
                    x : '2011 Q4',
                    y : 3
                }, {
                    x : '2012 Q1',
                    y : 4
                }, {
                    x : '2012 Q2',
                    y : 5
                }, {
                    x : '2012 Q3',
                    y : 6
                }, {
                    x : '2012 Q4',
                    y : 7
                }, {
                    x : '2013 Q1',
                    y : 8
                }],
                xkey : 'x',
                ykeys : ['y'],
                labels : ['Y'],
                barColors : function(row, series, type) {
                    if (type === 'bar') {
                        var red = Math.ceil(150 * row.y / this.ymax);
                        return 'rgb(' + red + ',0,0)';
                    } else {
                        return '#000';
                    }
                }
            });

        }
    }
});
"use strict";

angular.module('app.graphs').directive('morrisDonutGraph', function(){
    return {
        restrict: 'E',
        replace: true,
        template: '<div class="chart no-padding"></div>',
        link: function(scope, element){

            Morris.Donut({
                element : element,
                data : [{
                    value : 70,
                    label : 'foo'
                }, {
                    value : 15,
                    label : 'bar'
                }, {
                    value : 10,
                    label : 'baz'
                }, {
                    value : 5,
                    label : 'A really really long label'
                }],
                formatter : function(x) {
                    return x + "%"
                }
            });

        }
    }
});
"use strict";

angular.module('app.graphs').directive('morrisLineGraphA', function(){
    return {
        restrict: 'E',
        replace: true,
        template: '<div class="chart no-padding"></div>',
        link: function(scope, element){
            var neg_data = [{
                "period" : "2011-08-12",
                "a" : 100
            }, {
                "period" : "2011-03-03",
                "a" : 75
            }, {
                "period" : "2010-08-08",
                "a" : 50
            }, {
                "period" : "2010-05-10",
                "a" : 25
            }, {
                "period" : "2010-03-14",
                "a" : 0
            }, {
                "period" : "2010-01-10",
                "a" : -25
            }, {
                "period" : "2009-12-10",
                "a" : -50
            }, {
                "period" : "2009-10-07",
                "a" : -75
            }, {
                "period" : "2009-09-25",
                "a" : -100
            }];
            Morris.Line({
                element : element,
                data : neg_data,
                xkey : 'period',
                ykeys : ['a'],
                labels : ['Series A'],
                units : '%'
            });


        }
    }
});
"use strict";

angular.module('app.graphs').directive('morrisLineGraphB', function(){
    return {
        restrict: 'E',
        replace: true,
        template: '<div class="chart no-padding"></div>',
        link: function(scope, element){

            var day_data = [{
                "period" : "2012-10-01",
                "licensed" : 3407
            }, {
                "period" : "2012-09-30",
                "sorned" : 0
            }, {
                "period" : "2012-09-29",
                "sorned" : 618
            }, {
                "period" : "2012-09-20",
                "licensed" : 3246,
                "sorned" : 661
            }, {
                "period" : "2012-09-19",
                "licensed" : 3257,
                "sorned" : null
            }, {
                "period" : "2012-09-18",
                "licensed" : 3248,
                "other" : 1000
            }, {
                "period" : "2012-09-17",
                "sorned" : 0
            }, {
                "period" : "2012-09-16",
                "sorned" : 0
            }, {
                "period" : "2012-09-15",
                "licensed" : 3201,
                "sorned" : 656
            }, {
                "period" : "2012-09-10",
                "licensed" : 3215
            }];
            Morris.Line({
                element : element,
                data : day_data,
                xkey : 'period',
                ykeys : ['licensed', 'sorned', 'other'],
                labels : ['Licensed', 'SORN', 'Other'],
                /* custom label formatting with `xLabelFormat` */
                xLabelFormat : function(d) {
                    return (d.getMonth() + 1) + '/' + d.getDate() + '/' + d.getFullYear();
                },
                /* setting `xLabels` is recommended when using xLabelFormat */
                xLabels : 'day'
            });

        }
    }
});
"use strict";

angular.module('app.graphs').directive('morrisLineGraphC', function(){
    return {
        restrict: 'E',
        replace: true,
        template: '<div class="chart no-padding"></div>',
        link: function(scope, element){

            var day_data = [{
                "elapsed" : "I",
                "value" : 34
            }, {
                "elapsed" : "II",
                "value" : 24
            }, {
                "elapsed" : "III",
                "value" : 3
            }, {
                "elapsed" : "IV",
                "value" : 12
            }, {
                "elapsed" : "V",
                "value" : 13
            }, {
                "elapsed" : "VI",
                "value" : 22
            }, {
                "elapsed" : "VII",
                "value" : 5
            }, {
                "elapsed" : "VIII",
                "value" : 26
            }, {
                "elapsed" : "IX",
                "value" : 12
            }, {
                "elapsed" : "X",
                "value" : 19
            }];
            Morris.Line({
                element : element,
                data : day_data,
                xkey : 'elapsed',
                ykeys : ['value'],
                labels : ['value'],
                parseTime : false
            });

        }
    }
});
"use strict";

angular.module('app.graphs').directive('morrisNoGridGraph', function(){
    return {
        restrict: 'E',
        replace: true,
        template: '<div class="chart no-padding"></div>',
        link: function(scope, element){

            var day_data = [{
                "period" : "2012-10-01",
                "licensed" : 3407,
                "sorned" : 660
            }, {
                "period" : "2012-09-30",
                "licensed" : 3351,
                "sorned" : 629
            }, {
                "period" : "2012-09-29",
                "licensed" : 3269,
                "sorned" : 618
            }, {
                "period" : "2012-09-20",
                "licensed" : 3246,
                "sorned" : 661
            }, {
                "period" : "2012-09-19",
                "licensed" : 3257,
                "sorned" : 667
            }, {
                "period" : "2012-09-18",
                "licensed" : 3248,
                "sorned" : 627
            }, {
                "period" : "2012-09-17",
                "licensed" : 3171,
                "sorned" : 660
            }, {
                "period" : "2012-09-16",
                "licensed" : 3171,
                "sorned" : 676
            }, {
                "period" : "2012-09-15",
                "licensed" : 3201,
                "sorned" : 656
            }, {
                "period" : "2012-09-10",
                "licensed" : 3215,
                "sorned" : 622
            }];
            Morris.Line({
                element : element,
                grid : false,
                data : day_data,
                xkey : 'period',
                ykeys : ['licensed', 'sorned'],
                labels : ['Licensed', 'SORN']
            });

        }
    }
});
"use strict";

angular.module('app.graphs').directive('morrisNormalBarGraph', function(){
    return {
        restrict: 'E',
        replace: true,
        template: '<div class="chart no-padding"></div>',
        link: function(scope, element){

            Morris.Bar({
                element : element,
                data : [{
                    x : '2011 Q1',
                    y : 3,
                    z : 2,
                    a : 3
                }, {
                    x : '2011 Q2',
                    y : 2,
                    z : null,
                    a : 1
                }, {
                    x : '2011 Q3',
                    y : 0,
                    z : 2,
                    a : 4
                }, {
                    x : '2011 Q4',
                    y : 2,
                    z : 4,
                    a : 3
                }],
                xkey : 'x',
                ykeys : ['y', 'z', 'a'],
                labels : ['Y', 'Z', 'A']
            });

        }
    }
});
"use strict";

angular.module('app.graphs').directive('morrisSalesGraph', function(){
    return {
        restrict: 'E',
        replace: true,
        template: '<div class="chart no-padding"></div>',
        link: function(scope, element){
            Morris.Area({
                element : element,
                data : [{
                    period : '2010 Q1',
                    iphone : 2666,
                    ipad : null,
                    itouch : 2647
                }, {
                    period : '2010 Q2',
                    iphone : 2778,
                    ipad : 2294,
                    itouch : 2441
                }, {
                    period : '2010 Q3',
                    iphone : 4912,
                    ipad : 1969,
                    itouch : 2501
                }, {
                    period : '2010 Q4',
                    iphone : 3767,
                    ipad : 3597,
                    itouch : 5689
                }, {
                    period : '2011 Q1',
                    iphone : 6810,
                    ipad : 1914,
                    itouch : 2293
                }, {
                    period : '2011 Q2',
                    iphone : 5670,
                    ipad : 4293,
                    itouch : 1881
                }, {
                    period : '2011 Q3',
                    iphone : 4820,
                    ipad : 3795,
                    itouch : 1588
                }, {
                    period : '2011 Q4',
                    iphone : 15073,
                    ipad : 5967,
                    itouch : 5175
                }, {
                    period : '2012 Q1',
                    iphone : 10687,
                    ipad : 4460,
                    itouch : 2028
                }, {
                    period : '2012 Q2',
                    iphone : 8432,
                    ipad : 5713,
                    itouch : 1791
                }],
                xkey : 'period',
                ykeys : ['iphone', 'ipad', 'itouch'],
                labels : ['iPhone', 'iPad', 'iPod Touch'],
                pointSize : 2,
                hideHover : 'auto'
            });

        }
    }
});


"use strict";

angular.module('app.graphs').directive('morrisStackedBarGraph', function(){
    return {
        restrict: 'E',
        replace: true,
        template: '<div class="chart no-padding"></div>',
        link: function(scope, element){
            Morris.Bar({
                element : element,
                axes : false,
                grid : false,
                data : [{
                    x : '2011 Q1',
                    y : 3,
                    z : 2,
                    a : 3
                }, {
                    x : '2011 Q2',
                    y : 2,
                    z : null,
                    a : 1
                }, {
                    x : '2011 Q3',
                    y : 0,
                    z : 2,
                    a : 4
                }, {
                    x : '2011 Q4',
                    y : 2,
                    z : 4,
                    a : 3
                }],
                xkey : 'x',
                ykeys : ['y', 'z', 'a'],
                labels : ['Y', 'Z', 'A'],
                stacked : true
            });

        }
    }
});
"use strict";

angular.module('app.graphs').directive('morrisTimeGraph', function(){
    return {
        restrict: 'E',
        replace: true,
        template: '<div class="chart no-padding"></div>',
        link: function(scope, element){

            var week_data = [{
                "period" : "2011 W27",
                "licensed" : 3407,
                "sorned" : 660
            }, {
                "period" : "2011 W26",
                "licensed" : 3351,
                "sorned" : 629
            }, {
                "period" : "2011 W25",
                "licensed" : 3269,
                "sorned" : 618
            }, {
                "period" : "2011 W24",
                "licensed" : 3246,
                "sorned" : 661
            }, {
                "period" : "2011 W23",
                "licensed" : 3257,
                "sorned" : 667
            }, {
                "period" : "2011 W22",
                "licensed" : 3248,
                "sorned" : 627
            }, {
                "period" : "2011 W21",
                "licensed" : 3171,
                "sorned" : 660
            }, {
                "period" : "2011 W20",
                "licensed" : 3171,
                "sorned" : 676
            }, {
                "period" : "2011 W19",
                "licensed" : 3201,
                "sorned" : 656
            }, {
                "period" : "2011 W18",
                "licensed" : 3215,
                "sorned" : 622
            }, {
                "period" : "2011 W17",
                "licensed" : 3148,
                "sorned" : 632
            }, {
                "period" : "2011 W16",
                "licensed" : 3155,
                "sorned" : 681
            }, {
                "period" : "2011 W15",
                "licensed" : 3190,
                "sorned" : 667
            }, {
                "period" : "2011 W14",
                "licensed" : 3226,
                "sorned" : 620
            }, {
                "period" : "2011 W13",
                "licensed" : 3245,
                "sorned" : null
            }, {
                "period" : "2011 W12",
                "licensed" : 3289,
                "sorned" : null
            }, {
                "period" : "2011 W11",
                "licensed" : 3263,
                "sorned" : null
            }, {
                "period" : "2011 W10",
                "licensed" : 3189,
                "sorned" : null
            }, {
                "period" : "2011 W09",
                "licensed" : 3079,
                "sorned" : null
            }, {
                "period" : "2011 W08",
                "licensed" : 3085,
                "sorned" : null
            }, {
                "period" : "2011 W07",
                "licensed" : 3055,
                "sorned" : null
            }, {
                "period" : "2011 W06",
                "licensed" : 3063,
                "sorned" : null
            }, {
                "period" : "2011 W05",
                "licensed" : 2943,
                "sorned" : null
            }, {
                "period" : "2011 W04",
                "licensed" : 2806,
                "sorned" : null
            }, {
                "period" : "2011 W03",
                "licensed" : 2674,
                "sorned" : null
            }, {
                "period" : "2011 W02",
                "licensed" : 1702,
                "sorned" : null
            }, {
                "period" : "2011 W01",
                "licensed" : 1732,
                "sorned" : null
            }];
            Morris.Line({
                element : element,
                data : week_data,
                xkey : 'period',
                ykeys : ['licensed', 'sorned'],
                labels : ['Licensed', 'SORN'],
                events : ['2011-04', '2011-08']
            });

        }
    }
});
"use strict";

angular.module('app.graphs').directive('morrisYearGraph', function(){
    return {
        restrict: 'E',
        replace: true,
        template: '<div class="chart no-padding"></div>',
        link: function(scope, element){

            var day_data = [{
                "period" : "2012-10-01",
                "licensed" : 3407,
                "sorned" : 660
            }, {
                "period" : "2012-09-30",
                "licensed" : 3351,
                "sorned" : 629
            }, {
                "period" : "2012-09-29",
                "licensed" : 3269,
                "sorned" : 618
            }, {
                "period" : "2012-09-20",
                "licensed" : 3246,
                "sorned" : 661
            }, {
                "period" : "2012-09-19",
                "licensed" : 3257,
                "sorned" : 667
            }, {
                "period" : "2012-09-18",
                "licensed" : 3248,
                "sorned" : 627
            }, {
                "period" : "2012-09-17",
                "licensed" : 3171,
                "sorned" : 660
            }, {
                "period" : "2012-09-16",
                "licensed" : 3171,
                "sorned" : 676
            }, {
                "period" : "2012-09-15",
                "licensed" : 3201,
                "sorned" : 656
            }, {
                "period" : "2012-09-10",
                "licensed" : 3215,
                "sorned" : 622
            }];
            Morris.Line({
                element : element,
                data : day_data,
                xkey : 'period',
                ykeys : ['licensed', 'sorned'],
                labels : ['Licensed', 'SORN']
            })

        }
    }
});
'use strict';

angular.module('app.graphs').directive('vectorMap', function () {
    return {
        restrict: 'EA',
        scope: {
            mapData: '='
        },
        link: function (scope, element, attributes) {
            var data = scope.mapData;

            element.vectorMap({
                map: 'world_mill_en',
                backgroundColor: '#fff',
                regionStyle: {
                    initial: {
                        fill: '#c4c4c4'
                    },
                    hover: {
                        "fill-opacity": 1
                    }
                },
                series: {
                    regions: [
                        {
                            values: data,
                            scale: ['#85a8b6', '#4d7686'],
                            normalizeFunction: 'polynomial'
                        }
                    ]
                },
                onRegionLabelShow: function (e, el, code) {
                    if (typeof data[code] == 'undefined') {
                        e.preventDefault();
                    } else {
                        var countrylbl = data[code];
                        el.html(el.html() + ': ' + countrylbl + ' visits');
                    }
                }
            });

            element.on('$destroy', function(){
                element.children('.jvectormap-container').data('mapObject').remove();
            })
        }
    }
});
'use strict';

angular.module('app.tables').directive('datatableBasic', function ($compile) {
    return {
        restrict: 'A',
        scope: {
            tableOptions: '='
        },
        link: function (scope, element, attributes) {
            /* // DOM Position key index //

             l - Length changing (dropdown)
             f - Filtering input (search)
             t - The Table! (datatable)
             i - Information (records)
             p - Pagination (paging)
             r - pRocessing
             < and > - div elements
             <"#id" and > - div with an id
             <"class" and > - div with a class
             <"#id.class" and > - div with an id and class

             Also see: http://legacy.datatables.net/usage/features
             */

            var options = {
                "sDom": "<'dt-toolbar'<'col-xs-12 col-sm-6'f><'col-sm-6 col-xs-12 hidden-xs'l>r>" +
                    "t" +
                    "<'dt-toolbar-footer'<'col-sm-6 col-xs-12 hidden-xs'i><'col-xs-12 col-sm-6'p>>",
                oLanguage:{
                    "sSearch": "<span class='input-group-addon input-sm'><i class='glyphicon glyphicon-search'></i></span> ",
                    "sLengthMenu": "_MENU_"
                },
                "autoWidth": false,
                "smartResponsiveHelper": null,
                "preDrawCallback": function () {
                    // Initialize the responsive datatables helper once.
                    if (!this.smartResponsiveHelper) {
                        this.smartResponsiveHelper = new ResponsiveDatatablesHelper(element, {
                            tablet: 1024,
                            phone: 480
                        });
                    }
                },
                "rowCallback": function (nRow) {
                    this.smartResponsiveHelper.createExpandIcon(nRow);
                },
                "drawCallback": function (oSettings) {
                    this.smartResponsiveHelper.respond();
                }
            };

            if(attributes.tableOptions){
                options = angular.extend(options, scope.tableOptions)
            }

            var _dataTable;

            var childFormat = element.find('.smart-datatable-child-format');
            if(childFormat.length){
                var childFormatTemplate = childFormat.remove().html();
                element.on('click', childFormat.data('childControl'), function () {
                    var tr = $(this).closest('tr');

                    var row = _dataTable.row( tr );
                    if ( row.child.isShown() ) {
                        // This row is already open - close it
                        row.child.hide();
                        tr.removeClass('shown');
                    }
                    else {
                        // Open this row
                        var childScope = scope.$new();
                        childScope.d = row.data();
                        var html = $compile(childFormatTemplate)(childScope);
                        row.child( html ).show();
                        tr.addClass('shown');
                    }
                })
            }



            _dataTable =  element.DataTable(options);

            if(attributes.bindFilters){
                element.parent().find("div.toolbar").html('<div class="text-right"><img src="styles/img/logo.png" alt="SmartAdmin" style="width: 111px; margin-top: 3px; margin-right: 10px;"></div>');

                element.on( 'keyup change', 'thead th input[type=text]', function () {

                    _dataTable
                        .column( $(this).parent().index()+':visible' )
                        .search( this.value )
                        .draw();

                } );
            }
        }
    }
});
'use strict';

angular.module('app.tables').directive('datatableColumnFilter', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attributes) {
            /* // DOM Position key index //

             l - Length changing (dropdown)
             f - Filtering input (search)
             t - The Table! (datatable)
             i - Information (records)
             p - Pagination (paging)
             r - pRocessing
             < and > - div elements
             <"#id" and > - div with an id
             <"class" and > - div with a class
             <"#id.class" and > - div with an id and class

             Also see: http://legacy.datatables.net/usage/features
             */

            var responsiveHelper = undefined;

            var breakpointDefinition = {
                tablet: 1024,
                phone: 480
            };

            var otable = element.DataTable({
                //"bFilter": false,
                //"bInfo": false,
                //"bLengthChange": false
                //"bAutoWidth": false,
                //"bPaginate": false,
                //"bStateSave": true // saves sort state using localStorage
                "sDom": "<'dt-toolbar'<'col-xs-12 col-sm-6 hidden-xs'f><'col-sm-6 col-xs-12 hidden-xs'<'toolbar'>>r>"+
                    "t"+
                    "<'dt-toolbar-footer'<'col-sm-6 col-xs-12 hidden-xs'i><'col-xs-12 col-sm-6'p>>",
                oLanguage:{
                    "sSearch": "<span class='input-group-addon input-sm'><i class='glyphicon glyphicon-search'></i></span> "
                },
                "autoWidth" : false,
                "preDrawCallback" : function() {
                    // Initialize the responsive datatables helper once.
                    if (!responsiveHelper) {
                        responsiveHelper = new ResponsiveDatatablesHelper(element, breakpointDefinition);
                    }
                },
                "rowCallback" : function(nRow) {
                    responsiveHelper.createExpandIcon(nRow);
                },
                "drawCallback" : function(oSettings) {
                    responsiveHelper.respond();
                }

            });

            // custom toolbar
            element.parent().find("div.toolbar").html('<div class="text-right"><img src="styles/img/logo.png" alt="SmartAdmin" style="width: 111px; margin-top: 3px; margin-right: 10px;"></div>');

            // Apply the filter
            element.on( 'keyup change', 'thead th input[type=text]', function () {

                otable
                    .column( $(this).parent().index()+':visible' )
                    .search( this.value )
                    .draw();

            } );
        }
    }
});
'use strict';

angular.module('app.tables').directive('datatableColumnReorder', function () {
    return {
        restrict: 'A',
        link: function (scope, element) {
            /* // DOM Position key index //

             l - Length changing (dropdown)
             f - Filtering input (search)
             t - The Table! (datatable)
             i - Information (records)
             p - Pagination (paging)
             r - pRocessing
             < and > - div elements
             <"#id" and > - div with an id
             <"class" and > - div with a class
             <"#id.class" and > - div with an id and class

             Also see: http://legacy.datatables.net/usage/features
             */

            var responsiveHelper = undefined;

            var breakpointDefinition = {
                tablet: 1024,
                phone: 480
            };

            element.dataTable({
                "sDom": "<'dt-toolbar'<'col-xs-12 col-sm-6'f><'col-sm-6 hidden-xs'C>r>" +
                    "t" +
                    "<'dt-toolbar-footer'<'col-sm-6 hidden-xs'i><'col-sm-6 col-xs-12'p>>",
                oLanguage: {
                    "sSearch": "<span class='input-group-addon input-sm'><i class='glyphicon glyphicon-search'></i></span> "
                },
                "autoWidth": false,
                "preDrawCallback": function () {
                    // Initialize the responsive datatables helper once.
                    if (!responsiveHelper) {
                        responsiveHelper = new ResponsiveDatatablesHelper(element, breakpointDefinition);
                    }
                },
                "rowCallback": function (nRow) {
                    responsiveHelper.createExpandIcon(nRow);
                },
                "drawCallback": function (oSettings) {
                    responsiveHelper.respond();
                }
            });
        }
    }
});
'use strict';

angular.module('app.tables').directive('datatableTableTools', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attributes) {
            /* // DOM Position key index //

             l - Length changing (dropdown)
             f - Filtering input (search)
             t - The Table! (datatable)
             i - Information (records)
             p - Pagination (paging)
             r - pRocessing
             < and > - div elements
             <"#id" and > - div with an id
             <"class" and > - div with a class
             <"#id.class" and > - div with an id and class

             Also see: http://legacy.datatables.net/usage/features
             */
            var responsiveHelper = undefined;

            var breakpointDefinition = {
                tablet: 1024,
                phone: 480
            };

            element.dataTable({
                // Tabletools options:
                //   https://datatables.net/extensions/tabletools/button_options
                "sDom": "<'dt-toolbar'<'col-xs-12 col-sm-6'f><'col-sm-6 hidden-xs'T>r>" +
                    "t" +
                    "<'dt-toolbar-footer'<'col-sm-6 hidden-xs'i><'col-sm-6 col-xs-12'p>>",
                oLanguage:{
                    "sSearch": "<span class='input-group-addon input-sm'><i class='glyphicon glyphicon-search'></i></span> "
                },

                sFilterInput:  "form-control",
                "oTableTools": {
                    "aButtons": [
                        "copy",
                        "csv",
                        "xls",
                        {
                            "sExtends": "pdf",
                            "sTitle": "SmartAdmin_PDF",
                            "sPdfMessage": "SmartAdmin PDF Export",
                            "sPdfSize": "letter"
                        },
                        {
                            "sExtends": "print",
                            "sMessage": "Generated by SmartAdmin <i>(press Esc to close)</i>"
                        }
                    ],
                    "sSwfPath": "bower_components/datatables-tabletools/swf/copy_csv_xls_pdf.swf"
                },
                "autoWidth": false,
                preDrawCallback: function () {
                    // Initialize the responsive datatables helper once.
                    if (!responsiveHelper) {
                        responsiveHelper = new ResponsiveDatatablesHelper(element, breakpointDefinition);
                    }
                },
                rowCallback: function (nRow) {
                    responsiveHelper.createExpandIcon(nRow);
                },
                drawCallback: function (oSettings) {
                    responsiveHelper.respond();
                }
            });
        }
    }
});
'use strict';

angular.module('app.tables').directive('jqGrid', function ($compile) {
    var jqGridCounter = 0;

    return {
        replace: true,
        restrict: 'E',
        scope: {
            gridData: '='
        },
        template: '<div>' +
            '<table></table>' +
            '<div class="jqgrid-pagination"></div>' +
            '</div>',
        controller: function($scope, $element){
            $scope.editRow  = function(row){
                $element.find('table').editRow(row);
            };
            $scope.saveRow  = function(row){
                $element.find('table').saveRow(row);
            };
            $scope.restoreRow  = function(row){
                $element.find('table').restoreRow(row);
            };
        },
        link: function (scope, element) {
            var gridNumber = jqGridCounter++;
            var wrapperId = 'jqgrid-' + gridNumber;
            element.attr('id', wrapperId);

            var tableId = 'jqgrid-table-' + gridNumber;
            var table = element.find('table');
            table.attr('id', tableId);

            var pagerId = 'jqgrid-pager-' + gridNumber;
            element.find('.jqgrid-pagination').attr('id', pagerId);


            table.jqGrid({
                data : scope.gridData.data,
                datatype : "local",
                height : 'auto',
                colNames : scope.gridData.colNames || [],
                colModel : scope.gridData.colModel || [],
                rowNum : 10,
                rowList : [10, 20, 30],
                pager : '#' + pagerId,
                sortname : 'id',
                toolbarfilter : true,
                viewrecords : true,
                sortorder : "asc",
                gridComplete : function() {
                    var ids = table.jqGrid('getDataIDs');
                    for (var i = 0; i < ids.length; i++) {
                        var cl = ids[i];
                        var be = "<button class='btn btn-xs btn-default' uib-tooltip='Edit Row' tooltip-append-to-body='true' ng-click='editRow("+ cl +")'><i class='fa fa-pencil'></i></button>";

                        var se = "<button class='btn btn-xs btn-default' uib-tooltip='Save Row' tooltip-append-to-body='true' ng-click='saveRow("+ cl +")'><i class='fa fa-save'></i></button>";

                        var ca = "<button class='btn btn-xs btn-default' uib-tooltip='Cancel' tooltip-append-to-body='true' ng-click='restoreRow("+ cl +")'><i class='fa fa-times'></i></button>";

                        table.jqGrid('setRowData', ids[i], {
                            act : be + se + ca
                        });
                    }
                },
                editurl : "dummy.html",
                caption : "SmartAdmin jQgrid Skin",
                multiselect : true,
                autowidth : true

            });
            table.jqGrid('navGrid', '#' + pagerId, {
                edit : false,
                add : false,
                del : true
            });
            table.jqGrid('inlineNav', '#' + pagerId);


            element.find(".ui-jqgrid").removeClass("ui-widget ui-widget-content");
            element.find(".ui-jqgrid-view").children().removeClass("ui-widget-header ui-state-default");
            element.find(".ui-jqgrid-labels, .ui-search-toolbar").children().removeClass("ui-state-default ui-th-column ui-th-ltr");
            element.find(".ui-jqgrid-pager").removeClass("ui-state-default");
            element.find(".ui-jqgrid").removeClass("ui-widget-content");

            // add classes
            element.find(".ui-jqgrid-htable").addClass("table table-bordered table-hover");
            element.find(".ui-jqgrid-btable").addClass("table table-bordered table-striped");

            element.find(".ui-pg-div").removeClass().addClass("btn btn-sm btn-primary");
            element.find(".ui-icon.ui-icon-plus").removeClass().addClass("fa fa-plus");
            element.find(".ui-icon.ui-icon-pencil").removeClass().addClass("fa fa-pencil");
            element.find(".ui-icon.ui-icon-trash").removeClass().addClass("fa fa-trash-o");
            element.find(".ui-icon.ui-icon-search").removeClass().addClass("fa fa-search");
            element.find(".ui-icon.ui-icon-refresh").removeClass().addClass("fa fa-refresh");
            element.find(".ui-icon.ui-icon-disk").removeClass().addClass("fa fa-save").parent(".btn-primary").removeClass("btn-primary").addClass("btn-success");
            element.find(".ui-icon.ui-icon-cancel").removeClass().addClass("fa fa-times").parent(".btn-primary").removeClass("btn-primary").addClass("btn-danger");

            element.find(".ui-icon.ui-icon-seek-prev").wrap("<div class='btn btn-sm btn-default'></div>");
            element.find(".ui-icon.ui-icon-seek-prev").removeClass().addClass("fa fa-backward");

            element.find(".ui-icon.ui-icon-seek-first").wrap("<div class='btn btn-sm btn-default'></div>");
            element.find(".ui-icon.ui-icon-seek-first").removeClass().addClass("fa fa-fast-backward");

            element.find(".ui-icon.ui-icon-seek-next").wrap("<div class='btn btn-sm btn-default'></div>");
            element.find(".ui-icon.ui-icon-seek-next").removeClass().addClass("fa fa-forward");

            element.find(".ui-icon.ui-icon-seek-end").wrap("<div class='btn btn-sm btn-default'></div>");
            element.find(".ui-icon.ui-icon-seek-end").removeClass().addClass("fa fa-fast-forward");

            $(window).on('resize.jqGrid', function() {
               table.jqGrid('setGridWidth', $("#content").width());
            });


            $compile(element.contents())(scope);
        }
    }
});
"use strict";


angular.module('SmartAdmin.Forms').directive('bootstrapAttributeForm', function(){

    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/_common/forms/directives/bootstrap-validation/bootstrap-attribute-form.tpl.html',
        link: function(scope, form){
            form.bootstrapValidator();


        }

    }
});
"use strict";


angular.module('SmartAdmin.Forms').directive('bootstrapButtonGroupForm', function(){

    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/_common/forms/directives/bootstrap-validation/bootstrap-button-group-form.tpl.html',
        link: function(scope, form){
            form.bootstrapValidator({
                excluded : ':disabled',
                feedbackIcons : {
                    valid : 'glyphicon glyphicon-ok',
                    invalid : 'glyphicon glyphicon-remove',
                    validating : 'glyphicon glyphicon-refresh'
                },
                fields : {
                    gender : {
                        validators : {
                            notEmpty : {
                                message : 'The gender is required'
                            }
                        }
                    },
                    'languages[]' : {
                        validators : {
                            choice : {
                                min : 1,
                                max : 2,
                                message : 'Please choose 1 - 2 languages you can speak'
                            }
                        }
                    }
                }
            });


        }

    }
});
"use strict";


angular.module('SmartAdmin.Forms').directive('bootstrapContactForm', function(){

    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/_common/forms/directives/bootstrap-validation/bootstrap-contact-form.tpl.html',
        link: function(scope, form){
            form.bootstrapValidator({
                container : '#messages',
                feedbackIcons : {
                    valid : 'glyphicon glyphicon-ok',
                    invalid : 'glyphicon glyphicon-remove',
                    validating : 'glyphicon glyphicon-refresh'
                },
                fields : {
                    fullName : {
                        validators : {
                            notEmpty : {
                                message : 'The full name is required and cannot be empty'
                            }
                        }
                    },
                    email : {
                        validators : {
                            notEmpty : {
                                message : 'The email address is required and cannot be empty'
                            },
                            emailAddress : {
                                message : 'The email address is not valid'
                            }
                        }
                    },
                    title : {
                        validators : {
                            notEmpty : {
                                message : 'The title is required and cannot be empty'
                            },
                            stringLength : {
                                max : 100,
                                message : 'The title must be less than 100 characters long'
                            }
                        }
                    },
                    content : {
                        validators : {
                            notEmpty : {
                                message : 'The content is required and cannot be empty'
                            },
                            stringLength : {
                                max : 500,
                                message : 'The content must be less than 500 characters long'
                            }
                        }
                    }
                }
            });

        }

    }

});
"use strict";


angular.module('SmartAdmin.Forms').directive('bootstrapMovieForm', function(){

    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/_common/forms/directives/bootstrap-validation/bootstrap-movie-form.tpl.html',
        link: function(scope, form){
            form.bootstrapValidator({
                feedbackIcons : {
                    valid : 'glyphicon glyphicon-ok',
                    invalid : 'glyphicon glyphicon-remove',
                    validating : 'glyphicon glyphicon-refresh'
                },
                fields : {
                    title : {
                        group : '.col-md-8',
                        validators : {
                            notEmpty : {
                                message : 'The title is required'
                            },
                            stringLength : {
                                max : 200,
                                message : 'The title must be less than 200 characters long'
                            }
                        }
                    },
                    genre : {
                        group : '.col-md-4',
                        validators : {
                            notEmpty : {
                                message : 'The genre is required'
                            }
                        }
                    },
                    director : {
                        group : '.col-md-4',
                        validators : {
                            notEmpty : {
                                message : 'The director name is required'
                            },
                            stringLength : {
                                max : 80,
                                message : 'The director name must be less than 80 characters long'
                            }
                        }
                    },
                    writer : {
                        group : '.col-md-4',
                        validators : {
                            notEmpty : {
                                message : 'The writer name is required'
                            },
                            stringLength : {
                                max : 80,
                                message : 'The writer name must be less than 80 characters long'
                            }
                        }
                    },
                    producer : {
                        group : '.col-md-4',
                        validators : {
                            notEmpty : {
                                message : 'The producer name is required'
                            },
                            stringLength : {
                                max : 80,
                                message : 'The producer name must be less than 80 characters long'
                            }
                        }
                    },
                    website : {
                        group : '.col-md-6',
                        validators : {
                            notEmpty : {
                                message : 'The website address is required'
                            },
                            uri : {
                                message : 'The website address is not valid'
                            }
                        }
                    },
                    trailer : {
                        group : '.col-md-6',
                        validators : {
                            notEmpty : {
                                message : 'The trailer link is required'
                            },
                            uri : {
                                message : 'The trailer link is not valid'
                            }
                        }
                    },
                    review : {
                        // The group will be set as default (.form-group)
                        validators : {
                            stringLength : {
                                max : 500,
                                message : 'The review must be less than 500 characters long'
                            }
                        }
                    },
                    rating : {
                        // The group will be set as default (.form-group)
                        validators : {
                            notEmpty : {
                                message : 'The rating is required'
                            }
                        }
                    }
                }
            });

        }

    }

});
"use strict";


angular.module('SmartAdmin.Forms').directive('bootstrapProductForm', function(){

    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/_common/forms/directives/bootstrap-validation/bootstrap-product-form.tpl.html',
        link: function(scope, form){
            form.bootstrapValidator({
                feedbackIcons : {
                    valid : 'glyphicon glyphicon-ok',
                    invalid : 'glyphicon glyphicon-remove',
                    validating : 'glyphicon glyphicon-refresh'
                },
                fields : {
                    price : {
                        validators : {
                            notEmpty : {
                                message : 'The price is required'
                            },
                            numeric : {
                                message : 'The price must be a number'
                            }
                        }
                    },
                    amount : {
                        validators : {
                            notEmpty : {
                                message : 'The amount is required'
                            },
                            numeric : {
                                message : 'The amount must be a number'
                            }
                        }
                    },
                    color : {
                        validators : {
                            notEmpty : {
                                message : 'The color is required'
                            }
                        }
                    },
                    size : {
                        validators : {
                            notEmpty : {
                                message : 'The size is required'
                            }
                        }
                    }
                }
            });
        }

    }
});
"use strict";


angular.module('SmartAdmin.Forms').directive('bootstrapProfileForm', function(){

    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/_common/forms/directives/bootstrap-validation/bootstrap-profile-form.tpl.html',
        link: function(scope, form){
           form.bootstrapValidator({
                feedbackIcons : {
                    valid : 'glyphicon glyphicon-ok',
                    invalid : 'glyphicon glyphicon-remove',
                    validating : 'glyphicon glyphicon-refresh'
                },
                fields : {
                    email : {
                        validators : {
                            notEmpty : {
                                message : 'The email address is required'
                            },
                            emailAddress : {
                                message : 'The email address is not valid'
                            }
                        }
                    },
                    password : {
                        validators : {
                            notEmpty : {
                                message : 'The password is required'
                            }
                        }
                    }
                }
            });
        }

    }

});
"use strict";


angular.module('SmartAdmin.Forms').directive('bootstrapTogglingForm', function(){

    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/_common/forms/directives/bootstrap-validation/bootstrap-toggling-form.tpl.html',
        link: function(scope, form){
            form.bootstrapValidator({
                feedbackIcons : {
                    valid : 'glyphicon glyphicon-ok',
                    invalid : 'glyphicon glyphicon-remove',
                    validating : 'glyphicon glyphicon-refresh'
                },
                fields : {
                    firstName : {
                        validators : {
                            notEmpty : {
                                message : 'The first name is required'
                            }
                        }
                    },
                    lastName : {
                        validators : {
                            notEmpty : {
                                message : 'The last name is required'
                            }
                        }
                    },
                    company : {
                        validators : {
                            notEmpty : {
                                message : 'The company name is required'
                            }
                        }
                    },
                    // These fields will be validated when being visible
                    job : {
                        validators : {
                            notEmpty : {
                                message : 'The job title is required'
                            }
                        }
                    },
                    department : {
                        validators : {
                            notEmpty : {
                                message : 'The department name is required'
                            }
                        }
                    },
                    mobilePhone : {
                        validators : {
                            notEmpty : {
                                message : 'The mobile phone number is required'
                            },
                            digits : {
                                message : 'The mobile phone number is not valid'
                            }
                        }
                    },
                    // These fields will be validated when being visible
                    homePhone : {
                        validators : {
                            digits : {
                                message : 'The home phone number is not valid'
                            }
                        }
                    },
                    officePhone : {
                        validators : {
                            digits : {
                                message : 'The office phone number is not valid'
                            }
                        }
                    }
                }
            }).find('button[data-toggle]').on('click', function() {
                var $target = $($(this).attr('data-toggle'));
                // Show or hide the additional fields
                // They will or will not be validated based on their visibilities
                $target.toggle();
                if (!$target.is(':visible')) {
                    // Enable the submit buttons in case additional fields are not valid
                    form.data('bootstrapValidator').disableSubmitButtons(false);
                }
            });
        }

    }



});
'use strict';

angular.module('SmartAdmin.Forms').directive('smartCheckoutForm', function (formsCommon, lazyScript) {
    return {
        restrict: 'A',
        link: function (scope, form) {
           lazyScript.register('build/vendor.ui.js').then(function(){

               scope.countries = formsCommon.countries;

               form.validate(angular.extend({
                    // Rules for form validation
                    rules : {
                        fname : {
                            required : true
                        },
                        lname : {
                            required : true
                        },
                        email : {
                            required : true,
                            email : true
                        },
                        phone : {
                            required : true
                        },
                        country : {
                            required : true
                        },
                        city : {
                            required : true
                        },
                        code : {
                            required : true,
                            digits : true
                        },
                        address : {
                            required : true
                        },
                        name : {
                            required : true
                        },
                        card : {
                            required : true,
                            creditcard : true
                        },
                        cvv : {
                            required : true,
                            digits : true
                        },
                        month : {
                            required : true
                        },
                        year : {
                            required : true,
                            digits : true
                        }
                    },

                    // Messages for form validation
                    messages : {
                        fname : {
                            required : 'Please enter your first name'
                        },
                        lname : {
                            required : 'Please enter your last name'
                        },
                        email : {
                            required : 'Please enter your email address',
                            email : 'Please enter a VALID email address'
                        },
                        phone : {
                            required : 'Please enter your phone number'
                        },
                        country : {
                            required : 'Please select your country'
                        },
                        city : {
                            required : 'Please enter your city'
                        },
                        code : {
                            required : 'Please enter code',
                            digits : 'Digits only please'
                        },
                        address : {
                            required : 'Please enter your full address'
                        },
                        name : {
                            required : 'Please enter name on your card'
                        },
                        card : {
                            required : 'Please enter your card number'
                        },
                        cvv : {
                            required : 'Enter CVV2',
                            digits : 'Digits only'
                        },
                        month : {
                            required : 'Select month'
                        },
                        year : {
                            required : 'Enter year',
                            digits : 'Digits only please'
                        }
                    }
                }, formsCommon.validateOptions));
            });
        }
    }
});
'use strict';

angular.module('SmartAdmin.Forms').directive('smartCommentForm', function (formsCommon, lazyScript) {
    return {
        restrict: 'A',
        link: function (scope, form) {
            lazyScript.register('build/vendor.ui.js').then(function(){
                form.validate(angular.extend({
                    // Rules for form validation
                    rules : {
                        name : {
                            required : true
                        },
                        email : {
                            required : true,
                            email : true
                        },
                        url : {
                            url : true
                        },
                        comment : {
                            required : true
                        }
                    },

                    // Messages for form validation
                    messages : {
                        name : {
                            required : 'Enter your name',
                        },
                        email : {
                            required : 'Enter your email address',
                            email : 'Enter a VALID email'
                        },
                        url : {
                            email : 'Enter a VALID url'
                        },
                        comment : {
                            required : 'Please enter your comment'
                        }
                    },

                    // Ajax form submition
                    submitHandler : function() {
                        form.ajaxSubmit({
                            success : function() {
                                form.addClass('submited');
                            }
                        });
                    }

                }, formsCommon.validateOptions));
            });

        }
    }
});

'use strict';

angular.module('SmartAdmin.Forms').directive('smartContactsForm', function (formsCommon, lazyScript) {
    return {
        restrict: 'A',
        link: function (scope, form) {
            lazyScript.register('build/vendor.ui.js').then(function(){
                form.validate(angular.extend({
                    // Rules for form validation
                    rules : {
                        name : {
                            required : true
                        },
                        email : {
                            required : true,
                            email : true
                        },
                        message : {
                            required : true,
                            minlength : 10
                        }
                    },

                    // Messages for form validation
                    messages : {
                        name : {
                            required : 'Please enter your name'
                        },
                        email : {
                            required : 'Please enter your email address',
                            email : 'Please enter a VALID email address'
                        },
                        message : {
                            required : 'Please enter your message'
                        }
                    },

                    // Ajax form submition
                    submitHandler : function() {
                        form.ajaxSubmit({
                            success : function() {
                                form.addClass('submited');
                            }
                        });
                    }
                }, formsCommon.validateOptions));
            });
        }
    }
});
'use strict';

angular.module('SmartAdmin.Forms').directive('smartOrderForm', function (formsCommon, lazyScript) {
    return {
        restrict: 'E',
        link: function (scope, form) {
            lazyScript.register('build/vendor.ui.js').then(function(){
                form.validate(angular.extend({
                    // Rules for form validation
                    rules : {
                        name : {
                            required : true
                        },
                        email : {
                            required : true,
                            email : true
                        },
                        phone : {
                            required : true
                        },
                        interested : {
                            required : true
                        },
                        budget : {
                            required : true
                        }
                    },

                    // Messages for form validation
                    messages : {
                        name : {
                            required : 'Please enter your name'
                        },
                        email : {
                            required : 'Please enter your email address',
                            email : 'Please enter a VALID email address'
                        },
                        phone : {
                            required : 'Please enter your phone number'
                        },
                        interested : {
                            required : 'Please select interested service'
                        },
                        budget : {
                            required : 'Please select your budget'
                        }
                    },

                }, formsCommon.validateOptions));
            });

        }
    }
});
'use strict';

angular.module('SmartAdmin.Forms').directive('smartRegistrationForm', function (formsCommon, lazyScript) {
    return {
        restrict: 'A',
        link: function (scope, form, attributes) {
            lazyScript.register('build/vendor.ui.js').then(function(){
                form.validate(angular.extend({

                    // Rules for form validation
                    rules: {
                        username: {
                            required: true
                        },
                        email: {
                            required: true,
                            email: true
                        },
                        password: {
                            required: true,
                            minlength: 3,
                            maxlength: 20
                        },
                        passwordConfirm: {
                            required: true,
                            minlength: 3,
                            maxlength: 20,
                            equalTo: '#password'
                        },
                        firstname: {
                            required: true
                        },
                        lastname: {
                            required: true
                        },
                        gender: {
                            required: true
                        },
                        terms: {
                            required: true
                        }
                    },

                    // Messages for form validation
                    messages: {
                        login: {
                            required: 'Please enter your login'
                        },
                        email: {
                            required: 'Please enter your email address',
                            email: 'Please enter a VALID email address'
                        },
                        password: {
                            required: 'Please enter your password'
                        },
                        passwordConfirm: {
                            required: 'Please enter your password one more time',
                            equalTo: 'Please enter the same password as above'
                        },
                        firstname: {
                            required: 'Please select your first name'
                        },
                        lastname: {
                            required: 'Please select your last name'
                        },
                        gender: {
                            required: 'Please select your gender'
                        },
                        terms: {
                            required: 'You must agree with Terms and Conditions'
                        }
                    }

                }, formsCommon.validateOptions));
            });
        }
    }
});
'use strict';

angular.module('SmartAdmin.Forms').directive('smartReviewForm', function (formsCommon, lazyScript) {
    return {
        restrict: 'E',
        link: function (scope, form) {
            lazyScript.register('build/vendor.ui.js').then(function(){

                form.validate(angular.extend({
                    // Rules for form validation
                    rules : {
                        name : {
                            required : true
                        },
                        email : {
                            required : true,
                            email : true
                        },
                        review : {
                            required : true,
                            minlength : 20
                        },
                        quality : {
                            required : true
                        },
                        reliability : {
                            required : true
                        },
                        overall : {
                            required : true
                        }
                    },

                    // Messages for form validation
                    messages : {
                        name : {
                            required : 'Please enter your name'
                        },
                        email : {
                            required : 'Please enter your email address',
                            email : '<i class="fa fa-warning"></i><strong>Please enter a VALID email addres</strong>'
                        },
                        review : {
                            required : 'Please enter your review'
                        },
                        quality : {
                            required : 'Please rate quality of the product'
                        },
                        reliability : {
                            required : 'Please rate reliability of the product'
                        },
                        overall : {
                            required : 'Please rate the product'
                        }
                    }

                }, formsCommon.validateOptions));
            });
        }
    }
});
'use strict';

angular.module('SmartAdmin.Forms').directive('smartCkEditor', function () {
    return {
        restrict: 'A',
        compile: function ( tElement) {
            tElement.removeAttr('smart-ck-editor data-smart-ck-editor');
            //CKEDITOR.basePath = 'bower_components/ckeditor/';

            CKEDITOR.replace( tElement.attr('name'), { height: '380px', startupFocus : true} );
        }
    }
});
'use strict';

angular.module('SmartAdmin.Forms').directive('smartDestroySummernote', function () {
    return {
        restrict: 'A',
        compile: function (tElement, tAttributes) {
            tElement.removeAttr('smart-destroy-summernote data-smart-destroy-summernote')
            tElement.on('click', function() {
                angular.element(tAttributes.smartDestroySummernote).destroy();
            })
        }
    }
});

'use strict';

angular.module('SmartAdmin.Forms').directive('smartEditSummernote', function () {
    return {
        restrict: 'A',
        compile: function (tElement, tAttributes) {
            tElement.removeAttr('smart-edit-summernote data-smart-edit-summernote');
            tElement.on('click', function(){
                angular.element(tAttributes.smartEditSummernote).summernote({
                    focus : true
                });  
            });
        }
    }
});

'use strict';

angular.module('SmartAdmin.Forms').directive('smartMarkdownEditor', function () {
    return {
        restrict: 'A',
        compile: function (element, attributes) {
            element.removeAttr('smart-markdown-editor data-smart-markdown-editor')

            var options = {
                autofocus:false,
                savable:true,
                fullscreen: {
                    enable: false
                }
            };

            if(attributes.height){
                options.height = parseInt(attributes.height);
            }

            element.markdown(options);
        }
    }
});

'use strict';

angular.module('SmartAdmin.Forms').directive('smartSummernoteEditor', function (lazyScript) {
    return {
        restrict: 'A',
        compile: function (tElement, tAttributes) {
            tElement.removeAttr('smart-summernote-editor data-smart-summernote-editor');

            var options = {
                focus : true,
                tabsize : 2
            };

            if(tAttributes.height){
                options.height = tAttributes.height;
            }

            lazyScript.register('build/vendor.ui.js').then(function(){
                tElement.summernote(options);                
            });
        }
    }
});
'use strict';

angular.module('SmartAdmin.Forms').directive('smartClockpicker', function () {
    return {
        restrict: 'A',
        compile: function (tElement, tAttributes) {
            tElement.removeAttr('smart-clockpicker data-smart-clockpicker');

            var options = {
                placement: 'top',
                donetext: 'Done'
            }

            tElement.clockpicker(options);
        }
    }
});

'use strict';

angular.module('SmartAdmin.Forms').directive('smartColorpicker', function () {
    return {
        restrict: 'A',
        compile: function (tElement, tAttributes) {
            tElement.removeAttr('smart-colorpicker data-smart-colorpicker');


            var aOptions = _.pick(tAttributes, ['']);

            var options = _.extend(aOptions, {});

            tElement.colorpicker(options);
        }
    }
});
"use strict";

angular.module('SmartAdmin.Forms').directive('smartDatepicker', function () {
    return {
        restrict: 'A',
        scope: {
            options: '='
        },
        link: function (scope, element, attributes) {

            var onSelectCallbacks = [];
            if (attributes.minRestrict) {
                onSelectCallbacks.push(function (selectedDate) {
                    $(attributes.minRestrict).datepicker('option', 'minDate', selectedDate);
                });
            }
            if (attributes.maxRestrict) {
                onSelectCallbacks.push(function (selectedDate) {
                    $(attributes.maxRestrict).datepicker('option', 'maxDate', selectedDate);
                });
            }

            //Let others know about changes to the data field
            onSelectCallbacks.push(function (selectedDate) {
                //CVB - 07/14/2015 - Update the scope with the selected value
                element.triggerHandler("change");

                //CVB - 07/17/2015 - Update Bootstrap Validator
                var form = element.closest('form');

                if(typeof form.bootstrapValidator == 'function')
                    form.bootstrapValidator('revalidateField', element.attr('name'));
            });

            var options = _.extend({
                prevText: '<i class="fa fa-chevron-left"></i>',
                nextText: '<i class="fa fa-chevron-right"></i>',
                onSelect: function (selectedDate) {
                    angular.forEach(onSelectCallbacks, function (callback) {
                        callback.call(this, selectedDate)
                    })
                }
            }, scope.options || {});


            if (attributes.numberOfMonths) options.numberOfMonths = parseInt(attributes.numberOfMonths);

            if (attributes.dateFormat) options.dateFormat = attributes.dateFormat;

            if (attributes.defaultDate) options.defaultDate = attributes.defaultDate;

            if (attributes.changeMonth) options.changeMonth = attributes.changeMonth == "true";


            element.datepicker(options)
        }
    }
});
'use strict';

angular.module('SmartAdmin.Forms').directive('smartDuallistbox', function () {
    return {
        restrict: 'A',
        compile: function (tElement, tAttributes) {
            tElement.removeAttr('smart-duallistbox data-smart-duallistbox');


            var aOptions = _.pick(tAttributes, ['nonSelectedFilter']);

            var options = _.extend(aOptions, {
                nonSelectedListLabel: 'Non-selected',
                selectedListLabel: 'Selected',
                preserveSelectionOnMove: 'moved',
                moveOnSelect: false
            });

            tElement.bootstrapDualListbox(options);
        }
    }
});

'use strict';

angular.module('SmartAdmin.Forms').directive('smartIonslider', function (lazyScript) {
    return {
        restrict: 'A',
        compile: function (element, attributes) {
            element.removeAttr('smart-ionslider data-smart-ionslider');

        	lazyScript.register('build/vendor.ui.js').then(function(){
            	element.ionRangeSlider();
        	});
        }
    }
});
'use strict';

angular.module('SmartAdmin.Forms').directive('smartKnob', function () {
    return {
        restrict: 'A',
        compile: function (tElement, tAttributes) {
            tElement.removeAttr('smart-knob data-smart-knob');

            tElement.knob();
        }
    }
});
"use strict";

angular.module('SmartAdmin.Forms').directive('smartMaskedInput', function(lazyScript){
    return {
        restrict: 'A',
        compile: function(tElement, tAttributes){
            tElement.removeAttr('smart-masked-input data-smart-masked-input');

        	lazyScript.register('build/vendor.ui.js').then(function(){

	            var options = {};
	            if(tAttributes.maskPlaceholder) options.placeholder =  tAttributes.maskPlaceholder;
	            tElement.mask(tAttributes.smartMaskedInput, options);
        	})	            
        }
    }
});
'use strict';

angular.module('SmartAdmin.Forms').directive('smartNouislider', function ($parse, lazyScript) {
    return {
        restrict: 'A',
        compile: function (tElement, tAttributes) {
            lazyScript.register('build/vendor.ui.js').then(function(){
                tElement.removeAttr('smart-nouislider data-smart-nouislider');

                tElement.addClass('noUiSlider');

                var options = {
                    range: {
                        min: tAttributes.rangeMin ? parseInt(tAttributes.rangeMin) : 0,
                        max: tAttributes.rangeMax ? parseInt(tAttributes.rangeMax) : 1000
                    },
                    start: $parse(tAttributes.start)()
                };

                if (tAttributes.step) options.step =  parseInt(tAttributes.step);

                if(tAttributes.connect) options.connect = tAttributes.connect == 'true' ? true : tAttributes.connect;

                tElement.noUiSlider(options);

                if(tAttributes.update) tElement.on('slide', function(){
                    $(tAttributes.update).text(JSON.stringify(tElement.val()));
                });                
            })
        }
    }
});
'use strict'

angular.module('SmartAdmin.Forms').directive('smartSelect2', function (lazyScript) {
    return {
        restrict: 'A',
        compile: function (element, attributes) {
            element.hide().removeAttr('smart-select2 data-smart-select2');
        	lazyScript.register('build/vendor.ui.js').then(function(){
	            element.show().select2();
        	})
        }
    }
});
'use strict'

angular.module('SmartAdmin.Forms').directive('smartSpinner', function () {
    return {
        restrict: 'A',
        compile: function (tElement, tAttributes) {
            tElement.removeAttr('smart-spinner');

            var options = {};
            if(tAttributes.smartSpinner == 'deicimal'){
                options = {
                    step: 0.01,
                    numberFormat: "n"
                };
            }else if(tAttributes.smartSpinner == 'currency'){
                options = {
                    min: 5,
                    max: 2500,
                    step: 25,
                    start: 1000,
                    numberFormat: "C"
                };
            }

            tElement.spinner(options);
        }
    }
});
'use strict';

angular.module('SmartAdmin.Forms').directive('smartTagsinput', function () {
    return {
        restrict: 'A',
        compile: function (tElement, tAttributes) {
            tElement.removeAttr('smart-tagsinput data-smart-tagsinput');
            tElement.tagsinput();
        }
    }
});
'use strict';

angular.module('SmartAdmin.Forms').directive('smartTimepicker', function () {
    return {
        restrict: 'A',
        compile: function (tElement, tAttributes) {
            tElement.removeAttr('smart-timepicker data-smart-timepicker');
            tElement.timepicker();
        }
    }
});

'use strict';

angular.module('SmartAdmin.Forms').directive('smartUislider', function ($parse, lazyScript) {
    return {
        restrict: 'A',
        compile: function (tElement, tAttributes) {

            tElement.removeAttr('smart-uislider data-smart-uislider');

            lazyScript.register('build/vendor.ui.js').then(function(){
			    tElement.bootstrapSlider();

			    $(tElement.data('bootstrapSlider').sliderElem).prepend(tElement);      	
            })

        }
    }
});
"use strict";

angular.module('SmartAdmin.Forms').directive('smartXeditable', function($timeout, $log){

	function link (scope, element, attrs, ngModel) {

        var defaults = {
            // display: function(value, srcData) {
            //     ngModel.$setViewValue(value);
            //     // scope.$apply();
            // }
        };

        var inited = false;

        var initXeditable = function() {

            var options = scope.options || {};
    		var initOptions = angular.extend(defaults, options);

            // $log.log(initOptions);
            element.editable('destroy');
            element.editable(initOptions);
        }

        scope.$watch("options", function(newValue) {

            if(!newValue) {
                return false;
            }

            initXeditable();

            // $log.log("Options changed...");

        }, true);

    }

    return {
    	restrict: 'A',
    	require: "ngModel",
        scope: {
            options: "="
        },
    	link: link 

    }
});
'use strict';

angular.module('SmartAdmin.Forms').directive('smartDropzone', function () {
    return function (scope, element, attrs) {
        var config, dropzone;

        config = scope[attrs.smartDropzone];

        // create a Dropzone for the element with the given options
        dropzone = new Dropzone(element[0], config.options);

        // bind the given event handlers
        angular.forEach(config.eventHandlers, function (handler, event) {
            dropzone.on(event, handler);
        });
    };
});

'use strict';

angular.module('SmartAdmin.Forms').directive('smartJcrop', function ($q) {
    return {
        restrict: 'A',
        scope: {
            coords: '=',
            options: '=',
            selection: '='
        },
        link: function (scope, element, attributes) {
            var jcropApi, imageWidth, imageHeight, imageLoaded = $q.defer();

            var listeners = {
                onSelectHandlers: [],
                onChangeHandlers: [],
                onSelect: function (c) {
                    angular.forEach(listeners.onSelectHandlers, function (handler) {
                        handler.call(jcropApi, c)
                    })
                },
                onChange: function (c) {
                    angular.forEach(listeners.onChangeHandlers, function (handler) {
                        handler.call(jcropApi, c)
                    })
                }
            };

            if (attributes.coords) {
                var coordsUpdate = function (c) {
                    scope.$apply(function () {
                        scope.coords = c;
                    });
                };
                listeners.onSelectHandlers.push(coordsUpdate);
                listeners.onChangeHandlers.push(coordsUpdate);
            }

            var $previewPane = $(attributes.smartJcropPreview),
                $previewContainer = $previewPane.find('.preview-container'),
                $previewImg = $previewPane.find('img');

            if ($previewPane.length && $previewImg.length) {
                var previewUpdate = function (coords) {
                    if (parseInt(coords.w) > 0) {
                        var rx = $previewContainer.width() / coords.w;
                        var ry = $previewContainer.height() / coords.h;

                        $previewImg.css({
                            width: Math.round(rx * imageWidth) + 'px',
                            height: Math.round(ry * imageHeight) + 'px',
                            marginLeft: '-' + Math.round(rx * coords.x) + 'px',
                            marginTop: '-' + Math.round(ry * coords.y) + 'px'
                        });
                    }
                };
                listeners.onSelectHandlers.push(previewUpdate);
                listeners.onChangeHandlers.push(previewUpdate);
            }


            var options = {
                onSelect: listeners.onSelect,
                onChange: listeners.onChange
            };

            if ($previewContainer.length) {
                options.aspectRatio = $previewContainer.width() / $previewContainer.height()
            }

            if (attributes.selection) {
                scope.$watch('selection', function (newVal, oldVal) {
                    if (newVal != oldVal) {
                        var rectangle = newVal == 'release' ? [imageWidth / 2, imageHeight / 2, imageWidth / 2, imageHeight / 2] : newVal;

                        var callback = newVal == 'release' ? function () {
                            jcropApi.release();
                        } : angular.noop;

                        imageLoaded.promise.then(function () {
                            if (scope.options && scope.options.animate) {
                                jcropApi.animateTo(rectangle, callback);
                            } else {
                                jcropApi.setSelect(rectangle);
                            }
                        });
                    }
                });
            }

            if (attributes.options) {

                var optionNames = [
                    'bgOpacity', 'bgColor', 'bgFade', 'shade', 'outerImage',
                    'allowSelect', 'allowMove', 'allowResize',
                    'aspectRatio'
                ];

                angular.forEach(optionNames, function (name) {
                    if (scope.options[name])
                        options[name] = scope.options[name]

                    scope.$watch('options.' + name, function (newVal, oldVal) {
                        if (newVal != oldVal) {
                            imageLoaded.promise.then(function () {
                                var update = {};
                                update[name] = newVal;
                                jcropApi.setOptions(update);
                            });
                        }
                    });

                });


                scope.$watch('options.disabled', function (newVal, oldVal) {
                    if (newVal != oldVal) {
                        if (newVal) {
                            jcropApi.disable();
                        } else {
                            jcropApi.enable();
                        }
                    }
                });

                scope.$watch('options.destroyed', function (newVal, oldVal) {
                    if (newVal != oldVal) {
                        if (newVal) {
                            jcropApi.destroy();
                        } else {
                            _init();
                        }
                    }
                });

                scope.$watch('options.src', function (newVal, oldVal) {
                    imageLoaded = $q.defer();
                    if (newVal != oldVal) {
                        jcropApi.setImage(scope.options.src, function () {
                            imageLoaded.resolve();
                        });
                    }
                });

                var updateSize = function(){
                    jcropApi.setOptions({
                        minSize: [scope.options.minSizeWidth, scope.options.minSizeHeight],
                        maxSize: [scope.options.maxSizeWidth, scope.options.maxSizeHeight]
                    });
                };

                scope.$watch('options.minSizeWidth', function (newVal, oldVal) {
                    if (newVal != oldVal) updateSize();
                });
                scope.$watch('options.minSizeHeight', function (newVal, oldVal) {
                    if (newVal != oldVal) updateSize();
                });
                scope.$watch('options.maxSizeWidth', function (newVal, oldVal) {
                    if (newVal != oldVal) updateSize();
                });
                scope.$watch('options.maxSizeHeight', function (newVal, oldVal) {
                    if (newVal != oldVal) updateSize();
                });
            }

            var _init = function () {
                element.Jcrop(options, function () {
                    jcropApi = this;
                    // Use the API to get the real image size
                    var bounds = this.getBounds();
                    imageWidth = bounds[0];
                    imageHeight = bounds[1];

                    if (attributes.selection && angular.isArray(scope.selection)) {
                        if (scope.options && scope.options.animate) {
                            jcropApi.animateTo(scope.selection);
                        } else {
                            jcropApi.setSelect(scope.selection);
                        }
                    }
                    imageLoaded.resolve();
                });
            };

            _init()


        }
    }
});
'use strict';

angular.module('SmartAdmin.Forms').directive('smartValidateForm', function (formsCommon) {
    return {
        restrict: 'A',
        link: function (scope, form, attributes) {

            var validateOptions = {
                rules: {},
                messages: {},
                highlight: function (element) {
                    $(element).closest('.form-group').removeClass('has-success').addClass('has-error');
                },
                unhighlight: function (element) {
                    $(element).closest('.form-group').removeClass('has-error').addClass('has-success');
                },
                errorElement: 'span',
                errorClass: 'help-block',
                errorPlacement: function (error, element) {
                    if (element.parent('.input-group').length) {
                        error.insertAfter(element.parent());
                    } else {
                        error.insertAfter(element);
                    }
                }
            };
            form.find('[data-smart-validate-input], [smart-validate-input]').each(function () {
                var $input = $(this), fieldName = $input.attr('name');

                validateOptions.rules[fieldName] = {};

                if ($input.data('required') != undefined) {
                    validateOptions.rules[fieldName].required = true;
                }
                if ($input.data('email') != undefined) {
                    validateOptions.rules[fieldName].email = true;
                }

                if ($input.data('maxlength') != undefined) {
                    validateOptions.rules[fieldName].maxlength = $input.data('maxlength');
                }

                if ($input.data('minlength') != undefined) {
                    validateOptions.rules[fieldName].minlength = $input.data('minlength');
                }

                if($input.data('message')){
                    validateOptions.messages[fieldName] = $input.data('message');
                } else {
                    angular.forEach($input.data(), function(value, key){
                        if(key.search(/message/)== 0){
                            if(!validateOptions.messages[fieldName])
                                validateOptions.messages[fieldName] = {};

                            var messageKey = key.toLowerCase().replace(/^message/,'')
                            validateOptions.messages[fieldName][messageKey] = value;
                        }
                    });
                }
            });


            form.validate(validateOptions);

        }
    }
});

'use strict';

angular.module('SmartAdmin.Forms').directive('smartFueluxWizard', function () {
    return {
        restrict: 'A',
        scope: {
            smartWizardCallback: '&'
        },
        link: function (scope, element, attributes) {

            var wizard = element.wizard();

            var $form = element.find('form');

            wizard.on('actionclicked.fu.wizard', function(e, data){
                if ($form.data('validator')) {
                    if (!$form.valid()) {
                        $form.data('validator').focusInvalid();
                        e.preventDefault();
                    }
                }
            });

            wizard.on('finished.fu.wizard', function (e, data) {
                var formData = {};
                _.each($form.serializeArray(), function(field){
                    formData[field.name] = field.value
                });
                if(typeof scope.smartWizardCallback() === 'function'){
                    scope.smartWizardCallback()(formData)
                }
            });
        }
    }
});
'use strict';

angular.module('SmartAdmin.Forms').directive('smartWizard', function () {
    return {
        restrict: 'A',
        scope: {
            'smartWizardCallback': '&'
        },
        link: function (scope, element, attributes) {

            var stepsCount = $('[data-smart-wizard-tab]').length;

            var currentStep = 1;

            var validSteps = [];

            var $form = element.closest('form');

            var $prev = $('[data-smart-wizard-prev]', element);

            var $next = $('[data-smart-wizard-next]', element);

            function setStep(step) {
                currentStep = step;
                $('[data-smart-wizard-pane=' + step + ']', element).addClass('active').siblings('[data-smart-wizard-pane]').removeClass('active');
                $('[data-smart-wizard-tab=' + step + ']', element).addClass('active').siblings('[data-smart-wizard-tab]').removeClass('active');

                $prev.toggleClass('disabled', step == 1)
            }


            element.on('click', '[data-smart-wizard-tab]', function (e) {
                setStep(parseInt($(this).data('smartWizardTab')));
                e.preventDefault();
            });

            $next.on('click', function (e) {
                if ($form.data('validator')) {
                    if (!$form.valid()) {
                        validSteps = _.without(validSteps, currentStep);
                        $form.data('validator').focusInvalid();
                        return false;
                    } else {
                        validSteps = _.without(validSteps, currentStep);
                        validSteps.push(currentStep);
                        element.find('[data-smart-wizard-tab=' + currentStep + ']')
                            .addClass('complete')
                            .find('.step')
                            .html('<i class="fa fa-check"></i>');
                    }
                }
                if (currentStep < stepsCount) {
                    setStep(currentStep + 1);
                } else {
                    if (validSteps.length < stepsCount) {
                        var steps = _.range(1, stepsCount + 1)

                        _(steps).forEach(function (num) {
                            if (validSteps.indexOf(num) == -1) {
                                console.log(num);
                                setStep(num);
                                return false;
                            }
                        })
                    } else {
                        var data = {};
                        _.each($form.serializeArray(), function(field){
                            data[field.name] = field.value
                        });
                        if(typeof  scope.smartWizardCallback() === 'function'){
                            scope.smartWizardCallback()(data)
                        }
                    }
                }

                e.preventDefault();
            });

            $prev.on('click', function (e) {
                if (!$prev.hasClass('disabled') && currentStep > 0) {
                    setStep(currentStep - 1);
                }
                e.preventDefault();
            });


            setStep(currentStep);

        }
    }
});
'use strict';

angular.module('SmartAdmin.Layout').directive('demoStates', function ($rootScope) {
    return {
        restrict: 'EA',
        replace: true,
        templateUrl: 'app/_common/layout/directives/demo/demo-states.tpl.html',
        scope: true,
        link: function (scope, element, attributes) {
            element.parent().css({
                position: 'relative'
            });

            element.on('click', '#demo-setting', function () {
                element.toggleClass('activate')
            })
        },
        controller: function ($scope) {
            var $root = $('body');

            $scope.$watch('fixedHeader', function (fixedHeader) {
                localStorage.setItem('sm-fixed-header', fixedHeader);
                $root.toggleClass('fixed-header', fixedHeader);
                if (fixedHeader == false) {
                    $scope.fixedRibbon = false;
                    $scope.fixedNavigation = false;
                }
            });


            $scope.$watch('fixedNavigation', function (fixedNavigation) {
                localStorage.setItem('sm-fixed-navigation', fixedNavigation);
                $root.toggleClass('fixed-navigation', fixedNavigation);
                if (fixedNavigation) {
                    $scope.insideContainer = false;
                    $scope.fixedHeader = true;
                } else {
                    $scope.fixedRibbon = false;
                }
            });


            $scope.$watch('fixedRibbon', function (fixedRibbon) {
                localStorage.setItem('sm-fixed-ribbon', fixedRibbon);
                $root.toggleClass('fixed-ribbon', fixedRibbon);
                if (fixedRibbon) {
                    $scope.fixedHeader = true;
                    $scope.fixedNavigation = true;
                    $scope.insideContainer = false;
                }
            });

            $scope.$watch('fixedPageFooter', function (fixedPageFooter) {
                localStorage.setItem('sm-fixed-page-footer', fixedPageFooter);
                $root.toggleClass('fixed-page-footer', fixedPageFooter);
            });

            $scope.$watch('insideContainer', function (insideContainer) {
                localStorage.setItem('sm-inside-container', insideContainer);
                $root.toggleClass('container', insideContainer);
                if (insideContainer) {
                    $scope.fixedRibbon = false;
                    $scope.fixedNavigation = false;
                }
            });

            $scope.$watch('rtl', function (rtl) {
                localStorage.setItem('sm-rtl', rtl);
                $root.toggleClass('smart-rtl', rtl);
            });

            $scope.$watch('menuOnTop', function (menuOnTop) {
                $rootScope.$broadcast('$smartLayoutMenuOnTop', menuOnTop);
                localStorage.setItem('sm-menu-on-top', menuOnTop);
                $root.toggleClass('menu-on-top', menuOnTop);

                if(menuOnTop)$root.removeClass('minified');
            });

            $scope.$watch('colorblindFriendly', function (colorblindFriendly) {
                localStorage.setItem('sm-colorblind-friendly', colorblindFriendly);
                $root.toggleClass('colorblind-friendly', colorblindFriendly);
            });


            $scope.fixedHeader = localStorage.getItem('sm-fixed-header') == 'true';
            $scope.fixedNavigation = localStorage.getItem('sm-fixed-navigation') == 'true';
            $scope.fixedRibbon = localStorage.getItem('sm-fixed-ribbon') == 'true';
            $scope.fixedPageFooter = localStorage.getItem('sm-fixed-page-footer') == 'true';
            $scope.insideContainer = localStorage.getItem('sm-inside-container') == 'true';
            $scope.rtl = localStorage.getItem('sm-rtl') == 'true';
            $scope.menuOnTop = localStorage.getItem('sm-menu-on-top') == 'true' || $root.hasClass('menu-on-top');
            $scope.colorblindFriendly = localStorage.getItem('sm-colorblind-friendly') == 'true';


            $scope.skins = appConfig.skins;


            $scope.smartSkin = localStorage.getItem('sm-skin') ? localStorage.getItem('sm-skin') : appConfig.smartSkin;

            $scope.setSkin = function (skin) {
                $scope.smartSkin = skin.name;
                $root.removeClass(_.pluck($scope.skins, 'name').join(' '));
                $root.addClass(skin.name);
                localStorage.setItem('sm-skin', skin.name);
                $("#logo img").attr('src', skin.logo);
            };


            if($scope.smartSkin != "smart-style-0"){
                $scope.setSkin(_.find($scope.skins, {name: $scope.smartSkin}))
            }


            $scope.factoryReset = function () {
                $.SmartMessageBox({
                    title: "<i class='fa fa-refresh' style='color:green'></i> Clear Local Storage",
                    content: "Would you like to RESET all your saved widgets and clear LocalStorage?1",
                    buttons: '[No][Yes]'
                }, function (ButtonPressed) {
                    if (ButtonPressed == "Yes" && localStorage) {
                        localStorage.clear();
                        location.reload()
                    }
                });
            }
        }
    }
});
"use strict";

(function ($) {

    $.fn.smartCollapseToggle = function () {

        return this.each(function () {

            var $body = $('body');
            var $this = $(this);

            // only if not  'menu-on-top'
            if ($body.hasClass('menu-on-top')) {


            } else {

                $body.hasClass('mobile-view-activated')

                // toggle open
                $this.toggleClass('open');

                // for minified menu collapse only second level
                if ($body.hasClass('minified')) {
                    if ($this.closest('nav ul ul').length) {
                        $this.find('>a .collapse-sign .fa').toggleClass('fa-minus-square-o fa-plus-square-o');
                        $this.find('ul:first').slideToggle(appConfig.menu_speed || 200);
                    }
                } else {
                    // toggle expand item
                    $this.find('>a .collapse-sign .fa').toggleClass('fa-minus-square-o fa-plus-square-o');
                    $this.find('ul:first').slideToggle(appConfig.menu_speed || 200);
                }
            }
        });
    };
})(jQuery);

angular.module('SmartAdmin.Layout').directive('smartMenu', function ($state, $rootScope) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var $body = $('body');

            var $collapsible = element.find('li[data-menu-collapse]');

            var bindEvents = function(){
                $collapsible.each(function (idx, li) {
                    var $li = $(li);
                    $li
                        .on('click', '>a', function (e) {

                            // collapse all open siblings
                            $li.siblings('.open').smartCollapseToggle();

                            // toggle element
                            $li.smartCollapseToggle();

                            // add active marker to collapsed element if it has active childs
                            if (!$li.hasClass('open') && $li.find('li.active').length > 0) {
                                $li.addClass('active')
                            }

                            e.preventDefault();
                        })
                        .find('>a').append('<b class="collapse-sign"><em class="fa fa-plus-square-o"></em></b>');

                    // initialization toggle
                    if ($li.find('li.active').length) {
                        $li.smartCollapseToggle();
                        $li.find('li.active').parents('li').addClass('active');
                    }
                });
            }
            bindEvents();


            // click on route link
            element.on('click', 'a[data-ui-sref]', function (e) {
                // collapse all siblings to element parents and remove active markers
                $(this)
                    .parents('li').addClass('active')
                    .each(function () {
                        $(this).siblings('li.open').smartCollapseToggle();
                        $(this).siblings('li').removeClass('active')
                    });

                if ($body.hasClass('mobile-view-activated')) {
                    $rootScope.$broadcast('requestToggleMenu');
                }
            });


            scope.$on('$smartLayoutMenuOnTop', function (event, menuOnTop) {
                if (menuOnTop) {
                    $collapsible.filter('.open').smartCollapseToggle();
                }
            });
        }
    }
});
(function(){
    "use strict";

    angular.module('SmartAdmin.Layout').directive('smartMenuItems', function ($http, $rootScope, $compile) {
    return {
        restrict: 'A',
        compile: function (element, attrs) {
            

            function createItem(item, parent, level){
                var li = $('<li />' ,{'ui-sref-active': "active"})
                var a = $('<a />');
                var i = $('<i />');

                li.append(a);

                if(item.sref)
                    a.attr('ui-sref', item.sref);
                if(item.href)
                    a.attr('href', item.href);
                if(item.icon){
                    i.attr('class', 'fa fa-lg fa-fw fa-'+item.icon);
                    a.append(i);
                }
                if(item.title){
                    a.attr('title', item.title);
                    if(level == 1){ 
                        a.append(' <span class="menu-item-parent">' + item.title + '</span>');
                    } else {
                        a.append(' ' + item.title);

                    }
                }

                if(item.items){
                    var ul = $('<ul />');
                    li.append(ul);
                    li.attr('data-menu-collapse', '');
                    _.forEach(item.items, function(child) {
                        createItem(child, ul, level+1);
                    })
                } 

                parent.append(li); 
            }


            $http.get(attrs.smartMenuItems).then(function(res){
                var ul = $('<ul />', {
                    'smart-menu': ''
                })
                _.forEach(res.data.items, function(item) {
                    createItem(item, ul, 1);
                })
                
                var $scope = $rootScope.$new();
                var html = $('<div>').append(ul).html(); 
                var linkingFunction = $compile(html);
                
                var _element = linkingFunction($scope);

                element.replaceWith(_element);                
            })
        }
    }
});
})();
/**
 * Jarvis Widget Directive
 *
 *    colorbutton="false"
 *    editbutton="false"
      togglebutton="false"
       deletebutton="false"
        fullscreenbutton="false"
        custombutton="false"
        collapsed="true"
          sortable="false"
 *
 *
 */
"use strict";

angular.module('SmartAdmin.Layout').directive('jarvisWidget', function($rootScope){
    return {
        restrict: "A",
        compile: function(element, attributes){
            if(element.data('widget-color'))
                element.addClass('jarviswidget-color-' + element.data('widget-color'));


            element.find('.widget-body').prepend('<div class="jarviswidget-editbox"><input class="form-control" type="text"></div>');

            element.addClass('jarviswidget');
            $rootScope.$emit('jarvisWidgetAdded', element )

        }
    }
});
 "use strict";
 
 angular.module('SmartAdmin.Layout').directive('widgetGrid', function ($rootScope, $compile, $q, $state, $timeout) {

    var jarvisWidgetsDefaults = {
        grid: 'article',
        widgets: '.jarviswidget',
        localStorage: true,
        deleteSettingsKey: '#deletesettingskey-options',
        settingsKeyLabel: 'Reset settings?',
        deletePositionKey: '#deletepositionkey-options',
        positionKeyLabel: 'Reset position?',
        sortable: true,
        buttonsHidden: false,
        // toggle button
        toggleButton: true,
        toggleClass: 'fa fa-minus | fa fa-plus',
        toggleSpeed: 200,
        onToggle: function () {
        },
        // delete btn
        deleteButton: true,
        deleteMsg: 'Warning: This action cannot be undone!',
        deleteClass: 'fa fa-times',
        deleteSpeed: 200,
        onDelete: function () {
        },
        // edit btn
        editButton: true,
        editPlaceholder: '.jarviswidget-editbox',
        editClass: 'fa fa-cog | fa fa-save',
        editSpeed: 200,
        onEdit: function () {
        },
        // color button
        colorButton: true,
        // full screen
        fullscreenButton: true,
        fullscreenClass: 'fa fa-expand | fa fa-compress',
        fullscreenDiff: 3,
        onFullscreen: function () {
        },
        // custom btn
        customButton: false,
        customClass: 'folder-10 | next-10',
        customStart: function () {
            alert('Hello you, this is a custom button...');
        },
        customEnd: function () {
            alert('bye, till next time...');
        },
        // order
        buttonOrder: '%refresh% %custom% %edit% %toggle% %fullscreen% %delete%',
        opacity: 1.0,
        dragHandle: '> header',
        placeholderClass: 'jarviswidget-placeholder',
        indicator: true,
        indicatorTime: 600,
        ajax: true,
        timestampPlaceholder: '.jarviswidget-timestamp',
        timestampFormat: 'Last update: %m%/%d%/%y% %h%:%i%:%s%',
        refreshButton: true,
        refreshButtonClass: 'fa fa-refresh',
        labelError: 'Sorry but there was a error:',
        labelUpdated: 'Last Update:',
        labelRefresh: 'Refresh',
        labelDelete: 'Delete widget:',
        afterLoad: function () {
        },
        rtl: false, // best not to toggle this!
        onChange: function () {

        },
        onSave: function () {

        },
        ajaxnav: true

    }

    var dispatchedWidgetIds = [];
    var setupWaiting = false;

    var debug = 1;

    var setupWidgets = function (element, widgetIds) {

        if (!setupWaiting) {

            if(_.intersection(widgetIds, dispatchedWidgetIds).length != widgetIds.length){

                dispatchedWidgetIds = _.union(widgetIds, dispatchedWidgetIds);

//                    console.log('setupWidgets', debug++);

                element.data('jarvisWidgets') && element.data('jarvisWidgets').destroy();
                element.jarvisWidgets(jarvisWidgetsDefaults);
                initDropdowns(widgetIds);
            }

        } else {
            if (!setupWaiting) {
                setupWaiting = true;
                $timeout(function () {
                    setupWaiting = false;
                    setupWidgets(element, widgetIds)
                }, 200);
            }
        }

    };

    var destroyWidgets = function(element, widgetIds){
        element.data('jarvisWidgets') && element.data('jarvisWidgets').destroy();
        dispatchedWidgetIds = _.xor(dispatchedWidgetIds, widgetIds);
    };

    var initDropdowns = function (widgetIds) {
        angular.forEach(widgetIds, function (wid) {
            $('#' + wid + ' [data-toggle="dropdown"]').each(function () {
                var $parent = $(this).parent();
                // $(this).removeAttr('data-toggle');
                if (!$parent.attr('dropdown')) {
                    $(this).removeAttr('href');
                    $parent.attr('dropdown', '');
                    var compiled = $compile($parent)($parent.scope())
                    $parent.replaceWith(compiled);
                }
            })
        });
    };

    var jarvisWidgetAddedOff,
        $viewContentLoadedOff,
        $stateChangeStartOff;

    return {
        restrict: 'A',
        compile: function(element){

            element.removeAttr('widget-grid data-widget-grid');

            var widgetIds = [];

            $viewContentLoadedOff = $rootScope.$on('$viewContentLoaded', function (event, data) {
                $timeout(function () {
                    setupWidgets(element, widgetIds)
                }, 100);
            });


            $stateChangeStartOff = $rootScope.$on('$stateChangeStart',
                function(event, toState, toParams, fromState, fromParams){
                    jarvisWidgetAddedOff();
                    $viewContentLoadedOff();
                    $stateChangeStartOff();
                    destroyWidgets(element, widgetIds)
                });

            jarvisWidgetAddedOff = $rootScope.$on('jarvisWidgetAdded', function (event, widget) {
                if (widgetIds.indexOf(widget.attr('id')) == -1) {
                    widgetIds.push(widget.attr('id'));
                    $timeout(function () {
                        setupWidgets(element, widgetIds)
                    }, 100);
                }
//                    console.log('jarvisWidgetAdded', widget.attr('id'));
            });

        }
    }
});
