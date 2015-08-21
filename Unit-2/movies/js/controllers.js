app.controller('HomeController', function($scope, $route){
  $scope.message = "Connected!";
}); // close controller

app.controller('SearchController', function($scope, $route, $http){
  $scope.message = "Connected!";

  $scope.submit = function(){
    console.log("Submitted!");
    $http.get('http://www.omdbapi.com/?s=' + $scope.title).then(function(response) {
      $scope.movies = response.data.Search;
      console.log($scope.movies);
    }, function(response) {
      $scope.message = "Invalid URL."
    });
  }; // close submit
}); // close controller

app.controller('ShowController', function($scope, $route, $routeParams, $http) {
  $scope.message = "Connected!";
  console.log("Show!");
  console.log($routeParams.id);

  $http.get('http://www.omdbapi.com/?i=' + $routeParams.id).then(function(response) {
    $scope.movie = response.data;
    console.log($scope.movie);
  }, function(response) {
    $scope.message = "Invalid URL."
  });

  $http.get('http://img.omdbapi.com/?i=' + $routeParams.id + '&apikey=cb605cf9').then(function(response) {
    $scope.poster = response.data;
  }, function(response) {
    $scope.message = "Invalid URL."
  });

}); // close controller

// ferreira_mk@yahoo.com


// API Key: 78ab396e

// Example: http://img.omdbapi.com/?i=tt2294629&apikey=78ab396e

// http://img.omdbapi.com/?apikey=[yourkey]&
