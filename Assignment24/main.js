"use strict";
//Q no.24:More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
//If you want to try more comparisons,write more tests. Have at least one True and one False result for each of the following:
//Tests for equality and inequality with strings.
console.log("Testing equality with strings:");
console.log("apple" == "apple");
console.log("apple" = !"apple");
//Tests using the lower case function
console.log("Testing with lower case:");
console.log("Apple".toLowerCase() == "apple");
console.log("apple".toLocaleLowerCase() == "Apple");
//Numerical tests involving equality and inequality, 
//greater than and less than, greater than or equal to, and less than or equal to
console.log("Numerical Testing equality with operators");
console.log(10 > 8);
console.log(10 < 8);
console.log(10 <= 12);
console.log(10 >= 12);
//Tests using "and" and "or" operators.
console.log("Testing && and || operators.");
console.log(true && false);
console.log(true || false);
//Test whether an item is in a array.
let fruits = ["Apple", "Banana", "Grappes"];
console.log("is 'Apple' in fruits?");
console.log(fruits.includes("Apple"));
//Test whether an item is not in a array.
console.log("is 'Cherry' in fruits");
console.log(fruits.includes("Cherry"));
