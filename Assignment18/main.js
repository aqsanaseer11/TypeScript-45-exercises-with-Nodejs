"use strict";
//Q18.Seeing the World: Think of at least five places in the world you’d like to visit.
//store the location in array.
let countriesToVisit = ["Dubai", "Algeria", "Belgium", "China", "France", "Egypt"];
//print array in its original order.
console.log("Original order:", countriesToVisit);
//print array in alphabetical order without modifying the actual list.
console.log("Alphabetical order:", [...countriesToVisit].sort());
//print array still in its original order..
console.log("Still in original order", countriesToVisit);
//print alphabetical order in reverse without changing its original list.
console.log("Reverse alphabetical order:", [...countriesToVisit].reverse());
//print array still in its original order..
console.log("Still in original order:", countriesToVisit);
//reverse the order of your list..
countriesToVisit.reverse();
//print the array to show that its order has changed
console.log(countriesToVisit);
//Reverse the order of countries list again..
countriesToVisit.reverse();
//print the array to show that its order has changed.
console.log(countriesToVisit);
//sort array for stored in alphabetical order.
countriesToVisit.sort();
//print it to show that its order has been changed.
console.log(countriesToVisit);
//sort to change your array so its stored to reverse alphabetical order.
countriesToVisit.reverse();
//print it again to show that its order has been changed.
console.log(countriesToVisit);
