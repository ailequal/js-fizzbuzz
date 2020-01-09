// var
var i = 0;
var arrayForNumbers = [];
var arrayWhileNumbers = [];

// for version
console.log('---for version---')
for (i = 0; i < 100; i++) {
  arrayForNumbers.push(i + 1);
  if (arrayForNumbers[i] % 3 !== 0 && arrayForNumbers[i] % 5 !== 0) {
    console.log(arrayForNumbers[i]);
  } else if (arrayForNumbers[i] % 3 == 0 && arrayForNumbers[i] % 5 == 0) {
    console.log('fizzbuzz');
  } else if (arrayForNumbers[i] % 3 == 0) {
    console.log('fizz');
  } else if (arrayForNumbers[i] % 5 == 0) {
    console.log('buzz');
  }
}
console.log(arrayForNumbers);

// while version
console.log('---while version---')
i = 0;
while (i < 100) {
  arrayWhileNumbers.push(i + 1);
  if (arrayWhileNumbers[i] % 3 !== 0 && arrayWhileNumbers[i] % 5 !== 0) {
    console.log(arrayWhileNumbers[i]);
  } else if (arrayWhileNumbers[i] % 3 == 0 && arrayWhileNumbers[i] % 5 == 0) {
    console.log('fizzbuzz');
  } else if (arrayWhileNumbers[i] % 3 == 0) {
    console.log('fizz');
  } else if (arrayWhileNumbers[i] % 5 == 0) {
    console.log('buzz');
  }
  i++;
}
console.log(arrayWhileNumbers);
