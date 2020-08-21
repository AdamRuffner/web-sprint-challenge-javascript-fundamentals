// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 
 
// - Because it can inherit from its parent from top to bottom. If there was another function below nestedFunction and that is where the internal variable was it would be unable to access it.

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation(param){
let count = 0 
for ( let i =0; i <=param; i++){
  count += i;
}
return count;
  
}

console.log(summation(4));
