var app = angular.module("shoppingCart", ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'TeasController'
      })
      .when('/checkout', {
        templateUrl: 'partials/checkout.html',
        controller: 'CheckoutController'
      })
      .otherwise({
        templateUrl: 'partials/home.html',
        controller: 'TeasController'
      })
});
