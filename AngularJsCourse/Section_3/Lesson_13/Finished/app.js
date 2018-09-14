var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope) {
    
    console.log($scope);
    
});

var searchPeople = function(firstName, $scope, height, age, occupation) {
    return 'Jane Doe';
    console.log($scope)
}
//Angular will break down the funciton parameters and they are searching for specific names
// If it can find $scope, it will know that it should inject a $scope object to the function
//Injectiing an angular ojbect function,
console.log(angular.injector().annotate(searchPeople));