"use strict";
// Q no.29:Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// Make a array of your three favorite fruits and call it favorite_fruits.
let favorite_fruits = ["Kiwi", "Lichi", "Grapes"];
// Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
if (favorite_fruits.includes("Kiwi")) {
    console.log("I really like Kiwi..");
}
if (favorite_fruits.includes("Lichi")) {
    console.log("I really like Lichi..");
}
if (favorite_fruits.includes("Mango")) {
    console.log("I like Mango..");
}
if (favorite_fruits.includes("Grapes")) {
    console.log("I really like Grapes..");
}
if (favorite_fruits.includes("Guava")) {
    console.log("I don't like Guava..");
}
