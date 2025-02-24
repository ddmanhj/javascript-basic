"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive!");

// function logger() {
//   console.log("My name is Manhj");
// }

// // calling / running / invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);

// // FUNCTION ARROWS
// const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(1991, "Manhj"));

// ================================================
// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} picece of apple and ${orangePieces} picece of orange.`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

//================================================
// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;
//   if (retirement > 0) {
//     return retirement;
//   } else {
//     return -1;
//   }
//   // return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(1991, "Manhj"));
// console.log(yearsUntilRetirement(1970, "Mike"));

//==========================
// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);

// const y = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = "Jay";
// console.log(friends);

// const firstName = "Manhj";
// const manhj = [firstName, "Nguyen", 2037 - 1991, "teacher", friends];
// console.log(manhj);

// Exercise
// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };
// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];
// console.log(ages);

// ========================================
// const friends = ["Michael", "Steven", "Peter"];
// friends.push("Jay");
// console.log(friends);

//=======================
// const manhj = {
//   firstName: "Manhj",
//   lastName: "Manhj",
//   age: 2000,
//   job: "front-end developer",
//   friends: ["Michael", "Peter", "Steven"],
// };
// console.log(manhj.lastName);
// console.log(manhj.lastName);
// console.log(manhj["lastName"]);
// const nameKey = "Name";
// console.log(manhj["first" + nameKey]);
// console.log(manhj["last" + nameKey]);

// const interestedIn = prompt(
//   "What do you want to know about Jonas? Choose between firstName, lasName, age, job, and friends?"
// );

// if (manhj[interestedIn]) {
//   console.log(manhj[interestedIn]);
// } else {
//   console.log(
//     "Wrong request! Choose between firstName, lasName, age, job, and friends?"
//   );
// }

// manhj.location = "Vietnam";
// manhj["twitter"] = "@manhj";
// console.log(manhj);

// // Challenge
// // "Manhj has 3 friends, and his best friend is called Michael"
// const bestFriend = `${manhj.lastName} has ${manhj["friends"].length} friends, and his best friend is called ${manhj["friends"][0]}`;
// console.log(bestFriend);

//---------------------------------
// const manhj = {
//   firstName: "Manhj",
//   lastName: "Manhj",
//   birthYeah: 2000,
//   job: "front-end developer",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,

//   //   calcAge: function (birthYeah) {
//   //     return 2037 - birthYeah;
//   //   },
//   //   calcAge: function () {
//   //     return 2037 - this.birthYeah;
//   //   },
//   calcAge: function () {
//     this.age = 2037 - this.birthYeah;
//     return this.age;
//   },
//   getSummary: function() {
//     this.age = new Date().getFullYear() - this.birthYeah;
//     return `${this.firstName} is a ${this.age} years old ${
//       this.job
//     }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
//   }
// };

// // manhj.calcAge(2000);
// // manhj.calcAge();
// // manhj.calcAge();
// console.log(manhj.calcAge());
// console.log(manhj);
//================================================
// const manhj = [
//   "Manhj",
//   "Ralph",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Steven", "Peter"],
// ];

// for (let i = 0; i < manhj.length; i++) {
//   console.log(typeof manhj[i]);
// }

// for (let exercise = 1; exercise <= 4; exercise++) {
//   console.log("========== Starting exercise " + exercise);

//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Lifting weight repetition ${rep}`);
//   }
// }
//=-
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weight repetition ${rep}`);
}
