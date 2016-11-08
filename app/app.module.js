'use strict';

// Define the `phonecatApp` module
angular.module('phonecatApp', [
  'ngAnimate',
  'ngRoute',
  'core',
  'phoneDetail',
  'phoneList',
  'cart',
  'cartList'
]).service('CartList', function () {
  var self = this;
  this.count = 0;
  this.list = {};
  this.incrementCount = function () {
    self.count +=1;
  };
  this.decrementCount = function () {
    self.count -=1;
  };

  this.addInObj = addInObj
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
