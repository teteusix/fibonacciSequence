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
    document.getElementsByClassName('message')[0].innerHTML = '<h2><span style="color:#27ae60;margin-right:10px;">&#10003;</span>'+usernumber+' is a Fibonacci Number!</h2>'+
    '<p>Your number <strong>'+usernumber+'</strong> is a Fibonacci Number.</p>';
  } else {
    document.getElementsByClassName('message')[0].innerHTML = '<h2><span style="color:#c0392b;margin-right:10px;">&#10007;</span>'+usernumber+' is not a Fibonacci Number!</h2>'+
    '<p>Your number <strong>'+usernumber+'</strong> is not a Fibonacci Number.</p>'+
    '<p>The nearby Fibonacci numbers are:</p><p><i>'+fibonacciSequence[fibonacciSequence.length - 2]+' </i>&#9667;<strong> '+usernumber+' </strong>&#9657; <i> '+fibonacciSequence[fibonacciSequence.length - 1]+'</i><p>';
    document.getElementsByClassName('fibonacciSequence')[0].innerHTML = fibonacciSequence;
  }
  restartFibonacci();
}
