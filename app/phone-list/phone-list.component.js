'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('phoneList').
  component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: ['Phone','CartList','$rootScope','checkCookies',
      function PhoneListController(Phone, CartList, $rootScope, checkCookies) {
      var self = this;
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
          console.log(filtredObj);
          CartList.incrementCount();
          CartList.addInObj(index, filtredObj);
          $rootScope.$emit('renewCount','');
        };
      }
    ]
  });
