// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// const x = 23;

// const temperature = [3, -2, -6, -1, "error", true, 9, 13, 17, 15, 14, 9, 5];

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     if (temps[i] > max) max = temps[i];
//   }
//   console.log(max);
// };

// calcTempAmplitude(temperature);

//=======================

const temperatures1 = [17, 21, 23];
const temperatures2 = [12, 5, -5, 0, 4];

//my solution
// function printForecast(arr) {
//   let result = "";
//   let temperatureResult = 0;
//   let dayResult = 1;

//   for(let i = 0; i < arr.length; i++) {
//     if(typeof arr[i] !== "number") continue;
//     temperatureResult  = arr[i];
//     dayResult += i;
//     result = result.concat(` ... ${temperatureResult}°C in ${dayResult} days`);
//   }
//   console.log(result);
//   return result;
// }

// printForecast(temperatures1);
// printForecast(temperatures2);
//my solution

const data1= [17, 21, 23];
const data2= [12, 5, -5, 0, 4];

console.log(`... ${data1[0]}°C ... ${data1[1]}°C ... ${data1[2]}°C ... `)

const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}°C in ${i + 1} days ... `;
  }
  console.log('...' + str);
};
printForecast(data1);