// MODULE
// Will create an angular object, with a name of "angularApp"
// [] is for dependecies
var angularApp = angular.module('angularApp', []);

// CONTROLLERS
// this is the name of the controller mainController
// []
// 
angularApp.controller('mainController', ['$scope', function ($scope) {
    
}]);






/*      GLOBAL NAMESPACE
*********WRONG PRACTICE****************
-- It is wrong practice to store variables in the global namespace, since you can overwrite them accidentaly by other js files, and it is hard to debug
app1.js
var person = "tommy"

function logPerson(){
	console.log(person);
}
logPerson();

app2.js

var person = "Steve"

function logPerson(){
	console.log(person);
}
logPerson();


*********Good PRACTICE****************
-- Create a seperate object for them, so there could be no accidentaly overwrite


app2.js

let steveApp = {}

steveApp.name = "Steve"

steveApp.logPerson(){
	console.log(steveApp.person);
}
steveApp.logPerson();


*/


/*
*****Dependency Injection *****
Bascially the functions are objects as well
let Person = funciton (FirstName,LastName){
	this.firstname = firstname;
	this.lastname = lastname;
}

****WRONG PRACTICE ****
-To create a speerate object into the function, the funciton will be dependent on how we create the object
function logPerson(){
 let John = new Person('John','Doe');
	console.log(person);
}

**Good Practice Injection**
- We seperately make the new object, pass it into the function, so the function will not be dependent from it
function logPerson(){
	console.log(person);
}
 let John = new Person('John','Doe');


logPerson(John)
*/