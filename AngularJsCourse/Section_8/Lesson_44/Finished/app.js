// MODULE
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

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
    
    .when('/forecast/:days', {
        templateUrl: 'pages/forecast.html',
        controller: 'forecastController'
    })
    
});

// SERVICES
weatherApp.service('cityService', function() {
   
    this.city = "New York, NY";
    
});

// CONTROLLERS
weatherApp.controller('homeController', ['$scope', 'cityService', function($scope, cityService) {
    
    $scope.city = cityService.city;
    
    $scope.$watch('city', function() {
       cityService.city = $scope.city; 
    });
    
}]);

//  resource      --> to create an http request, 
//  routeParams   --> to get the queryparameters from the url
// cityService    --> it is the injected service, to store the cityName
weatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityService', function($scope, $resource, $routeParams, cityService) {
    
    $scope.city = cityService.city;
    $scope.days = $routeParams.days || 2;

//So we are wrapping the call in a variable   
//JSON_CALLBACK -->  it is to notify the server, we are waiting for JSON
// { get: { method: "JSONP" }} --> when we are calling this API, we are telling angular, that this is not a server attack, you can get resource from an other server
    $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=cb7ef5d29a7b25ae25ad4f56024d5ca7", { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});
//Modifying the queryparameters
    $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: $scope.days });
    
 //Converting to fahrenheit   
    $scope.convertToFahrenheit = function(degK) {
        
        return Math.round((1.8 * (degK - 273)) + 32);
        
    }
//Converting Date    
    $scope.convertToDate = function(dt) { 
      
        return new Date(dt * 1000);
        
    };
    
}]);