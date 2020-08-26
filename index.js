function fibonacciGenerator(n) {
  //First we have declare our seed variables 0,1 and empty array.
  var sequence = [];
  var a = 0;
  var b = 1;

  // a loop with an iterator i that always starts from 0 and checks for specific conditions.
  for (i = 0; i < n; i++) {
    if (i === 0) {
      sequence.push(a);
    } else if (i === 1) {
      sequence.push(b);
    } else {
      // declaring a new variable that calculates the next number before variable reassigment.
      var c = a + b;
      a = b;
      b = c;
      sequence.push(c);
    }
  }

  //Return an array of fibonacci numbers starting from 0.
  return sequence;

}
