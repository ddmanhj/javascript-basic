'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

const weekdays  = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours ={
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
}

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],



  order (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery ({ starterIndex = 1, mainIndex = 0, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`);
  },

  orderPizza (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  }
};

/*
// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);
let openStr = `We are open on ${properties.length} days: `
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// Property VALUES
const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours);
// console.log(entries); // [Array(2), Array(2), Array(2)]

// [key, value]
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
// On thu we open at 12 and close at 22
// On fri we open at 11 and close at 23
// On sat we open at 0 and close at 24
*/


/*
Optional Chaining (?.)
for (const [i, item] of restaurant.mainMenu.entries()) {
  console.log(`${i + 1}: ${item}`);
}
for (const day of weekdays) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}
  */

// Use ANY data type, return ANY data type, short-circuiting
/* console.log(3 || "Jonas"); // 3
console.log('' || 'Jonas'); // Jonas
console.log(true || 0); // true
console.log(undefined || null); // null
 */

/*
// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]]; // [1, 2, 3, 4]

// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5]; // a: 1, b: 2, others: [3, 4, 5]

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]; // pizza: Pizza, risotto: Risotto, otherFood: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
// sat: {open: 0, close: 24}, weekdays: {thu: {…}, fri: {…}}

// 2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log("🚀 ~ sum:", sum);
};

add(2, 3); // 5
add(5, 3, 7, 2); // 17
add(8, 2, 5, 3, 2, 1, 4); // 25
*/

/*
// --The Spread Operator { ... }
const arr = [7, 8 , 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]]; 
console.log("🚀 ~ badNewArr:", badNewArr); // [1, 2, 7, 8, 9]

const newArr = [1, 2, ...arr];
console.log("🚀 ~ newArr:", newArr); // [1, 2, 7, 8, 9]

const newMenu = [...restaurant.mainMenu, 'Gnocchi'];
console.log("🚀 ~ newMenu:", newMenu); // ['Pizza', 'Pasta', 'Risotto', 'Gnocchi']

//COpy array
const mainMenuCopy = [...restaurant.mainMenu];

//join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

//Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Jonas';
const letters = [...str, ' ', ' S.']; // ['J', 'o', 'n', 'a', 's', ' ', 'S.']

const ingredients = [/*prompt("Let\'s make pasta! Ingredient 1?"), prompt('Ingredient 2?'), prompt('Ingredient 3?')*///];*/
/*
console.log("🚀 ~ ingredients:", ingredients); //

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

restaurant.orderPasta(...ingredients);

//Objects
const newRestaurant = {foundedIn: 1998, ...restaurant, founder: 'Giuseppe'};

console.log("🚀 ~ newRestaurant:", newRestaurant) // {foundedIn: 1998, name: "Classico Italiano", location: "Via Angelo Tavanti 23, Firenze, Italy", categories: Array(4), starterMenu: Array(4), …}

const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Ristorante Roma';
console.log("🚀 ~ restaurantCopy:", restaurantCopy.name); // Ristorante Roma
console.log("🚀 ~ restaurant:", restaurant.name); // Classico Italiano
*/

// //--Destructuring Objects
// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2
// });

// const { name, openingHours, categories } = restaurant;
// console.log("🚀 ~ name, openingHours, categories:", name, openingHours, categories);
// //name: Classico Italiano, openingHours: {thu: {…}, fri: {…}, sat: {…}}, categories: (4) ["Italian", "Pizzeria", "Vegetarian", "Organic"]

// const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;
// console.log("🚀 ~ restaurantName, hours, tags:", restaurantName, hours, tags)

// //default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log("🚀 ~ menu, starters:", menu, starters);
// //menu: [], starters: (4) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

// //mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log("🚀 ~ a, b:", a, b);
// //a: 23, b: 7

// //nested objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log("🚀 ~ o, c:", o, c)
// //o: 11, c: 23;


//--Destructuring Arrays
// const arr= [2,3,4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log("🚀 ~ x, y, z:", x, y, z)

// let [main, ,secondary] = restaurant.categories;
// console.log("🚀 ~ main, secondary:", main, secondary);

// // //hoán đổi bằng một biến trung gian -> theo cách thông thường
// // const temp = main;
// // main = secondary;
// // secondary = temp;

// [main, secondary] = [secondary, main];
// console.log("🚀 ~ main, secondary:", main, secondary);

// // nhận giá trị từ một function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log("🚀 ~ starter, mainCourse:", starter, mainCourse); // starter: Garlic Bread, mainCourse: Pizza

// // nested destructuring
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log("🚀", i, j); // i: 2, j: [5, 6]
// const [i, , [j, k]] = nested; // i: 2, j: 5, k: 6

// // default values
// const [p, q, r] = [8, 9];
// console.log(p, q, r);

