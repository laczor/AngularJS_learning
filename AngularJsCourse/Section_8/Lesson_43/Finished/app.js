// MODULE
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

// ROUTES
weatherApp.config(function ($routeProvider) {
   
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/home.htm',
        controller: 'homeController'
    })
    
    .when('/forecast', {
        templateUrl: 'pages/forecast.htm',
        controller: 'forecastController'
    })
    
});

//Created service to store data
// SERVICES
weatherApp.service('cityService', function() {
   
    this.city = "New York, NY";
    
});

// CONTROLLERS
//Service is injected, it has been binded with two way databinding
// + added to the watchlist
weatherApp.controller('homeController', ['$scope', 'cityService', function($scope, cityService) {
    
    $scope.city = cityService.city;
    
    $scope.$watch('city', function() {
       cityService.city = $scope.city; 
    });
    
}]);

//Service has been insterted, and the value is passed
weatherApp.controller('forecastController', ['$scope', 'cityService', function($scope, cityService) {
    
    $scope.city = cityService.city;
    
}]);