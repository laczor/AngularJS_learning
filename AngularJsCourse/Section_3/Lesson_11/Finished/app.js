var myApp = angular.module('myApp', []);

//$ -> it is part of the name, nothing special
// $scope is a big object, it is a dependency injected by angularjs  
// and created by angularJs
myApp.controller('mainController', function($scope) {

//You can add variable to the scope, or funcitons as well    
    $scope.name = 'Jane Doe';
    $scope.occupation = 'Coder';
    
    $scope.getname = function() {
        return 'John Doe';
    }
    
    console.log($scope);
    
});