angular.module('ContactsApp').config(function($routeProvider){

  $routeProvider
  .when('/contacts', {
    templateUrl: 'templates/pages/contacts.html',
    controller: 'ContactsController'
  })
  .when('/show/:id', {
    templateUrl: 'templates/pages/show.html',
    controller: 'ShowContactsController'
  })
  .when('/', {
    templateUrl: 'templates/pages/contacts.html',
    controller: 'ContactsController'
  })
  .otherwise({ redirectTo: '/' });
});
