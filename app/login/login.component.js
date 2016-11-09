angular.module('login',[]).component('login', {
    templateUrl : 'login/login.template.html',
    controller : ['$scope','$rootScope', 'Users', '$location','$cookies','$window',
        function ($scope, $rootScope, Users, $location, $cookies, $window) {
        var self = this;
        this.checkForm = function () {
            self.users = Users.success(checkUser);
            function checkUser(data) {
                 data.forEach(function (item ,i) {
                    if(item.name == self.name && item.password == self.password ){
                        $cookies.put('login', 'true');
                        $window.location.href = '#!/phones';
                        /*$location.url('/phones')*/
                    }
                });
                self.show = true;

            }
        }
    }]
});