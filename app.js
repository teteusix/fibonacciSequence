var fibonacciSequence = [0]
fibonacciSequence.push(1); // add to start a fibonacci sequence

var fNumber = fibonacciSequence[fibonacciSequence.length - 1]; // define the fibonacci number
fibonacciSequence.push(fNumber);

console.log('Fibonacci number is '+fNumber);

function genFibonacciNumber() {
  fNumber = fibonacciSequence[fibonacciSequence.length - 1]; // redefine the value
  console.log('Now Fibonacci number is '+fNumber);

  // the magic is here
  fNumber = fNumber+fibonacciSequence[fibonacciSequence.length - 2]; // take the number to calculate
  fibonacciSequence.push(fNumber); // insert the new number

  return fNumber;
}
