angular.module('starter.services', [])

.factory('Messages', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var messages = [{
    id: 0,
    name: '洗车成功通知',
    time: '2017-07-17 10:43:00',
    lastText: '您好，您于2017-07-17 10:43:00在内部测试311第1号洗车机消费2.0元，洗车成功，请到余额中查看。谢谢使用！',
    icon: 'icon icon-xiche balanced'
  }, {
    id: 1,
    name: '充电成功通知',
    time: '2017-07-17 10:43:00',
    lastText: '您好，您于2017-07-17 10:43:00在内部测试311第1号插座消费2.0元，充电成功，请到余额中查看。谢谢使用！',
    icon: 'icon icon-dianping energized'
  }, {
    id: 2,
    name: '洗车成功通知',
    time: '2017-07-17 10:43:00',
    lastText: '您好，您于2017-07-17 10:43:00在内部测试311第1号洗车机消费2.0元，洗车成功，请到余额中查看。谢谢使用！',
    icon: 'icon icon-xiche balanced'
  }, {
    id: 3,
    name: '洗车成功通知',
    time: '2017-07-17 10:43:00',
    lastText: '您好，您于2017-07-17 10:43:00在内部测试311第1号洗车机消费2.0元，洗车成功，请到余额中查看。谢谢使用！',
    icon: 'icon icon-xiche balanced'
  }, {
    id: 4,
    name: '洗车成功通知',
    time: '2017-07-17 10:43:00',
    lastText: '您好，您于2017-07-17 10:43:00在内部测试311第1号洗车机消费2.0元，洗车成功，请到余额中查看。谢谢使用！',
    icon: 'icon icon-xiche balanced'
  }];

  return {
    all: function() {
      return messages;
    },
    remove: function(message) {
      messages.splice(messages.indexOf(message), 1);
    },
    get: function(messageId) {
      for (var i = 0; i < messages.length; i++) {
        if (messages[i].id === parseInt(messageId)) {
          return messages[i];
        }
      }
      return null;
    }
  };
})

.factory('Eleconsumes', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var eleconsumes = [{
    id: 0,
    money: '-10元',
    duration: '3600',
    time: '2017-07-17 10:43:00',
    payment: '余额支付',
    OrderNo: '123456789012345678901234567890'
  }, {
    id: 1,
    money: '-5元',
    duration: '1800',
    time: '2017-07-17 16:43:00',
    payment: '余额支付',
    OrderNo: '123456789012345678901234567890'
  }, {
    id: 2,
    money: '-1元',
    duration: '360',
    time: '2017-07-17 12:43:00',
    payment: '余额支付',
    OrderNo: '123456789012345678901234567890'
  }];

  return {
    all: function() {
      return eleconsumes;
    },
    remove: function(eleconsume) {
      eleconsumes.splice(eleconsumes.indexOf(eleconsume), 1);
    },
    get: function(eleconsumeId) {
      for (var i = 0; i < eleconsumes.length; i++) {
        if (eleconsumes[i].id === parseInt(eleconsumeId)) {
          return eleconsumes[i];
        }
      }
      return null;
    }
  };
})
  .factory('Carconsumes', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var carconsumes = [{
    id: 0,
    money: '-10元',
    time: '2017-07-17 10:43:00',
    payment: '余额支付',
    OrderNo: '123456789012345678901234567890'
  }, {
    id: 1,
    money: '-5元',
    time: '2017-07-17 16:43:00',
    payment: '余额支付',
    OrderNo: '123456789012345678901234567890'
  }, {
    id: 2,
    money: '-1元',
    time: '2017-07-17 12:43:00',
    payment: '余额支付',
    OrderNo: '123456789012345678901234567890'
  }];

  return {
    all: function() {
      return carconsumes;
    },
    remove: function(carconsume) {
      carconsumes.splice(carconsumes.indexOf(carconsume), 1);
    },
    get: function(carconsumeId) {
      for (var i = 0; i < carconsumes.length; i++) {
        if (carconsumes[i].id === parseInt(carconsumeId)) {
          return carconsumes[i];
        }
      }
      return null;
    }
  };
});
//$(document).ready(function(){
//  $('.inactive').click(function(){
//    alert(123);
//    if($(this).children('ul').css('display')=='none'){
//      $(this).siblings('li').removeClass('inactives');
//      $(this).addClass('inactives');
//      $(this).siblings('li').children('ul').slideUp(100).children('li');
//      $(this).children('ul').slideDown(100).children('li');
//    }else{
//      //控制自身变成+号
//      $(this).removeClass('inactives');
//      //控制自身菜单下子菜单隐藏
//      $(this).children('ul').slideUp(100);
//      //控制同级菜单只保持一个是展开的（-号显示）
//      $(this).siblings('li').children('ul').slideUp(100);
//    }
//  });
//});
