// MODULE
var weatherApp = angular.module('weatherApp', 
	['ngRoute', 								//It is for routing
	'ngResource']);								//A factory which creates a resource object that lets you interact with RESTful server-side data sources.

// ROUTES
weatherApp.config(function ($routeProvider) {
   
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'homeController'
    })
    
    .when('/forecast', {
        templateUrl: 'pages/forecast.html',
        controller: 'forecastController'
    })
    
});

// CONTROLLERS
weatherApp.controller('homeController', ['$scope', function($scope) {
    
}]);

weatherApp.controller('forecastController', ['$scope', function($scope) {
    
}]);