  var app = angular.module("myapp", ["ngRoute"]);
  
  
app.config(function($routeProvider) {
    $routeProvider
    
	.when("/", {
        templateUrl : "view/search.html",
        //controller : "rctrl"
    })
	
    .when("/about", {
        templateUrl : "view/about.html",
       // controller : "rctrl"
    })
	.when("/login", {
        templateUrl : "view/angularlogin.html",
       // controller : "rctrl"
    })
    .when("/signup", {
        templateUrl : "view/signup.html",
        //controller : "parisCtrl"
		//controller : "rctrl"
    });
		
});

 app.controller('myCtrl', function($scope, $http)  {
$scope.result = "";
  $http.get("http://www.asquareholidays.com/test.php/").then(function(response) {
      $scope.mydata = response.data;
	 
	 
	   });
	   
	   
	 $scope.search = function() {
	 	   
	   $scope.result = $scope.mydata.filter(contact => contact.pnumber == $scope.test.pnumber);
	   
	   
	   }
}); 










