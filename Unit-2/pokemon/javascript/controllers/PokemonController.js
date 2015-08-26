angular.module('PokemonApp').controller('PokemonController', ["$scope", "$http", function($scope, $http){
   $scope.message = "Connected!";

   $http({method: 'GET', url: "http://pokeapi.co/api/v1/pokedex/1/"}).success(function(data) {
     var       pokemons = [],
     fiveRandomPokemons = [];

     for (var i = 0; i < data.pokemon.length; i++) {
       pokemons.push(Number(data.pokemon[i].resource_uri.split('/')[3]));
     }

     for (var i = 0; i < 5; i++) {
       fiveRandomPokemons.push(pokemons[Math.floor(Math.random()*pokemons.length)]);
     }

     console.log(fiveRandomPokemons);

     $http({method: 'GET', url: "http://pokeapi.co/api/v1/pokemon/" + fiveRandomPokemons[0] + "/"}).success(function(data) {
       console.log(data);
     });

   });

 }]);
