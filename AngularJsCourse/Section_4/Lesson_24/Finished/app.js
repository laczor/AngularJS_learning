var myApp = angular.module('myApp', []);

//$httpm service, wrap up same native XMLHTTPREQUEST Object
myApp.controller('mainController', ['$scope', '$filter', '$http', function ($scope, $filter, $http) {

    $scope.handle = '';

    $scope.lowercasehandle = function () {
        return $filter('lowercase')($scope.handle);
    };

    $scope.characters = 5;

//Super easy to get data from the api
    $http.get('http://pokeapi.salestock.net/api/v2')
        .success(function (result) {

            $scope.rules = result;

        })
        .error(function (data, status) {

            console.log(data);

        });

//We can pass a an object to the api request
    $scope.newRule = '';
    $scope.addRule = function () {
        $http.post('/api', { newRule: $scope.newRule })
            .success(function (result) {

                console.log(result);
                $scope.rules = result;
                $scope.newRule = '';

            })
            .error(function (data, status) {

                console.log(data);

            });
    };
}]);