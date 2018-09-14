angular.module('app', []);


/*************Assign Special objects to reference its data in the passed scope*/
angular.module('app').controller("ParentController",['$scope', function($scope){
	
    $scope.parentobj = {};

    $scope.parentobj.title = 'AngularJS Nested Controller Example';
}]);

//So this is the main Controller  described as sub.
angular.module('app').controller("ChildController",['$scope', function($scope){
    $scope.title = 'Sub-heading';
    console.log($scope);
}]);



/*********CONTROLLER AS ****************/
//So this is the main Controller  described as main.
angular.module('app').controller("MainController", function(){

    let vm = this;
    vm.title = 'AngularJS As Controller Example';
});

//So this is the main Controller  described as sub.
angular.module('app').controller("SubController", function(){
    let vm = this;
    vm.title = 'Sub-heading * as';
});



