var myApp = angular.module('myApp', []);

//We are using, scope obect + filter to modify the string

myApp.controller('mainController', ['$scope', '$filter', function($scope, $filter) {
 //Creating a scope property
    $scope.handle = '';
 //Simply a function, added to the scope, which will tranform the text to lowercase using filter object   
    $scope.lowercasehandle = function() {
        return $filter('lowercase')($scope.handle);
    };
    
}]);


