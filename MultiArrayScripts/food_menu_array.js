let menu = [
  [
    { item: "Sausage and Egg Biscuit", price: 3.69 },
    { item: "Bacon and Egg Biscuit", price: 3.49 },
    { item: "Ham and Egg Biscuit", price: 3.29 },
  ],
];

menu.push([
  { item: " BLT", price: 5.50 },
  { item: " Burger", price: 7.50 },
  { item: " Salad", price: 5.30 },
  { item: " Sloppy Joe", price: 3.50 },
]);

menu.push([
    { item: "Steak", price: 10.05 },
    { item: " Salmon ", price: 12.90 },
    { item: " Salad with Protien", price: 10.40 },
    { item: " Surf and Turf", price: 20.00 },
    {item: "Dinner Burger", price: 8.50}
  ]); 

console.log(menu)

console.log("--------------------------")

//define variables named meal that holds an interger in the range 0-2
// represents the meal the user wants to view from the menu

const mealIndex = 0;
const mealNames = ['Breakfast', 'Lunch', 'Dinner'];

console.log(mealNames[mealIndex], 'Menu')



//code to display a heading that says "Breakfast Menu","Lunch Menu" or "Dinner menu"
// depends on the value of meal

//list item on menu for that meal
