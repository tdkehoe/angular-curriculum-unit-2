var app = angular.module("movieSearch", ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeController'
      })
      .when('/search', {
        templateUrl: 'partials/search.html',
        controller: 'SearchController'
      })
      .when('/show/:id', {
        templateUrl: 'partials/show.html',
        controller: 'ShowController'
      })
      .otherwise({
        templateUrl: 'partials/home.html',
        controller: 'HomeController'
      })
});
