var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })
    
    .when('/second', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    
    .when('/second/:num', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    
});

myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {
    
    $scope.person = {
        name: 'John Doe',
        address: '555 Main St., New York, NY 11111'
    }
    
}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', function($scope, $log, $routeParams) {
    
    
    
}]);
//isolated Scope: Instead of providing the whole scope of the parent controller to the directive 
//we limit it's scope to the isolated attributes of the parent scope
//Seperated our Model from the parent Controller's scope
// with "@" we tell this directive, we pass scope variables through custom attributes

myApp.directive("searchResult", function() {
   return {
       restrict: 'AECM',
       templateUrl: 'directives/searchresult.html',
       replace: true,
       scope: {
           personName: "@",
           personAddress: "@"
       }
   }
});
