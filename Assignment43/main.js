"use strict";
//Qno.43:Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() with a copy of the array of magicians’ names. 
//Because the original array will be unchanged, return the new array and store it in a separate array. 
//Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
function make_great(magicians) {
    return magicians.map(name => `The Great ${name}`);
}
let magician_name = ["David Blaine", "Teller", "Criss Angle"];
//makin a copy of original array.
let copy_magician_names = magician_name.slice();
//modify the copied array
let copy_great_magician = make_great(copy_magician_names);
console.log("original array \n");
show_magicians(magician_name);
console.log("\ncopied array \n");
show_magicians(copy_great_magician);
