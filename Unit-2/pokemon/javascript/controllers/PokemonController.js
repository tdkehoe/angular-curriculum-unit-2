angular.module('PokemonApp').controller('PokemonController', ["$scope", "$http", function($scope, $http){

  $scope.pokemons = [];

   $http({method: 'GET', url: "http://pokeapi.co/api/v1/pokedex/1/"}).success(function(data) {
     var pokemonsAll = [],
             pokemon = {},
       randomPokemon = undefined,
            pokemons = [];

     for (var i = 0; i < data.pokemon.length; i++) {
       pokemonsAll.push(Number(data.pokemon[i].resource_uri.split('/')[3]));
     }

     for (var i = 0; i < 5; i++) {
       randomPokemon = pokemonsAll[Math.floor(Math.random()*pokemonsAll.length)];

       $http({method: 'GET', url: "http://pokeapi.co/api/v1/pokemon/" + randomPokemon + "/"}).success(function(data) {
         pokemon = {
           name: data.name,
           types: data.types,
           moves: data.moves,
         };
       });

       $http({method: 'GET', url: "http://pokeapi.co/api/v1/sprite/" + randomPokemon + "/"}).success(function(spriteData) {
         pokemon.sprite = spriteData.image;
         $scope.pokemons.push(pokemon);
       });
     }

   });
 }]);
