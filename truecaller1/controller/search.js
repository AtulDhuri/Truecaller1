	
var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope, $http)  {
$scope.result = "";
  $http.get("http://www.asquareholidays.com/test.php/").then(function(response) {
      $scope.mydata = response.data;
	  
	 
	   });
	   
	   
	 $scope.search = function() {
	 	   
	   $scope.result = $scope.mydata.filter(contact => contact.pnumber == $scope.test.pnumber);
	   
	   
	   }
});