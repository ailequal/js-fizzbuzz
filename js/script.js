// print numbers from 1 to 100
var arrayNumbers = [];
for (var i = 0; i < 100; i++) {
  arrayNumbers.push(i + 1);
  if (arrayNumbers[i] % 3 !== 0 || arrayNumbers[i] % 5 !== 0) {
    console.log(arrayNumbers[i]);
  } else if (arrayNumbers[i] % 3 == 0 && arrayNumbers[i] % 5 == 0) {
    console.log('fizzbuzz');
  } else if (arrayNumbers[i] % 3 == 0) {
    console.log('fizz');
  } else if (arrayNumbers[i] % 5 == 0) {
    console.log('buzz');
  }
}

console.log(arrayNumbers);

// x3 are 'fizz', not numbers

// x5 are 'buzz', not numbers

// x3 && xx5 are 'fizzbuzz', not numbers
