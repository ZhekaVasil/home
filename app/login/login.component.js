angular.module('login',[]).component('login', {
    templateUrl : 'login/login.template.html',
    controller : ['$scope','$rootScope', 'Users', '$location','$cookies','$window',
        function ($scope, $rootScope, Users, $location, $cookies, $window) {
        $cookies.remove('login');
        var self = this;
        this.checkForm = function () {
            self.users = Users.success(checkUser);
            function checkUser(data) {
                 data.forEach(function (item ,i) {
                    if(item.name == self.name && item.password == self.password ){
                        $cookies.put('login', 'true');
                        $location.url('/phones')
                    }
                });
                self.show = true;

            }
        }
    }]
});