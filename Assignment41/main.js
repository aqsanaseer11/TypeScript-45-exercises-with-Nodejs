"use strict";
//Qno.41:Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
let magician_name = ["David Blaine", "Teller", "Criss Angle"];
show_magicians(magician_name);
