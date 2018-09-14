var myApp = angular.module('myApp', []);

//We import $timeout object, and modify the globalNameSpace of
//name to everybody

//Then with String interpolation we put it into the html
myApp.controller('mainController', ['$scope', '$timeout', function($scope, $timeout) {
    
    $scope.name = 'Tony';
    
    $timeout(function() {
        
        $scope.name = 'Everybody';
        
    }, 3000);
    
}]);
