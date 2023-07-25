/*
 * @param {number} n
 * @return {Function} counter
 */



var createCounter = function(n) {
    let counter = n;
    
    return function() {
        return counter++;
    };
};




const counter = createCounter(10)
counter() // 10
counter() // 11
counter() // 12


/* Explain
*
*   In this code snippet, we have a function called createCounter that takes a single parameter n. 
*  The createCounter function returns another function, which acts as a closure, retaining access to the counter variable in the outer function's scope.
*
*   A closure is a fundamental concept in programming and refers to the ability of a function to "remember"
*   and access its lexical scope, even when the function is executed outside that scope. In simpler terms,
*   a closure allows a function to retain access to the variables and parameters of the outer function in which it was defined,
*   even after that outer function has finished executing.
*
*/