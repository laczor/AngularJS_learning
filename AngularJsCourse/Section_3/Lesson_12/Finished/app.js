var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope) {
    
});

var searchPeople = function(firstName, lastName, height, age, occupation) {
    return 'Jane Doe';
}
// A string, the entire function will be written,
// And based on what you can see as a text, you can break into little pieces and get information
//That is what angular does
var searchPeopleString = searchPeople.toString();
console.log(searchPeople);
console.log(searchPeopleString);