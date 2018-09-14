
//Including ngMessages -- name of the module -- dependency, list of modules, that my app uses
//Import it from the source from the html
// Use it in the html tag, with the attributes
var myApp = angular.module('myApp', ['ngMessages', 'ngResource']);

//We can actually use all of the dependecies, just by inserting their name,
myApp.controller('mainController', function($scope, $log, $filter, $resource) {
    
    $scope.name = "John";
    $scope.formattedname =   $filter("uppercase")($scope.name);
 
    console.log($resource);

    $log.log("Hello");
    $log.info("Hello");
    $log.warn("Warning");
    $log.debug("Debug");
    $log.error("Error");

    
});