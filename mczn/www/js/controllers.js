angular.module('myApp.controllers', [])

  .controller('myindexController', function($scope) {

    $scope.title='myindexController';

  })

  .controller('saoyisaoController', function($scope) {

    $scope.title='saoyisaoController';

  })
  //help帮助文档页面开始
  .controller('helpController', function($scope) {

    $scope.title='helpController';

  })
  .controller('help-detail2Controller', function($scope) {

    $scope.title='help-detail2Controller';

  })
  .controller('help-detail1Controller', function($scope) {

    $scope.title='help-detail1Controller';

  })
//help帮助文档页面结束

//我的消息页面开始
  .controller('my_messageController', function($scope, Messages) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.messages = Messages.all();
    $scope.remove = function(message) {
      Messages.remove(message);
    };
  })

  .controller('message_detailsController', function($scope, $stateParams, Messages) {
    $scope.message = Messages.get($stateParams.messageId);
  })
//我的消息页面结束
//消费记录页面开始
  .controller('eleconsume_listController', function($scope, Eleconsumes) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.eleconsumes = Eleconsumes.all();
    $scope.remove = function(eleconsume) {
      Eleconsumes.remove(eleconsume);
    };
  })

  .controller('eleconsume_detailController', function($scope, $stateParams, Eleconsumes) {
    $scope.eleconsume = Eleconsumes.get($stateParams.eleconsumeId);
  })

  .controller('carconsume_listController', function($scope, Carconsumes) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.carconsumes = Carconsumes.all();
    $scope.remove = function(carconsume) {
      Carconsumes.remove(carconsume);
    };
  })

  .controller('carconsume_detailController', function($scope, $stateParams, Carconsumes) {
    $scope.carconsume = Carconsumes.get($stateParams.carconsumeId);
  })
//消费记录页面结束
//小区管理员页面开始
  .controller('community_listController', function($scope) {
    var ele = null;
    $scope.toggleMenu=function(msg){
      if((ele != null) && (ele != msg)){
        jQuery("#" + ele).removeClass('show')
      }
      ele = msg;
      jQuery("#" + msg).toggleClass("show");
    }
  });
//小区管理员页面结束





