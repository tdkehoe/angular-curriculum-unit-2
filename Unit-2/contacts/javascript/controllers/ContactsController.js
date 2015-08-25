angular.module('ContactsApp').controller('ContactsController', ["$scope", "ContactList", function($scope, ContactList){
   $scope.message = "Connected!";
   console.log("Controlling! I'm second!");
   $scope.submit = function(){
     console.log("Submitted! I'm third!")
     ContactList.addContact( {
       name: $scope.person.name,
       email: $scope.person.email,
       phone: $scope.person.phone
     });

     $scope.contactData = ContactList.contactList;
     console.log($scope.contactData);
     console.log("I'm last!");
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
