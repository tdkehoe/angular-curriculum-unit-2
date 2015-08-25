angular.module('ContactsApp').controller('ContactsController', ["$scope", "ContactList", "$http", function($scope, ContactList, $http){
   $scope.message = "Connected!";
   console.log("Controlling! I'm second!");
   $scope.submit = function(){
     console.log("Submitted! I'm third!")

     console.log($scope.person.name);
     var nameString = $scope.person.name;
     var nameStringPlus = nameString.replace(' ', '+').toLowerCase();
     console.log(nameStringPlus);
     $http({method: 'GET', url: "http://api.giphy.com/v1/gifs/search?q=" + nameStringPlus + "&api_key=dc6zaTOxFJmzC&limit=5"}).success(function(data) {
       console.log(data.data[0].bitly_gif_url);
      //  ContactList.addContact( {
      //    gif: data.data[0].bitly_gif_url
      //  });
      //  $scope.contactData = ContactList.contactList;
      //  console.log($scope.contactData);
      $scope.person.gif = data.data[0].embed_url;
     });
     console.log("After giphy GET.");

     ContactList.addContact( {
       name: $scope.person.name,
       email: $scope.person.email,
       phone: $scope.person.phone,
       gif: $scope.person.gif
     });

     $scope.contactData = ContactList.contactList;
     console.log($scope.contactData);
     console.log("I'm last!");

    //  #javascript, jQuery
    //  var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=dc6zaTOxFJmzC&limit=5");
    //  xhr.done(function(data) { console.log("success got data", data); });






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
