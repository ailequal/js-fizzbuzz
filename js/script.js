// var
var i = 0;
var arrayForNumbers = [];
var arrayWhileNumbers = [];
var forUl = document.getElementById('for');
var whileUl = document.getElementById('while');

// for version
console.log('---for version---')
for (i = 0; i < 100; i++) {
  arrayForNumbers.push(i + 1);
  if (arrayForNumbers[i] % 3 !== 0 && arrayForNumbers[i] % 5 !== 0) {
    console.log(arrayForNumbers[i]);
    forUl.innerHTML += '<li>' + arrayForNumbers[i] + '</li>';
  } else if (arrayForNumbers[i] % 3 == 0 && arrayForNumbers[i] % 5 == 0) {
    console.log('fizzbuzz');
    forUl.innerHTML += '<li>fizzbuzz</li>';
  } else if (arrayForNumbers[i] % 3 == 0) {
    console.log('fizz');
    forUl.innerHTML += '<li>fizz</li>';
  } else if (arrayForNumbers[i] % 5 == 0) {
    console.log('buzz');
    forUl.innerHTML += '<li>buzz</li>';
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
    whileUl.innerHTML += '<li>' + arrayWhileNumbers[i] + '</li>';
  } else if (arrayWhileNumbers[i] % 3 == 0 && arrayWhileNumbers[i] % 5 == 0) {
    console.log('fizzbuzz');
    whileUl.innerHTML += '<li>fizzbuzz</li>';
  } else if (arrayWhileNumbers[i] % 3 == 0) {
    console.log('fizz');
    whileUl.innerHTML += '<li>fizz</li>';
  } else if (arrayWhileNumbers[i] % 5 == 0) {
    console.log('buzz');
    whileUl.innerHTML += '<li>buzz</li>';
  }
  i++;
}
console.log(arrayWhileNumbers);
