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

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
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
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ starterIndex = 1, mainIndex = 0, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};



/*Working with string P1 
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]); // A
console.log(plane[1]); // 3
console.log(plane[2]); // 2
console.log('B737'[0]); // B

console.log(airline.indexOf("r")); // 6
console.log(airline.lastIndexOf("r")); // 10
console.log(airline.indexOf("portugal")) // -1

console.log(airline.slice(4)); // Air Portugal
console.log(airline.slice(4, 9));// Result: Air
console.log(airline.slice(0, airline.indexOf(" "))); // TAP

console.log(airline.slice(airline.lastIndexOf(" ") + 1)) // Portugal

console.log(airline.slice(-2)); // al
console.log(airline.slice(1, -1)); // AP Air Portuga

const checkMiddleSeat = function(seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if( s === "B" || s === "e") console.log("You got the middle seat 😬");
  else console.log("You got lucky 😎");
}

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(airline.toLowerCase()); // tap air portugal
console.log(airline.toUpperCase()); // TAP AIR PORTUGAL

// Fix capitalization in name (Sửa tên khách hàng khi có ký tự hoa lẫn ký tự thường)
const passenger = "mAnHJ";
const passengerLower = passenger.toLowerCase(); // manhj
const passengerCorrect = passengerLower[0].toLocaleLowerCase() + passengerLower.slice(1); // Manhj

const email = "hello@manhj.io";
const loginEmail =  '   Hello@Manhj.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail); // true

// Replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.'); // 288.97$

const announcement = 'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate')); // All passengers come to boarding gate 23. Boarding door 23!

console.log(announcement.replaceAll('door', 'gate')); // All passengers come to boarding gate 23. Boarding gate 23!

//legacy
console.log(announcement.replace(/door/g, 'gate')); // All passengers come to boarding gate 23. Boarding gate 23!

// Booleans
const plane1 = 'Airbus A320neo';
console.log(plane1.includes('A320')); // true
console.log(plane1.includes('Boeing')); // false

console.log(plane1.startsWith('Airb')); // true
console.log(plane1.startsWith('A320')); // false

console.log(plane1.endsWith('neo')); // true
console.log(plane1.endsWith('A320')); // false
console.log(plane1.endsWith('no'), 'no'); // false

if(plane1.startsWith('Airbus') && plane1.endsWith('neo')) {
  console.log('Part of the NEW Airbus family');
}

// Practice exercise
const checkBaggage = function(items) {
  const baggage = items.toLowerCase();
  if(baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
}

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Sunglasses, a coat, and a camera');
checkBaggage('Got some snacks and a gun for protection');
/*



// Maps: Iteration
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct! 🎉'],
  [false, 'Try again! 🎈'],
]);

// Convert object to map
console.log(Object.entries(openingHours));
// Result: [""thu"", {open: 12, close: 22}
// ""fri"", {open: 11, close: 23}
// ""sat"", {open: 0, close: 24}]
// ]
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap); 
// Result: Map(3) {"thu" => {…}, "fri" => {…}, "sat" => {…}}

// Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
const answer = Number(prompt('Your answer'));

// Convert map to array
console.log([...question]);

// Result:
// Answer 1: C
// Answer 2: Java
// Answer 3: JavaScript
*/

/*
//Maps: Fundamentals
const rest = new Map();
// Phương thức set của map tương tự như add Của new Set() -> Thêm phần tử vào map
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
// rest.set(2, 'Lisbon, Portugal');
console.log(rest.set(2, 'Lisbon, Portugal')); // Map(3) {"name" => "Classico Italiano", 1 => "Firenze, Italy", 2 => "Lisbon, Portugal"}

//Cú pháp thêm nhiều phần tử cùng một lúc
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

console.log(rest.get('name')); // Classico Italiano
console.log(rest.get(true)); // We are open :D
console.log(rest.get('1')); // undefined => Lưu ý khi get thì khai báo type nào phải trùng với type khi set

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close'))); // We are closed :(
// => rest.get sẽ truy cập biến true hoặc false vì bên trong là dấu && -> thu về một kết quả true hoặc false
// -> True và false đã được set trong map với true = 'We are open :D' và false = 'We are closed :('

//Kiểm tra có tồn tại hay không?
console.log(rest.há('categories')); // true

//Xóa phần tử trong map
rest.delete(2); // Xóa phần tử có key = 2
*/

/*
//New Opreerations to Make Sets Useful!
const commFoods = italianFoods.intersection(mexicanFoods); // Result: Set(2) {'tomatoes', 'garlic'}
console.log('🚀 ~ commFoods:', [...commFoods]); // ['tomatoes', 'garlic']

console.log([...new Set([...italianFoods, ...mexicanFoods])]);
// ['pasta', 'gnocchi', 'tomatoes', 'olive oil', 'garlic', 'basil', 'tortillas', 'beans', 'rice', 'avocado']

const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
console.log('🚀 ~ uniqueItalianFoods:', [...uniqueItalianFoods]); // ['pasta', 'gnocchi', 'olive oil', 'basil']

const uniqueMexicanFoods = mexicanFoods.difference(italianFoods);
console.log('🚀 ~ uniqueMexicanFoods:', [...uniqueMexicanFoods]); // ['tortillas', 'beans', 'rice', 'avocado']

const uniqueItalianAndMexicanFoods =
  italianFoods.symmetricDifference(mexicanFoods); // Result: Set(6) {'pasta', 'gnocchi', 'olive oil', 'basil', 'tortillas', 'beans'}

console.log(italianFoods.isDisjoinFrom(mexicanFoods)); // false
*/

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
/* console.log(3 || "Manhj"); // 3
console.log('' || 'Manhj'); // Manhj
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
const str = 'Manhj';
const letters = [...str, ' ', ' S.']; // ['J', 'o', 'n', 'a', 's', ' ', 'S.']

const ingredients = [/*prompt("Let\'s make pasta! Ingredient 1?"), prompt('Ingredient 2?'), prompt('Ingredient 3?')*/ //];*/
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
