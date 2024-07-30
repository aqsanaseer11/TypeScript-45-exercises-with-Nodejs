"use strict";
// Q no.32:Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// Make a list of five or more usernames called current_users.
let current_users = ["Anna", "Eshaal", "Ashir", "shaheer", "Salim"];
// Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
let new_users = ["Maya", "Ibrahim", "Ayan", "Anna", "Shaheer"];
//Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username.
// If a username has not been used, print a message saying that the username is available.
new_users.forEach(newUser => {
    let ourcondition = current_users.some(currentUser => currentUser.toLowerCase() === newUser.toLowerCase());
    if (ourcondition) {
        console.log(`Sorry this username ${newUser} is already taken You will need to enter a new user name..`);
    }
    else {
        console.log(`This username ${newUser} is available`);
    }
});
