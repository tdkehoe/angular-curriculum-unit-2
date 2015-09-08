app.factory('ShoppingCartService', function() {
  console.log("Factory running. I'm first!");
  var ShoppingCart = []; // try an object here
  ShoppingCart.addedTea = {};
  console.log("I'm second!");

  ShoppingCart.addToCart = function(tea, quantity) {
    console.log("Adding to shopping cart!");
    console.log("I'm fourth!");
    var addedTea = {
      tea: tea.name,
      quantity: tea.quantity,
      imageUrl: tea.imageUrl,
      caffeineScale: tea.caffeineScale,
      ingredients: tea.ingredients,
      rating: tea.rating,
      price: tea.price,
    };
    ShoppingCart.push(addedTea);
    console.log(ShoppingCart);
    console.log(ShoppingCart.length);
    console.log("I'm fifth!");
  };
  console.log("I'm sixth!");
  return ShoppingCart;
});
