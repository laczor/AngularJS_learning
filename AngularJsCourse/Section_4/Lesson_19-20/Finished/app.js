var myApp = angular.module('myApp', []);


//$watch is shipped with main angularJs
myApp.controller('mainController', ['$scope', '$filter', '$timeout', function($scope, $filter, $timeout) {
    
    $scope.handle = '';
    
    $scope.lowercasehandle = function() {
        return $filter('lowercase')($scope.handle);
    };
//You can manually add the "handle" variable to the watchlist, and check the old/new Value
    $scope.$watch('handle', function(newValue, oldValue) {
        
        console.info('Changed!');
        console.log('Old:' + oldValue);
        console.log('New:' + newValue);
        
    });
    
    $timeout(function() {
  //Here we are telling, that the global scope should be applied to this timeOut function
  //So the stuff when it changes, it should be included in it's normal digesting process      
        $scope.apply(function(){
            $scope.handle = 'newtwitterhandle';
            console.log('Scope changed!');
        });
    }, 3000);
    
}]);
