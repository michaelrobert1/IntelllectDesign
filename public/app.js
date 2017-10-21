var app = angular.module("users", []); 
app.controller("UserControl", function($scope) {
   $http.get('/users').then(function(response){
       alert(JSON.stringify(response.data));
   })
});