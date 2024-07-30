"use strict";
// Q16. More Guests: You just found a bigger dinner table, so now more space is available. 
// Think of three more guests to invite to dinner. you can add more guests to your list.
// You can add guests at the beginning, middle, and end of an array.
//Guests list..
let guests = ["Asma", "Amna", "zunehra", "Eshal", "zeemal", "Zainab"];
console.log("Great news! I found a bigger dinner table.");
//add new guests in start, middle and end..
guests.unshift("Diba");
guests.splice(3, 0, "Nadia");
guests.push("Abira");
//print a inintation for all guests..
guests.forEach(guest => {
    console.log(`Dear ${guest}... ${"\n"} "You're invited to a cozy dinner affair at 'Clock Tower'..:D`);
});
