# AngularJS 1.6  1-30

**Udemy**
[https://www.udemy.com/learn-angularjs/learn/v4](https://www.udemy.com/learn-angularjs/learn/v4)

**Gitbub Repo:**
[https://github.com/laczor/angularJs](https://github.com/laczor/angularJs)

**Useful resources:**
[http://www.angularjshub.com/examples/basics](http://www.angularjshub.com/examples/basics)
[https://docs.angularjs.org/api](https://docs.angularjs.org/api)

**Section 2 Model,View,Whatever**
Lesson 5 MVC
**Section 3 Services and Dependency Injection**
Lesson 7 Global Namespace VS Encapsulation
Lesson 9 Modules, Apps, Controllers
Lesson 10 Depedency Injection
Lesson 11 Scope Service
Lesson 12 Function to String
Lesson 13 How does Angular dependency injection
Lesson 14 Get Other Services
Lesson 15 You can include funcitons in the javascript arrays
Lesson 16 Depedency Injection and Minification
**Section 4 Data Binding and Directives**
Lesson 17 Scope and Interpolation
Lesson 18 Directives,Two way Data Binding
Lesson 20 Watchers and the Digest loop
Lesson 21 Common Directives
Lesson 23 XMLHTTPREQUEST Object
Lesson 24 $HTTP Service
**Section 5 Single Page Application**
Lesson 25 Multiple Controllers and Views
Lesson 26 Single Page App and the Hash
Lesson 27 Routing, Templates and Controllers
Lesson 28 Using $routeParams to retrieve queryParameters from the URL
**Section 6 Custom Services**
Lesson 29 Javascript Singletons and Services
Lesson 30 Creating a Custom Service


## Lesson 5 MVC
**M**odel is for the javascript logic
**V**iew is to render the logic, the js in the backround and create a view
**W**hatever means , whatever changes in the view, will affect the model
![Image](C:\Users\Lenovo\Documents/medley/resources/B1FiZlS4z_Sy7xzeBNz.png)

## Lesson 7 Global Namespace VS Encapsulation
So instead of using Global variables, we should use **encapsualtion**

```css
/*      GLOBAL NAMESPACE
*********WRONG PRACTICE****************
-- It is wrong practice to store variables in the global namespace, since you can overwrite them accidentaly by other js files, and it is hard to debug
app1.js
var person = "tommy"
function logPerson(){ console.log(person); }
logPerson();

app2.js
var person = "Steve"

function logPerson(){ console.log(person); }
logPerson();
*********Good PRACTICE - ENCAPSULATION****************
-- Create a seperate object for them, so there could be no accidentaly overwrite
app2.js
let steveApp = {}
steveApp.name = "Steve"
steveApp.logPerson(){ 	console.log(steveApp.person); }
steveApp.logPerson();
```
## 
## Lesson 9 Modules, Apps, Controllers

Download  it from[ **www.angularjs.com**](http:// www.angularjs.com)

**1. Creating an angular global namespace object**
**app.js**
```css
// MODULE
// Will create an angular object, with a name of "angularApp"
// [] is for dependecies
var angularApp = angular.module('angularApp', []);

```
**2. Connecting it with the html, to react with the DOM**
**index.html**
```css
<html lang="en-us" ng-app="angularApp">
```
**3. Create a controller**
**app.js**
```css
// CONTROLLERS
// this is the name of the controller mainController
// takes a function, which makes changes in the html

angularApp.controller('mainController',  function () {
});
```
**index.html**
```css
	<div ng-controller="mainController">
                    <h1>Hello world!</h1>
        </div>
```

## Lesson 10 Depedency Injection
**"So instead of creating the object in the function, we are passing it into the funciton as parameter"**

```css
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
```

## Lesson 11 Scope Service
- **$scope** is actually a create big ojbect by angular js, to which you can add, remove, variables, functions
- It is the piece **between **the **Model **and the **View ** the data in the scope will determine what will be in the view.
```css
//$ -> it is part of the name, nothing special
// $scope is a big object, it is a dependency injected by angularjs  
// and created by angularJs
myApp.controller('mainController', function($scope) {

//You can add variable to the scope, or funcitons as well    
    $scope.name = 'Jane Doe';
    $scope.occupation = 'Coder';
    
    $scope.getname = function() {
        return 'John Doe';
    }
    
    console.log($scope);
    
});
```
## Lesson 12 Function to String
You can c**onvert the function itself to a string,** and can get all of the data, piece of information, just by reading the string
That is what angular does to process our code.
```css
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
```

## Lesson 13 How does Angular dependency injection

It will break down the functions to string, extract all of the function arguments, and if it sees a service name like **$scope ** then it will know that it should inject a $scope object to the function.
```css
var searchPeople = function(firstName, $scope, height, age, occupation) {
    return 'Jane Doe';
    console.log($scope)
}
//Angular will break down the funciton parameters and they are searching for specific names
// If it can find $scope, it will know that it should inject a $scope object to the function
//Injectiing an angular ojbect function,
console.log(angular.injector().annotate(searchPeople));
```

## Lesson 14 Get Other Services

Use the other written services, object creator by angular

[https://docs.angularjs.org/api](https://docs.angularjs.org/api)


1. Some of the services are included in the **main angularjs.file ** ( $scope,$log)
2. For some you have to download seperately the js file **ngMessages**
**2.1 IMport them to the html**
```css
        <script src="https://code.angularjs.org/1.3.0-rc.1/angular-messages.min.js"></script>
```
**2.2 Add to the module depedencies**
```css
//Including ngMessages -- name of the module -- dependency, list of modules, that my app uses
//Import it from the source from the html
// Use it in the html tag, with the attributes
var myApp = angular.module('myApp', ['ngMessages', 'ngResource']);
```
**2.3 Use them with html attributes**
```css
<form name="myForm">
  <label>
    Enter your name:
    <input type="text"
           name="myName"
           ng-model="name"
           ng-minlength="5"
           ng-maxlength="20"
           required />
  </label>
  <pre>myForm.myName.$error = {{ myForm.myName.$error | json }}</pre>

  <div ng-messages="myForm.myName.$error" style="color:maroon" role="alert">
    <div ng-message="required">You did not enter a field</div>
    <div ng-message="minlength">Your field is too short</div>
    <div ng-message="maxlength">Your field is too long</div>
  </div>
</form>
```
3.1 Or you can import them to the html, include them into the depdendencies, and can inject the created object easily (`**ngResource**`)
```css
var myApp = angular.module('myApp', ['ngMessages', 'ngResource']);
myApp.controller('mainController', function($scope, $log, $filter, $resource) {
    console.log($resource);  
});
```

## Lesson 15 You can include funcitons in the javascript arrays
```css
let array = [1,"2",{},function(){ alert('hello')}]
Execute function
array[2]();
```

## Lesson 16 Depedency Injection and Minification

So we can pass an **array **as an **argument **to the **controller Function**, which will hold our object dependecies, and by keeping the same order in the array, and in the arugment list of the anonymus function, declared lastly in the passed array, we can minify the js
```css
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
```

## Lesson 17 Scope and Interpolation

**Interpolation **= creating strings by **combining strings and variables**
**app.js**
```css
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
```
**index.html**
```css
 <h1>Hello {{ name + '. How are you?' }}</h1>
```

## Lesson 18 Directives,Two way Data Binding
**Directive**: Instruction to angularJs to modify the DOM

1. **`ng-model `** actuall binds two way the model** (scope.name)** with the View of **ng-model="handle"**
```css
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
```

- With **ng-model**, we can bind the value of the input to the scope variable, and viceversa
- **lowercasehandle() **is actually a** scope.function** which willr return string lowercased data with **$filter object**
**index.html**
```css
<div ng-controller="mainController">
    <div>
        <label>What is your twitter handle?</label>
        <input type="text" ng-model="handle" />
    </div>
    <hr />
    <h1>twitter.com/{{ lowercasehandle() }}</h1>
</div>
```

![Image](C:\Users\Lenovo\Documents/medley/resources/B1FiZlS4z_H1CwJGSEz.png)


## Lesson 20 Watchers and the Digest loop 
Javascript has an **event loop**, so it is listening to any event ("**MouseOver**")
So angular has watchers, a list of variables, which can change, and it has a digest Loop which is checking if sth has been changed or not.

![Image](C:\Users\Lenovo\Documents/medley/resources/B1FiZlS4z_rk3SbGSNG.png)

```css
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
        $scope.handle = 'newtwitterhandle';
        console.log('Scope changed!');
    }, 3000);
    
}]);
```

Connection between **Model **and **View**
![Image](C:\Users\Lenovo\Documents/medley/resources/B1FiZlS4z_BJ3DVfHEz.png)


## Lesson 21 Common Directives
More info
[https://docs.angularjs.org/api/ng/directive](https://docs.angularjs.org/api/ng/directive)
- **ng-if                     "condition"           (remove it from the DOM)**
- **ng-class               'className' :  condition,     'className' :  condition,**
- **ng-show             "condition"            (In the DOM it is only hidden)**
- **ng-repeat                                            (will repeate the same html tag build)**
- **ng-cloak            (to hide the element prior angular do anything with it)**
```css
<div 
class="alert" 
ng-class="{ 'alert-warning': handle.length < characters, 'alert-danger': handle.length > characters }" 
ng-if="handle.length !== characters">
<div ng-show="handle.length < characters">
    You have less than 5 characters!
</div>
<h3 ng-cloak>{{name}}</h3>
```

## **Lesson 23 XMLHTTPREQUEST Object**
So basically we can make an object, create a function which listens if a status is 200 and execute some other functions,
then we can make an http request to get the data what we need
```css
// New http request object, 
    var rulesrequest = new XMLHttpRequest();
//Some request has been made, and the state is ready,  ( status == 200)
// We have to use, apply, so we can reference the $scope, what is happening in the function
// parse to JSON the response  rulesrequest.responseText   
    rulesrequest.onreadystatechange = function () {
        $scope.$apply(function () {
            if (rulesrequest.readyState == 4 && rulesrequest.status == 200) {
                $scope.rules = JSON.parse(rulesrequest.responseText);
                $log($scope.rules)
            }
        });
    }
    rulesrequest.open("GET", "http://pokeapi.salestock.net/api/v2", true);
    rulesrequest.send();
```

## Lesson 24 $HTTP Service
Basicaly this object, wraps up this XmlHttpsRequest object for us and makes it easy to get data from API and Post data to the API as well.
```css
//Super easy to get data from the api
    $http.get('http://pokeapi.salestock.net/api/v2')
        .success(function (result) {
            $scope.rules = result;
        })
        .error(function (data, status) {
            console.log(data);
        });
//We can pass a an object to the api request
    $scope.newRule = '';
    $scope.addRule = function () {
        $http.post('/api', { newRule: $scope.newRule })
            .success(function (result) {
                console.log(result);
                $scope.rules = result;
                $scope.newRule = '';
            })
            .error(function (data, status) {
                console.log(data);
            });
    };
```

## Lesson 25 Multiple Controllers and Views

You can attach multiple controllers to multiple views,
Each time the **$scope** variable is inserted into the controller function,an other instance of it is inserted to it, so this way the can't override each other.

**app.js**
```css
var myApp = angular.module('myApp', []);
myApp.controller('mainController', ['$scope', function($scope) {
    $scope.name = 'Main';
}]);

myApp.controller('secondController', ['$scope', function($scope) {
    $scope.name = 'Second';
}]);
```

**html**
```css
        <div class="container">
            <div ng-controller="mainController">
                <h1>{{ name }}</h1>
            </div>
            <div ng-controller="secondController">
                <h1>{{ name }}</h1>
            </div>
		</div>
```

## Lesson 26 Single Page App and the Hash
So bascially **hash ** is the info what is after the root url #, and javascript can listen to it with **(hashchange)**
So we just listen to the changes in the hash, and execute different codes based on this, like if we have really submitted some code

```css
                    <a href="#/bookmark/1">Go to Bookmark</a>
```
                    
```css
//Execute function, after the string in the url behind the # is changed

window.addEventListener('hashchange', function() {

// It is a fragment identifier in the html, so it will know where to jump in a long html
// or it can mimic, the pageloading.
    if (window.location.hash === '#/bookmark/1') {
        console.log('Page 1 is cool.');
    }
    
    if (window.location.hash === '#/bookmark/2') {
        console.log('Let me go get Page 2.');
    }
    
    if (window.location.hash === '#/bookmark/3') {
        console.log('Here\'s Page 3.');
    }
    
});


```

## Lesson 27 Routing, Templates and Controllers

THe current url is stored in the angularJs  **$location.path** object, what you can use to execute some code when the stuff is changed
 Using **angular-route.js ** it is going to help us routing, end execute some code on routchanges
**Use Firefox due to cross-origin -requests**
 
 **1. Include the different libraries into the <scripts>**
```css
         <!-- load angular via CDN -->
        <script src="https://code.angularjs.org/1.3.0-rc.1/angular.min.js"></script>
        <script src="https://code.angularjs.org/1.3.0-rc.1/angular-route.min.js"></script>
        <script src="app.js"></script>
```
** 2 Configure router + add controllers **
```css
 //It works only in firefox Due to cross-origin-request
// https://stackoverflow.com/questions/27742070/angularjs-error-cross-origin-requests-are-only-supported-for-protocol-schemes
//There is an other js filed depedency for this file ngRoute

var myApp = angular.module('myApp', ['ngRoute']);

// Add a specific function to our angularJs application

myApp.config(function ($routeProvider) {

//Determining the routes, which template should be visible, and which controller should i controll it's view    
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    }) 
    .when('/second', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    
});

myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {
    $scope.name = 'Main';
}]);

myApp.controller('secondController', ['$scope', '$log', function($scope, $log) {
    $scope.name = 'Second';
}]);
```
3. Add **ng-view ** to the html, so angular will know where to output the "routing"
```css
<div ng-view></div>
```

## Lesson 28 Using $routeParams to retrieve queryParameters from the URL

```css
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
 //You can include queryParameters in the url, like pattern matching   
    .when('/second/:num', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
});

myApp.controller('mainController', ['$scope', '$log', function($scope, $log) { 
    $scope.name = 'Main'; 
}]);

//Import the $routeParams object, which will extract the data from the URL, and allow us to assign it to the scope variable,
myApp.controller('secondController', ['$scope', '$log', '$routeParams', function($scope, $log, $routeParams) {  
    $scope.num = $routeParams.num || 1;                     //assign the routeParams, or 1 if there is no routeParams   
}]);
```

## Lesson 29 Javascript Singletons and Services
**Singelton ** the one and only copy of the object!

For examples, **$log** is a **SingleTon ** which is only 1 object!, the same object is inserted into every controllers
**$scope** is an expection to **services**, there are **childScopes**, different copy of objects, not really a singleton.

## Lesson 30 Creating a Custom Service
A **service is a singleton**, which means the same object is passed to the controllers everytime.
1. You can create a service with **angular.service**
1. Inject it as a dependency to the controller
1. Add the local $scope variable to the **watchlist ** so it will be in angular digesting loop, and will be correctly updated every time
```javascript
myApp.service('nameService', function() {

//Common pattern, to store the reference to the original function ojbect   
//this --> myApp
//Then it has to be injected into the controller
    var self = this;
    this.name = 'John Doe';
    this.namelength = function() {
        return self.name.length;
    };
    
});

//You have inject your service, into the controller

myApp.controller('mainController', ['$scope', '$log', 'nameService', function($scope, $log, nameService) {
    
    $scope.name = nameService.name;

//You can add them to the watch list, and to the digesting loop    
    $scope.$watch('name', function() {
        nameService.name = $scope.name;
    });
 //Will console log out, the nameService object properties   
    $log.log(nameService.name);
    $log.log(nameService.namelength());
    
}]);

//Since this service is a singleton, if you inject it, you access it's data, so it can serve as a common data singel source of truth between controllers
myApp.controller('secondController', ['$scope', '$log', '$routeParams', 'nameService', function($scope, $log, $routeParams, nameService) {
    
    $scope.num = $routeParams.num || 1;
    
    $scope.name = nameService.name;
    
    $scope.$watch('name', function() {
        nameService.name = $scope.name;
    });
```



