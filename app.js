var fibonacciSequence = [0];
fibonacciSequence.push(1); // add to start a fibonacci sequence
var fNumber = fibonacciSequence[fibonacciSequence.length - 1]; // define the fibonacci number
fibonacciSequence.push(fNumber);
var checkNumber = document.getElementById('checkNumber');

// checkNumber.addEventListener('click', function() {
//   checkFibonacciNumber();
// });
checkNumber.addEventListener('click', checkFibonacciNumber);

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
  } while (fNumber < usernumber);


  if (fNumber == usernumber) {
    document.getElementsByTagName('p')[0].innerHTML = 'Your number <strong>'+usernumber+'</strong> is a Fibonacci Number';
  } else {
    document.getElementsByTagName('p')[0].innerHTML = 'Your number <strong>'+usernumber+'</strong> is a Fibonacci Number. The next numbers are: previous <i>'+fibonacciSequence[fibonacciSequence.length - 2]+'</i> and then <i>'+fibonacciSequence[fibonacciSequence.length - 1]+'</i>';
  }
  restartFibonacci();
}
