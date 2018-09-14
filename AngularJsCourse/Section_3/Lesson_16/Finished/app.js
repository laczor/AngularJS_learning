var myApp = angular.module('myApp', []);


//So for the arugments, you can pass an array,
// [injected objects, function(){}]
//So it can be minified and angular will know what object to insert
//Order of the arguments matters!!

myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {
    
    $log.info($scope);
    
}]);


// Minifiers can break the code, since it will not include the ojbect names ($scope)
// myApp.controller("mainController",["$scope","$log",function(o,n){n.info(o)}]);

//but they are not minifiing the code between "not minified" quotes



/*
LESSON 15

let array = [1,"2",{},function(){ alert('hello')}]


Execute funciton
array[2]();



*/