//It works only in firefox Due to cross-origin-request

// https://stackoverflow.com/questions/27742070/angularjs-error-cross-origin-requests-are-only-supported-for-protocol-schemes


//There is an other js filed depedency for this file ngRoute

var myApp = angular.module('myApp', ['ngRoute']);

// Add a specific function to our angularJs application

myApp.config(function ($routeProvider) {

//Determining the routes, which template should be visible, and which controller should i controll it's view    
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })
    
    .when('/second', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    
});

myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {
    
    $scope.name = 'Main';
    
}]);

myApp.controller('secondController', ['$scope', '$log', function($scope, $log) {
    
    $scope.name = 'Second';
    
}]);
