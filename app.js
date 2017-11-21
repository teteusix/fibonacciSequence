var fibonacciSequence = [0];
fibonacciSequence.push(1); // add to start a fibonacci sequence
var fNumber = fibonacciSequence[fibonacciSequence.length - 1]; // define the fibonacci number
fibonacciSequence.push(fNumber);
var usernumber = document.getElementById('usernumber').value;
var checkNumber = document.getElementById('checkNumber');

// RESTART ARRAY WITH A FIBONACCI SEQUENCE
function restartFibonacci() {
  fibonacciSequence = [0];
  fibonacciSequence.push(1); // add to start a fibonacci sequence

  fNumber = fibonacciSequence[fibonacciSequence.length - 1]; // define the fibonacci number
  fibonacciSequence.push(fNumber);

  return fNumber;
}

// GENERATE A FIBONACCI NUMBER
function genFibonacciNumber() {
  fNumber = fibonacciSequence[fibonacciSequence.length - 1]; // redefine the value
  console.log('Now Fibonacci number is '+fNumber);

  // the magic is here
  fNumber = fNumber+fibonacciSequence[fibonacciSequence.length - 2]; // take the number to calculate
  fibonacciSequence.push(fNumber); // insert the new number

  return fNumber;
}

// CHECK IF THE USER NUMBER IS FIBONACCI NUMBER
function checkFibonacciNumber() {
  var usernumber = document.getElementById('usernumber').value;
  do {
    genFibonacciNumber();
    result = fNumber;
  } while (fNumber < usernumber);

  document.getElementsByTagName('p')[0].innerHTML = result;
  startFibonacci();
}
