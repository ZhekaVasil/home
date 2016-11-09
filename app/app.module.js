'use strict';

// Define the `phonecatApp` module
angular.module('phonecatApp', [
  'ngAnimate',
  'ngRoute',
  'core',
  'phoneDetail',
  'phoneList',
  'cart',
  'cartList',
  'ngCookies',
  'login',
  'logout'
]).service('CartList', function () {
  var self = this;
  this.count = 0;
  this.list = {};
  this.incrementCount = function () {
    self.count +=1;
  };
  this.decrementCount = function (item) {
    console.log(item.id);
    if(self.list[item.id].count == 0){delete self.list[item.id];}
    console.log(self.list);
    self.count -=1;
  };

  this.addInObj = addInObj
}).service('checkCookies', function ($cookies, $location) {
  this.cookies = function () {
    if(!$cookies.get('login')){
      $location.url('/login')
    }
    return $cookies.get('login')
  };
}).factory('Users', ['$http',
  function($http) {
    return $http.get('users/users.json').success(function (data) {
      return data
    });
  }
]).run(function ($cookieStore, CartList, $rootScope) {
  if ($cookieStore.get('cart')){
    CartList.list = $cookieStore.get('cart');
    CartList.count = countItems(CartList);
  }
});



function addInObj(index, obj, single){
  var item, imageUrl, snippet;
  if(!single){
    item = obj[index].id;
    imageUrl = obj[index].imageUrl;
    snippet = obj[index].name;
  } else {
    item = single.id;
    imageUrl = single.images[0];
    snippet = single.name;
  }
  if((item in this.list) === false){
    this.list[item] = {
      count : 1,
      imageUrl : imageUrl,
      snippet : snippet,
      id : item
    };
  } else {
      this.list[item].count +=1;
  }
}

function countItems(CartList) {
  var start = 0;
  for(var key in CartList.list){
    start += CartList.list[key].count
  }
  return start
}
