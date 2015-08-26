angular.module('PokemonApp').controller('PokemonController', ["$scope", "$http", function($scope, $http){
   $scope.message = "Connected!";

   $http({method: 'GET', url: "http://pokeapi.co/api/v1/pokedex/1/"}).success(function(data) {
    var aPokemon = data.pokemon[0].resource_uri;
    var aPokemonID = data.pokemon[0].resource_uri.split('/');

    var pokemons = [];
    var fiveRandomPokemons = [];
    var aPokemonID3 = data.pokemon[0].resource_uri.split('/')[3];


    for (var i = 0; i < data.pokemon.length; i++) {
      pokemons.push(data.pokemon[i].resource_uri.split('/')[3]);
    }

    for (var i = 0; i < 5; i++) {
      fiveRandomPokemons.push(pokemons[Math.floor(Math.random()*pokemons.length)]);
    }

    // var pokemon1 = pokemons[Math.floor(Math.random()*pokemons.length)];




    console.log(pokemons);
    // console.log(pokemon1);
    console.log(fiveRandomPokemons);

   });

 }]);
