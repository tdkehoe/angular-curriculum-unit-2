angular.module('ContactsApp').factory('ContactList', function() {
  console.log("Factory running. I'm first!");
  var ContactList = {};

  ContactList.contactList = [];

  console.log("I'm between first and second.")

  ContactList.addContact = function(obj) {
    ContactList.contactList.push(obj);
    console.log(ContactList.contactList); // this is an object
    console.log("I'm fourth!");
  };

  ContactList.findContact = function(name) {
    // TODO
  };

  ContactList.removeContact = function(index) {
    // TODO
  };

  return ContactList;
});
