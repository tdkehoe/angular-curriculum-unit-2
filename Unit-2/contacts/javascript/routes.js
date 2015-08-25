angular.module('ContactsApp').config(function($routeProvider){

  $routeProvider
  .when('/contacts', {
    templateUrl: 'templates/pages/contacts/index.html',
    controller: 'ContactsController'
  })
  .when('/show', {
    templateUrl: 'templates/pages/show/index.html',
    controller: 'ShowContactsController'
  })
  .when('/', {
    templateUrl: 'templates/pages/contacts/index.html',
    controller: 'ContactsController'
  })
  .otherwise({ redirectTo: '/' });
});
