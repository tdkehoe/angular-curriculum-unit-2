angular.module('PokemonApp').config(function($routeProvider){

  $routeProvider
  .when('/', {
    templateUrl: 'templates/pages/pokemon.html',
    controller: 'PokemonController'
  })
  .otherwise({ redirectTo: '/' });
});
