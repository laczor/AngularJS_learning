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
    
    $scope.people = [
        {
        name: 'John Doe',
        address: '555 Main St.',
        city: 'New York',
        state: 'NY',
        zip: '11111'
        },
        {
        name: 'Jane Doe',
        address: '333 Second St.',
        city: 'Buffalo',
        state: 'NY',
        zip: '22222'
        },
        {
        name: 'George Doe',
        address: '111 Third St.',
        city: 'Miami',
        state: 'FL',
        zip: '33333'
        }
    ]
    
    $scope.formattedAddress = function(person) {
      
        return person.address + ', ' + person.city + ', ' + person.state + ' ' + person.zip;
        
    };
    
}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', function($scope, $log, $routeParams) {
    
    
    
}]);

// compile expects a function
myApp.directive("searchResult", function() {
   return {
       restrict: 'AECM',
       templateUrl: 'directives/searchresult.html',
       replace: true,
       scope: {
           personObject: "=",
           formattedAddressFunction: "&"
       },
//elem: means elements , attrs: means the attributes of the element
//every time when the ng-repeat runs, we get a new scope for the directive
//Compile, --> you can change the element, in the fly, before it will be viewed
       compile: function(elem, attrs) {
           
           console.log('Compiling...');
           //elem.removeAttr('class');    -->You can remove stuff from html
           console.log(elem);
           // console.log(elem.html());
           
           return {
//It is for nested directives, it will run first, for all of the child directives
               pre: function(scope, elements, attrs) {
                    console.log('Pre-linking...');
                    console.log(elements);
               },
//Runs after all of the directives have been compiled
//it will run for every instance of the directive, and modify the html content on the fly
//You can access all of the passer objec arguments in the post function
               post: function(scope, elements, attrs) {
                   
                    console.log('Post-linking...');
                    console.log(scope);
                   
                   if (scope.personObject.name == 'Jane Doe') {
                        elements.removeAttr('class');
                   }
                   
                   console.log(elements);
                   
               }
               
           }
           
       }
   }
});
