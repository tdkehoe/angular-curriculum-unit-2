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


 angular.module('ContactsApp').controller('ShowContactsController', ["$scope", "ContactList", function($scope, ContactList){
    console.log("The show is starting!");
    $scope.show = function(person){
      console.log("Clicked!")
      console.log(person);

      // $scope.contact2show = $scope.contactData[0];
      // console.log($scope.contactData[0]);
    };
  }]);
