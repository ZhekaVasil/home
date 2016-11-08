'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
module('cartList').
component('cartList', {
    templateUrl: 'cart-list/cart-list.template.html',
    controller: ['CartList','$rootScope',
        function CartListController(CartList,$rootScope) {
        var self = this;
            this.empty = CartList.count > 0;
            this.plus = function (item) {
                item.count +=1;
                CartList.incrementCount();
                if(CartList.count > 0){self.empty = false;}
                $rootScope.$emit('renewCount','');
            };
            this.minus = function (item) {
                item.count -=1;
                CartList.decrementCount();
                if(CartList.count <= 0){self.empty = true;}
                $rootScope.$emit('renewCount','');
            };
            this.countElemebts = function () {
                var arr = [];
                for(var key in CartList.list){
                    arr.push(CartList.list[key])
                }
                return arr;
            }
        }
    ]
});
