// CONTROLLERS
//It has only 1 servie injected to it, whith two way databinding to it's only variable
// Plus it has been added to the wachlist, so angular will keep track when it does it's digest loop
weatherApp.controller('homeController', ['$scope', 'cityService', function($scope, cityService) {
    
    $scope.city = cityService.city;
    $scope.$watch('city', function() {
       cityService.city = $scope.city; 
    });
    console.log($scope);
    
}]);

//Creating a resource, to get json data from API + two functions, to convert recieved data
weatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityService', function($scope, $resource, $routeParams, cityService) {
    
    $scope.city = cityService.city;                 //From the injected service
    $scope.days = $routeParams.days || 2;           //From the queryParameters, or default 2

//So we are wrapping the call in a variable   
//JSON_CALLBACK -->  it is to notify the server, we are waiting for JSON
// { get: { method: "JSONP" }} --> when we are calling this API, we are telling angular, that this is not a server attack, you can get resource from an other server
    $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast?APPID=c6c1160c996ea85427660e641a28f52c", { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});
//Modifying the queryparameters

    $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: $scope.days });    
    $scope.convertToFahrenheit = function(degK) {
        
        return Math.round((1.8 * (degK - 273)) + 32);
        
    }
    
    $scope.convertToDate = function(dt) { 
      
        return new Date(dt * 1000);
        
    };
    
}]);