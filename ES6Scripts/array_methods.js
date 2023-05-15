let cart = [
  { item: "Bread", price: 3.29, quantity: 2 },
  { item: "Milk", price: 4.09, quantity: 1 },
  { item: "T-Bone Steak", price: 12.99, quantity: 2 },
  { item: "Baking Potato", price: 1.89, quantity: 6 },
  { item: "Iceberg Lettuce", price: 2.06, quantity: 1 },
  { item: "Ice Cream - Vanilla", price: 6.81, quantity: 1 },
  { item: "Apples", price: 0.66, quantity: 6 },
];

// map()  to get item name and foreach() to display list of items
// determin total cost of everything using reduce()
// revisit code 1. sort list before displaying
function getItemName(cartItem) {
  return cartItem.item;
}

function displayName(cartItem) {
  console.log(cartItem);
}

cart.sort(function (a, b) {
  if (a.item < b.item) {
    return -1;
  } else if (a.item == b.item) {
    return 0;
  } else {
    return 1;
  }
});

let itemName = cart.map(getItemName);
itemName.forEach(displayName);

console.log("----------------------------");

function getSum(currentTotal, arrayElement) {
  return currentTotal + arrayElement.price * arrayElement.quantity;
}

let sum = cart.reduce(getSum, 0);

console.log("Total sum: $", sum.toFixed(2));
