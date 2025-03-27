// Coding challenge #4
/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

// //version 1
// document.querySelector('button').addEventListener('click', () => {
const text = document.querySelector('textarea').value;
//     const lines = text.split('\n');
//     lines.forEach((line, index) => {
//         const handleLine = line.trim().toLocaleLowerCase();
//         let lengthText = line.length;
//         const [first, second] = handleLine.split('_');
//         const handleText = first + second.replace(second[0], second[0].toUpperCase()) + " ";
//          console.log(handleText.padEnd(handleText.length + index + 1, '✅'));
//     })
// });

// text.addEventListener('input', () => {

// });

//Version 2 --- completed
document.querySelector('button').addEventListener('click', () => {
  const text = document.querySelector('textarea').value;
  const lines = text.split('\n');
  const maxLength = Math.max(...lines.map(line => line.trim().length)) + 5;

  lines.forEach((line, index) => {
    if (!line.trim()) return;
    const handleLine = line.trim().toLowerCase();
    const [first, second] = handleLine.split('_');
    if (!second) return;

    const convertText =
      first + second.replace(second[0], second[0].toUpperCase());

    const handleText = convertText.padEnd(maxLength, '.');
    console.log(handleText + '✅'.repeat(index + 1));
  });
});
