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

//Creating a custom service, by giving a name + adding a function to it

myApp.service('nameService', function() {

//Common pattern, to store the reference to the original function ojbect   
//this --> myApp
//Then it has to be injected into the controller
    var self = this;
    this.name = 'John Doe';
    
    this.namelength = function() {
      
        return self.name.length;
        
    };
    
});

//You have inject your service, into the controller

myApp.controller('mainController', ['$scope', '$log', 'nameService', function($scope, $log, nameService) {
    
    $scope.name = nameService.name;

//You can add them to the watch list, and to the digesting loop    
    $scope.$watch('name', function() {
        nameService.name = $scope.name;
    });
 //Will console log out, the nameService object properties   
    $log.log(nameService.name);
    $log.log(nameService.namelength());
    
}]);

//Since this service is a singleton, if you inject it, you access it's data, so it can serve as a common data singel source of truth between controllers
myApp.controller('secondController', ['$scope', '$log', '$routeParams', 'nameService', function($scope, $log, $routeParams, nameService) {
    
    $scope.num = $routeParams.num || 1;
    
    $scope.name = nameService.name;
    
    $scope.$watch('name', function() {
        nameService.name = $scope.name;
    });
    
}]);
