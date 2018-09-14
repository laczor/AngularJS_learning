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

myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {
    
    
    
}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', function($scope, $log, $routeParams) {
    
    
    
}]);
//This is our created custom directive, custom reusable html component
//Identifier types restrict:
// Default is 'AE'
// A --> Attribute  --> <div search-result></div>
// E --> Element    --> <search-result></search-result>
// C --> Class      --> <div class="search-result"></div>
// M --> Comment    --> <!-- directive: search-result -->

// replace : --> when you see this directive, completley replace it so <search-result></search-result> html element will be completly gone
myApp.directive("searchResult", function() {
   return {
       restrict: 'AECM',
       template: '<a href="#" class="list-group-item"><h4 class="list-group-item-heading">Doe, John</h4><p class="list-group-item-text">555 Main St., New York, NY 11111</p></a>',
       replace: true
   }
});
