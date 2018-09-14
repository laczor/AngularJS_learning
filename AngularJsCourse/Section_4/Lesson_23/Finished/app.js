var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', '$log', function ($scope, $filter,$log) {

    $scope.handle = '';

    $scope.lowercasehandle = function () {
        return $filter('lowercase')($scope.handle);
    };

    $scope.characters = 5;

// New http request object, 
    var rulesrequest = new XMLHttpRequest();
//Some request has been made, and the state is ready,  ( status == 200)
// We have to use, apply, so we can reference the $scope, what is happening in the function
// parse to JSON the response  rulesrequest.responseText   
    rulesrequest.onreadystatechange = function () {
        $scope.$apply(function () {
            if (rulesrequest.readyState == 4 && rulesrequest.status == 200) {
                $scope.rules = JSON.parse(rulesrequest.responseText);
                $log($scope.rules)
            }
        });
    }
    rulesrequest.open("GET", "http://pokeapi.salestock.net/api/v2", true);
    rulesrequest.send();

}]);