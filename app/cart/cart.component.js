'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.module('cart').component('cart', {
    templateUrl: 'cart/cart.html',
    controller: ['CartList', '$scope','$rootScope', '$cookieStore','$location',
        function CartController(CartList, $scope, $rootScope, $cookieStore, $location) {
            var self = this;
            this.hide = $location.path() == '/login' ? true : false;
            $scope.$on('$routeChangeStart', function () {
                self.hide = $location.path() == '/login' ? true : false;
            });
            this.count = CartList.count;
            var myListener = $rootScope.$on('renewCount', function () {
                self.count = CartList.count;
                $cookieStore.put('cart' , CartList.list);
            });
            $scope.$on('$destroy', myListener);
        }
    ]
});
