
//Author: Bijay Ranabhat

//For DanpheIT

/*Write a program that prints the odd number from 1 to 100.
But for multiples of three print “Fizz” instead of the number & for the multiples of five print “Buzz”.
However for numbers which are multiple of both three and five print “FizzBuzz”.
*/

//2 implementations


/*easy to read and maintain,
simple implementation
start is smaller than end
*/

function fizzBuzz1(start, end){
  var j,
      i,
      results = '';
      
  for (i = start; i <= end; i++, j = '') {
    if (i % 3 === 0) {
      j += 'Fizz';
    }
    if (i % 5 === 0) {
      j += 'Buzz';
    }
    results += (j || i) + ', '
  }
  
  return results.substring(0, results.length - 2);
}
//testing
console.log(fizzBuzz1(1,100));



/*using  ternary operator
a bit difficult to read
start is smaller than end
*/
function FizzBuzz(start,end) {
  var i = start, j;
  while (i < end) {
    i++;
    j = '';
    j += i % 3 ? '' : 'Fizz';
    j += i % 5 ? '' : 'Buzz';
    console.log(j ? j : i);
  }
}
//testing
FizzBuzz(100);