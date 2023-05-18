let products = [
  { product: "Gummy Worms", price: 5.79 },
  { product: "Plain M&Ms", price: 2.89 },
  { product: "Peanut M&Ms", price: 2.89 },
  { product: "Swedish Fish", price: 3.79 },
];
// TODO: fill the array with 10 candies of various
// price ranges

products.push({ product: "Fruit Snacks", price: 2.5 });
products.push({ product: "Caramel Filled M&Ms", price: 2.89 });
products.push({ product: "Kit-Kat", price: 2.5 });
products.push({ product: "Reeses", price: 2.25 });
products.push({ product: "Gummy Bears", price: 5.79 });
products.push({ product: "Sour Patch Kids", price: 3.5 });

console.log("-------------------------------");

// Which candies costs less than $4.00?

//(item) tells function to find a particular array element
// => tells the function to find the found the item price to be less than 4
//lessThan will contain the array elements that are less than 4

const lessThan = products.filter((item) => item.price < "4");
lessThan.forEach((item) => {
  console.log(item.price.toFixed(2), item.product);
});

console.log("-------------------------------");

// Which candies has "M&M" its name?

const nameM = products.filter((item) => item.product.includes("M&M"));
nameM.forEach((item) => {
  console.log(item.product);
});

console.log("-------------------------------");

// Do we carry "Swedish Fish"?

const carrySF = products.find((item) => item.product.toLowerCase == "swedish fish" );
if (carrySF){
    console.log("yes")
} else {
    console.log("no")
}