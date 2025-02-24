'use strict';

// function callAge(birthYear) {
//     const age = 2037 - birthYear;
   
//     function printAge() {
//         let output = `${firstName},You are ${age}, born in ${birthYear}`;
//         console.log(output);

//         if(birthYear >= 1981 && birthYear <= 1996) {
//             var millenial = true;
//             const firstName = 'Steven';
//             const str = `Oh, and you're a millenial, ${firstName}`;
//             console.log(str);

//             function add(a, b) {
//                 return a + b;
//             }

//             output = 'NEW OUTPUT';
//         }
//         console.log(millenial); // var is function scoped => success to log the value true
//         // console.log(add(2, 3)); // ReferenceError: add is not defined
//     }
//     printAge();
//     return age;
// }

// const firstName = 'Jonas';
// callAge(1991);
// // console.log(age); // ReferenceError: age is not defined


/* ---------------------------------- */
// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Jonas';
// let job = 'teacher';
// const year = 1991;

// //Functions
//  console.log(addDecl(2, 3));
//  console.log(addExpr(2, 3));
//  console.log(addArrow(2, 3));
// function addDecl(a, b) {
// 	return a + b;
// }

// const addExpr = function (a, b) {
// 	return a + b;
// }

// const addArrow = (a, b) => a + b;

// //Example
// if(!numProducts) deleteShoppingCart();
// console.log("🚀 ~ numProducts:", numProducts)

// var numProducts = 10;
// function deleteShoppingCart() {
//     console.log('All products deleted!');
// }

/* ---------------------------------- */

// console.log(this)

// const calcAge = (birthYear) =>  {
// 	console.log(2037 - birthYear); 
// 	console.log(this);
// }

// calcAge(1991);
// const calcAgeArrow = (birthYear) =>  {
// 	console.log(2037 - birthYear);
// 	console.log(this);
// }

// calcAgeArrow(1991);

// const manhj = {
// 	year: 2000,
// 	calcAge: function() {
// 		console.log(this);
// 		console.log(2037 - this.year);
// 	}
// }

// manhj.calcAge();

// const matilda = {
// 	year: 2017
// }

// matilda.calcAge = manhj.calcAge;
// matilda.calcAge();


/* ---------------------------------- */
// const manhj = {
// 	firstName: 'manhj',
// 	year: 1991,
// 	calcAge: function() {
// 		console.log(this);
// 		console.log(2037 - this.year);
// 	},

// 	greet: () => console.log(`Hey ${this.firstName}`)
// }
// manhj.greet();

/* ---------------------------------- */

const jessica = {
	firstName: 'Jessica',
	lastName: 'Williams',
	age: 27,
}

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';

console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);

jessica.age = 30

//Shallow copy
const jessica2 = {
	firstName: 'Jessica',
	lastName: 'Williams',
	age: 27,
	family: ['Alice', 'Bob']
}

const jessicaCopy = {...jessica2};
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);

// Deep copy
const jessicaClone = structuredClone(jessica2);
jessicaClone.family.push('John');
jessicaClone.family.push('Mary');

console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaClone);