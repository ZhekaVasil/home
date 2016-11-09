'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.module('logout').component('logout', {
    templateUrl: 'logout/logout.html',
    controller: ['$cookies','$location','$window',
        function CartController($cookies, $location, $window) {
          this.logOut = function () {
              $cookies.remove('login');
              $window.location.href = '#!/login'
          }
        }
    ]
});
