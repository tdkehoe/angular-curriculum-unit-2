# Services

Angular services are components that are added to your code via dependency injection.  From the angular docs:

```
Angular services are:

* Lazily instantiated – Angular only instantiates a service when an application component depends on it.
* Singletons – Each component dependent on a service gets a reference to the single instance generated by the service factory.
```

**EXERCISE:** Name at least 3 angular built in services that we have used so far.

Now that we are more comfortable using services and injecting a service as dependency, let's create our own.  In your contact app, add the following code to `service.js`:

```js
app.factory('ContactList', function() {
  var ContactList = {};

  ContactList.contactList = [];

  ContactList.addContact = function(name, email, phone) {
    contactList.data.push({name: name, email: email, phone: phone});
  };

  ContactList.findContact = function(name) {
    // TODO
  };

  ContactList.removeContact = function(index) {
    // TODO
  };

  return ContactList;
});
```

Now in your controller you can add the contact service you created as a dependency.  For example, your controller might look like this:

```js
app.controller('ContactController', ["$scope", "ContactList", function($scope, ContactList){
   $scope.contactData = ContactList.contactList;

   // TODO: Your ContactList controller code here.
}]);
```

**EXERCISE:** Refactor your contacts app to use a ContactList service.  Remember to stick with best practices and use the inline array annotation.

**EXERCISE:** Add a show page to your contacts app. This will require a separate controller but you can use the same ContactList service and share it between controllers. The "id" for the show page should by the index of contact in the contactList.

#### Deferreds and Promises

In jQuery you saw promises often.  The most common use case was an ajax call.  For example, you might have some code like this in jQuery:

```js
$.get("/puppies").done(function() {
  // do something here
}).fail(function() {
  // do something here
});
```

The object returned from the `$.get` method is a promise that can then be chained to other method calls when certain events take place.  You can think of a promise as a more generalized way of implementing a callback.

Another popular library for promises is [q](https://github.com/kriskowal/q)

**EXERCISE:** Read the docs for [the q promise library](https://github.com/kriskowal/q).  Why would you prefer to use a promise over a callback?  What advantage does it have?

#### Creating a Service With Dependencies

Your service could also have dependencies.  We have seen the `$http` service.  In the example we will also used the `$q` service to add deferreds to our service:

```js
app.factory('omdbapi', ["$http", "$q", function($http, $q) {
  var omdbservice = {};
  var baseUrl = "http://www.omdbapi.com/?plot=short&r=json&s=";
  var searchTerm = '';

  omdbservice.setSearchTerm = function(term) {
    searchTerm = encodeURIComponent(term);
  }

  omdbservice.getSearchTerm = function() {
    return decodeURIComponent(searchTerm);
  }

  omdbservice.search(term) {
    if (term !== undefined) {
      omdbservice.setSearchTerm(term);
    }

    var url = baseUrl + searchTerm;

    var deferred = $q.defer();

    $http.get(url).success(function(data) {
      deferred.resolve(data);
    }).error(function() {
      deferred.reject("Error!")
    });

    return deferred.promise;
  }

  return omdbservice;
}]);
```

**EXERCISE:** Use the [Giphy Api](https://github.com/Giphy/GiphyAPI) to add a feature to your app.  Whenever a new user is submitted, do a search for a gif using the person's name.  If you get a result, save that along with the users name email and phone number.  Show the user's gif on the show page.  HINT: you probably want to use the embedded url froom the giphy search resutls.
