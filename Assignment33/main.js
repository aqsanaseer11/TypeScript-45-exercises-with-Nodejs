"use strict";
// Q no.33:Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// Store the numbers 1 through 9 in a array.
let ordinal_Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//Loop through the array.
for (let ordinal_One_Number of ordinal_Numbers) {
    let ordinalEnd;
    //Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
    if (ordinal_One_Number === 1) {
        ordinalEnd = "st";
    }
    else if (ordinal_One_Number === 2) {
        ordinalEnd = "nd";
    }
    else if (ordinal_One_Number === 3) {
        ordinalEnd = "rd";
    }
    else {
        ordinalEnd = "th";
    }
    console.log(`${ordinal_One_Number}${ordinalEnd}`);
}
