'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('phoneList').
  component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: ['Phone','CartList','$rootScope','checkCookies','$scope',
      function PhoneListController(Phone, CartList, $rootScope, checkCookies, $scope) {
      var self = this;
        var x = this.query;
        this.query = '';
        checkCookies.cookies();
        this.phones = Phone.query();
        this.orderProp = 'age';
        this.addInCart = function (index) {
          var filtredObj = self.phones;
          if(self.query.length){
            filtredObj = self.phones.filter(function (item, i) {
              return item.name.toLowerCase().indexOf(self.query.toLowerCase()) >=0  ;
            });
          }
          if(self.orderProp == 'name'){
            filtredObj.sort(function(a,b){
              return (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : -1;
            })
          } else {
            filtredObj.sort(function(a,b){
              return (a.age > b.age) ? 1 : -1;
            })
          }
          CartList.incrementCount();
          CartList.addInObj(index, filtredObj);
          $rootScope.$emit('renewCount','');
        };
      }
    ]
  });
