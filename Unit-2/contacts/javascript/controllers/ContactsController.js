angular.module('ContactsApp').controller('ContactsController', ["$scope", "ContactList", "$http", function($scope, ContactList, $http){
   $scope.message = "Connected!";
   console.log("Controlling! I'm second!");
   $scope.submit = function(){
     console.log("Submitted! I'm third!")

     var nameString = $scope.person.name;
     var nameStringPlus = nameString.replace(' ', '+').toLowerCase();
     $http({method: 'GET', url: "http://api.giphy.com/v1/gifs/search?q=" + nameStringPlus + "&api_key=dc6zaTOxFJmzC&limit=5"}).success(function(data) {
      $scope.person.gif = data.data[0].images.fixed_height.url;

      ContactList.addContact( {
        name: $scope.person.name,
        email: $scope.person.email,
        phone: $scope.person.phone,
        gif: $scope.person.gif
      });

      $scope.contactData = ContactList.contactList;
      console.log("I'm last!");
     });
   };
 }]);


 angular.module('ContactsApp').controller('ShowContactsController', ["$scope", "ContactList", "$routeParams", function($scope, ContactList, $routeParams){
      $scope.showContact = ContactList.contactList[$routeParams.id];
  }]);

angular.module('ContactsApp').controller('GETController', function($http, $routeParams) {
  var controller = this;
  $http({method: 'GET', url: '/notes/' + $routeParams.id}).success(function(data) {
    controller.notes = data;
  });
});

angular.module('ContactsApp').controller('POSTController', function($http) {
  var controller = this;
  this.saveNote = function(note) {
    controller.errors = null;
    $http({method: 'POST', url: '/notes', data: note})
    .catch(function(note) {
      controller.errors = note.data.error;
      //<p ng-if"POSTController.errors"> {{POSTController.errors}} </p>
    })
  };
});
