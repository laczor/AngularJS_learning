// DIRECTIVES

weatherApp.directive("weatherReport", function() {
   return {
       restrict: 'E',                                                             //Means only Element selector
       templateUrl: 'directives/weatherReport.html',                              //The template what will be loaded
       replace: true,                                                             //Remove the element selector, and leave only the created html
       scope: {                                                                   //Passing data
           weatherDay: "=",                                                       //It is a passed object with two way databinding, it is good practice not to modify it
           convertToStandard: "&",                                                //Passing function
           convertToDate: "&",                                                    //Passing function
           dateFormat: "@"                                                        //Passing a variable
       }
   }
});