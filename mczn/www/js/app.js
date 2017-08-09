// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('myApp', ['ionic','myApp.controllers','starter.services'])
//自定义的module（'myApp.controllers'）必须要引入进来才能使用

  .config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
//解决android中导航栏在顶部问题
    $ionicConfigProvider.platform.ios.tabs.style('standard');
    $ionicConfigProvider.platform.ios.tabs.position('bottom');
    $ionicConfigProvider.platform.android.tabs.style('standard');
    $ionicConfigProvider.platform.android.tabs.position('standard');

    $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
    $ionicConfigProvider.platform.android.navBar.alignTitle('left');

    $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
    $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

    $ionicConfigProvider.platform.ios.views.transition('ios');
    $ionicConfigProvider.platform.android.views.transition('android');

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in  controllers.js
    $stateProvider

      // setup an abstract state for the tabs directive
      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
      })
//定义父级tab公用部分，以方便内容页面继承
      // Each tab has its own nav history stack:

      .state('tab.myindex', {
        url: '/myindex',
        views: {
          'myindex': {
            templateUrl: 'templates/myindex.html',
            controller: 'myindexController'
          }
        }
      })
      //tab.dash   表示dash继承tab

      .state('tab.saoyisao', {
        url: '/saoyisao',
        views: {
          'saoyisao': {
            templateUrl: 'templates/saoyisao.html',
            controller: 'saoyisaoController'
          }
        }
      })

      //help帮助文档页面开始
      .state('tab.help', {
        url: '/help',
        views: {
          'help': {
            templateUrl: 'templates/help/help.html',
            controller: 'helpController'
          }
        }
      })

      .state('tab.help-detail1', {
        url: '/help-detail1',
        views: {
          'help': {
            templateUrl: 'templates/help/help-detail1.html',
            controller: 'help-detail1Controller'
          }
        }
      })

      .state('tab.help-detail2', {
        url: '/help-detail2',
        views: {
          'help': {
            templateUrl: 'templates/help/help-detail2.html',
            controller: 'help-detail2Controller'
          }
        }
      })
      //help帮助文档页面结束
      //个人信息页面开始
      .state('tab.my_information', {
        url: '/my_information',
        views: {
          'myindex': {
            templateUrl: 'templates/my_information/my_information.html'
          }
        }
      })
      .state('tab.boundiphone', {
        url: '/boundiphone',
        views: {
          'myindex': {
            templateUrl: 'templates/my_information/boundiphone.html'
          }
        }
      })
      .state('tab.changepsd', {
        url: '/changepsd',
        views: {
          'myindex': {
            templateUrl: 'templates/my_information/changepsd.html'
          }
        }
      })
      //个人信息页面结束
      //我的消息页面开始
      .state('tab.my_message', {
        url: '/my_message',
        views: {
          'myindex': {
            templateUrl: 'templates/my_message/my_message.html',
            controller: 'my_messageController'
          }
        }
      })
      .state('tab.message_details', {
        url: '/my_message/:messageId',
        views: {
          'myindex': {
            templateUrl: 'templates/my_message/message_details.html',
            controller: 'message_detailsController'
          }
        }
      })
      //消费记录页面开始
      .state('tab.consume_list', {
        url: '/consume_list',
        views: {
          'myindex': {
            templateUrl: 'templates/consume_list/consume_list.html'
          }
        }
      })
      .state('tab.eleconsume_list', {
        url: '/eleconsume_list',
        views: {
          'myindex': {
            templateUrl: 'templates/consume_list/eleconsume_list.html',
            controller: 'eleconsume_listController'
          }
        }
      })
      .state('tab.eleconsume_detail', {
        url: '/eleconsume_list/:eleconsumeId',
        views: {
          'myindex': {
            templateUrl: 'templates/consume_list/eleconsume_detail.html',
            controller: 'eleconsume_detailController'
          }
        }
      })
      .state('tab.carconsume_list', {
        url: '/carconsume_list',
        views: {
          'myindex': {
            templateUrl: 'templates/consume_list/carconsume_list.html',
            controller: 'carconsume_listController'
          }
        }
      })
      .state('tab.carconsume_detail', {
        url: '/carconsume_list/:carconsumeId',
        views: {
          'myindex': {
            templateUrl: 'templates/consume_list/carconsume_detail.html',
            controller: 'carconsume_detailController'
          }
        }
      })
      //消费记录页面结束
      //余额页面开始
      .state('tab.my_balance', {
        url: '/my_balance',
        views: {
          'myindex': {
            templateUrl: 'templates/my_balance/my_balance.html'
          }
        }
      })
      .state('tab.recharge', {
        url: '/recharge',
        views: {
          'myindex': {
            templateUrl: 'templates/my_balance/recharge.html'
          }
        }
      })
      .state('tab.recharge_list', {
        url: '/recharge_list',
        views: {
          'myindex': {
            templateUrl: 'templates/my_balance/recharge_list.html'
          }
        }
      })
    //余额页面结束
    //绑定卡页面开始
    .state('tab.bindingcard', {
      url: '/bindingcard',
      views: {
        'myindex': {
          templateUrl: 'templates/bindingcard.html'
        }
      }
    })
    //绑定卡页面结束
    //我要购买页面开始
    .state('tab.wantbuy', {
      url: '/wantbuy',
      views: {
        'myindex': {
          templateUrl: 'templates/wantbuy.html'
        }
      }
    })
    //我要购买页面结束
    //关于我们页面开始
    .state('tab.aboutus', {
      url: '/aboutus',
      views: {
        'myindex': {
          templateUrl: 'templates/aboutus/aboutus.html'
        }
      }
    })
      .state('tab.feedback', {
      url: '/feedback',
      views: {
        'myindex': {
          templateUrl: 'templates/aboutus/feedback.html'
        }
      }
    })
      .state('tab.Copyright', {
      url: '/Copyright',
      views: {
        'myindex': {
          templateUrl: 'templates/aboutus/Copyright.html'
        }
      }
    })
      .state('tab.Disclaimer', {
      url: '/Disclaimer',
      views: {
        'myindex': {
          templateUrl: 'templates/aboutus/Disclaimer.html'
        }
      }
    })
    //关于我们页面结束
    //代理商管理相关页面开始
    .state('tab.agent_manage', {
      url: '/agent_manage',
      views: {
        'myindex': {
          templateUrl: 'templates/agent_manage/agent_manage.html'
        }
      }
    })
      .state('tab.community_list', {
      url: '/community_list',
      views: {
        'myindex': {
          templateUrl: 'templates/agent_manage/community_list.html',
          controller: 'community_listController'
        }
      }
    });
    //代理商管理相关页面结束



//Controller必须要另外定义才能使用
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/myindex');
//当配置的路由找不到时 ，，会跳转到默认的路由地址
  });
