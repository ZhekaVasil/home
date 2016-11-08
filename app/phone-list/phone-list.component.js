'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('phoneList').
  component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: ['Phone','CartList','$rootScope',
      function PhoneListController(Phone, CartList, $rootScope) {
      var self = this;

        this.phones = Phone.query();
        this.orderProp = 'age';
        this.addInCart = function (index) {
          CartList.incrementCount();
          $rootScope.$emit('renewCount','');
          CartList.addInObj(index, this.phones);
        }
      }
    ]
  });
