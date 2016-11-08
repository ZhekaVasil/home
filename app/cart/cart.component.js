'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.module('cart').component('cart', {
    templateUrl: 'cart/cart.html',
    controller: ['CartList', '$scope','$rootScope',
        function CartController(CartList, $scope, $rootScope) {
            var self = this;
            this.count = CartList.count;
            var myListener = $rootScope.$on('renewCount', function () {
                self.count = CartList.count;
                console.log(CartList.list);
            });
            $scope.$on('$destroy', myListener);
        }
    ]
});
