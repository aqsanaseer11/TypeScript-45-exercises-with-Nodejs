"use strict";
//Q17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
//and you have space for only two guests.  Remove guests from your list one at a time until only two names remain in your list.
//print message for informing that i can invite only two people for dinner.
let guests = ["Diba", "Asma", "Amna", "Nadia", "zunehra", "Eshal", "zeemal", "Zainab", "Abira"];
console.log("Sadly, I can only invite two people to a meal");
//print message ethet i can't invite them.
while (guests.length > 2) {
    let removedGuest = guests.pop();
    console.log(`Sorry, ${removedGuest} I can't invited you to a meal`);
}
//print invitation..
guests.forEach(guest => {
    console.log(`Dear ${guest} ... ${"\n"} "would u like to enjoy a meal with me".`);
});
